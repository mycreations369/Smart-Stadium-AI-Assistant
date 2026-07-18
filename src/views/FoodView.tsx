import { Clock, Footprints, Navigation, Search, Star, UtensilsCrossed } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useApp } from '../store';
import { foodCourts } from '../data';
import { Badge, Card, SectionHeader, Stars } from '../components/ui';

type Filter = 'all' | 'veg' | 'nonveg' | 'vegan';

export function FoodView() {
  const { t, setView } = useApp();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState<string | null>(foodCourts[0].id);

  const list = useMemo(() => {
    return foodCourts
      .filter((f) => {
        if (filter === 'veg' && !f.veg) return false;
        if (filter === 'vegan' && !f.vegan) return false;
        if (filter === 'nonveg' && f.veg && f.cuisine.includes('Steakhouse')) return true;
        if (filter === 'nonveg' && f.veg) return false;
        if (!query) return true;
        const q = query.toLowerCase();
        return f.name.toLowerCase().includes(q) || f.cuisine.toLowerCase().includes(q) || f.menu.some((m) => m.name.toLowerCase().includes(q));
      })
      .sort((a, b) => a.distance - b.distance);
  }, [query, filter]);

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: t.food.filterAll },
    { id: 'veg', label: t.food.filterVeg },
    { id: 'nonveg', label: t.food.filterNonVeg },
    { id: 'vegan', label: t.food.filterVegan },
  ];

  const priceLabel = (l: 1 | 2 | 3) => '$'.repeat(l);

  return (
    <div className="space-y-4">
      <SectionHeader title={t.food.title} subtitle={t.food.subtitle} icon={<UtensilsCrossed className="h-5 w-5" />} />

      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.food.searchPlaceholder} className="input-clean !pl-10" />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold transition ${filter === f.id ? 'bg-wc-gradient text-white shadow-glow' : 'glass text-slate-500 dark:text-slate-400'}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {list.map((f, i) => (
          <Card key={f.id} hover={false} delay={i * 50}>
            <button onClick={() => setExpanded((e) => (e === f.id ? null : f.id))} className="flex w-full items-start gap-3 text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-gradient text-white shadow-lg">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-base font-bold truncate">{f.name}</span>
                  <Stars value={f.rating} />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{f.cuisine}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <Badge tone="pitch">{t.common.level} {f.level} · {f.concourse}</Badge>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400"><Footprints className="h-3 w-3" /> {f.distance}{t.common.meters}</span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400"><Clock className="h-3 w-3" /> {t.common.avgWait} {f.wait}{t.common.minutes}</span>
                  <span className="text-gold-600 dark:text-gold-400">{priceLabel(f.priceLevel)}</span>
                </div>
              </div>
            </button>

            {expanded === f.id && (
              <div className="mt-4 animate-slide-up border-t border-white/10 pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="label-muted">{t.food.menu}</span>
                  <Badge tone={f.open ? 'pitch' : 'neutral'}>{f.open ? t.food.openNow : t.food.closesIn} {f.closesIn}</Badge>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {f.menu.map((m) => (
                    <div key={m.name} className="flex items-center justify-between rounded-xl bg-white/40 px-3 py-2 dark:bg-white/5">
                      <div className="flex items-center gap-2">
                        <span className={`h-3 w-3 rounded-sm border ${m.veg ? 'border-pitch-500' : 'border-danger-500'}`}>
                          {m.veg ? <span className="m-auto mt-[2px] block h-1.5 w-1.5 rounded-full bg-pitch-500" /> : <span className="m-auto mt-[2px] block h-1.5 w-1.5 rounded-full bg-danger-500" />}
                        </span>
                        <span className="text-sm font-medium">{m.name}</span>
                        {m.popular && <Star className="h-3 w-3 fill-gold-400 text-gold-400" />}
                      </div>
                      <span className="text-sm font-bold tabular-nums">{m.price}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setView('map')} className="btn-primary mt-4 w-full">
                  <Navigation className="h-4 w-4" /> {t.common.directions}
                </button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
