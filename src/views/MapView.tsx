import {
  Crosshair, Flag, Footprints, MapPin, Minimize2, Navigation, Plus, RotateCcw, Sparkles, Store,
  UtensilsCrossed,
} from 'lucide-react';

const washroomIcon: typeof UtensilsCrossed = UtensilsCrossed;
import { useMemo, useState } from 'react';
import { useApp } from '../store';
import { mapPoints } from '../data';
import type { FacilityType, MapPoint } from '../types';
import { Badge, SectionHeader } from '../components/ui';

type LayerKey = 'food' | 'washroom' | 'parking' | 'firstAid' | 'shop' | 'exit' | 'seat';

const typeMeta: Record<FacilityType, { color: string; ring: string; labelKey: LayerKey }> = {
  food: { color: 'bg-gold-500', ring: 'ring-gold-400', labelKey: 'food' },
  washroom: { color: 'bg-sky-500', ring: 'ring-sky-400', labelKey: 'washroom' },
  parking: { color: 'bg-wc-500', ring: 'ring-wc-400', labelKey: 'parking' },
  firstAid: { color: 'bg-rose-500', ring: 'ring-rose-400', labelKey: 'firstAid' },
  shop: { color: 'bg-pitch-500', ring: 'ring-pitch-400', labelKey: 'shop' },
  exit: { color: 'bg-slate-600', ring: 'ring-slate-500', labelKey: 'exit' },
  seat: { color: 'bg-fuchsia-500', ring: 'ring-fuchsia-400', labelKey: 'seat' },
  info: { color: 'bg-amber-500', ring: 'ring-amber-400', labelKey: 'seat' },
  vip: { color: 'bg-gold-400', ring: 'ring-gold-300', labelKey: 'seat' },
};

const iconFor: Record<FacilityType, typeof UtensilsCrossed> = {
  food: UtensilsCrossed,
  washroom: washroomIcon,
  parking: Navigation,
  firstAid: Flag,
  shop: Store,
  exit: Flag,
  seat: MapPin,
  info: Sparkles,
  vip: Sparkles,
};

