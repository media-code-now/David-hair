'use client';

import { useState, useRef } from 'react';
import {
  Crown,
  ShoppingBag,
  Heart,
  Wrench,
  ArrowRight,
  ArrowLeft,
  Upload,
  X,
  Check,
  Shield,
  Star,
  Lock,
  Clock,
  MessageCircle,
  Phone,
} from 'lucide-react';

type ServiceType = 'topper' | 'wig' | 'medical' | 'refresh' | null;

interface FormData {
  service: ServiceType;
  name: string;
  phone: string;
  whatsapp: string;
  city: string;
  preferredTime: string;
  hairPhoto: File | null;
  hairPhotoPreview: string | null;
  notes: string;
}

const serviceOptions = [
  {
    id: 'topper' as ServiceType,
    icon: Crown,
    title: 'טופר שיער',
    description: 'נפח וכיסוי לשיער דליל או שביל מתרחב',
    gradient: 'from-pink-400 to-rose-500',
    lightBg: 'bg-pink-50/60',
  },
  {
    id: 'wig' as ServiceType,
    icon: ShoppingBag,
    title: 'פאה בהתאמה אישית',
    description: 'פאה מותאמת לחלוטין — סגנון, צבע ומידה',
    gradient: 'from-purple-400 to-violet-500',
    lightBg: 'bg-purple-50/60',
  },
  {
    id: 'medical' as ServiceType,
    icon: Heart,
    title: 'פאה רפואית',
    description: 'פתרונות נוחים לנשירת שיער רפואית',
    gradient: 'from-blue-400 to-cyan-500',
    lightBg: 'bg-blue-50/60',
  },
  {
    id: 'refresh' as ServiceType,
    icon: Wrench,
    title: 'תיקון / חידוש / שדרוג',
    description: 'שחזור, עיצוב מחדש או שדרוג פריט קיים',
    gradient: 'from-gold-400 to-amber-500',
    lightBg: 'bg-gold-50/60',
  },
];

