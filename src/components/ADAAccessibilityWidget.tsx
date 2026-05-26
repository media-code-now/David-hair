'use client';

import React, { useState, useEffect } from 'react';
import { X, Accessibility, RotateCcw, Volume2, Eye, Type, Contrast } from 'lucide-react';

interface AccessibilitySettings {
  fontSize: 'small' | 'medium' | 'large' | 'xlarge';
  highContrast: boolean;
  screenReaderMode: boolean;
  highlightLinks: boolean;
  underlineLinks: boolean;
  fontSize_value: number;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 'medium',
  highContrast: false,
  screenReaderMode: false,
  highlightLinks: false,
  underlineLinks: false,
  fontSize_value: 100,
};

const fontSizeMap: Record<string, number> = {
  small: 90,
  medium: 100,
  large: 120,
  xlarge: 150,
};

// Apply settings to DOM
const applySettings = (newSettings: AccessibilitySettings) => {
  const root = document.documentElement;

  // Font size
  root.style.fontSize = `${newSettings.fontSize_value}%`;

  // High contrast
  if (newSettings.highContrast) {
    root.classList.add('ada-high-contrast');
  } else {
    root.classList.remove('ada-high-contrast');
  }

  // Screen reader mode (hide decorative images)
  if (newSettings.screenReaderMode) {
    root.classList.add('ada-screen-reader-mode');
  } else {
    root.classList.remove('ada-screen-reader-mode');
  }

  // Highlight links
  if (newSettings.highlightLinks) {
    root.classList.add('ada-highlight-links');
  } else {
    root.classList.remove('ada-highlight-links');
  }

  // Underline links
  if (newSettings.underlineLinks) {
    root.classList.add('ada-underline-links');
  } else {
    root.classList.remove('ada-underline-links');
  }
};

