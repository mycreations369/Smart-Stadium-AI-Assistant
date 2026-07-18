import { Bot, Eraser, Mic, MicOff, Send, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useApp } from '../store';
import { Avatar } from '../components/ui';
import type { ChatMessage } from '../types';

// Minimal typings for the Web Speech API (not in lib.dom by default in TS).
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((e: { results: ArrayLike<{ 0: { transcript: string } }> }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
};

const langMap: Record<string, string> = { en: 'en-US', te: 'te-IN', hi: 'hi-IN' };

type IntentKey = 'food' | 'washroom' | 'parking' | 'gate' | 'emergency' | 'crowd' | 'match' | 'default';

function detectIntent(text: string): IntentKey {
  const q = text.toLowerCase();
  if (/(food|eat|hungry|biryani|pizza|taco|drink|snack|restaurant)/.test(q)) return 'food';
  if (/(washroom|restroom|toilet|bathroom|lavatory)/.test(q)) return 'washroom';
  if (/(park|car|vehicle|parking)/.test(q)) return 'parking';
  if (/(gate|entry|entrance|enter|seat|section)/.test(q)) return 'gate';
  if (/(emergency|sos|help|medical|hurt|injured|ambulance|first aid)/.test(q)) return 'emergency';
  if (/(crowd|busy|congest|queue|line|dense|density)/.test(q)) return 'crowd';
  if (/(score|match|game|goal|live|kickoff|when|play)/.test(q)) return 'match';
  return 'default';
}

export function AssistantView() {
  const { t, lang, user } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'greet', role: 'assistant', text: t.assistant.greeting, ts: Date.now() },
  ]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(true);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    setMessages([{ id: 'greet', role: 'assistant', text: t.assistant.greeting, ts: Date.now() }]);
  }, [lang, t]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const respond = (text: string) => {
    const intent = detectIntent(text);
    return t.assistant.responses[intent];
  };

  const send = (textArg?: string) => {
    const text = (textArg ?? input).trim();
    if (!text) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: 'user', text, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);
    window.setTimeout(() => {
      const reply: ChatMessage = { id: `a-${Date.now()}`, role: 'assistant', text: respond(text), ts: Date.now() };
      setMessages((m) => [...m, reply]);
      setTyping(false);
    }, 700);
  };

  const toggleVoice = () => {
    if (listening) { stopVoice(); return; }
    const SR = (window as unknown as { SpeechRecognition?: new () => SpeechRecognitionLike; webkitSpeechRecognition?: new () => SpeechRecognitionLike }).SpeechRecognition
      || (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognitionLike }).webkitSpeechRecognition;
    if (!SR) { setVoiceSupported(false); return; }
    const rec = new SR();
    rec.lang = langMap[lang] || 'en-US';
    rec.interimResults = false;
    rec.continuous = false;
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      send(transcript);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recRef.current = rec;
    rec.start();
    setListening(true);
  };

  const stopVoice = () => {
    recRef.current?.stop();
    setListening(false);
  };

  return (
    <div className="flex h-[calc(100vh-180px)] flex-col">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-wc-gradient text-white shadow-glow">
            <Bot className="h-5 w-5" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-pitch-500 dark:border-slate-900" />
          </div>
          <div>
            <div className="font-display text-lg font-bold">{t.assistant.title}</div>
            <div className="flex items-center gap-1 text-xs text-pitch-600 dark:text-pitch-400">
              <span className="h-1.5 w-1.5 rounded-full bg-pitch-500 animate-pulse-dot" /> {t.common.online} · {t.common.poweredBy}
            </div>
          </div>
        </div>
        <button
          onClick={() => setMessages([{ id: 'greet', role: 'assistant', text: t.assistant.greeting, ts: Date.now() }])}
          className="btn-ghost !p-2"
          title={t.common.clearChat}
        >
          <Eraser className="h-4 w-4" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto rounded-2xl glass p-4 scrollbar-none">
        {messages.map((m) => (
          <div key={m.id} className={`flex gap-2.5 animate-slide-up ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            {m.role === 'assistant'
              ? <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wc-gradient text-white"><Sparkles className="h-4 w-4" /></div>
              : <Avatar hue={user.avatarHue} label={user.name[0]} size={32} />}
            <div className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-wc-gradient text-white rounded-tr-sm' : 'glass-strong rounded-tl-sm'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wc-gradient text-white"><Sparkles className="h-4 w-4" /></div>
            <div className="glass-strong rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-wc-500 animate-pulse-dot" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick asks */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {t.assistant.quickAsk.map((q) => (
          <button
            key={q}
            onClick={() => send(q)}
            className="whitespace-nowrap rounded-full glass px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-wc-500/10 hover:text-wc-600 dark:text-slate-300 dark:hover:text-wc-300"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="mt-3 flex items-end gap-2">
        <div className="relative flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder={listening ? t.common.listening : t.assistant.askPlaceholder}
            className="input-clean !pr-12"
          />
          <button
            onClick={toggleVoice}
            className={`absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl transition ${listening ? 'bg-danger-500 text-white' : 'bg-wc-500/10 text-wc-600 dark:text-wc-300'}`}
            title={voiceSupported ? t.assistant.voiceHint : t.assistant.voiceHint}
          >
            {listening ? (
              <span className="flex items-end gap-0.5">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="w-0.5 origin-bottom rounded-full bg-white animate-voice-wave" style={{ height: 14, animationDelay: `${i * 0.12}s` }} />
                ))}
              </span>
            ) : <Mic className="h-4 w-4" />}
          </button>
        </div>
        <button onClick={() => send()} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wc-gradient text-white shadow-glow transition hover:brightness-110 active:scale-95">
          <Send className="h-4 w-4" />
        </button>
      </div>
      {!voiceSupported && (
        <p className="mt-2 flex items-center gap-1 text-xs text-slate-400">
          <MicOff className="h-3 w-3" /> Voice input needs a supported browser (Chrome/Edge).
        </p>
      )}
    </div>
  );
}
