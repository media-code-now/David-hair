import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPost, postSlugs } from '@/lib/blog';
import { BUSINESS_NAME } from '@/lib/business';

const BASE = 'https://hairtoppersisrael.com';

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${BASE}/blog/${post.slug}`;
  return {
    title: `${post.title} | ${BUSINESS_NAME}`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url, languages: { 'he-IL': url } },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'he_IL',
      siteName: BUSINESS_NAME,
      url,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${BASE}/blog/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    inLanguage: 'he-IL',
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: url,
    image: `${BASE}/og-image.jpg`,
    author: { '@type': 'Organization', name: BUSINESS_NAME, url: BASE },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      logo: { '@type': 'ImageObject', url: `${BASE}/icon-512.svg` },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'דף הבית', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'בלוג', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="article-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main dir="rtl">
        <article className="pt-20 pb-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="breadcrumb">
              <Link href="/" className="hover:text-navy-700 transition-colors">דף הבית</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-navy-700 transition-colors">בלוג</Link>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight leading-[1.2]">
              {post.title}
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              עודכן ב-{new Date(post.dateModified).toLocaleDateString('he-IL')} · {post.readingMinutes} דקות קריאה
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-10">{post.intro}</p>

            {post.sections.map((s) => (
              <section key={s.h2} className="mb-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-3 tracking-tight">{s.h2}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-3">{p}</p>
                ))}
                {s.list && (
                  <ul className="list-disc pr-6 space-y-1.5 text-gray-600 leading-relaxed">
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-4 tracking-tight">שאלות נפוצות</h2>
              <div className="space-y-3">
                {post.faqs.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-lg font-bold text-navy-900 mb-3">המשך קריאה ושירותים קשורים</h2>
              <ul className="flex flex-wrap gap-2">
                {post.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="inline-block rounded-full border border-gray-200 px-4 py-2 text-sm text-navy-800 hover:border-navy-300 transition-colors">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12 rounded-2xl bg-navy-50/50 px-6 py-8 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-2">רוצה לראות מה מתאים לך?</h2>
              <p className="text-gray-500 mb-5">ייעוץ ראשוני חינם וללא התחייבות בסלון בנס ציונה.</p>
              <Link
                href="/book"
                className="inline-block px-8 py-3.5 rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 text-white font-bold shadow-xl shadow-navy-900/20"
              >
                קביעת ייעוץ חינם
              </Link>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
