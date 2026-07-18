import { Battery, CarFront, Home, MapPin, Navigation, ShieldCheck } from 'lucide-react';
import { useApp } from '../store';
import { parkingLots, user } from '../data';
import { Badge, Card, ProgressBar, SectionHeader } from '../components/ui';

export function ParkingView() {
  const { t, setView } = useApp();
  const totalAll = parkingLots.reduce((a, b) => a + b.total, 0);
  const occAll = parkingLots.reduce((a, b) => a + b.occupied, 0);
  const freeAll = totalAll - occAll;

  return (
    <div className="space-y-4">
      <SectionHeader title={t.parking.title} subtitle={t.parking.subtitle} icon={<CarFront className="h-5 w-5" />} />

      {/* My vehicle */}
      <Card hover={false} className="!bg-wc-gradient !text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <CarFront className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/70">{t.parking.myVehicle}</div>
              <div className="font-display text-lg font-bold">Lot {user.parkingLot} · Bay {user.parkingBay}</div>
              <div className="text-xs text-white/80">North side · covered</div>
            </div>
          </div>
          <button onClick={() => setView('map')} className="rounded-xl bg-white/20 px-3 py-2 text-sm font-bold backdrop-blur transition hover:bg-white/30">
            <Navigation className="h-4 w-4" />
          </button>
        </div>
      </Card>

      {/* Overall stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card hover={false} delay={60} className="!rounded-2xl p-4 text-center">
          <div className="stat-num">{totalAll.toLocaleString()}</div>
          <div className="label-muted">{t.parking.total}</div>
        </Card>
        <Card hover={false} delay={120} className="!rounded-2xl p-4 text-center">
          <div className="stat-num text-danger-600 dark:text-red-400">{occAll.toLocaleString()}</div>
          <div className="label-muted">{t.parking.occupied}</div>
        </Card>
        <Card hover={false} delay={180} className="!rounded-2xl p-4 text-center">
          <div className="stat-num text-pitch-600 dark:text-pitch-400">{freeAll.toLocaleString()}</div>
          <div className="label-muted">{t.parking.free}</div>
        </Card>
      </div>

      {/* Lots */}
      <div className="space-y-3">
        {parkingLots.map((p, i) => {
          const pct = (p.occupied / p.total) * 100;
          const free = p.total - p.occupied;
          const isFull = pct >= 90;
          return (
            <Card key={p.id} hover={false} delay={i * 60}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wc-gradient text-white shadow-lg">
                    <Home className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">{p.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.parking.fee}: {p.fee} · {p.entryIn} {t.common.away}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge tone={isFull ? 'danger' : free > 200 ? 'pitch' : 'gold'}>{free} {t.parking.free}</Badge>
                      {p.covered && <Badge tone="wc"><ShieldCheck className="h-3 w-3" /> {t.parking.covered}</Badge>}
                      {p.ev && <Badge tone="pitch"><Battery className="h-3 w-3" /> {t.parking.ev}</Badge>}
                      <Badge tone="neutral">Zone {p.zone}</Badge>
                    </div>
                  </div>
                </div>
                <button onClick={() => setView('map')} className="btn-ghost !px-2 !py-1 text-xs"><MapPin className="h-3.5 w-3.5" /></button>
              </div>
              <div className="mt-3">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-slate-400">{p.occupied}/{p.total}</span>
                  <span className={`font-bold tabular-nums ${isFull ? 'text-danger-600 dark:text-red-400' : 'text-slate-600 dark:text-slate-300'}`}>{Math.round(pct)}%</span>
                </div>
                <ProgressBar value={pct} tone={isFull ? 'danger' : pct > 70 ? 'gold' : 'pitch'} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
