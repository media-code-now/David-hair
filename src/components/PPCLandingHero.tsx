'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowLeft, Clock, Trophy } from 'lucide-react';
import { useState } from 'react';
import ppcBanner from '@/images/banners/2.jpg';

export default function PPCLandingHero() {
  const [formData, setFormData] = useState({ phone: '', name: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    setLoading(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'ppc',
          name: formData.name,
          phone: formData.phone,
          pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      });

      if (!response.ok) {
        let reason = String(response.status);
        try {
          const data = await response.json();
          if (data?.error) reason += ` ${data.error}`;
        } catch {
          /* response had no JSON body */
        }
        throw new Error(`Request failed: ${reason}`);
      }
      setSubmitted(true);
    } catch (error) {
      console.error('PPC lead submission failed:', error);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-6 pb-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-gold-400/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -left-32 w-80 h-80 bg-navy-400/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10" dir="rtl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Highly Persuasive Copy */}
          <div>
            {/* Urgency Badge */}
            <div className="mb-6 inline-flex items-center gap-2 glass-dark-card rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[12px] font-bold text-green-300 uppercase tracking-wide">🔥 הצעה מוגבלת</span>
            </div>

            {/* Magnetic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-[1.05] tracking-tight" dir="rtl">
              החזירו את{' '}
              <span className="bg-gradient-to-l from-gold-300 via-gold-200 to-gold-400 bg-clip-text text-transparent">הביטחון שלך</span>
              {' '}בשיער
            </h1>

            {/* Power Statement */}
            <p className="text-xl sm:text-2xl text-gold-200 font-bold mb-6" dir="rtl">
              ייעוץ אישי חינם וחזרה בתוך 24 שעות
            </p>

            {/* Problem + Solution */}
            <div className="space-y-4 mb-10">
              <p className="text-lg text-navy-100 leading-relaxed" dir="rtl">
                <span className="font-bold text-white">4 מתוך 5 נשים</span> המתמודדות עם דלילות שיער חוות ירידה בביטחון העצמי.
              </p>
              <p className="text-lg text-gold-200 font-semibold" dir="rtl">
                כבר סייענו לאלפי נשים. עכשיו תורך.
              </p>
            </div>

            {/* Social Proof - Credibility */}
            <div className="grid grid-cols-3 gap-4 mb-10 rounded-2xl p-6 border border-gold-400/30">
              <div className="text-center">
                <div className="text-2xl font-black text-gold-300">500+</div>
                <p className="text-[13px] text-navy-200 mt-1">ביקורות חיוביות</p>
              </div>
              <div className="text-center border-l border-r border-gold-400/30">
                <div className="text-2xl font-black text-gold-300">4.9⭐</div>
                <p className="text-[13px] text-navy-200 mt-1">דירוג ממוצע</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-gold-300">15+</div>
                <p className="text-[13px] text-navy-200 mt-1">שנות ניסיון</p>
              </div>
            </div>

            {/* In-page banner image */}
            <div className="mb-10 rounded-2xl overflow-hidden border border-gold-400/30 shadow-xl shadow-navy-900/30">
              <Image
                src={ppcBanner}
                alt="לפני ואחרי פתרונות שיער בהתאמה אישית"
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Key Benefits - Specific */}
            <div className="space-y-3 mb-10">
              {[
                'בחדר פרטי ודיסקרטי – לנשים בלבד',
                'טופרים ופאות בהתאמה אישית למראה טבעי',
                'שילוב, תיקון ושדרוג בהתאמה לצורך שלך',
                'מענה מהיר בוואטסאפ ושירות אישי לאורך הדרך',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={22} className="flex-shrink-0 text-gold-300" strokeWidth={2.5} />
                  <span className="text-[16px] font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA - Simple, Bold */}
            <Link
              href="#contact-form"
              className="block w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 hover:from-gold-300 hover:to-gold-400 transition-all duration-300 font-black text-[18px] sm:text-[20px] shadow-2xl shadow-gold-400/40 hover:shadow-gold-400/60 active:scale-[0.97] text-center group mb-4"
            >
              קביעת ייעוץ חינם עכשיו →
            </Link>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/972504001187"
              className="block w-full px-8 py-4 rounded-2xl border-2 border-gold-400 text-gold-400 hover:bg-gold-400/10 transition-all duration-300 font-bold text-[17px] text-center"
            >
              או שלחו הודעה עכשיו בוואטסאפ
            </a>

            {/* Trust Elements */}
            <div className="mt-8 pt-6 border-t border-navy-700/40 space-y-2">
              <p className="text-[13px] text-navy-300 font-semibold" dir="rtl">
                ✓ ללא התחייבות  •  ✓ דיסקרטיות מלאה  •  ✓ ייעוץ ללא עלות
              </p>
              <p className="text-[12px] text-navy-400" dir="rtl">
                הפרטיות שלך חשובה לנו ואנחנו שומרות עליה בקפדנות
              </p>
            </div>
          </div>

          {/* Right Content - Contact Form (Sticky/Floating) */}
          <div id="contact-form" className="lg:sticky lg:top-20">
            <div className="glass-dark-card rounded-3xl p-8 sm:p-10 backdrop-blur-xl border border-gold-400/30 shadow-2xl shadow-gold-400/20">
              {!submitted ? (
                <>
                  <h2 className="text-3xl font-black text-white mb-2 tracking-tight" dir="rtl">
                    קבעו ייעוץ חינם
                  </h2>
                  <p className="text-gold-200 text-[15px] font-semibold mb-8" dir="rtl">
                    השאירו פרטים ונחזור אליכם לייעוץ אישי מותאם:
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="שם פרטי"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-navy-800/40 text-white placeholder-white/50 border-2 border-gold-400/30 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 focus:bg-navy-800/60 transition-all text-[16px] font-medium"
                        dir="rtl"
                      />
                    </div>

                    {/* Phone Field - PRIMARY */}
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="05X-XXXXXXX"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-navy-800/40 text-white placeholder-white/50 border-2 border-gold-400/30 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 focus:bg-navy-800/60 transition-all text-[16px] font-medium"
                        dir="rtl"
                      />
                    </div>

                    {/* CTA Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-6 px-6 py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 hover:from-gold-300 hover:to-gold-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 font-black text-[17px] shadow-xl shadow-gold-400/40 active:scale-[0.97] flex items-center justify-center gap-2"
                    >
                      {!loading && <ArrowLeft size={18} />}
                      {loading ? 'שולח...' : 'קביעה עכשיו'}
                    </button>

                    {/* Friction Reducer */}
                    {submitError && (
                      <p className="text-[13px] text-red-300 text-center leading-relaxed" dir="rtl">
                        משהו השתבש בשליחה. נסו שוב או שלחו הודעה ב{' '}
                        <a href="https://wa.me/972504001187" className="underline font-semibold">וואטסאפ</a>.
                      </p>
                    )}
                    <p className="text-[12px] text-navy-200 text-center leading-relaxed mt-4" dir="rtl">
                      נחזור אלייך בתוך 24 שעות.
                      <br />
                      לא ניצור קשר ללא הסכמתך.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-10 text-center">
                  <div className="mb-6">
                    <Trophy size={60} className="text-gold-300 mx-auto animate-bounce" strokeWidth={1.5} />
                  </div>
                  <p className="text-white font-black text-2xl mb-3" dir="rtl">
                    מושלם! ✓
                  </p>
                  <p className="text-gold-200 font-bold text-lg mb-6" dir="rtl">
                    בקרוב ניצור איתך קשר
                  </p>
                  <p className="text-navy-100 text-[15px] leading-relaxed mb-6" dir="rtl">
                    בקרוב תקבלי הודעה בוואטסאפ עם כל הפרטים שחשוב לדעת לפני הפגישה
                  </p>
                  <a
                    href="https://wa.me/972504001187"
                    className="inline-block px-6 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300 font-bold text-[15px]"
                  >
                    דברי איתנו בוואטסאפ
                  </a>
                </div>
              )}

              {/* Urgency Timer */}
              <div className="mt-8 pt-6 border-t border-gold-400/30 flex items-center justify-center gap-2 text-gold-300 font-bold text-[13px]">
                <Clock size={16} />
                <span>⏰ רק עוד 3 עמדות זמינות היום!</span>
              </div>
            </div>

            {/* WhatsApp Alternative */}
            {!submitted && (
              <div className="mt-6 p-4 rounded-xl border border-gold-400/30 text-center">
                <p className="text-navy-200 text-[13px] mb-3" dir="rtl">
                  מעדיפים ליצור קשר ישירות?
                </p>
                <a
                  href="https://wa.me/972504001187"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all font-bold text-[14px]"
                >
                  💬 דברי איתנו בוואטסאפ
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Social Proof */}
      <div className="mt-16 pt-8 border-t border-navy-700/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-navy-300 text-[13px] mb-6" dir="rtl">
            מעל 1,000 נשים השאירו פרטים לייעוץ החודש
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {['Google', 'ביקורות בתל אביב', 'Facebook', '⭐⭐⭐⭐⭐'].map((badge) => (
              <div key={badge} className="px-4 py-2 rounded-full glass-dark-card text-[12px] text-navy-200 font-semibold">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
