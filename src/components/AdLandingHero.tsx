'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function AdLandingHero() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    setSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'ads',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });

      if (!response.ok) throw new Error('Request failed');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Ad lead submission failed:', error);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-8 pb-8 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-32 w-80 h-80 bg-navy-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Top badge */}
            <div className="mb-8 inline-flex items-center gap-2 glass-dark-card rounded-full px-4 py-2.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[13px] font-semibold text-green-300">זמין עכשיו - פגישות בתאריכים הקרובים</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight" dir="rtl">
              האם השיער שלך גורם לך להרגיש{' '}
              <span className="bg-gradient-to-l from-gold-300 via-gold-200 to-gold-400 bg-clip-text text-transparent">פחות בטוחה בעצמך?</span>
            </h1>

            {/* Subheadline - emotional benefit */}
            <p className="text-lg sm:text-xl text-navy-100 mb-8 leading-relaxed" dir="rtl">
              את לא לבד. אלפי נשים מתמודדות עם דלילות שיער ומחפשות פתרון שבאמת עובד.
              <br />
              <strong className="text-gold-200">David Hair מחזירה לך את הביטחון העצמי.</strong>
            </p>

            {/* Key benefits bullets */}
            <div className="space-y-3 mb-12">
              {[
                'פתרון טבעי שנראה כמו השיער שלך',
                'בחדר פרטי ודיסקרטי 100%',
                'ייעוץ בחינם וללא התחייבות',
                'שירות לאחר קנייה שנמשך שנים',
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 text-navy-50">
                  <CheckCircle2 size={20} className="flex-shrink-0 text-gold-300 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[16px] font-medium leading-tight">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA - Urgency */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/book"
                className="px-8 py-5 rounded-2xl bg-gradient-to-b from-gold-400 to-gold-500 text-navy-900 hover:from-gold-300 hover:to-gold-400 transition-all duration-300 font-bold text-[18px] shadow-2xl shadow-gold-400/30 active:scale-[0.97] flex items-center gap-2 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                קביעת ייעוץ חינם עכשיו
              </Link>

              {/* Social proof - small */}
              <div className="text-sm text-navy-200 leading-relaxed pt-1">
                <div className="font-semibold text-gold-300 mb-1">⭐ 4.9/5 כוכבים</div>
                <p>מעל 500 ביקורות חיוביות</p>
              </div>
            </div>

            {/* Bottom micro-copy */}
            <div className="mt-8 pt-6 border-t border-navy-700/40">
              <p className="text-[13px] text-navy-300 tracking-wide" dir="rtl">
                ✓ ללא התחייבות  •  ✓ סביבה מכבדת ודיסקרטית  •  ✓ פגישה ראשונה ללא עלות
              </p>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="lg:pl-8">
            <div className="glass-dark-card rounded-[28px] p-8 sm:p-10 backdrop-blur-xl bg-white/10 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight" dir="rtl">
                בואי נתחיל עכשיו
              </h2>
              <p className="text-navy-100 text-[15px] mb-8" dir="rtl">
                הזמיני ייעוץ חינם וקבלי התאמה אישית כבר עכשיו
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-[14px] font-semibold text-gold-200 mb-2" dir="rtl">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="שם שלך"
                      required
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all text-[15px] font-medium"
                      dir="rtl"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-[14px] font-semibold text-gold-200 mb-2" dir="rtl">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05X-XXXXXXX"
                      required
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all text-[15px] font-medium"
                      dir="rtl"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-[14px] font-semibold text-gold-200 mb-2" dir="rtl">
                      אימייל
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-5 py-3.5 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all text-[15px] font-medium"
                      dir="rtl"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-8 px-6 py-4 rounded-2xl bg-gradient-to-b from-gold-400 to-gold-500 text-navy-900 hover:from-gold-300 hover:to-gold-400 transition-all duration-300 font-bold text-[16px] shadow-xl shadow-gold-400/30 active:scale-[0.97] flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    {submitting ? 'שולח...' : 'קביעת ייעוץ חינם'}
                  </button>

                  {submitError && (
                    <p className="text-[13px] text-red-300 text-center leading-relaxed" dir="rtl">
                      משהו השתבש. נסו שוב או שלחו הודעה ב{' '}
                      <a href="https://wa.me/972504001187" className="underline font-semibold">וואטסאפ</a>.
                    </p>
                  )}

                  {/* Privacy notice */}
                  <p className="text-[12px] text-navy-200 text-center leading-relaxed" dir="rtl">
                    אנחנו מכבדות את הפרטיות שלך. הנתונים שלך לעולם לא יישותפו עם צדדים שלישיים.
                  </p>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <CheckCircle2 size={60} className="text-gold-300 mb-4 mx-auto" strokeWidth={1.5} />
                  <p className="text-white font-bold text-lg mb-2" dir="rtl">
                    תודה על הפנייה!
                  </p>
                  <p className="text-navy-100 text-[15px]" dir="rtl">
                    ניצור איתך קשר בקרוב עם פרטי הייעוץ
                  </p>
                </div>
              )}
            </div>

            {/* Contact info below form */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+972504001187"
                className="flex items-center gap-3 text-navy-100 hover:text-gold-300 transition group"
                dir="rtl"
              >
                <Phone size={18} className="flex-shrink-0 text-gold-300" strokeWidth={2} />
                <span className="text-[15px] font-medium group-hover:underline">התקשרו עכשיו</span>
              </a>
              <a
                href="mailto:office@hairtoppersisrael.com"
                className="flex items-center gap-3 text-navy-100 hover:text-gold-300 transition group"
                dir="rtl"
              >
                <Mail size={18} className="flex-shrink-0 text-gold-300" strokeWidth={2} />
                <span className="text-[15px] font-medium group-hover:underline">שלחו הודעה</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
