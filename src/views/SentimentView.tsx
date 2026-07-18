import { Frown, Heart, Meh, Smile, Sparkles, TrendingUp } from 'lucide-react';
import { useApp } from '../store';
import { sentimentBreakdown, sentimentKeywords, sentimentOverall, sentimentSamples } from '../data';
import { Avatar, Card, SectionHeader } from '../components/ui';
import type { SentimentSample } from '../types';

const moodMeta: Record<SentimentSample['mood'], { color: string; icon: typeof Smile }> = {
  joy: { color: 'bg-gold-500 text-white', icon: Smile },
  excitement: { color: 'bg-wc-500 text-white', icon: Sparkles },
  pride: { color: 'bg-pitch-500 text-white', icon: Heart },
  concern: { color: 'bg-amber-500 text-white', icon: Meh },
  frustration: { color: 'bg-danger-500 text-white', icon: Frown },
};

const moodLabel: Record<SentimentSample['mood'], keyof ReturnType<typeof useApp>['t']['sentiment']> = {
  joy: 'joy', excitement: 'excitement', pride: 'pride', concern: 'concern', frustration: 'frustration',
};

export function SentimentView() {
  const { t } = useApp();

  return (
    <div className="space-y-4">
      <SectionHeader title={t.sentiment.title} subtitle={t.sentiment.subtitle} icon={<Sparkles className="h-5 w-5" />} />

      {/* Overall dial */}
      <Card hover={false} className="!bg-wc-gradient !text-white">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wide text-white/70">{t.sentiment.overall}</div>
            <div className="font-display text-5xl font-extrabold">{sentimentOverall.positive}%</div>
            <div className="mt-1 flex items-center gap-1 text-sm text-white/80"><TrendingUp className="h-4 w-4" /> {t.sentiment.positive}</div>
          </div>
          <div className="relative h-24 w-24">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" strokeWidth="10" className="stroke-white/20" />
              <circle cx="50" cy="50" r="42" fill="none" strokeWidth="10" strokeLinecap="round" className="stroke-gold-400" strokeDasharray={2 * Math.PI * 42} strokeDashoffset={2 * Math.PI * 42 * (1 - sentimentOverall.positive / 100)} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Smile className="h-8 w-8 text-gold-300" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex h-2.5 overflow-hidden rounded-full">
          <div className="bg-gold-400" style={{ width: `${sentimentOverall.positive}%` }} />
          <div className="bg-white/40" style={{ width: `${sentimentOverall.neutral}%` }} />
          <div className="bg-danger-500" style={{ width: `${sentimentOverall.negative}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-xs text-white/80">
          <span>{t.sentiment.positive} {sentimentOverall.positive}%</span>
          <span>{t.sentiment.neutral} {sentimentOverall.neutral}%</span>
          <span>{t.sentiment.negative} {sentimentOverall.negative}%</span>
        </div>
      </Card>

      {/* Mood breakdown */}
      <div className="grid grid-cols-5 gap-2">
        {sentimentBreakdown.map((b, i) => {
          const M = moodMeta[b.mood];
          const Icon = M.icon;
          return (
            <Card key={b.mood} hover={false} delay={i * 50} className="!rounded-2xl p-3 text-center">
              <span className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl ${M.color} shadow-lg`}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="mt-2 font-display text-lg font-bold tabular-nums">{b.value}%</div>
              <div className="text-[10px] font-semibold text-slate-400">{t.sentiment[moodLabel[b.mood]]}</div>
            </Card>
          );
        })}
      </div>

      {/* Trending keywords */}
      <Card hover={false} delay={120}>
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-wc-500" />
          <span className="label-muted">{t.sentiment.keywords}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sentimentKeywords.map((k) => {
            const size = Math.max(0.85, Math.min(1.6, k.count / 3000));
            const M = moodMeta[k.mood];
            return (
              <span
                key={k.word}
                className={`chip ${M.color} animate-fade-in`}
                style={{ fontSize: `${size * 12}px`, transform: `scale(${size.toFixed(2)})` }}
              >
                #{k.word} · {k.count > 999 ? `${(k.count / 1000).toFixed(1)}k` : k.count}
              </span>
            );
          })}
        </div>
      </Card>

      {/* Fan voice */}
      <div>
        <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-bold">
          <Sparkles className="h-4 w-4 text-gold-500" /> {t.sentiment.fanVoice}
        </h3>
        <div className="space-y-3">
          {sentimentSamples.map((s, i) => {
            const M = moodMeta[s.mood];
            const Icon = M.icon;
            return (
              <Card key={s.id} hover={false} delay={i * 50}>
                <div className="flex items-start gap-3">
                  <Avatar hue={s.user.charCodeAt(1) * 7 % 360} label={s.avatar} size={36} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold">{s.user}</span>
                      <span className="text-xs text-slate-400">{s.time}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed">{s.text}</p>
                    <span className={`chip mt-2 ${M.color}`} style={{ fontSize: 10 }}>
                      <Icon className="h-3 w-3" /> {t.sentiment[moodLabel[s.mood]]}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
