import {
  Bot, CalendarDays, CarFront, Utensils, Gauge, Map, MapPin, Sparkles, Thermometer,
  Ticket, TrendingUp, Users, Volume2,
} from 'lucide-react';
import { useApp } from '../store';
import { matches, crowdZones, sentimentOverall } from '../data';
import { Avatar, Badge, Card, ProgressBar } from '../components/ui';
import type { ViewId } from '../i18n/dictionaries';

export function HomeView() {
  const { t, user, setView } = useApp();
  const live = matches.find((m) => m.status === 'live')!;
  const next = matches.find((m) => m.status === 'upcoming')!;
  const densest = crowdZones.reduce((a, b) => (b.density > a.density ? b : a));

  const quick: { id: ViewId; icon: typeof Bot; title: string; desc: string; tone: string }[] = [
    { id: 'assistant', icon: Bot, title: t.home.aiCard, desc: t.home.aiCardDesc, tone: 'from-wc-500 to-wc-700' },
    { id: 'map', icon: Map, title: t.home.navCard, desc: t.home.navCardDesc, tone: 'from-pitch-500 to-pitch-700' },
    { id: 'food', icon: Utensils, title: t.home.foodCard, desc: t.home.foodCardDesc, tone: 'from-gold-500 to-gold-600' },
    { id: 'parking', icon: CarFront, title: t.home.parkingCard, desc: t.home.parkingCardDesc, tone: 'from-sky-500 to-wc-700' },
    { id: 'crowd', icon: Gauge, title: t.home.crowdCard, desc: t.home.crowdCardDesc, tone: 'from-fuchsia-500 to-wc-700' },
    { id: 'sentiment', icon: Sparkles, title: t.home.fanCard, desc: t.home.fanCardDesc, tone: 'from-rose-500 to-gold-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-wc-gradient p-6 text-white shadow-glow sm:p-8">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold-500/30 blur-3xl" />
        <div className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-wc-300/30 blur-3xl" />
        <div className="relative">
          <Badge tone="gold" pulse className="bg-white/15 text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> {t.home.heroBadge}
          </Badge>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {t.home.heroTitle1}<br />
            <span className="text-gradient-gold">{t.home.heroTitle2}</span>
          </h1>
          <p className="mt-2 max-w-md text-sm text-white/80 sm:text-base">{t.home.heroSubtitle}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 backdrop-blur">
              <MapPin className="h-4 w-4 text-gold-300" />
              <div className="text-xs">
                <div className="text-white/70">{t.home.yourGate}</div>
                <div className="font-bold">Gate {user.gate}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 backdrop-blur">
              <Ticket className="h-4 w-4 text-gold-300" />
              <div className="text-xs">
                <div className="text-white/70">{t.home.yourSeat}</div>
                <div className="font-bold">Sec {user.section} · R{user.row} · S{user.seat}</div>
              </div>
            </div>
            <Avatar hue={user.avatarHue} label={user.name[0]} size={40} />
          </div>
        </div>
      </div>

      {/* Live match */}
      <Card hover={false} delay={60}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge tone="danger" pulse>{t.common.live}</Badge>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{t.home.liveMatch} · {live.venue}</span>
          </div>
          <span className="font-display text-lg font-bold tabular-nums">{live.minute}</span>
        </div>
        <div className="mt-4 flex items-center justify-around">
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl sm:text-5xl">{live.homeFlag}</span>
            <span className="font-display text-sm font-bold sm:text-base">{live.home}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-display text-4xl font-extrabold tabular-nums sm:text-5xl">
              {live.homeScore}<span className="mx-2 text-slate-400">–</span>{live.awayScore}
            </div>
            <span className="mt-1 text-xs uppercase tracking-wider text-slate-400">{t.home.scoreboard}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl sm:text-5xl">{live.awayFlag}</span>
            <span className="font-display text-sm font-bold sm:text-base">{live.away}</span>
          </div>
        </div>
      </Card>

      {/* Match insights */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: TrendingUp, label: t.home.energy, value: t.home.energyHigh, sub: '94%', tone: 'text-gold-500' },
          { icon: Volume2, label: t.home.noise, value: '102 dB', sub: 'High', tone: 'text-wc-500' },
          { icon: Thermometer, label: t.home.temp, value: '24°C', sub: 'Pleasant', tone: 'text-pitch-500' },
        ].map((m, i) => (
          <Card key={m.label} hover={false} delay={120 + i * 60} className="!rounded-2xl p-4">
            <m.icon className={`h-5 w-5 ${m.tone}`} />
            <div className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{m.label}</div>
            <div className="font-display text-lg font-bold">{m.value}</div>
            <div className="text-xs text-slate-400">{m.sub}</div>
          </Card>
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="section-title mb-3">{t.home.quickActions}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {quick.map((q, i) => (
            <Card key={q.id} onClick={() => setView(q.id)} delay={i * 50}>
              <div className="flex h-full flex-col">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${q.tone} text-white shadow-lg`}>
                  <q.icon className="h-5 w-5" />
                </span>
                <div className="mt-3 font-display text-sm font-bold leading-tight">{q.title}</div>
                <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{q.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Stadium status row */}
      <div className="grid gap-3 sm:grid-cols-2">
        <Card hover={false} delay={200} onClick={() => setView('schedule')}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-wc-500" />
              <span className="label-muted">{t.home.nextMatch}</span>
            </div>
            <button className="text-xs font-bold text-wc-600 dark:text-wc-300">{t.home.seeAll}</button>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{next.homeFlag}</span>
              <span className="text-xs font-bold text-slate-400">{t.common.versus}</span>
              <span className="text-3xl">{next.awayFlag}</span>
            </div>
            <div className="text-right">
              <div className="font-display text-sm font-bold">{next.kickoff}</div>
              <div className="text-xs text-slate-400">{next.venue}</div>
            </div>
          </div>
        </Card>

        <Card hover={false} delay={260} onClick={() => setView('crowd')}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-fuchsia-500" />
              <span className="label-muted">{t.home.stadiumStatus}</span>
            </div>
            <Badge tone="pitch">{t.home.operational}</Badge>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">{densest.name}</span>
              <span className="font-bold tabular-nums text-danger-600 dark:text-red-400">{densest.density}%</span>
            </div>
            <ProgressBar value={densest.density} tone="danger" className="mt-2" />
          </div>
        </Card>
      </div>

      {/* Fan sentiment strip */}
      <Card hover={false} delay={320} onClick={() => setView('sentiment')}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold-500" />
            <span className="label-muted">{t.sentiment.overall}</span>
          </div>
          <span className="font-display text-2xl font-bold text-pitch-500">{sentimentOverall.positive}%</span>
        </div>
        <div className="mt-3 flex h-3 overflow-hidden rounded-full">
          <div className="bg-pitch-gradient" style={{ width: `${sentimentOverall.positive}%` }} />
          <div className="bg-slate-300 dark:bg-slate-600" style={{ width: `${sentimentOverall.neutral}%` }} />
          <div className="bg-gradient-to-r from-orange-500 to-danger-600" style={{ width: `${sentimentOverall.negative}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-400">
          <span>{t.sentiment.positive} {sentimentOverall.positive}%</span>
          <span>{t.sentiment.neutral} {sentimentOverall.neutral}%</span>
          <span>{t.sentiment.negative} {sentimentOverall.negative}%</span>
        </div>
      </Card>
    </div>
  );
}
