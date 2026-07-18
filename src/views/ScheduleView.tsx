import { Bell, CalendarDays, MapPin, Ticket } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../store';
import { matches } from '../data';
import { Badge, Card, SectionHeader } from '../components/ui';

export function ScheduleView() {
  const { t } = useApp();
  const [reminders, setReminders] = useState<Set<string>>(new Set());

  const toggleRem = (id: string) => setReminders((p) => {
    const n = new Set(p); if (n.has(id)) n.delete(id); else n.add(id); return n;
  });

  return (
    <div className="space-y-4">
      <SectionHeader title={t.schedule.title} subtitle={t.schedule.subtitle} icon={<CalendarDays className="h-5 w-5" />} />

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[t.schedule.liveNow, t.common.today, t.common.tomorrow, t.schedule.upcoming, t.schedule.finished].map((lbl, i) => (
          <button key={lbl} className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold ${i === 0 ? 'bg-danger-500 text-white shadow-[0_0_18px_rgba(239,77,77,0.4)]' : 'glass text-slate-500 dark:text-slate-400'}`}>
            {lbl}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {matches.map((m, i) => {
          const live = m.status === 'live';
          const done = m.status === 'finished';
          return (
            <Card key={m.id} hover={false} delay={i * 60}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge tone="wc">{t.schedule.group} {m.group}</Badge>
                  <span className="text-xs text-slate-400">{t.schedule.matchday} {m.matchday}</span>
                </div>
                {live && <Badge tone="danger" pulse>{t.common.live} · {m.minute}</Badge>}
                {done && <Badge tone="neutral">{t.schedule.finished}</Badge>}
              </div>

              <div className="mt-4 flex items-center justify-around">
                <div className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="text-4xl">{m.homeFlag}</span>
                  <span className="font-display text-sm font-bold">{m.home}</span>
                </div>
                <div className="flex flex-col items-center px-2">
                  {m.homeScore !== undefined ? (
                    <div className="font-display text-3xl font-extrabold tabular-nums">
                      {m.homeScore}<span className="mx-1.5 text-slate-400">–</span>{m.awayScore}
                    </div>
                  ) : (
                    <div className="font-display text-lg font-bold text-slate-400">{t.common.versus}</div>
                  )}
                  <div className="mt-1 text-xs font-semibold text-wc-600 dark:text-wc-300">{m.kickoff}</div>
                </div>
                <div className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="text-4xl">{m.awayFlag}</span>
                  <span className="font-display text-sm font-bold">{m.away}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><MapPin className="h-3 w-3" /> {m.venue}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleRem(m.id)}
                    className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-bold transition ${reminders.has(m.id) ? 'bg-gold-gradient text-white' : 'glass text-slate-500 dark:text-slate-300'}`}
                  >
                    <Bell className="h-3 w-3" /> {t.schedule.setReminder}
                  </button>
                  {!done && (
                    <button className="flex items-center gap-1 rounded-lg bg-wc-gradient px-2.5 py-1.5 text-xs font-bold text-white transition hover:brightness-110">
                      <Ticket className="h-3 w-3" /> {t.schedule.buyTickets}
                    </button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
