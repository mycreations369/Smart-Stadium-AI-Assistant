import { ArrowDownRight, ArrowUpRight, Gauge, Minus, Users } from 'lucide-react';
import { useApp } from '../store';
import { crowdZones } from '../data';
import { densityLevel } from '../types';
import { Badge, Card, ProgressBar, SectionHeader } from '../components/ui';

const levelTone = (lvl: ReturnType<typeof densityLevel>): 'pitch' | 'gold' | 'danger' =>
  lvl === 'safe' ? 'pitch' : lvl === 'moderate' ? 'gold' : 'danger';

const levelLabel = (lvl: ReturnType<typeof densityLevel>, t: ReturnType<typeof useApp>['t']) =>
  lvl === 'safe' ? t.crowd.safe : lvl === 'moderate' ? t.crowd.moderate : lvl === 'dense' ? t.crowd.dense : t.crowd.veryDense;

const catLabel = (c: string, t: ReturnType<typeof useApp>['t']) =>
  c === 'gate' ? t.crowd.entryGates : c === 'concourse' ? t.crowd.concourses : c === 'food' ? t.crowd.foodCourts : t.crowd.restrooms;

export function CrowdView() {
  const { t } = useApp();
  const sorted = [...crowdZones].sort((a, b) => b.density - a.density);
  const avg = Math.round(crowdZones.reduce((a, b) => a + b.density, 0) / crowdZones.length);
  const totalPeople = crowdZones.reduce((a, b) => a + b.people, 0);

  return (
    <div className="space-y-4">
      <SectionHeader title={t.crowd.title} subtitle={t.crowd.subtitle} icon={<Gauge className="h-5 w-5" />} />

      {/* Overview */}
      <div className="grid grid-cols-3 gap-3">
        <Card hover={false} delay={60} className="!rounded-2xl p-4 text-center">
          <div className="stat-num">{avg}%</div>
          <div className="label-muted">{t.crowd.zones}</div>
        </Card>
        <Card hover={false} delay={120} className="!rounded-2xl p-4 text-center">
          <div className="stat-num">{(totalPeople / 1000).toFixed(1)}k</div>
          <div className="label-muted">{t.crowd.people}</div>
        </Card>
        <Card hover={false} delay={180} className="!rounded-2xl p-4 text-center">
          <div className="stat-num text-pitch-600 dark:text-pitch-400">{crowdZones.filter((z) => densityLevel(z.density) === 'safe').length}</div>
          <div className="label-muted">{t.crowd.safe}</div>
        </Card>
      </div>

      {/* Forecast chart */}
      <Card hover={false} delay={220}>
        <div className="mb-3 flex items-center justify-between">
          <span className="label-muted">{t.crowd.forecast}</span>
          <span className="flex items-center gap-1 text-xs text-slate-400"><Users className="h-3 w-3" /> {t.crowd.high} → {t.crowd.low}</span>
        </div>
        <div className="flex h-28 items-end gap-1.5">
          {sorted[0].forecast.map((v, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-wc-600 to-wc-400 transition-all duration-500 dark:from-wc-700 dark:to-wc-300"
                style={{ height: `${v}%`, animationDelay: `${i * 60}ms` }}
              />
              <span className="text-[9px] text-slate-400">{i * 5}m</span>
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          {sorted[0].name} · {t.crowd.trend}: {sorted[0].trend}
        </div>
      </Card>

      {/* Zones */}
      <div className="space-y-3">
        {sorted.map((z, i) => {
          const lvl = densityLevel(z.density);
          const Tone = levelTone(lvl);
          const TrendIcon = z.trend === 'up' ? ArrowUpRight : z.trend === 'down' ? ArrowDownRight : Minus;
          return (
            <Card key={z.id} hover={false} delay={i * 50}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${Tone === 'pitch' ? 'bg-pitch-500' : Tone === 'gold' ? 'bg-gold-500' : 'bg-danger-500'} text-white shadow-lg`}>
                    <Gauge className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">{z.name}</div>
                    <div className="text-xs text-slate-400">{catLabel(z.category, t)} · {z.people.toLocaleString()} {t.crowd.people}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`flex items-center gap-0.5 text-xs ${z.trend === 'up' ? 'text-danger-600 dark:text-red-400' : z.trend === 'down' ? 'text-pitch-600 dark:text-pitch-400' : 'text-slate-400'}`}>
                    <TrendIcon className="h-3.5 w-3.5" />
                  </span>
                  <Badge tone={Tone} pulse={lvl === 'veryDense'}>{levelLabel(lvl, t)}</Badge>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <ProgressBar value={z.density} tone={Tone} className="flex-1" />
                <span className="font-display text-sm font-bold tabular-nums">{z.density}%</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