const timeSlots = [
  'בוקר (9:00–12:00)',
  'צהריים (12:00–15:00)',
  'אחה"צ (15:00–18:00)',
  'ערב (18:00–20:00)',
  'גמיש — כל שעה מתאימה',
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    service: null,
    name: '',
    phone: '',
    whatsapp: '',
    city: '',
    preferredTime: '',
    hairPhoto: null,
    hairPhotoPreview: null,
    notes: '',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectService = (service: ServiceType) => {
    setFormData({ ...formData, service });
  };

  const goToStep2 = () => {
    if (formData.service) setStep(2);
  };

  const goToStep1 = () => setStep(1);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          hairPhoto: file,
          hairPhotoPreview: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setFormData({
      ...formData,
      hairPhoto: null,
      hairPhotoPreview: null,
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  const selectedServiceLabel =
    serviceOptions.find((s) => s.id === formData.service)?.title ?? '';

  /* ──────────── SUCCESS STATE ──────────── */
  if (submitted) {
    return (
      <section dir="rtl" className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[20%] w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-[20%] w-80 h-80 bg-navy-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-lg w-full text-center py-20">
          <div className="w-20 h-20 rounded-[18px] bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
            <Check size={40} className="text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            הפנייה נקלטה בהצלחה!
          </h1>
          <p className="text-lg text-gray-500 mb-2">
            תודה, <strong className="text-gray-900">{formData.name}</strong>. הייעוץ שלך ל<strong className="text-gray-900">{selectedServiceLabel}</strong> נרשם בהצלחה.
          </p>
          <p className="text-gray-400 mb-8">
            ניצור איתך קשר בוואטסאפ או בטלפון תוך מספר שעות לאישור התור.
          </p>

          <div className="glass-card rounded-[18px] p-6 mb-8 text-right text-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{selectedServiceLabel}</span>
              <span className="text-gray-400 text-xs">שירות</span>
            </div>
            <div className="h-px bg-gray-200/60" />
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{formData.city || '—'}</span>
              <span className="text-gray-400 text-xs">עיר</span>
            </div>
            <div className="h-px bg-gray-200/60" />
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{formData.preferredTime || '—'}</span>
              <span className="text-gray-400 text-xs">שעה מועדפת</span>
            </div>
            <div className="h-px bg-gray-200/60" />
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{formData.whatsapp || formData.phone}</span>
              <span className="text-gray-400 text-xs">וואטסאפ</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="glass px-6 py-3 rounded-[14px] text-gray-700 hover:bg-white/80 transition-all font-medium active:scale-[0.97]"
            >
              חזרה לדף הבית
            </a>
            <a
              href="https://wa.me/972504001187"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-[14px] bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all font-medium shadow-lg shadow-[#25D366]/25 active:scale-[0.97]"
            >
              <MessageCircle size={18} />
              שלחי הודעה עכשיו
            </a>
          </div>
        </div>
      </section>
    );
  }

  /* ──────────── MAIN FORM ──────────── */
  return (
    <section dir="rtl" className="relative min-h-[80vh] py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-[10%] w-80 h-80 bg-navy-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[15%] w-96 h-96 bg-gold-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            קביעת ייעוץ חינם
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            שני שלבים קצרים — פחות מ-60 שניות
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-sm font-bold transition-all ${
                step >= 1
                  ? 'bg-gradient-to-br from-navy-800 to-navy-900 text-white shadow-md shadow-navy-900/20'
                  : 'glass text-gray-400'
              }`}
            >
              {step > 1 ? <Check size={18} /> : '1'}
            </div>
            <span
              className={`text-sm font-medium hidden sm:inline ${
                step >= 1 ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              בחירת שירות
            </span>
          </div>
          <div
            className={`w-12 sm:w-20 h-0.5 rounded-full transition-all ${
              step >= 2 ? 'bg-navy-900' : 'bg-gray-200'
            }`}
          />
          <div className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-sm font-bold transition-all ${
                step >= 2
                  ? 'bg-gradient-to-br from-navy-800 to-navy-900 text-white shadow-md shadow-navy-900/20'
                  : 'glass text-gray-400'
              }`}
            >
              2
            </div>
            <span
              className={`text-sm font-medium hidden sm:inline ${
                step >= 2 ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              הפרטים שלך
            </span>
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-card rounded-[22px] overflow-hidden">
          {/* ───────── STEP 1 ───────── */}
          {step === 1 && (
            <div className="p-6 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                מה את צריכה?
              </h2>
              <p className="text-gray-400 mb-8">
                בחרי את השירות שמעניין אותך
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {serviceOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = formData.service === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => selectService(option.id)}
                      className={`relative text-right rounded-[16px] p-5 transition-all active:scale-[0.97] ${
                        isSelected
                          ? 'glass-card ring-2 ring-navy-900/30 shadow-md'
                          : 'glass hover:shadow-md'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 left-3 w-6 h-6 rounded-[8px] bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </div>
                      )}
                      <div className={`w-11 h-11 rounded-[12px] bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-3 shadow-sm`}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                    </button>
                  );
                })}
              </div>

              {/* Step 1 CTA */}
              <div className="mt-8 flex justify-start">
                <button
                  type="button"
                  onClick={goToStep2}
                  disabled={!formData.service}
                  className={`flex items-center gap-2 px-8 py-3.5 rounded-[14px] font-semibold text-lg transition-all active:scale-[0.97] ${
                    formData.service
                      ? 'bg-gradient-to-b from-navy-800 to-navy-900 text-white shadow-lg shadow-navy-900/25'
                      : 'glass text-gray-300 cursor-not-allowed'
                  }`}
                >
                  המשך
                  <ArrowLeft size={20} />
                </button>
              </div>
            </div>
          )}

          {/* ───────── STEP 2 ───────── */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              {/* Selected service badge */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  type="button"
                  onClick={goToStep1}
                  className="w-8 h-8 rounded-[8px] glass flex items-center justify-center text-gray-400 hover:text-gray-700 transition"
                  aria-label="חזרה לשלב 1"
                >
                  <ArrowRight size={16} />
                </button>
                <div className="glass px-4 py-1.5 rounded-full text-sm font-medium text-navy-800">
                  {selectedServiceLabel}
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                ספרי לנו קצת על עצמך
              </h2>
              <p className="text-gray-400 mb-8">
                נשתמש בפרטים האלה כדי להתכונן לייעוץ שלך
              </p>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-1.5"
                  >
                    שם מלא <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[12px] glass border-0 focus:ring-2 focus:ring-navy-900/30 outline-none transition text-gray-900 placeholder:text-gray-300"
                    placeholder="השם שלך"
                  />
                </div>

                {/* Phone + WhatsApp row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-900 mb-1.5"
                    >
                      טלפון <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[12px] glass border-0 focus:ring-2 focus:ring-navy-900/30 outline-none transition text-gray-900 placeholder:text-gray-300"
                      placeholder="05X-XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-semibold text-gray-900 mb-1.5"
                    >
                      מספר וואטסאפ{' '}
                      <span className="text-gray-300 font-normal text-xs">
                        (אם שונה)
                      </span>
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[12px] glass border-0 focus:ring-2 focus:ring-navy-900/30 outline-none transition text-gray-900 placeholder:text-gray-300"
                      placeholder="זהה לטלפון אם ריק"
                    />
                  </div>
                </div>

                {/* City + Time row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-gray-900 mb-1.5"
                    >
                      עיר <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[12px] glass border-0 focus:ring-2 focus:ring-navy-900/30 outline-none transition text-gray-900 placeholder:text-gray-300"
                      placeholder="לדוגמה: תל אביב, חיפה..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-semibold text-gray-900 mb-1.5"
                    >
                      שעה מועדפת <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredTime: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-[12px] glass border-0 focus:ring-2 focus:ring-navy-900/30 outline-none transition text-gray-900 bg-transparent appearance-none"
                    >
                      <option value="" disabled>
                        בחרי שעה...
                      </option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Photo upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    תמונת צבע שיער{' '}
                    <span className="text-gray-300 font-normal text-xs">
                      (אופציונלי — עוזר לנו להתכונן)
                    </span>
                  </label>

                  {formData.hairPhotoPreview ? (
                    <div className="relative inline-block">
                      <img
                        src={formData.hairPhotoPreview}
                        alt="תצוגת תמונת שיער"
                        className="h-32 w-32 object-cover rounded-[14px] glass"
                      />
                      <button
                        type="button"
                        onClick={removePhoto}
                        className="absolute -top-2 -right-2 w-7 h-7 rounded-[8px] bg-gradient-to-br from-red-400 to-red-500 text-white flex items-center justify-center shadow-md hover:from-red-500 hover:to-red-600 transition active:scale-90"
                        aria-label="הסרת תמונה"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full sm:w-auto flex items-center gap-3 px-6 py-3 rounded-[14px] glass hover:bg-white/80 transition-all text-gray-500 hover:text-navy-800 active:scale-[0.97]"
                    >
                      <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                        <Upload size={16} className="text-navy-700" />
                      </div>
                      <span className="text-sm font-medium">
                        העלאת תמונה של השיער שלך
                      </span>
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-semibold text-gray-900 mb-1.5"
                  >
                    משהו נוסף?{' '}
                    <span className="text-gray-300 font-normal text-xs">
                      (אופציונלי)
                    </span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[14px] glass border-0 focus:ring-2 focus:ring-navy-900/30 outline-none transition text-gray-900 resize-none placeholder:text-gray-300"
                    placeholder="שאלות, חששות, או פרטים שיעזרו לנו להתכונן..."
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
                <button
                  type="button"
                  onClick={goToStep1}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition font-medium order-2 sm:order-1 justify-center sm:justify-start"
                >
                  <ArrowRight size={18} />
                  חזרה
                </button>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-[14px] bg-gradient-to-b from-navy-800 to-navy-900 text-white hover:from-navy-700 hover:to-navy-800 transition-all font-semibold text-lg shadow-lg shadow-navy-900/25 order-1 sm:order-2 active:scale-[0.97]"
                >
                  קביעת הייעוץ שלי
                  <ArrowLeft size={20} />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { icon: Shield, text: '100% דיסקרטי', color: 'text-green-500' },
            { icon: Lock, text: 'ללא התחייבות', color: 'text-green-500' },
            { icon: Clock, text: 'תגובה תוך שעות', color: 'text-green-500' },
            { icon: Star, text: 'דירוג ממוצע 4.9', color: 'text-gold-500' },
          ].map((badge, i) => (
            <div key={i} className="glass flex items-center gap-1.5 px-4 py-2 rounded-full text-sm text-gray-500">
              <badge.icon size={14} className={badge.color} />
              {badge.text}
            </div>
          ))}
        </div>

        {/* Alternative contact */}
        <div className="mt-10 glass-card rounded-[18px] p-6 sm:p-8">
          <p className="text-center text-gray-600 mb-5 font-medium">
            מעדיפה ליצור קשר ישירות?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/972504001187"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-[14px] bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all font-medium shadow-lg shadow-[#25D366]/25 active:scale-[0.97]"
            >
              <MessageCircle size={18} />
              וואטסאפ
            </a>
            <a
              href="tel:+972504001187"
              className="glass flex items-center justify-center gap-2 px-6 py-3 rounded-[14px] text-gray-700 hover:bg-white/80 transition-all font-medium active:scale-[0.97]"
            >
              <Phone size={18} />
              050-4001187
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
