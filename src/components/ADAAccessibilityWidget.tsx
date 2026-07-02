'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  X,
  Accessibility,
  RotateCcw,
  Eye,
  Type,
  Contrast,
  Plus,
  Minus,
  AlignRight,
  AlignCenter,
  AlignLeft,
  AlignJustify,
  Link2,
  Heading,
  Pause,
  ImageOff,
  MousePointer2,
  Keyboard,
  Moon,
  Droplets,
  ScanLine,
  Palette,
  Zap,
  Brain,
  Focus,
  PersonStanding,
  Baseline,
  MoveHorizontal,
  Highlighter,
  PanelTop,
} from 'lucide-react';

/* ---------------------------------------------------------------- Types */

type Contrast = 'none' | 'dark' | 'invert' | 'high';
type Saturation = 'none' | 'low' | 'high';
type TextAlign = 'none' | 'right' | 'center' | 'left' | 'justify';
type Level = 0 | 1 | 2;
type ProfileKey = 'vision' | 'seizure' | 'adhd' | 'cognitive' | 'keyboard' | 'motor';

interface Settings {
  // content
  fontScale: number; // percent, default 100
  readableFont: boolean;
  dyslexiaFont: boolean;
  letterSpacing: Level;
  lineHeight: Level;
  textAlign: TextAlign;
  highlightLinks: boolean;
  highlightTitles: boolean;
  // color
  contrast: Contrast;
  monochrome: boolean;
  saturation: Saturation;
  // orientation / tools
  bigCursor: boolean;
  readingGuide: boolean;
  readingMask: boolean;
  stopAnimations: boolean;
  hideImages: boolean;
  highlightHover: boolean;
  keyboardNav: boolean;
}

const DEFAULT_SETTINGS: Settings = {
  fontScale: 100,
  readableFont: false,
  dyslexiaFont: false,
  letterSpacing: 0,
  lineHeight: 0,
  textAlign: 'none',
  highlightLinks: false,
  highlightTitles: false,
  contrast: 'none',
  monochrome: false,
  saturation: 'none',
  bigCursor: false,
  readingGuide: false,
  readingMask: false,
  stopAnimations: false,
  hideImages: false,
  highlightHover: false,
  keyboardNav: false,
};

const STORAGE_KEY = 'ada-accessibility-settings';
const FONT_MIN = 80;
const FONT_MAX = 160;
const FONT_STEP = 10;

/* --------------------------------------------- One-click profile presets */

const PROFILES: Record<
  ProfileKey,
  { icon: React.ElementType; title: string; desc: string; preset: Partial<Settings> }
> = {
  vision: {
    icon: Eye,
    title: 'כבדי ראייה',
    desc: 'הגדלת טקסט וניגודיות',
    preset: { fontScale: 130, readableFont: true, contrast: 'high', highlightTitles: true },
  },
  seizure: {
    icon: Zap,
    title: 'רגישות להבהובים',
    desc: 'עצירת אנימציות והנמכת צבע',
    preset: { stopAnimations: true, saturation: 'low' },
  },
  adhd: {
    icon: Focus,
    title: 'קשב וריכוז',
    desc: 'מסכת קריאה והדגשת קישורים',
    preset: { readingMask: true, highlightLinks: true },
  },
  cognitive: {
    icon: Brain,
    title: 'קריאות והבנה',
    desc: 'גופן קריא והדגשות',
    preset: { readableFont: true, highlightLinks: true, highlightTitles: true, lineHeight: 1 },
  },
  keyboard: {
    icon: Keyboard,
    title: 'ניווט מקלדת',
    desc: 'סימון פוקוס ברור',
    preset: { keyboardNav: true, highlightHover: true },
  },
  motor: {
    icon: PersonStanding,
    title: 'מוגבלות מוטורית',
    desc: 'סמן גדול והדגשת ריחוף',
    preset: { bigCursor: true, highlightHover: true, keyboardNav: true },
  },
};

/* ------------------------------------------------- Apply settings to DOM */