export function MapView() {
  const { t } = useApp();
  const [active, setActive] = useState<Set<FacilityType>>(new Set(['food', 'washroom', 'exit']));
  const [selected, setSelected] = useState<MapPoint | null>(null);
  const [route, setRoute] = useState<MapPoint | null>(null);
  const [routing, setRouting] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [query, setQuery] = useState('');

  const you = mapPoints.find((p) => p.id === 'you')!;

  const filtered = useMemo(
    () => mapPoints.filter((p) => (p.id === 'you' || active.has(p.type)) && (!query || p.name.toLowerCase().includes(query.toLowerCase()))),
    [active, query],
  );

  const toggleLayer = (type: FacilityType) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type); else next.add(type);
      return next;
    });
  };

  const startRoute = (target: MapPoint) => {
    setSelected(target);
    setRoute(target);
    setRouting(true);
    window.setTimeout(() => setRouting(false), 2200);
  };

  const routePath = route ? `M ${you.x} ${you.y} Q ${(you.x + route.x) / 2} ${Math.min(you.y, route.y) - 18} ${route.x} ${route.y}` : '';

  const layerTypes: FacilityType[] = ['food', 'washroom', 'parking', 'firstAid', 'shop', 'exit'];

  return (
    <div className="space-y-4">
      <SectionHeader title={t.map.title} subtitle={t.map.subtitle} icon={<Navigation className="h-5 w-5" />} />

      {/* Search */}
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.map.searchPlaceholder}
          className="input-clean"
        />
        <button onClick={() => setZoom((z) => Math.min(1.6, z + 0.2))} className="btn-ghost !border !border-slate-200 dark:!border-white/10" title={t.map.zoomIn}><Plus className="h-4 w-4" /></button>
        <button onClick={() => setZoom((z) => Math.max(0.8, z - 0.2))} className="btn-ghost !border !border-slate-200 dark:!border-white/10" title={t.map.zoomOut}><Minimize2 className="h-4 w-4" /></button>
        <button onClick={() => { setZoom(1); setRoute(null); setSelected(null); setQuery(''); }} className="btn-ghost !border !border-slate-200 dark:!border-white/10" title={t.map.reset}><RotateCcw className="h-4 w-4" /></button>
      </div>

      {/* Map canvas */}
      <div className="relative overflow-hidden rounded-3xl glass-card p-3 shadow-glass">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-wc-50 to-wc-100 dark:from-[#0c1530] dark:to-[#101a3a]">
          <div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-60" />

          {/* Pitch oval */}
          <div className="absolute left-1/2 top-1/2 h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] border-2 border-wc-300/40 bg-wc-500/10 dark:border-wc-700/50" />
          <div className="absolute left-1/2 top-1/2 h-8 w-16 -translate-x-1/2 -translate-y-1/2 rounded border border-wc-300/40 dark:border-wc-700/50" />
          {/* Stand blocks */}
          {[
            { c: 'top-3 left-1/2 -translate-x-1/2 w-[76%] h-[10%] rounded-t-3xl' },
            { c: 'bottom-3 left-1/2 -translate-x-1/2 w-[76%] h-[10%] rounded-b-3xl' },
            { c: 'top-1/2 left-3 -translate-y-1/2 h-[40%] w-[10%] rounded-l-3xl' },
            { c: 'top-1/2 right-3 -translate-y-1/2 h-[40%] w-[10%] rounded-r-3xl' },
          ].map((s, i) => (
            <div key={i} className={`absolute ${s.c} border border-white/30 bg-white/30 dark:border-white/5 dark:bg-white/[0.03]`} />
          ))}

          {/* Route path */}
          {route && (
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}>
              <path d={routePath} fill="none" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 2" className="stroke-gold-500 animate-width-bounce" />
            </svg>
          )}

          {/* Points */}
          <div className="absolute inset-0" style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}>
            {filtered.map((p) => {
              const meta = typeMeta[p.type];
              const Icon = iconFor[p.type];
              const isYou = p.id === 'you';
              const isRoute = route?.id === p.id;
              const isSel = selected?.id === p.id;
              if (isYou) {
                return (
                  <div key={p.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                    <div className="relative flex h-9 w-9 items-center justify-center">
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-fuchsia-500/40" />
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-fuchsia-500/30" style={{ animationDelay: '0.8s' }} />
                      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500 text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                        <Crosshair className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-fuchsia-500 px-1.5 py-0.5 text-[9px] font-bold text-white">{t.map.youAreHere}</div>
                  </div>
                );
              }
              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:z-10 hover:scale-125"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full text-white shadow-md ring-2 ${meta.color} ${isSel || isRoute ? `${meta.ring} ring-offset-1 dark:ring-offset-slate-900` : 'ring-white/70 dark:ring-slate-900/70'}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {(isSel || isRoute) && (
                    <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-1.5 py-0.5 text-[9px] font-bold text-white dark:bg-white dark:text-slate-900">{p.name}</div>
                  )}
                </button>
              );
            })}
          </div>

          {/* AI guiding banner */}
          {routing && (
            <div className="absolute left-1/2 top-3 -translate-x-1/2 animate-slide-down rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-bold text-white shadow-glow-gold">
              <span className="flex items-center gap-1.5"><Footprints className="h-3.5 w-3.5" /> {t.map.aiGuiding}…</span>
            </div>
          )}
          {route && !routing && (
            <div className="absolute left-1/2 top-3 -translate-x-1/2 animate-slide-down rounded-full bg-pitch-gradient px-4 py-1.5 text-xs font-bold text-white shadow-lg">
              {t.map.arrived}: {route.name}
            </div>
          )}
        </div>

        {/* Legend / layer toggles */}
        <div className="mt-3 flex flex-wrap gap-2">
          {layerTypes.map((type) => {
            const meta = typeMeta[type];
            const on = active.has(type);
            return (
              <button
                key={type}
                onClick={() => toggleLayer(type)}
                className={`chip border transition ${on ? `${meta.color} text-white border-transparent` : 'glass text-slate-500 dark:text-slate-400'}`}
              >
                <span className={`h-2 w-2 rounded-full ${on ? 'bg-white' : meta.color}`} />
                {t.map.layers[meta.labelKey]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected detail */}
      {selected && (
        <div className="animate-slide-up rounded-3xl glass-card p-5 shadow-glass">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${typeMeta[selected.type].color} text-white shadow-lg`}>
                {(() => { const I = iconFor[selected.type]; return <I className="h-5 w-5" />; })()}
              </span>
              <div>
                <div className="font-display text-base font-bold">{selected.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t.common.level} {selected.level}{selected.meta ? ` · ${selected.meta}` : ''}</div>
              </div>
            </div>
            <button onClick={() => { setSelected(null); setRoute(null); }} className="btn-ghost !p-2 text-xs">{t.map.clearRoute}</button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => startRoute(selected)} className="btn-primary">
              <Navigation className="h-4 w-4" /> {t.map.startRoute}
            </button>
            <Badge tone="wc"><MapPin className="h-3 w-3" /> {t.common.distance}: {Math.round(Math.hypot(selected.x - you.x, selected.y - you.y) * 3)}{t.common.meters}</Badge>
          </div>
        </div>
      )}

      {/* AI suggestion list */}
      <div className="rounded-3xl glass-card p-5 shadow-glass">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-gold-500" />
          <span className="label-muted">{t.common.suggestion}</span>
        </div>
        <div className="space-y-2">
          {mapPoints.filter((p) => p.type === 'food' || p.type === 'firstAid').slice(0, 4).map((p) => (
            <button key={p.id} onClick={() => setSelected(p)} className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-wc-500/10">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${typeMeta[p.type].color} text-white`}>
                {(() => { const I = iconFor[p.type]; return <I className="h-4 w-4" />; })()}
              </span>
              <div className="flex-1">
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-slate-400">{p.meta || t.common.open} · {t.common.level} {p.level}</div>
              </div>
              <Footprints className="h-4 w-4 text-slate-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
