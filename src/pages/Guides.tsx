import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Phone,
  Calendar,
  AlertTriangle,
  FolderOpen,
  UserCheck,
} from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, GUIDES_AND_CASE_STUDIES, GuideArticle } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';

export default function Guides() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(
    GUIDES_AND_CASE_STUDIES[0].id
  );

  useSEO({
    title: 'Helpful Electrical Guides & Real Case Studies | Grace Electrical Services',
    description:
      'Explore expert guides on electrical panel warning signs, older home rewiring, breaker troubleshooting, lighting prep, and real St. Charles Parish project case studies.',
    canonicalPath: '/guides',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Helpful Electrical Guides & Case Studies',
      description:
        'People-first electrical safety guides, older home wiring insights, and real project case studies by Grace Electrical Services in Hahnville, LA.',
      url: `${BASE_URL}/guides`,
      hasPart: GUIDES_AND_CASE_STUDIES.map((g) => ({
        '@type': 'Article',
        headline: g.title,
        description: g.summary,
        author: {
          '@type': 'Person',
          name: 'Rodney',
        },
        publisher: {
          '@type': 'Electrician',
          name: BUSINESS.name,
        },
      })),
    },
  });

  const categories = [
    'All',
    'Safety & Warnings',
    'Older Homes & Rewiring',
    'Troubleshooting',
    'Planning & Code',
    'Real Case Studies',
  ];

  const filteredGuides =
    selectedCategory === 'All'
      ? GUIDES_AND_CASE_STUDIES
      : GUIDES_AND_CASE_STUDIES.filter((g) => g.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Grace Electrical Services helpful technical guides and real project case studies in Hahnville, LA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-900" />
        </div>
        <div className="container-page relative text-center">
          <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <BookOpen className="w-7 h-7 text-navy-900" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            People-First Knowledge &bull; Real St. Charles Parish Case Studies
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-up">
            Helpful Electrical Guides &amp; Project Case Studies
          </h1>
          <p className="text-navy-200 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            Practical advice to help you spot electrical warning signs, plan additions, understand safety codes, and view real-world work completed by Rodney for St. Charles Parish homeowners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS.phoneLink} className="btn-primary">
              <Phone className="w-4 h-4 fill-current" />
              Call Rodney: {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              Request Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'Helpful Guides & Case Studies' }]} />

      {/* Main Guides Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-amber-400 shadow-md'
                    : 'bg-white text-navy-700 border border-navy-100 hover:border-navy-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Guide Articles Grid */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {filteredGuides.map((guide: GuideArticle) => {
              const isExpanded = expandedArticleId === guide.id;

              return (
                <article
                  key={guide.id}
                  id={guide.id}
                  className="bg-white rounded-3xl border border-navy-100 overflow-hidden shadow-sm hover:border-navy-200 transition-all"
                >
                  {/* Article Header Image & Tag */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-navy-950 shadow-sm">
                        {guide.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-navy-900/80 text-white backdrop-blur-sm border border-white/20">
                        {guide.readTime}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs text-amber-300 font-semibold block mb-1">
                        By {guide.author} &bull; {guide.date}
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
                        {guide.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Summary */}
                    <p className="text-base sm:text-lg text-navy-700 leading-relaxed font-medium">
                      {guide.summary}
                    </p>

                    {/* Key Takeaways Box */}
                    <div className="p-5 rounded-2xl bg-electric-50/70 border border-electric-100">
                      <h3 className="font-display font-bold text-navy-900 text-base mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-electric-600" />
                        Key Practical Takeaways
                      </h3>
                      <ul className="space-y-2">
                        {guide.keyTakeaways.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-600 mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expand/Collapse Article Content */}
                    <div className="space-y-6">
                      {guide.contentSections.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <h3 className="font-display font-bold text-navy-900 text-lg sm:text-xl">
                            {sec.heading}
                          </h3>
                          {sec.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="text-navy-600 text-sm sm:text-base leading-relaxed">
                              {p}
                            </p>
                          ))}
                        </div>
                      ))}

                      {/* Real Case Studies Spotlight (if present) */}
                      {guide.caseStudies && guide.caseStudies.length > 0 && (
                        <div className="pt-4 border-t border-navy-100">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
                            <UserCheck className="w-3.5 h-3.5 text-amber-700" />
                            Verified Local Case Studies
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {guide.caseStudies.map((cs, cIdx) => (
                              <div
                                key={cIdx}
                                className="p-5 rounded-2xl border border-navy-100 bg-slate-50 flex flex-col justify-between"
                              >
                                <div>
                                  <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-navy-200/60">
                                    <strong className="text-navy-900 text-sm font-display">
                                      Client: {cs.client}
                                    </strong>
                                    <span className="text-xs text-electric-700 font-semibold">
                                      {cs.location}
                                    </span>
                                  </div>
                                  <p className="text-xs text-navy-600 mb-2">
                                    <strong className="text-navy-800">Issue:</strong> {cs.issue}
                                  </p>
                                  <p className="text-xs text-navy-600 mb-2">
                                    <strong className="text-navy-800">Work Undertaken:</strong>{' '}
                                    {cs.workUndertaken}
                                  </p>
                                </div>
                                <div className="mt-3 pt-2 border-t border-navy-200/60 text-xs text-emerald-800 font-medium bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                                  <strong>Result:</strong> {cs.result}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contextual Links to Services & Free Estimate CTA */}
                    <div className="pt-6 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-navy-50/60 p-5 rounded-2xl">
                      <div className="flex flex-col gap-1 w-full sm:w-auto">
                        <span className="text-xs font-semibold text-navy-500">
                          Need Professional Help With This?
                        </span>
                        <div className="flex flex-wrap gap-3">
                          <Link
                            to={`/${guide.relatedServiceSlug}`}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-electric-600 hover:text-electric-800 transition-colors"
                          >
                            <span>{guide.relatedServiceTitle}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          {guide.secondaryServiceSlug && guide.secondaryServiceTitle && (
                            <Link
                              to={`/${guide.secondaryServiceSlug}`}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-800 transition-colors"
                            >
                              <span>{guide.secondaryServiceTitle}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </div>
                      </div>

                      <a
                        href={BUSINESS.phoneLink}
                        className="btn-primary text-xs sm:text-sm px-5 py-2.5 w-full sm:w-auto text-center shrink-0"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner
        title="Have Questions About an Electrical Issue at Your Property?"
        description={`Call Rodney at ${BUSINESS.phone} for honest advice, accurate diagnostic testing, and a free project estimate across St. Charles Parish.`}
      />
    </>
  );
}
