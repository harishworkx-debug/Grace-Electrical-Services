import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Check,
  MapPin,
  Star,
  ShieldCheck,
  Clock,
  Sparkles,
  Zap,
  Building2,
  Home as HomeIcon,
  Calendar,
  FileText,
  AlertTriangle,
  Compass,
} from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICE_AREAS, SERVICES } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';

export default function ServiceAreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/404" replace />;

  const isHahnvilleHQ = area.slug === 'electrician-hahnville-la';

  const pageTitle =
    area.seoTitle ||
    (isHahnvilleHQ
      ? 'Electrician in Hahnville, LA | Grace Electrical Services'
      : `Electrician in ${area.city}, ${area.state} | Grace Electrical Services`);

  const metaDescription =
    area.metaDescription ||
    (isHahnvilleHQ
      ? 'Looking for a local electrician in Hahnville, LA? Explore local electrical repair, wiring, outlet, lighting and panel services from Grace Electrical Services.'
      : `Looking for a licensed electrician in ${area.city}, ${area.state}? Grace Electrical Services provides professional wiring, panel upgrades, and repairs across St. Charles Parish.`);

  const h1Heading =
    area.h1Heading ||
    (isHahnvilleHQ
      ? 'Electrician Serving Hahnville, Louisiana'
      : `Licensed Electrician in ${area.city}, ${area.state}`);

  useSEO({
    title: pageTitle,
    description: metaDescription,
    canonicalPath: `/${area.slug}`,
    ogImage: area.heroImage,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: `${BASE_URL}/${area.slug}`,
      sameAs: [BUSINESS.mapsListing],
      hasMap: BUSINESS.mapsListing,
      image: area.heroImage,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: area.city,
        addressRegion: area.state,
        postalCode: area.zip,
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: area.city,
        addressRegion: area.state,
        postalCode: area.zip,
      },
    },
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={area.heroImage}
            alt={`Licensed electrician working on electrical systems in ${area.city}, ${area.state}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/80" />
        </div>

        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-navy-900" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-semibold">
                <Compass className="w-4 h-4 text-amber-400" />
                {area.bank} of St. Charles Parish
              </div>
              <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {area.travelTimeFromHQ}
              </div>
            </div>

            {/* H1 Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight leading-tight">
              {h1Heading}
            </h1>

            {/* Local Headline */}
            <p className="text-amber-300 font-display font-semibold text-base sm:text-lg mb-4">
              {area.headline}
            </p>

            {/* Specific Local Description */}
            <p className="text-base sm:text-lg text-navy-200 leading-relaxed mb-8 max-w-2xl">
              {area.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href={BUSINESS.phoneLink} className="btn-primary text-base sm:text-lg px-7 py-3.5">
                <Phone className="w-5 h-5" />
                Call Rodney: {BUSINESS.phone}
              </a>
              <Link
                to="/contact"
                className="btn-secondary text-base px-6 py-3.5 border-white/30 text-white hover:bg-white hover:text-navy-900"
              >
                <Calendar className="w-4 h-4" />
                Request Local Estimate
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-5 border-t border-white/10 text-xs text-navy-200">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                <span className="text-white font-bold ml-1">5.0 Star Rating</span>
              </div>
              <span>•</span>
              <span className="text-navy-300">Direct Owner-Electrician</span>
              <span>•</span>
              <span className="text-navy-300">Zero Travel Surcharges</span>
              <span>•</span>
              <span className="text-navy-300">Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs
        crumbs={[
          { label: 'Service Areas', to: '/service-areas' },
          { label: `${area.city}, ${area.state}` },
        ]}
      />

      {/* Main Content Layout */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Primary Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* 1. Community Profile & Electrical Landscape */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-50 text-electric-700 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Local Community Profile
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4 tracking-tight">
                  Electrical Services for {area.city}, Louisiana
                </h2>
                <p className="text-navy-700 text-base sm:text-lg leading-relaxed mb-6">
                  {area.communityProfile.overview}
                </p>

                {/* 2-Card Local Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-navy-100 bg-slate-50/70">
                    <div className="flex items-center gap-2 mb-2 text-navy-900 font-display font-bold text-base">
                      <HomeIcon className="w-4 h-4 text-electric-600" />
                      Housing &amp; Properties
                    </div>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {area.communityProfile.typicalHousingAndProperties}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-navy-100 bg-slate-50/70">
                    <div className="flex items-center gap-2 mb-2 text-navy-900 font-display font-bold text-base">
                      <Zap className="w-4 h-4 text-amber-600" />
                      Primary Electrical Needs
                    </div>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {area.communityProfile.primaryElectricalChallenges}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Priority Services in this Area (Links to actual Service Pages) */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2 tracking-tight">
                  Most Requested Electrical Services in {area.city}
                </h2>
                <p className="text-navy-600 text-sm sm:text-base mb-6">
                  Tailored to {area.city}&rsquo;s specific residential and commercial power requirements:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.priorityServices.map((svc) => (
                    <div
                      key={svc.slug}
                      className="p-5 rounded-2xl border border-navy-100 bg-white hover:border-electric-300 hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-lg bg-electric-100 text-electric-700 flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-electric-600 group-hover:text-white transition-colors">
                            ✓
                          </span>
                          <h3 className="font-display font-bold text-navy-900 text-base group-hover:text-electric-700 transition-colors">
                            {svc.title}
                          </h3>
                        </div>
                        <p className="text-navy-600 text-sm leading-relaxed mb-4">
                          {svc.whyNeeded}
                        </p>
                      </div>
                      <Link
                        to={`/${svc.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-600 group-hover:text-electric-800 transition-colors pt-3 border-t border-slate-100"
                      >
                        <span>Explore {svc.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Genuine Completed Work / Local Proof Snippet */}
              {area.localProofSnippet && (
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 text-white shadow-lg border border-navy-700">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-navy-700/80">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                        Verified Local Project Feedback
                      </span>
                    </div>
                    <span className="text-xs text-navy-300">
                      Client: <strong className="text-white">{area.localProofSnippet.reviewer}</strong>
                    </span>
                  </div>

                  <blockquote className="italic text-navy-100 text-sm sm:text-base leading-relaxed border-l-2 border-amber-400 pl-4 my-3">
                    &ldquo;{area.localProofSnippet.text}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-navy-700/60 text-xs">
                    <span className="text-navy-400">
                      {area.localProofSnippet.context}
                    </span>
                    <Link
                      to="/reviews"
                      className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1"
                    >
                      See All 6 Google Reviews &rarr;
                    </Link>
                  </div>
                </div>
              )}

              {/* 4. Common Electrical Projects in this Town */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2 tracking-tight">
                  Common Electrical Projects We Handle in {area.city}
                </h2>
                <p className="text-navy-600 text-sm sm:text-base mb-6">
                  Here are typical examples of work Rodney performs for property owners in {area.city}:
                </p>

                <div className="space-y-4">
                  {area.commonProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-navy-100 bg-slate-50/60 flex items-start gap-4 hover:bg-white hover:border-amber-300 transition-all shadow-xs"
                    >
                      <div className="w-8 h-8 rounded-xl bg-navy-900 text-amber-400 font-bold flex items-center justify-center shrink-0 text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-navy-900 text-base mb-1">
                          {proj.title}
                        </h3>
                        <p className="text-navy-600 text-sm leading-relaxed">
                          {proj.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Local Code, Entergy & Storm Considerations */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2 tracking-tight">
                  St. Charles Parish Codes &amp; Entergy Coordination
                </h2>
                <p className="text-navy-600 text-sm sm:text-base mb-6">
                  Electrical installations in {area.city} require strict adherence to municipal safety standards and utility requirements:
                </p>

                <div className="grid grid-cols-1 gap-3.5">
                  <div className="p-4 rounded-xl border border-navy-100 bg-white flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-electric-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-bold text-navy-900 text-sm">
                        Permit Authority &amp; Code Compliance
                      </h3>
                      <p className="text-navy-600 text-xs sm:text-sm mt-0.5">
                        {area.localCodeAndUtility.permitOffice}. All work strictly follows the National Electrical Code (NEC).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-navy-100 bg-white flex items-start gap-3">
                    <Zap className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-bold text-navy-900 text-sm">
                        Electric Utility Coordination
                      </h3>
                      <p className="text-navy-600 text-xs sm:text-sm mt-0.5">
                        {area.localCodeAndUtility.utilityProvider}. We coordinate service drop shutoffs, meter releases, and power re-connections directly.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-navy-100 bg-white flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-bold text-navy-900 text-sm">
                        South Louisiana Weather &amp; Storm Preparedness
                      </h3>
                      <p className="text-navy-600 text-xs sm:text-sm mt-0.5">
                        {area.localCodeAndUtility.weatherConsiderations}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Frequently Asked Questions for this Town */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    {area.city} Electrical Service FAQs
                  </h2>
                  <Link
                    to="/faq"
                    className="text-xs sm:text-sm font-bold text-electric-600 hover:underline"
                  >
                    View All FAQs &rarr;
                  </Link>
                </div>
                <FAQAccordion items={area.faqs} />
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Primary Call / Estimate Action Card */}
              <div className="bg-navy-900 rounded-3xl p-6 sm:p-7 text-center sticky top-24 shadow-xl border border-navy-800">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-navy-950 text-xs font-bold tracking-wide uppercase mb-3">
                  Direct Owner-Operator
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Serving {area.city}, LA
                </h3>
                <p className="text-navy-300 text-xs sm:text-sm mb-5 leading-relaxed">
                  Call Rodney directly to discuss your electrical project in {area.city}. Zero corporate dispatch fees.
                </p>

                <div className="space-y-3">
                  <a
                    href={BUSINESS.phoneLink}
                    className="btn-primary w-full text-base py-3.5 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call {BUSINESS.phone}
                  </a>

                  <Link
                    to="/contact"
                    className="btn-secondary w-full text-sm py-3 border-white/20 text-white hover:bg-white hover:text-navy-900 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Request an Estimate
                  </Link>
                </div>

                {/* Response & Operating hours */}
                <div className="mt-5 pt-4 border-t border-navy-800 text-left text-xs text-navy-300 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-navy-400">Response to {area.city}:</span>
                    <span className="text-amber-400 font-bold">{area.travelTimeFromHQ.split('(')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-navy-400">Hours:</span>
                    <span className="text-white font-medium">Mon &ndash; Sat 8am &ndash; 6pm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-navy-400">Travel Surcharge:</span>
                    <span className="text-emerald-400 font-bold">$0 (Local Parish)</span>
                  </div>
                </div>

                {/* Google Reviews Trust Badge */}
                <div className="mt-5 p-3.5 rounded-2xl bg-navy-800/80 border border-navy-700/80 text-left">
                  <div className="flex items-center justify-between gap-1 text-amber-400 mb-1.5">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-white text-xs font-bold ml-1.5">5.0 / 5.0</span>
                    </div>
                    <span className="text-[10px] text-amber-300 bg-amber-400/20 px-1.5 py-0.5 rounded font-bold">
                      Verified
                    </span>
                  </div>
                  <p className="text-[12px] text-navy-200 leading-snug italic">
                    &ldquo;Prompt, professional, and thorough. Rodney’s honesty and fair pricing stood out.&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-navy-400 mt-2 pt-2 border-t border-navy-700/60">
                    <span className="text-white font-semibold">Abu &bull; Hahnville, LA</span>
                    <Link to="/reviews" className="text-electric-400 hover:underline">
                      6 Reviews &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* All Electrical Services Directory */}
              <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
                <h3 className="font-display text-base font-bold text-navy-900 mb-3 flex items-center justify-between">
                  <span>Available Electrical Services</span>
                  <Link to="/services" className="text-xs text-electric-600 font-semibold hover:underline">
                    View All
                  </Link>
                </h3>
                <div className="space-y-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:border-electric-300 hover:bg-white transition-all group"
                    >
                      <span className="text-xs font-semibold text-navy-800 group-hover:text-electric-700">
                        {s.shortTitle}
                      </span>
                      <ArrowRight className="w-3 h-3 text-navy-400 group-hover:text-electric-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Neighboring Communities in St. Charles Parish */}
              <div className="bg-navy-50/70 rounded-2xl p-6 border border-navy-100">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-electric-600" />
                  <h3 className="font-display text-sm font-bold text-navy-900">
                    Nearby Communities Served
                  </h3>
                </div>
                <p className="text-navy-600 text-xs mb-3 leading-relaxed">
                  Headquartered in{' '}
                  <Link
                    to="/electrician-hahnville-la"
                    className="font-bold text-electric-700 hover:underline"
                  >
                    Hahnville, LA
                  </Link>
                  , serving homes and businesses across St. Charles Parish:
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {area.neighboringTowns.map((t) => (
                    <Link
                      key={t.slug}
                      to={`/${t.slug}`}
                      className="text-xs px-2.5 py-1 rounded-md bg-white border border-navy-200 text-navy-700 hover:border-electric-400 hover:text-electric-600 transition-colors font-medium"
                    >
                      {t.city}
                    </Link>
                  ))}
                  {area.slug !== 'electrician-hahnville-la' && (
                    <Link
                      to="/electrician-hahnville-la"
                      className="text-xs px-2.5 py-1 rounded-md bg-electric-100 text-electric-800 font-bold border border-electric-200 hover:bg-electric-200 transition-colors"
                    >
                      Hahnville (HQ)
                    </Link>
                  )}
                </div>

                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-1 text-xs font-bold text-electric-600 hover:underline"
                >
                  View full service area map &amp; details &rarr;
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner
        title={`Need a Licensed Electrician in ${area.city}, LA?`}
        description={`Call Rodney at ${BUSINESS.phone} for prompt local service, fair pricing, and master-level electrical workmanship. No franchise middlemen or travel markups.`}
      />
    </>
  );
}
