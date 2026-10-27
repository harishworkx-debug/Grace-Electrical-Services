import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Phone,
  Check,
  AlertTriangle,
  ArrowRight,
  Cable,
  Wrench,
  Plug,
  ToggleRight,
  ShieldAlert,
  ShieldCheck,
  Zap,
  Lightbulb,
  Home as HomeIcon,
  Building2,
  MapPin,
  Star,
  Clock,
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';

const iconMap: Record<string, React.ReactNode> = {
  Cable: <Cable className="w-6 h-6 text-navy-900" />,
  Wrench: <Wrench className="w-6 h-6 text-navy-900" />,
  Plug: <Plug className="w-6 h-6 text-navy-900" />,
  ToggleRight: <ToggleRight className="w-6 h-6 text-navy-900" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-navy-900" />,
  Zap: <Zap className="w-6 h-6 text-navy-900" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-navy-900" />,
  Home: <HomeIcon className="w-6 h-6 text-navy-900" />,
  Building2: <Building2 className="w-6 h-6 text-navy-900" />,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/404" replace />;

  const pageTitle =
    service.seoTitle || `${service.title} in Hahnville, LA | Grace Electrical Services`;
  const pageH1 = service.h1Heading || `${service.title} in ${BUSINESS.city}, LA`;

  useSEO({
    title: pageTitle,
    description: service.description,
    canonicalPath: `/${service.slug}`,
    ogImage: service.heroImage,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: {
        '@type': 'Electrician',
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
        url: BASE_URL,
        sameAs: [BUSINESS.mapsListing],
        hasMap: BUSINESS.mapsListing,
        priceRange: '$$',
        areaServed: {
          '@type': 'City',
          name: BUSINESS.city,
          addressRegion: 'LA',
        },
      },
      areaServed: {
        '@type': 'City',
        name: BUSINESS.city,
        addressRegion: 'LA',
      },
    },
  });

  const relatedServices = SERVICES.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-900/80" />
        </div>

        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-md">
                {iconMap[service.icon]}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-medium">
                <MapPin className="w-4 h-4 text-amber-400" />
                Primary Area: {BUSINESS.city}, LA &amp; St. Charles Parish
              </div>
              <div className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Licensed &amp; Code-Compliant Work
              </div>
            </div>

            {/* H1 Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              {pageH1}
            </h1>

            {/* Intent-focused Introduction */}
            <p className="text-base sm:text-lg text-navy-200 leading-relaxed mb-8 max-w-2xl">
              {service.description}
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
                Request an Estimate
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
              <span className="text-navy-300">St. Charles Parish Owner-Operator</span>
              <span>•</span>
              <span className="text-navy-300">Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs
        crumbs={[
          { label: 'Services', to: '/services' },
          { label: `${service.shortTitle} (${BUSINESS.city}, LA)` },
        ]}
      />

      {/* Distinction Note Banner (if applicable for clear intent delineation) */}
      {service.distinctionNote && (
        <section className="bg-slate-50 border-b border-navy-100">
          <div className="container-page py-6">
            <div
              className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                service.distinctionNote.alertType === 'warning'
                  ? 'bg-amber-500/10 border-amber-300 text-amber-950'
                  : 'bg-electric-50 border-electric-200 text-navy-900'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center mt-0.5 ${
                    service.distinctionNote.alertType === 'warning'
                      ? 'bg-amber-500 text-navy-950 shadow-sm'
                      : 'bg-electric-600 text-white shadow-sm'
                  }`}
                >
                  {service.distinctionNote.alertType === 'warning' ? (
                    <AlertTriangle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-base sm:text-lg mb-1.5 text-navy-950">
                    {service.distinctionNote.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-navy-800">
                    {service.distinctionNote.text}
                  </p>
                  {service.distinctionNote.linkTo && service.distinctionNote.linkText && (
                    <div className="mt-3">
                      <Link
                        to={service.distinctionNote.linkTo}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-electric-700 hover:text-electric-900 underline underline-offset-4"
                      >
                        <span>{service.distinctionNote.linkText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Layout */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Primary Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* 1. In-Depth Service Overview */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-50 text-electric-700 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hahnville Electrical Expertise
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4 tracking-tight">
                  Professional {service.title} in {BUSINESS.city}, LA
                </h2>
                <p className="text-navy-700 text-base sm:text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* 2. Problems & Projects Addressed */}
              {service.problemsAddressed && service.problemsAddressed.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2 tracking-tight">
                    Projects &amp; Problems We Address
                  </h2>
                  <p className="text-navy-600 text-sm sm:text-base mb-6">
                    Whether diagnosing an unexpected malfunction or wiring a new structural addition, we provide tailored electrical solutions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.problemsAddressed.map((prob, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-navy-100 bg-slate-50/70 hover:bg-white hover:border-electric-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="w-6 h-6 rounded-lg bg-electric-100 text-electric-700 flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-electric-600 group-hover:text-white transition-colors">
                            ✓
                          </span>
                          <h3 className="font-display font-bold text-navy-900 text-base group-hover:text-electric-700 transition-colors">
                            {prob.title}
                          </h3>
                        </div>
                        <p className="text-navy-600 text-sm leading-relaxed pl-8">
                          {prob.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Detailed Step-by-Step Service Process */}
              {service.serviceProcess && service.serviceProcess.length > 0 && (
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    Transparent Execution
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2 tracking-tight">
                    Our Step-by-Step Service Process
                  </h2>
                  <p className="text-navy-600 text-sm sm:text-base mb-6">
                    From your initial phone call to the final safety testing, here is exactly how Rodney delivers dependable results:
                  </p>

                  <div className="space-y-4">
                    {service.serviceProcess.map((step) => (
                      <div
                        key={step.step}
                        className="p-5 rounded-2xl border border-navy-100 bg-white shadow-sm flex flex-col sm:flex-row items-start gap-4 hover:border-amber-300 transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-navy-900 text-amber-400 font-display font-bold flex items-center justify-center shrink-0 shadow-sm text-base">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-navy-900 text-base sm:text-lg mb-1">
                            {step.title}
                          </h3>
                          <p className="text-navy-600 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Safety Considerations & Code Compliance */}
              {service.safetyAndCode && service.safetyAndCode.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 mb-2 tracking-tight">
                    Safety Standards &amp; Parish Code Compliance
                  </h2>
                  <p className="text-navy-600 text-sm sm:text-base mb-6">
                    Electrical systems directly impact your property’s fire safety and occupant protection. We build to the highest National Electrical Code (NEC) standards:
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {service.safetyAndCode.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-navy-100 bg-navy-50/50 flex items-start gap-3.5"
                      >
                        <ShieldCheck className="w-5 h-5 text-electric-600 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-display font-bold text-navy-900 text-base mb-1">
                            {item.title}
                          </h3>
                          <p className="text-navy-700 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Genuine Completed Work / Customer Feedback Spotlight */}
              {service.realWorkExample && (
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
                      Client: <strong className="text-white">{service.realWorkExample.client}</strong> ({service.realWorkExample.location})
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-electric-300 block mb-1">
                      Project Scope:
                    </span>
                    <p className="text-sm font-medium text-white">
                      {service.realWorkExample.scope}
                    </p>
                  </div>

                  <blockquote className="italic text-navy-100 text-sm sm:text-base leading-relaxed border-l-2 border-amber-400 pl-4 my-3">
                    &ldquo;{service.realWorkExample.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-navy-700/60 text-xs">
                    <span className="text-navy-400">
                      Review verified on Google Business Profile
                    </span>
                    <Link
                      to="/reviews"
                      className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1"
                    >
                      Read All 6 Verified Reviews &rarr;
                    </Link>
                  </div>
                </div>
              )}

              {/* 6. Situations & What It Involves */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* When You Might Need This */}
                <div className="p-6 rounded-2xl border border-navy-100 bg-slate-50/70">
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-electric-600" />
                    When You Might Need This
                  </h3>
                  <ul className="space-y-3">
                    {service.situations.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-navy-700">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-electric-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What This Service Involves */}
                <div className="p-6 rounded-2xl border border-navy-100 bg-slate-50/70">
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-amber-600" />
                    What The Work Involves
                  </h3>
                  <ul className="space-y-3">
                    {service.whatItInvolves.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-navy-700">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 7. Benefits */}
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                  Key Benefits for Your Property
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.benefits.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl border border-navy-100 bg-white shadow-xs"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-amber-700" />
                      </span>
                      <span className="text-navy-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8. Frequently Asked Questions with Contextual Links */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                  <Link
                    to="/faq"
                    className="text-xs sm:text-sm font-bold text-electric-600 hover:underline"
                  >
                    View All FAQs &rarr;
                  </Link>
                </div>
                <FAQAccordion items={service.faqs} />
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
                  Request an Estimate
                </h3>
                <p className="text-navy-300 text-xs sm:text-sm mb-5 leading-relaxed">
                  Call Rodney directly to discuss your {service.shortTitle.toLowerCase()} project in {BUSINESS.city} or nearby parish towns.
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
                    Send Project Details
                  </Link>
                </div>

                {/* Operating hours */}
                <div className="mt-5 pt-4 border-t border-navy-800 text-left text-xs text-navy-300 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-navy-400">Monday &ndash; Saturday:</span>
                    <span className="text-white font-medium">8:00 AM &ndash; 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-navy-400">Emergency Response:</span>
                    <span className="text-amber-400 font-medium">Call 24/7</span>
                  </div>
                </div>

                {/* Real Google Review Trust Badge */}
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
                    &ldquo;Smart, step-by-step approach. Rodney’s honesty and fair pricing stood out.&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-navy-400 mt-2 pt-2 border-t border-navy-700/60">
                    <span className="text-white font-semibold">Abu &bull; Hahnville, LA</span>
                    <Link to="/reviews" className="text-electric-400 hover:underline">
                      6 Reviews &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contextual Links to Related Services */}
              <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
                <h3 className="font-display text-base font-bold text-navy-900 mb-3 flex items-center justify-between">
                  <span>Related Services</span>
                  <Link to="/services" className="text-xs text-electric-600 font-semibold hover:underline">
                    All Services
                  </Link>
                </h3>
                <div className="space-y-2.5">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/60 hover:border-electric-300 hover:bg-white hover:shadow-xs transition-all group"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-navy-800 group-hover:text-electric-700">
                        {s.shortTitle}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-navy-400 group-hover:text-electric-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contextual Service Area Link */}
              <div className="bg-navy-50/70 rounded-2xl p-6 border border-navy-100">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-electric-600" />
                  <h3 className="font-display text-sm font-bold text-navy-900">
                    Local Service Coverage
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
                  <Link
                    to="/electrician-hahnville-la"
                    className="text-xs px-2.5 py-1 rounded-md bg-electric-100 text-electric-800 font-bold border border-electric-200 hover:bg-electric-200 transition-colors"
                  >
                    Hahnville (HQ)
                  </Link>
                  {SERVICE_AREAS.filter((a) => a.slug !== 'electrician-hahnville-la')
                    .slice(0, 5)
                    .map((a) => (
                      <Link
                        key={a.slug}
                        to={`/${a.slug}`}
                        className="text-xs px-2.5 py-1 rounded-md bg-white border border-navy-200 text-navy-700 hover:border-electric-400 hover:text-electric-600 transition-colors"
                      >
                        {a.city}
                      </Link>
                    ))}
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
        title={`Ready to Discuss Your ${service.shortTitle} Project in ${BUSINESS.city}?`}
        description={`Call Rodney at ${BUSINESS.phone} for honest advice, accurate load calculations, and a clear estimate. No corporate middlemen or franchise markups.`}
      />
    </>
  );
}