function applySettings(s: Settings) {
  const root = document.documentElement;
  const cl = root.classList;

  root.style.fontSize = `${s.fontScale}%`;

  const toggle = (name: string, on: boolean) => cl.toggle(name, on);

  toggle('ada-readable-font', s.readableFont);
  toggle('ada-dyslexia-font', s.dyslexiaFont);
  toggle('ada-ls-1', s.letterSpacing === 1);
  toggle('ada-ls-2', s.letterSpacing === 2);
  toggle('ada-lh-1', s.lineHeight === 1);
  toggle('ada-lh-2', s.lineHeight === 2);
  toggle('ada-align-right', s.textAlign === 'right');
  toggle('ada-align-center', s.textAlign === 'center');
  toggle('ada-align-left', s.textAlign === 'left');
  toggle('ada-align-justify', s.textAlign === 'justify');
  toggle('ada-highlight-links', s.highlightLinks);
  toggle('ada-highlight-titles', s.highlightTitles);
  toggle('ada-contrast-dark', s.contrast === 'dark');
  toggle('ada-contrast-high', s.contrast === 'high');
  toggle('ada-big-cursor', s.bigCursor);
  toggle('ada-stop-animations', s.stopAnimations);
  toggle('ada-hide-images', s.hideImages);
  toggle('ada-highlight-hover', s.highlightHover);
  toggle('ada-keyboard-nav', s.keyboardNav);

  // Color filters (combined on the root)
  const filters: string[] = [];
  if (s.contrast === 'invert') filters.push('invert(1)');
  if (s.contrast === 'dark') filters.push('invert(1)', 'hue-rotate(180deg)');
  if (s.monochrome) filters.push('grayscale(1)');
  if (s.saturation === 'low') filters.push('saturate(0.5)');
  if (s.saturation === 'high') filters.push('saturate(1.8)');
  root.style.filter = filters.join(' ');
}

// Counter-filter so the widget itself doesn't appear inverted.
function counterFilter(s: Settings): string {
  if (s.contrast === 'invert') return 'invert(1)';
  if (s.contrast === 'dark') return 'invert(1) hue-rotate(180deg)';
  return '';
}

/* =============================================================== Widget */

