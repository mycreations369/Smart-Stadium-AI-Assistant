import { Accessibility, Baby, Clock, Droplets, Footprints, MapPin, Navigation, Users } from 'lucide-react';
import { useApp } from '../store';
import { washrooms } from '../data';
import { Badge, Card, ProgressBar, SectionHeader } from '../components/ui';
import type { Washroom } from '../types';

const statusTone = (s: Washroom['status']): 'pitch' | 'gold' | 'neutral' =>
  s === 'open' ? 'pitch' : s === 'busy' ? 'gold' : 'neutral';

export function WashroomView() {
  const { t, setView } = useApp();
  const sorted = [...washrooms].sort((a, b) => a.distance - b.distance);

  return (
    <div className="space-y-4">
      <SectionHeader title={t.washroom.title} subtitle={t.washroom.subtitle} icon={<Droplets className="h-5 w-5" />} />

      <Card hover={false}>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-gradient text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#38bdf8,#0284c7)' }}>
            <MapPin className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="label-muted">{t.washroom.nearest}</div>
            <div className="font-display text-base font-bold">{sorted[0].name}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{sorted[0].distance}{t.common.meters} · {t.common.level} {sorted[0].level} · {sorted[0].concourse}</div>
          </div>
          <button onClick={() => setView('map')} className="btn-primary !px-3"><Navigation className="h-4 w-4" /></button>
        </div>
      </Card>

      <div className="space-y-3">
        {sorted.map((w, i) => {
          const label = t.washroom.status[w.status];
          const load = w.status === 'cleaning' ? 100 : w.status === 'open' ? w.queue * 6 : w.queue * 12;
          return (
            <Card key={w.id} hover={false} delay={i * 50}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#38bdf8,#0284c7)' }}>
                    <Droplets className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">{w.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.common.level} {w.level} · {w.concourse} · {w.distance}{t.common.meters}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge tone={statusTone(w.status)} pulse={w.status === 'busy'}>{label}</Badge>
                      {w.status !== 'cleaning' && <Badge tone="neutral"><Clock className="h-3 w-3" /> {t.washroom.queue} ~{w.queue}{t.common.minutes}</Badge>}
                      {w.accessible && <Badge tone="pitch"><Accessibility className="h-3 w-3" /> {t.washroom.accessible}</Badge>}
                      {w.babyCare && <Badge tone="gold"><Baby className="h-3 w-3" /> {t.washroom.babyCare}</Badge>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-slate-400" />
                <ProgressBar value={load} tone={w.status === 'cleaning' ? 'gold' : w.status === 'open' ? 'pitch' : 'danger'} className="flex-1" />
                <button onClick={() => setView('map')} className="btn-ghost !px-2 !py-1 text-xs"><Footprints className="h-3.5 w-3.5" /></button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
