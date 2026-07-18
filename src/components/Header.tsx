import { AlertTriangle, Globe, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../store';
import type { Lang } from '../i18n/dictionaries';

const langLabels: Record<Lang, string> = { en: 'EN', te: 'తె', hi: 'हि' };
const langFull: Record<Lang, string> = { en: 'English', te: 'తెలుగు', hi: 'हिन्दी' };

export function Header({ onSOS }: { onSOS: () => void }) {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl glass-strong px-4 py-3 shadow-glass">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-wc-gradient shadow-glow">
            <div className="absolute inset-0 animate-pulse-dot bg-white/20" />
            <span className="relative font-display text-lg font-bold text-white">S</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight sm:text-lg">
              {t.appName}
            </div>
            <div className="hidden text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:block">
              {t.tagline}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="btn-ghost flex items-center gap-1.5 !px-2.5"
              aria-label="Language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-bold">{langLabels[lang]}</span>
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-xl glass-strong p-1 shadow-glass-lg animate-scale-in">
                  {(Object.keys(langFull) as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-wc-500/10 ${lang === l ? 'font-bold text-wc-600 dark:text-wc-300' : ''}`}
                    >
                      {langFull[l]}
                      {lang === l && <span className="h-1.5 w-1.5 rounded-full bg-wc-500" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button onClick={toggleTheme} className="btn-ghost !px-2.5" aria-label="Theme">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={onSOS}
            className="relative flex items-center gap-1.5 rounded-xl bg-danger-500 px-3 py-2 text-sm font-bold text-white shadow-[0_0_18px_rgba(239,77,77,0.5)] transition hover:brightness-110 active:scale-95"
          >
            <AlertTriangle className="h-4 w-4" />
            <span className="hidden sm:inline">SOS</span>
            <span className="absolute -right-1 -top-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