export default function ADAAccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [activeProfile, setActiveProfile] = useState<ProfileKey | null>(null);
  const [mounted, setMounted] = useState(false);
  const [pointerY, setPointerY] = useState(0);

  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const cFilter = counterFilter(settings);

  /* Load persisted settings */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = { ...DEFAULT_SETTINGS, ...(JSON.parse(saved) as Partial<Settings>) };
        // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating from localStorage post-mount
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch (e) {
      console.error('Failed to load accessibility settings:', e);
    }
    setMounted(true);
  }, []);

  const persist = useCallback((next: Settings) => {
    setSettings(next);
    applySettings(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage may be unavailable */
    }
  }, []);

  const update = useCallback(
    <K extends keyof Settings>(key: K, value: Settings[K]) => {
      setActiveProfile(null);
      persist({ ...settings, [key]: value });
    },
    [persist, settings],
  );

  const changeFont = (dir: 1 | -1) => {
    const next = Math.min(FONT_MAX, Math.max(FONT_MIN, settings.fontScale + dir * FONT_STEP));
    update('fontScale', next);
  };

  const toggleProfile = (key: ProfileKey) => {
    if (activeProfile === key) {
      setActiveProfile(null);
      persist(DEFAULT_SETTINGS);
      return;
    }
    setActiveProfile(key);
    persist({ ...DEFAULT_SETTINGS, ...PROFILES[key].preset });
  };

  const reset = () => {
    setActiveProfile(null);
    persist(DEFAULT_SETTINGS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  };

  /* Reading guide / mask — track pointer only while active */
  useEffect(() => {
    if (!settings.readingGuide && !settings.readingMask) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPointerY(e.clientY));
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [settings.readingGuide, settings.readingMask]);

  /* Escape to close + focus management */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    // Focus first control on open
    const t = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>('button, [href], input, select, [tabindex]')
        ?.focus();
    }, 50);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  if (!mounted) return null;

  const maskStripHalf = 90; // px, half the readable strip height

  return (
    <>
      {/* ---------------------------------------------- Floating trigger */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="תפריט נגישות. לחצו לפתיחת אפשרויות הנגישות"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls="ada-panel"
        title="אפשרויות נגישות"
        style={{ filter: cFilter }}
        className="
          fixed z-[9999]
          w-14 h-14 rounded-full
          bg-navy-900 text-white
          hover:bg-navy-800 hover:scale-105
          focus:outline-none focus-visible:ring-4 focus-visible:ring-navy-400/60
          active:scale-95
          transition-all duration-200
          shadow-xl shadow-navy-900/40
          flex items-center justify-center
          bottom-24 left-6
          md:bottom-6 md:right-6
        "
      >
        <Accessibility size={26} aria-hidden="true" />
        <span className="absolute inset-0 rounded-full ring-2 ring-white/20" aria-hidden="true" />
      </button>

      {/* ---------------------------------- Reading guide / mask overlays */}
      {settings.readingGuide && (
        <div
          aria-hidden="true"
          className="fixed left-0 right-0 z-[9990] pointer-events-none h-[3px] bg-gold-500 shadow-[0_0_8px_rgba(0,0,0,0.4)]"
          style={{ top: pointerY, filter: cFilter }}
        />
      )}
      {settings.readingMask && (
        <div aria-hidden="true" className="fixed inset-0 z-[9990] pointer-events-none">
          <div
            className="absolute left-0 right-0 top-0 bg-black/70"
            style={{ height: Math.max(0, pointerY - maskStripHalf) }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 bg-black/70"
            style={{ top: pointerY + maskStripHalf }}
          />
        </div>
      )}

      {/* ------------------------------------------------------- Panel */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
            onClick={close}
            role="presentation"
            aria-hidden="true"
          />

          <div
            id="ada-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ada-panel-title"
            dir="rtl"
            style={{ filter: cFilter }}
            className="
              fixed z-[9999]
              inset-x-0 bottom-0 md:inset-x-auto md:bottom-6 md:right-6 md:top-6
              w-full md:w-[400px]
              bg-white md:rounded-3xl rounded-t-3xl
              shadow-2xl shadow-black/30
              max-h-[88vh] md:max-h-[calc(100vh-3rem)]
              flex flex-col
              animate-in slide-in-from-bottom-6 duration-300
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 p-5 border-b border-gray-100 bg-navy-900 text-white md:rounded-t-3xl rounded-t-3xl">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                  <Accessibility size={20} aria-hidden="true" />
                </div>
                <div>
                  <h2 id="ada-panel-title" className="text-lg font-bold leading-tight">
                    תפריט נגישות
                  </h2>
                  <p className="text-[11px] text-white/70">התאמת האתר לצרכים שלך</p>
                </div>
              </div>
              <button
                onClick={close}
                aria-label="סגירת תפריט הנגישות"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-7">
              {/* ---------------------------------------- Profiles */}
              <Section title="פרופילי נגישות" icon={PersonStanding}>
                <div className="grid grid-cols-2 gap-2.5">
                  {(Object.keys(PROFILES) as ProfileKey[]).map((key) => {
                    const p = PROFILES[key];
                    return (
                      <ProfileCard
                        key={key}
                        icon={p.icon}
                        title={p.title}
                        desc={p.desc}
                        active={activeProfile === key}
                        onClick={() => toggleProfile(key)}
                      />
                    );
                  })}
                </div>
              </Section>

              {/* ---------------------------------------- Content */}
              <Section title="התאמת תוכן" icon={Type}>
                {/* Font size stepper */}
                <div className="flex items-center justify-between rounded-2xl bg-gray-50 border border-gray-200 p-2.5">
                  <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 pr-1">
                    <Type size={17} aria-hidden="true" className="text-navy-700" />
                    גודל טקסט
                  </span>
                  <div className="flex items-center gap-2">
                    <StepBtn
                      onClick={() => changeFont(-1)}
                      disabled={settings.fontScale <= FONT_MIN}
                      label="הקטנת טקסט"
                    >
                      <Minus size={16} aria-hidden="true" />
                    </StepBtn>
                    <span className="w-12 text-center text-sm font-bold text-navy-900 tabular-nums">
                      {settings.fontScale}%
                    </span>
                    <StepBtn
                      onClick={() => changeFont(1)}
                      disabled={settings.fontScale >= FONT_MAX}
                      label="הגדלת טקסט"
                    >
                      <Plus size={16} aria-hidden="true" />
                    </StepBtn>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mt-2.5">
                  <ToggleCard
                    icon={Baseline}
                    label="גופן קריא"
                    active={settings.readableFont}
                    onClick={() => update('readableFont', !settings.readableFont)}
                  />
                  <ToggleCard
                    icon={Type}
                    label="גופן לדיסלקציה"
                    active={settings.dyslexiaFont}
                    onClick={() => update('dyslexiaFont', !settings.dyslexiaFont)}
                  />
                  <ToggleCard
                    icon={MoveHorizontal}
                    label="ריווח אותיות"
                    badge={settings.letterSpacing > 0 ? String(settings.letterSpacing) : undefined}
                    active={settings.letterSpacing > 0}
                    onClick={() =>
                      update('letterSpacing', ((settings.letterSpacing + 1) % 3) as Level)
                    }
                  />
                  <ToggleCard
                    icon={PanelTop}
                    label="גובה שורה"
                    badge={settings.lineHeight > 0 ? String(settings.lineHeight) : undefined}
                    active={settings.lineHeight > 0}
                    onClick={() => update('lineHeight', ((settings.lineHeight + 1) % 3) as Level)}
                  />
                  <ToggleCard
                    icon={Link2}
                    label="הדגשת קישורים"
                    active={settings.highlightLinks}
                    onClick={() => update('highlightLinks', !settings.highlightLinks)}
                  />
                  <ToggleCard
                    icon={Heading}
                    label="הדגשת כותרות"
                    active={settings.highlightTitles}
                    onClick={() => update('highlightTitles', !settings.highlightTitles)}
                  />
                </div>

                {/* Text alignment */}
                <div className="mt-2.5 rounded-2xl bg-gray-50 border border-gray-200 p-2.5">
                  <span className="block text-sm font-semibold text-gray-700 mb-2 pr-1">
                    יישור טקסט
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {(
                      [
                        ['right', AlignRight, 'ימין'],
                        ['center', AlignCenter, 'מרכז'],
                        ['justify', AlignJustify, 'מלא'],
                        ['left', AlignLeft, 'שמאל'],
                      ] as const
                    ).map(([val, Icon, lbl]) => (
                      <button
                        key={val}
                        onClick={() => update('textAlign', settings.textAlign === val ? 'none' : val)}
                        aria-label={`יישור ל${lbl}`}
                        aria-pressed={settings.textAlign === val}
                        className={`h-11 rounded-xl flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 ${
                          settings.textAlign === val
                            ? 'bg-navy-900 text-white'
                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Icon size={18} aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </div>
              </Section>

              {/* ---------------------------------------- Color */}
              <Section title="התאמת צבע" icon={Palette}>
                <div className="grid grid-cols-2 gap-2.5">
                  <ToggleCard
                    icon={Contrast}
                    label="ניגודיות גבוהה"
                    active={settings.contrast === 'high'}
                    onClick={() =>
                      update('contrast', settings.contrast === 'high' ? 'none' : 'high')
                    }
                  />
                  <ToggleCard
                    icon={Moon}
                    label="מצב כהה"
                    active={settings.contrast === 'dark'}
                    onClick={() =>
                      update('contrast', settings.contrast === 'dark' ? 'none' : 'dark')
                    }
                  />
                  <ToggleCard
                    icon={Palette}
                    label="היפוך צבעים"
                    active={settings.contrast === 'invert'}
                    onClick={() =>
                      update('contrast', settings.contrast === 'invert' ? 'none' : 'invert')
                    }
                  />
                  <ToggleCard
                    icon={Droplets}
                    label="גווני אפור"
                    active={settings.monochrome}
                    onClick={() => update('monochrome', !settings.monochrome)}
                  />
                  <ToggleCard
                    icon={Droplets}
                    label="רוויה נמוכה"
                    active={settings.saturation === 'low'}
                    onClick={() =>
                      update('saturation', settings.saturation === 'low' ? 'none' : 'low')
                    }
                  />
                  <ToggleCard
                    icon={Droplets}
                    label="רוויה גבוהה"
                    active={settings.saturation === 'high'}
                    onClick={() =>
                      update('saturation', settings.saturation === 'high' ? 'none' : 'high')
                    }
                  />
                </div>
              </Section>

              {/* ---------------------------------------- Orientation / tools */}
              <Section title="ניווט וכלים" icon={MousePointer2}>
                <div className="grid grid-cols-2 gap-2.5">
                  <ToggleCard
                    icon={MousePointer2}
                    label="סמן גדול"
                    active={settings.bigCursor}
                    onClick={() => update('bigCursor', !settings.bigCursor)}
                  />
                  <ToggleCard
                    icon={ScanLine}
                    label="קו קריאה"
                    active={settings.readingGuide}
                    onClick={() => update('readingGuide', !settings.readingGuide)}
                  />
                  <ToggleCard
                    icon={Focus}
                    label="מסכת קריאה"
                    active={settings.readingMask}
                    onClick={() => update('readingMask', !settings.readingMask)}
                  />
                  <ToggleCard
                    icon={Pause}
                    label="עצירת אנימציות"
                    active={settings.stopAnimations}
                    onClick={() => update('stopAnimations', !settings.stopAnimations)}
                  />
                  <ToggleCard
                    icon={ImageOff}
                    label="הסתרת תמונות"
                    active={settings.hideImages}
                    onClick={() => update('hideImages', !settings.hideImages)}
                  />
                  <ToggleCard
                    icon={Highlighter}
                    label="הדגשת ריחוף"
                    active={settings.highlightHover}
                    onClick={() => update('highlightHover', !settings.highlightHover)}
                  />
                  <ToggleCard
                    icon={Keyboard}
                    label="ניווט מקלדת"
                    active={settings.keyboardNav}
                    onClick={() => update('keyboardNav', !settings.keyboardNav)}
                  />
                </div>
              </Section>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 md:rounded-b-3xl">
              <button
                onClick={reset}
                aria-label="איפוס כל הגדרות הנגישות"
                className="w-full py-3 rounded-xl font-bold bg-navy-900 text-white hover:bg-navy-800 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-navy-500 active:scale-[0.98]"
              >
                <RotateCcw size={16} aria-hidden="true" />
                איפוס הגדרות
              </button>
              <p className="text-[11px] text-gray-500 text-center mt-3 leading-relaxed">
                ההגדרות נשמרות בדפדפן שלך.{' '}
                <a
                  href="https://wa.me/972504001187"
                  className="text-navy-700 underline underline-offset-2 font-semibold"
                >
                  נתקלתם בבעיית נגישות? דברו איתנו
                </a>
              </p>
            </div>
          </div>
        </>
      )}

      {/* --------------------------------------------- Global ADA styles */}
      <style dangerouslySetInnerHTML={{ __html: ADA_CSS }} />
    </>
  );
}

/* ============================================================ Subviews */

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="flex items-center gap-2 text-[13px] font-bold text-gray-400 uppercase tracking-wide mb-3">
        <Icon size={15} aria-hidden="true" />
        {title}
      </h3>
      {children}
    </section>
  );
}

function ProfileCard({
  icon: Icon,
  title,
  desc,
  active,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`text-right rounded-2xl p-3 border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 active:scale-[0.98] ${
        active
          ? 'bg-navy-900 border-navy-900 text-white shadow-md'
          : 'bg-white border-gray-200 text-gray-700 hover:border-navy-300 hover:bg-navy-50/50'
      }`}
    >
      <Icon
        size={20}
        aria-hidden="true"
        className={active ? 'text-gold-300 mb-1.5' : 'text-navy-700 mb-1.5'}
      />
      <span className="block text-[13px] font-bold leading-tight">{title}</span>
      <span className={`block text-[11px] leading-tight mt-0.5 ${active ? 'text-white/70' : 'text-gray-400'}`}>
        {desc}
      </span>
    </button>
  );
}

function ToggleCard({
  icon: Icon,
  label,
  active,
  onClick,
  badge,
}: {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      className={`relative flex flex-col items-center justify-center gap-1.5 h-[76px] rounded-2xl border px-2 text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 active:scale-[0.97] ${
        active
          ? 'bg-navy-900 border-navy-900 text-white shadow-md'
          : 'bg-white border-gray-200 text-gray-600 hover:border-navy-300 hover:bg-navy-50/50'
      }`}
    >
      {badge && (
        <span className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-gold-400 text-navy-900 text-[10px] font-bold flex items-center justify-center">
          {badge}
        </span>
      )}
      <Icon size={20} aria-hidden="true" className={active ? 'text-gold-300' : 'text-navy-700'} />
      <span className="text-[11.5px] font-semibold leading-tight">{label}</span>
    </button>
  );
}

function StepBtn({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="w-9 h-9 rounded-xl bg-navy-900 text-white flex items-center justify-center hover:bg-navy-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 active:scale-95"
    >
      {children}
    </button>
  );
}

/* ================================================= Global ADA CSS rules */

const ADA_CSS = `
/* Font families */
html.ada-readable-font, html.ada-readable-font * {
  font-family: Arial, Helvetica, "Segoe UI", sans-serif !important;
}
html.ada-dyslexia-font, html.ada-dyslexia-font * {
  font-family: "OpenDyslexic", "Comic Sans MS", "Trebuchet MS", sans-serif !important;
  letter-spacing: 0.04em !important;
}

/* Letter spacing */
html.ada-ls-1 p, html.ada-ls-1 li, html.ada-ls-1 a, html.ada-ls-1 span,
html.ada-ls-1 h1, html.ada-ls-1 h2, html.ada-ls-1 h3, html.ada-ls-1 h4 { letter-spacing: 0.06em !important; }
html.ada-ls-2 p, html.ada-ls-2 li, html.ada-ls-2 a, html.ada-ls-2 span,
html.ada-ls-2 h1, html.ada-ls-2 h2, html.ada-ls-2 h3, html.ada-ls-2 h4 { letter-spacing: 0.12em !important; }

/* Line height */
html.ada-lh-1 p, html.ada-lh-1 li { line-height: 1.9 !important; }
html.ada-lh-2 p, html.ada-lh-2 li { line-height: 2.4 !important; }

/* Text alignment */
html.ada-align-right p, html.ada-align-right li { text-align: right !important; }
html.ada-align-center p, html.ada-align-center li { text-align: center !important; }
html.ada-align-left p, html.ada-align-left li { text-align: left !important; }
html.ada-align-justify p, html.ada-align-justify li { text-align: justify !important; }

/* Highlight links */
html.ada-highlight-links a {
  background-color: #fff3b0 !important;
  color: #1a1a1a !important;
  box-shadow: 0 0 0 2px #f59e0b !important;
  border-radius: 3px;
  text-decoration: underline !important;
}

/* Highlight titles */
html.ada-highlight-titles h1,
html.ada-highlight-titles h2,
html.ada-highlight-titles h3,
html.ada-highlight-titles h4 {
  outline: 2px dashed #f59e0b !important;
  outline-offset: 3px;
  background-color: rgba(245, 158, 11, 0.08) !important;
}

/* High contrast */
html.ada-contrast-high {
  filter: contrast(1.45) !important;
}
html.ada-contrast-high a { text-decoration: underline !important; }

/* Dark contrast */
html.ada-contrast-dark img,
html.ada-contrast-dark video,
html.ada-contrast-dark [style*="background-image"] {
  filter: invert(1) hue-rotate(180deg) !important;
}

/* Big cursor */
html.ada-big-cursor, html.ada-big-cursor * {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' stroke='%23fff' stroke-width='1.5' d='M5 2l14 8-6 1.5 3.5 6.5-2.5 1.5-3.5-6.5L5 18z'/%3E%3C/svg%3E") 4 2, auto !important;
}

/* Stop animations */
html.ada-stop-animations *,
html.ada-stop-animations *::before,
html.ada-stop-animations *::after {
  animation-duration: 0s !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0s !important;
  scroll-behavior: auto !important;
}

/* Hide images */
html.ada-hide-images img,
html.ada-hide-images video,
html.ada-hide-images picture {
  visibility: hidden !important;
}

/* Highlight hover */
html.ada-highlight-hover a:hover,
html.ada-highlight-hover button:hover,
html.ada-highlight-hover [role="button"]:hover {
  outline: 3px solid #f59e0b !important;
  outline-offset: 2px !important;
}

/* Keyboard navigation focus */
html.ada-keyboard-nav a:focus,
html.ada-keyboard-nav button:focus,
html.ada-keyboard-nav input:focus,
html.ada-keyboard-nav select:focus,
html.ada-keyboard-nav textarea:focus,
html.ada-keyboard-nav [tabindex]:focus {
  outline: 3px solid #2563eb !important;
  outline-offset: 3px !important;
  border-radius: 3px;
}
`;
