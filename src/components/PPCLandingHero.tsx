'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Clock, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function PPCLandingHero() {
  const [formData, setFormData] = useState({ phone: '', name: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to your backend/CRM
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setLoading(false);
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
            <div className="mb-6 inline-flex items-center gap-2 glass-card rounded-full px-4 py-2">
              <span className="text-[12px] font-bold text-green-300 uppercase tracking-wide">🔥 הצעה מוגבלת</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            {/* Magnetic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-[1.05] tracking-tight" dir="rtl">
              החזרי את{' '}
              <span className="bg-gradient-to-l from-gold-300 via-gold-200 to-gold-400 bg-clip-text text-transparent">הביטחון שלך</span>
              {' '}בשיער
            </h1>

            {/* Power Statement */}
            <p className="text-xl sm:text-2xl text-gold-200 font-bold mb-6" dir="rtl">
              ייעוץ חינם לגמרי בתוך 24 שעות
            </p>

            {/* Problem + Solution */}
            <div className="space-y-4 mb-10">
              <p className="text-lg text-navy-100 leading-relaxed" dir="rtl">
                <span className="font-bold text-white">4 מתוך 5 נשים</span> עם דלילות שיער מרגישות הפחתת ביטחון עצמי.
              </p>
              <p className="text-lg text-gold-200 font-semibold" dir="rtl">
                אנחנו פתרנו את זה לאלפים. הגיע הזמן שלך.
              </p>
            </div>

            {/* Social Proof - Credibility */}
            <div className="grid grid-cols-3 gap-4 mb-10 bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-black text-gold-300">500+</div>
                <p className="text-[13px] text-navy-200 mt-1">ביקורות חיוביות</p>
              </div>
              <div className="text-center border-l border-r border-white/10">
                <div className="text-2xl font-black text-gold-300">4.9⭐</div>
                <p className="text-[13px] text-navy-200 mt-1">דירוג ממוצע</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-gold-300">15+</div>
                <p className="text-[13px] text-navy-200 mt-1">שנות ניסיון</p>
              </div>
            </div>

            {/* Key Benefits - Specific */}
            <div className="space-y-3 mb-10">
              {[
                'בחדר פרטי 100% - בנות בלבד',
                'פאה בהתאמה מושלמת לאישה',
                'בלי סוף: שילוב, תיקון, שדרוג',
                'שירות לפני וואטסאפ בתשובה תוך שעה',
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
              או צאטו עכשיו בוואטסאפ
            </a>

            {/* Trust Elements */}
            <div className="mt-8 pt-6 border-t border-navy-700/40 space-y-2">
              <p className="text-[13px] text-navy-300 font-semibold" dir="rtl">
                ✓ אין קרדיט קארד  •  ✓ לא ממכרת עצמך לשום דבר  •  ✓ ייעוץ ללא תשלום
              </p>
              <p className="text-[12px] text-navy-400" dir="rtl">
                בטוח 100% - הפרטיות שלך חשובה לנו
              </p>
            </div>
          </div>

          {/* Right Content - Contact Form (Sticky/Floating) */}
          <div id="contact-form" className="lg:sticky lg:top-20">
            <div className="glass-card rounded-3xl p-8 sm:p-10 backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl">
              {!submitted ? (
                <>
                  <h2 className="text-3xl font-black text-white mb-2 tracking-tight" dir="rtl">
                    קביעה חינם
                  </h2>
                  <p className="text-gold-200 text-[15px] font-semibold mb-8" dir="rtl">
                    בדיוק 2 שדות לניוזלטר לייעוץ אישי:
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
                        className="w-full px-5 py-4 rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 focus:bg-white transition-all text-[16px] font-medium"
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
                        className="w-full px-5 py-4 rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 focus:bg-white transition-all text-[16px] font-medium"
                        dir="rtl"
                      />
                    </div>

                    {/* CTA Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-6 px-6 py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 hover:from-gold-300 hover:to-gold-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 font-black text-[17px] shadow-xl shadow-gold-400/40 active:scale-[0.97] flex items-center justify-center gap-2"
                    >
                      {loading ? 'שולח...' : 'קביעה עכשיו'}
                      {!loading && <ArrowLeft size={18} />}
                    </button>

                    {/* Friction Reducer */}
                    <p className="text-[12px] text-navy-200 text-center leading-relaxed mt-4" dir="rtl">
                      אתם תקבלו תגובה בתוך 24 שעות.
                      <br />
                      לא יהיו שיחות בלי הסכמה.
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
                    בקרוב נצור איתך קשר
                  </p>
                  <p className="text-navy-100 text-[15px] leading-relaxed mb-6" dir="rtl">
                    בעוד כמה שעות תקבלי הודעה בוואטסאפ עם דברים שתצטרכי לדעת קודם לפגישה
                  </p>
                  <a
                    href="https://wa.me/972504001187"
                    className="inline-block px-6 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-300 font-bold text-[15px]"
                  >
                    צאטו אתנו בוואטסאפ
                  </a>
                </div>
              )}

              {/* Urgency Timer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-gold-300 font-bold text-[13px]">
                <Clock size={16} />
                <span>⏰ רק עוד 3 עמדות זמינות היום!</span>
              </div>
            </div>

            {/* WhatsApp Alternative */}
            {!submitted && (
              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20 text-center">
                <p className="text-navy-200 text-[13px] mb-3" dir="rtl">
                  מעדיפה ליצור קשר ישירות?
                </p>
                <a
                  href="https://wa.me/972504001187"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all font-bold text-[14px]"
                >
                  💬 צאטו בוואטסאפ
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
            מעל 1,000 נשים סימנו ייעוץ החודש הזה
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {['Google', 'ביקורות בתל אביב', 'Facebook', '⭐⭐⭐⭐⭐'].map((badge) => (
              <div key={badge} className="px-4 py-2 rounded-full glass-card text-[12px] text-navy-200 font-semibold">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
