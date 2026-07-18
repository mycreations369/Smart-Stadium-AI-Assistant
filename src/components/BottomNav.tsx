import {
  Bot, CalendarDays, CarFront, Utensils, Gauge, Home, LayoutGrid, Map, Users,
} from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../store';
import type { ViewId } from '../i18n/dictionaries';

interface NavItem { id: ViewId; icon: typeof Home; }

const primary: NavItem[] = [
  { id: 'home', icon: Home },
  { id: 'assistant', icon: Bot },
  { id: 'map', icon: Map },
  { id: 'schedule', icon: CalendarDays },
];

const more: NavItem[] = [
  { id: 'food', icon: Utensils },
  { id: 'washroom', icon: Users },
  { id: 'parking', icon: CarFront },
  { id: 'crowd', icon: Gauge },
  { id: 'sentiment', icon: LayoutGrid },
];

export function BottomNav() {
  const { t, view, setView } = useApp();
  const [moreOpen, setMoreOpen] = useState(false);
  const all = [...primary, ...more];
  void all;
  const activeMore = more.some((m) => m.id === view);

  const renderItem = (item: NavItem, label: string) => {
    const Icon = item.icon;
    const active = view === item.id;
    return (
      <button
        key={item.id}
        onClick={() => { setView(item.id); setMoreOpen(false); }}
        className="group relative flex flex-1 flex-col items-center gap-1 py-2"
        aria-label={label}
      >
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${active ? 'bg-wc-gradient text-white shadow-glow' : 'text-slate-500 group-hover:text-wc-600 dark:text-slate-400 dark:group-hover:text-wc-300'}`}>
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span className={`max-w-[60px] truncate text-[10px] font-semibold transition ${active ? 'text-wc-600 dark:text-wc-300' : 'text-slate-400 dark:text-slate-500'}`}>
          {label}
        </span>
      </button>
    );
  };

  return (
    <>
      {moreOpen && <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm animate-fade-in-fast" onClick={() => setMoreOpen(false)} />}
      <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3">
        <div className="mx-auto flex max-w-md items-center gap-1 rounded-2xl glass-strong px-2 py-1.5 shadow-glass-lg">
          {primary.map((item) => renderItem(item, t.nav[item.id]))}
          <button
            onClick={() => setMoreOpen((v) => !v)}
            className="group relative flex flex-1 flex-col items-center gap-1 py-2"
            aria-label={t.nav.more}
          >
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${moreOpen || activeMore ? 'bg-wc-gradient text-white shadow-glow' : 'text-slate-500 group-hover:text-wc-600 dark:text-slate-400'}`}>
              <LayoutGrid className="h-[18px] w-[18px]" />
            </span>
            <span className={`text-[10px] font-semibold ${activeMore ? 'text-wc-600 dark:text-wc-300' : 'text-slate-400 dark:text-slate-500'}`}>{t.nav.more}</span>
          </button>
        </div>

        {moreOpen && (
          <div className="mx-auto max-w-md animate-slide-up pt-3">
            <div className="grid grid-cols-3 gap-2 rounded-2xl glass-strong p-3 shadow-glass-lg">
              {more.map((item) => renderItem(item, t.nav[item.id]))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
