import {
  createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode,
} from 'react';
import { dictionaries, type Dictionary, type Lang, type ViewId } from './i18n/dictionaries';
import { liveMatchId, user } from './data';

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  view: ViewId;
  setView: (v: ViewId) => void;
  t: Dictionary;
  user: typeof user;
  liveMatchId: string;
}

const AppCtx = createContext<Ctx | null>(null);

const LANG_KEY = 'sg-lang';
const THEME_KEY = 'sg-theme';

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(LANG_KEY) : null;
    return (saved === 'en' || saved === 'te' || saved === 'hi') ? saved : 'en';
  });
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(THEME_KEY) : null;
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  });
  const [view, setView] = useState<ViewId>('home');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleTheme = useCallback(() => setTheme((p) => (p === 'dark' ? 'light' : 'dark')), []);

  const value = useMemo<Ctx>(() => ({
    lang, setLang, theme, toggleTheme, view, setView,
    t: dictionaries[lang], user, liveMatchId,
  }), [lang, setLang, theme, toggleTheme, view]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
