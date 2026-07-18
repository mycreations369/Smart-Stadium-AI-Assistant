import { Ambulance, BadgeCheck, Baby, Flame, HeartPulse, MapPin, PhoneCall, Shield, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useApp } from '../store';
import { Avatar } from './ui';

type SosType = 'medical' | 'security' | 'fire' | 'lost';

export function SOSModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, user } = useApp();
  const [stage, setStage] = useState<'select' | 'hold' | 'active' | 'dispatched'>('select');
  const [type, setType] = useState<SosType | null>(null);
  const [holdProgress, setHoldProgress] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [shareLocation, setShareLocation] = useState(true);

  useEffect(() => {
    if (!open) {
      setStage('select'); setType(null); setHoldProgress(0); setSecondsLeft(180);
    }
  }, [open]);

  useEffect(() => {
    if (stage !== 'hold') return;
    setHoldProgress(0);
    let raf = 0; const start = performance.now(); const dur = 1500;
    const tick = (now: number) => {
      const p = Math.min(100, ((now - start) / dur) * 100);
      setHoldProgress(p);
      if (p >= 100) { setStage('active'); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'active') return;
    setSecondsLeft(180);
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) { clearInterval(id); setStage('dispatched'); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [stage]);

  if (!open) return null;

  const types: { id: SosType; icon: typeof HeartPulse; label: string; tone: string }[] = [
    { id: 'medical', icon: HeartPulse, label: t.sos.medical, tone: 'from-rose-500 to-danger-600' },
    { id: 'security', icon: Shield, label: t.sos.security, tone: 'from-wc-500 to-wc-700' },
    { id: 'fire', icon: Flame, label: t.sos.fire, tone: 'from-orange-500 to-red-600' },
    { id: 'lost', icon: Baby, label: t.sos.lost, tone: 'from-amber-500 to-gold-600' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-3 backdrop-blur-md animate-fade-in-fast sm:items-center" onClick={onClose}>
      <div
        className="w-full max-w-md overflow-hidden rounded-3xl glass-strong shadow-glass-lg animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-danger-500 text-white">
              <span className="absolute inset-0 animate-sos-pulse rounded-xl" />
              <Shield className="relative h-4 w-4" />
            </span>
            <div>
              <div className="font-display text-base font-bold">{t.sos.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{t.sos.subtitle}</div>
            </div>
          </div>
          <button onClick={onClose} className="btn-ghost !p-2"><X className="h-4 w-4" /></button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-5">
          {stage === 'select' && (
            <div className="animate-fade-in">
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{t.sos.keepCalm} {t.sos.holdToActivate}.</p>
              <div className="grid grid-cols-2 gap-3">
                {types.map(({ id, icon: Icon, label, tone }) => (
                  <button
                    key={id}
                    onClick={() => { setType(id); setStage('hold'); }}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/40 p-4 text-center transition hover:-translate-y-0.5 hover:shadow-glass dark:bg-white/5"
                  >
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-lg transition group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold">{label}</span>
                  </button>
                ))}
              </div>

              <label className="mt-4 flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/30 px-4 py-3 dark:bg-white/5">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-wc-500" /> {t.sos.shareLocation}
                </span>
                <button
                  onClick={() => setShareLocation((v) => !v)}
                  className={`relative h-6 w-11 rounded-full transition ${shareLocation ? 'bg-pitch-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                >
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${shareLocation ? 'left-[22px]' : 'left-0.5'}`} />
                </button>
              </label>
            </div>
          )}

          {stage === 'hold' && (
            <div className="flex flex-col items-center py-6 animate-fade-in">
              <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">{t.sos.holdToActivate}</p>
              <div className="relative h-36 w-36">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" strokeWidth="10" className="stroke-slate-200 dark:stroke-white/10" />
                  <circle
                    cx="60" cy="60" r="54" fill="none" strokeWidth="10" strokeLinecap="round"
                    className="stroke-danger-500 transition-all" strokeDasharray={2 * Math.PI * 54}
                    strokeDashoffset={2 * Math.PI * 54 * (1 - holdProgress / 100)}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-danger-500" />
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-danger-600 dark:text-red-400">{Math.round(holdProgress)}%</p>
              <button onClick={() => setStage('select')} className="mt-4 btn-ghost">{t.sos.cancel}</button>
            </div>
          )}

          {stage === 'active' && (
            <div className="flex flex-col items-center py-4 animate-fade-in">
              <div className="relative mb-4 flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-danger-500/40" />
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-danger-500/30" style={{ animationDelay: '0.6s' }} />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-danger-500 text-white shadow-lg">
                  <PhoneCall className="h-8 w-8 animate-breathe" />
                </span>
              </div>
              <div className="font-display text-lg font-bold text-danger-600 dark:text-red-400">{t.sos.activated}{type ? ` · ${types.find((x) => x.id === type)?.label}` : ''}</div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t.sos.contacting}</div>

              <div className="mt-5 w-full rounded-2xl border border-white/10 bg-white/40 p-4 dark:bg-white/5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="label-muted">{t.sos.responseTime}</span>
                  <span className="font-display text-lg font-bold tabular-nums text-pitch-600 dark:text-pitch-400">
                    {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar hue={0} label="M" size={40} />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{t.sos.responder}: Marcus R.</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Medic · Unit 7</div>
                  </div>
                  <BadgeCheck className="h-5 w-5 text-pitch-500" />
                </div>
              </div>

              <div className="mt-3 flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/40 p-4 dark:bg-white/5">
                <Ambulance className="h-6 w-6 text-danger-500" />
                <div className="flex-1">
                  <div className="text-sm font-semibold">{t.sos.nearestFirstAid}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">First Aid · East · 50m</div>
                </div>
                <span className="chip bg-pitch-500/15 text-pitch-700 dark:text-pitch-300">~1 min</span>
              </div>

              <button onClick={() => setStage('dispatched')} className="mt-5 w-full rounded-xl bg-pitch-500 py-2.5 text-sm font-bold text-white transition hover:brightness-110">
                {t.sos.dispatched}
              </button>
            </div>
          )}

          {stage === 'dispatched' && (
            <div className="flex flex-col items-center py-6 animate-fade-in">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-pitch-500/15 text-pitch-500">
                <BadgeCheck className="h-10 w-10" />
              </div>
              <div className="font-display text-lg font-bold text-pitch-600 dark:text-pitch-400">{t.sos.dispatched}</div>
              <p className="mt-2 max-w-xs text-center text-sm text-slate-500 dark:text-slate-400">{t.sos.keepCalm}</p>
              <div className="mt-4 text-xs text-slate-400">{user.name} · Gate {user.gate} · Sec {user.section}</div>
              <button onClick={onClose} className="mt-5 btn-primary">{t.common.close}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
