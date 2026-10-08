import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { posts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'בלוג – מדריכים על טופרים, פאות ושיער דליל | David Hair Solutions',
  description:
    'מדריכים מעשיים על טופרים, פאות ופתרונות לשיער דליל: איך בוחרים, כמה זה עולה, איך מטפלים. מהסלון של David Hair Solutions בנס ציונה.',
  alternates: {
    canonical: 'https://hairtoppersisrael.com/blog',
    languages: { 'he-IL': 'https://hairtoppersisrael.com/blog' },
  },
  openGraph: {
    title: 'בלוג – טופרים, פאות ושיער דליל | David Hair Solutions',
    description: 'מדריכים מעשיים על טופרים, פאות ופתרונות לשיער דליל.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'David Hair Solutions',
    url: 'https://hairtoppersisrael.com/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main dir="rtl">
        <section className="pt-20 pb-12 bg-gradient-to-b from-navy-50/40 via-white to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6" aria-label="breadcrumb">
              <Link href="/" className="hover:text-navy-700 transition-colors">דף הבית</Link>
              <span>/</span>
              <span className="text-gray-600 font-medium">בלוג</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-[1.2]">
              מדריכים על טופרים, פאות ושיער דליל
            </h1>
            <p className="text-[17px] text-gray-500 leading-relaxed">
              תשובות מעשיות מהסלון: איך בוחרים, כמה זה עולה ואיך שומרים על התוצאה.
            </p>
          </div>
        </section>

        <section className="pb-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 hover:border-navy-300 hover:bg-white transition-colors"
              >
                <h2 className="text-xl font-bold text-navy-900 mb-2 tracking-tight">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-2">{post.excerpt}</p>
                <span className="text-sm text-gray-400">{post.readingMinutes} דקות קריאה</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
