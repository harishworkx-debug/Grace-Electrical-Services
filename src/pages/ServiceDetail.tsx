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
  Zap,
  Lightbulb,
  Home as HomeIcon,
  Building2,
  MapPin,
} from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';

const iconMap: Record<string, React.ReactNode> = {
  Cable: <Cable className="w-5 h-5 text-navy-900" />,
  Wrench: <Wrench className="w-5 h-5 text-navy-900" />,
  Plug: <Plug className="w-5 h-5 text-navy-900" />,
  ToggleRight: <ToggleRight className="w-5 h-5 text-navy-900" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-navy-900" />,
  Zap: <Zap className="w-5 h-5 text-navy-900" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-navy-900" />,
  Home: <HomeIcon className="w-5 h-5 text-navy-900" />,
  Building2: <Building2 className="w-5 h-5 text-navy-900" />,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/404" replace />;

  useSEO({
    title: `${service.title} in Hahnville, LA | Grace Electrical Services`,
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
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/85 to-navy-800/80" />
        </div>
        <div className="container-page relative py-16 md:py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg">
                {iconMap[service.icon]}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-medium">
                <MapPin className="w-4 h-4 text-amber-400" />
                Primary Service Area: {BUSINESS.city}, LA
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title} in {BUSINESS.city}, LA
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-6">
              {service.description}
            </p>
            <a href={BUSINESS.phoneLink} className="btn-primary text-lg px-8 py-4">
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <Breadcrumbs
        crumbs={[
          { label: 'Services', to: '/services' },
          { label: `${service.shortTitle} (${BUSINESS.city}, LA)` },
        ]}
      />

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  About This Service
                </h2>
                <p className="text-navy-700 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Situations */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  When You Might Need This Service
                </h2>
                <ul className="space-y-3">
                  {service.situations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-electric-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-electric-700" />
                      </span>
                      <span className="text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it involves */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  What This Service May Involve
                </h2>
                <div className="bg-navy-50 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {service.whatItInvolves.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-600 shrink-0" />
                        <span className="text-navy-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  Benefits &amp; Safety Considerations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl border border-navy-100 bg-white"
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-amber-600" />
                      </span>
                      <span className="text-navy-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inline callout */}
              <div className="bg-electric-50 border border-electric-200 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-electric-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-navy-800 font-medium">
                    Have questions about this service?
                  </p>
                  <p className="text-navy-600 text-sm mt-1">
                    Call us at{' '}
                    <a
                      href={BUSINESS.phoneLink}
                      className="text-electric-700 font-semibold hover:underline"
                    >
                      {BUSINESS.phone}
                    </a>{' '}
                    to discuss whether this service is right for your project.
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion items={service.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Call to action */}
              <div className="bg-navy-900 rounded-2xl p-6 text-center sticky top-24">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-navy-300 text-sm mb-4">
                  Call us to discuss your {service.shortTitle.toLowerCase()} project.
                </p>
                <a
                  href={BUSINESS.phoneLink}
                  className="btn-primary w-full"
                >
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS.phone}
                </a>
              </div>

              {/* Related services */}
              <div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">
                  Related Services
                </h3>
                <div className="space-y-3">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      className="flex items-center justify-between p-4 rounded-xl border border-navy-100 bg-white hover:border-electric-300 hover:shadow-md transition-all group"
                    >
                      <span className="text-sm font-medium text-navy-700 group-hover:text-electric-600">
                        {s.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-electric-600 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-navy-50 rounded-2xl p-5 border border-navy-100">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-electric-600" />
                  <h3 className="font-display text-base font-bold text-navy-900">
                    Service Areas Covered
                  </h3>
                </div>
                <p className="text-navy-600 text-xs mb-3">
                  Based in {BUSINESS.city}, LA and proudly serving nearby communities:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICE_AREAS.slice(0, 6).map((a) => (
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
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-electric-600 hover:underline"
                >
                  View all locations &rarr;
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Questions About ${service.title}?`}
        description={`Call ${BUSINESS.phone} to discuss your project. We are happy to answer your questions and help you plan the right approach.`}
      />
    </>
  );
}
