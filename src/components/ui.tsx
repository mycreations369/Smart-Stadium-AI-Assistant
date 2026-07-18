import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  delay?: number;
}

export function Card({ children, className = '', onClick, hover = true, delay = 0 }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
      className={`glass-card ${hover ? 'glass-card-hover cursor-pointer' : ''} animate-slide-up ${className}`}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  icon?: ReactNode;
}

export function SectionHeader({ title, subtitle, action, icon }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div className="flex items-start gap-3">
        {icon && (
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wc-gradient text-white shadow-glow">
            {icon}
          </div>
        )}
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
  tone?: 'wc' | 'gold' | 'pitch' | 'danger' | 'neutral';
  pulse?: boolean;
  className?: string;
}

export function Badge({ children, tone = 'wc', pulse = false, className = '' }: BadgeProps) {
  const tones: Record<string, string> = {
    wc: 'bg-wc-500/15 text-wc-700 dark:text-wc-300',
    gold: 'bg-gold-500/15 text-gold-700 dark:text-gold-300',
    pitch: 'bg-pitch-500/15 text-pitch-700 dark:text-pitch-300',
    danger: 'bg-danger-500/15 text-danger-600 dark:text-red-400',
    neutral: 'bg-slate-500/15 text-slate-600 dark:text-slate-300',
  };
  return (
    <span className={`chip ${tones[tone]} ${className}`}>
      {pulse && <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
      </span>}
      {children}
    </span>
  );
}

interface ProgressBarProps {
  value: number; // 0-100
  tone?: 'wc' | 'gold' | 'pitch' | 'danger';
  className?: string;
  animated?: boolean;
}

export function ProgressBar({ value, tone = 'wc', className = '', animated = true }: ProgressBarProps) {
  const tones: Record<string, string> = {
    wc: 'bg-wc-gradient',
    gold: 'bg-gold-gradient',
    pitch: 'bg-pitch-gradient',
    danger: 'bg-gradient-to-r from-orange-500 to-danger-600',
  };
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10 ${className}`}>
      <div
        className={`h-full rounded-full ${tones[tone]} ${animated ? 'transition-all duration-700 ease-out' : ''}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function Avatar({ hue, label, size = 36 }: { hue: number; label: string; size?: number }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full font-semibold text-white shadow-inner"
      style={{
        width: size, height: size, fontSize: size * 0.4,
        background: `linear-gradient(135deg, hsl(${hue} 80% 55%), hsl(${(hue + 40) % 360} 80% 45%))`,
      }}
    >
      {label}
    </div>
  );
}

export function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-gold-500">
      <span className="text-xs">★</span>
      <span className="text-xs font-semibold tabular-nums">{value.toFixed(1)}</span>
    </span>
  );
}