export default function ADAAccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [mounted, setMounted] = useState(false);

  // Load settings from localStorage
  useEffect(() => {
    const loadSettings = () => {
      const savedSettings = localStorage.getItem('ada-accessibility-settings');
      if (savedSettings) {
        try {
          const parsed = JSON.parse(savedSettings) as AccessibilitySettings;
          setSettings(parsed);
          applySettings(parsed);
        } catch (error) {
          console.error('Failed to parse accessibility settings:', error);
        }
      }
      setMounted(true);
    };
    loadSettings();
  }, []);

  const handleSettingChange = (key: keyof AccessibilitySettings, value: string | number | boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('ada-accessibility-settings', JSON.stringify(newSettings));
  };

  const handleFontSizeChange = (size: 'small' | 'medium' | 'large' | 'xlarge') => {
    handleSettingChange('fontSize', size);
    handleSettingChange('fontSize_value', fontSizeMap[size]);
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
    localStorage.removeItem('ada-accessibility-settings');
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating ADA Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="תפריט נגישות. לחץ כדי לפתוח אפשרויות נגישות"
        aria-expanded={isOpen}
        aria-controls="ada-panel"
        className="
          fixed z-[999]
          w-14 h-14 rounded-full
          bg-navy-900 text-white
          hover:bg-navy-800
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500
          active:scale-95
          transition-all duration-200
          shadow-lg shadow-navy-900/40
          flex items-center justify-center
          bottom-24 left-6
          md:bottom-6 md:right-6
        "
        title="אפשרויות נגישות"
      >
        <Accessibility size={24} aria-hidden="true" />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
            role="presentation"
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            id="ada-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ada-panel-title"
            className="
              fixed bottom-0 right-0 z-[999]
              w-full md:w-96
              bg-white rounded-t-2xl md:rounded-2xl
              shadow-2xl shadow-black/30
              p-6
              max-h-[90vh] overflow-y-auto
              animate-in slide-in-from-bottom-4 duration-300
            "
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 id="ada-panel-title" className="text-xl font-bold text-navy-900">
                נגישות
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="סגור תפריט נגישות"
                className="
                  w-8 h-8 flex items-center justify-center
                  rounded-full bg-gray-100
                  hover:bg-gray-200
                  focus:outline-none focus:ring-2 focus:ring-navy-500
                  transition-colors duration-200
                "
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Font Size */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Type size={18} aria-hidden="true" className="text-navy-600" />
                  גודל הגופן
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['small', 'medium', 'large', 'xlarge'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleFontSizeChange(size)}
                      aria-label={`גודל גופן ${size}`}
                      aria-pressed={settings.fontSize === size}
                      className={`
                        py-2 px-2 rounded-lg text-sm font-semibold
                        transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-navy-500
                        ${
                          settings.fontSize === size
                            ? 'bg-navy-900 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                      `}
                    >
                      {size === 'small' && <span>קטן</span>}
                      {size === 'medium' && <span>בינוני</span>}
                      {size === 'large' && <span>גדול</span>}
                      {size === 'xlarge' && <span>גדול מאד</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Contrast size={18} aria-hidden="true" className="text-navy-600" />
                  ניגודיות גבוהה
                </label>
                <button
                  onClick={() => handleSettingChange('highContrast', !settings.highContrast)}
                  aria-label={`${settings.highContrast ? 'כבה' : 'הפעל'} ניגודיות גבוהה`}
                  aria-pressed={settings.highContrast}
                  className={`
                    w-full py-3 px-4 rounded-lg font-semibold
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-navy-500
                    ${
                      settings.highContrast
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {settings.highContrast ? '✓ הופעל' : 'כבוי'}
                </button>
              </div>

              {/* Screen Reader Mode */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Volume2 size={18} aria-hidden="true" className="text-navy-600" />
                  מצב קורא מסך
                </label>
                <button
                  onClick={() => handleSettingChange('screenReaderMode', !settings.screenReaderMode)}
                  aria-label={`${settings.screenReaderMode ? 'כבה' : 'הפעל'} מצב קורא מסך`}
                  aria-pressed={settings.screenReaderMode}
                  className={`
                    w-full py-3 px-4 rounded-lg font-semibold
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-navy-500
                    ${
                      settings.screenReaderMode
                        ? 'bg-navy-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {settings.screenReaderMode ? '✓ הופעל' : 'כבוי'}
                </button>
              </div>

              {/* Highlight Links */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Eye size={18} aria-hidden="true" className="text-navy-600" />
                  הדגש קישורים
                </label>
                <button
                  onClick={() => handleSettingChange('highlightLinks', !settings.highlightLinks)}
                  aria-label={`${settings.highlightLinks ? 'כבה' : 'הפעל'} הדגש קישורים`}
                  aria-pressed={settings.highlightLinks}
                  className={`
                    w-full py-3 px-4 rounded-lg font-semibold
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-navy-500
                    ${
                      settings.highlightLinks
                        ? 'bg-yellow-100 text-yellow-900 border-2 border-yellow-400'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {settings.highlightLinks ? '✓ הופעל' : 'כבוי'}
                </button>
              </div>

              {/* Underline Links */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  קו תחתון לקישורים
                </label>
                <button
                  onClick={() => handleSettingChange('underlineLinks', !settings.underlineLinks)}
                  aria-label={`${settings.underlineLinks ? 'הסר' : 'הוסף'} קו תחתון לקישורים`}
                  aria-pressed={settings.underlineLinks}
                  className={`
                    w-full py-3 px-4 rounded-lg font-semibold
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-navy-500
                    underline
                    ${
                      settings.underlineLinks
                        ? 'bg-navy-50 text-navy-900 border-2 border-navy-900'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {settings.underlineLinks ? '✓ הופעל' : 'כבוי'}
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                aria-label="החזר את כל הגדרות הנגישות לברירת המחדל"
                className="
                  w-full py-3 px-4 rounded-lg font-semibold
                  bg-gray-200 text-gray-800 hover:bg-gray-300
                  transition-all duration-200
                  flex items-center justify-center gap-2
                  focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-navy-500
                  active:scale-95
                "
              >
                <RotateCcw size={16} aria-hidden="true" />
                חזרה לברירת המחדל
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600">
                הגדרות הנגישות הללו שמורות בדפדפן שלך ויישמרו בביקורים בעתיד.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Global Accessibility Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        /* High Contrast Mode */
        html.ada-high-contrast {
          --color-navy-900: #000000;
          --color-white: #ffffff;
          --color-gray-600: #000000;
          --color-gray-700: #000000;
          --color-gray-800: #000000;
          filter: contrast(1.3) saturate(1.2);
        }

        html.ada-high-contrast * {
          background-color: white !important;
          color: black !important;
          border-color: black !important;
        }

        html.ada-high-contrast button,
        html.ada-high-contrast a,
        html.ada-high-contrast input {
          border: 2px solid black !important;
        }

        /* Screen Reader Mode */
        html.ada-screen-reader-mode img[role='presentation'],
        html.ada-screen-reader-mode [aria-hidden='true'] img {
          display: none !important;
        }

        /* Highlight Links */
        html.ada-highlight-links a {
          background-color: #ffff99 !important;
          color: #000000 !important;
          padding: 2px 4px;
          border-radius: 2px;
        }

        /* Underline Links */
        html.ada-underline-links a {
          text-decoration: underline !important;
          text-decoration-thickness: 2px !important;
        }
      `}} />
    </>
  );
}
