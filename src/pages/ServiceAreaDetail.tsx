import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, ArrowRight, Check, MapPin } from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICE_AREAS, SERVICES, GENERAL_FAQS } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';

export default function ServiceAreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/404" replace />;

  const locationFaqs = [
    {
      question: `Does Grace Electrical Services serve ${area.city}, ${area.state}?`,
      answer: `Yes, we provide electrical services to homes and businesses in ${area.city}, ${area.state}. ${area.description} Call ${BUSINESS.phone} to confirm we can reach your specific location.`,
    },
    {
      question: `What electrical services are available in ${area.city}?`,
      answer: `We offer the same range of electrical services in ${area.city} as we do throughout our service area, including wiring installation, repairs, outlet and switch installation, panel work, and lighting. Call us to discuss your specific needs.`,
    },
    {
      question: `How do I schedule service in ${area.city}?`,
      answer: `Call us at ${BUSINESS.phone} to discuss your electrical needs and arrange service. We will confirm we can reach your location in ${area.city}.`,
    },
  ];

  useSEO({
    title: `Electrician in ${area.city}, ${area.state} | Grace Electrical Services`,
    description: `Grace Electrical Services provides electrical wiring, repairs, panel work, lighting, and more to homes and businesses in ${area.city}, ${area.state}. Call ${BUSINESS.phone}.`,
    canonicalPath: `/${area.slug}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BASE_URL,
      areaServed: {
        '@type': 'City',
        name: area.city,
        addressRegion: area.state,
      },
    },
  });

  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt={`Electrical wiring installation in ${area.city}, ${area.state}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/85 to-navy-800/80" />
        </div>
        <div className="container-page relative py-16 md:py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg">
              <MapPin className="w-7 h-7 text-navy-900" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Electrician in {area.city}, {area.state}
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-6">
              Grace Electrical Services provides electrical wiring, installation,
              and repair services to homes and businesses in {area.city},{' '}
              {area.state}. Call us to discuss your electrical project.
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
          { label: 'Service Areas', to: '/service-areas' },
          { label: `${area.city}, ${area.state}` },
        ]}
      />

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  Electrical Services in {area.city}
                </h2>
                <p className="text-navy-700 text-lg leading-relaxed">
                  {area.description} Located in {area.nearLandmark}, {area.city} is
                  one of the communities we serve in St. Charles Parish. We offer a
                  range of electrical services for residential and commercial
                  properties in the area.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  Services Available in {area.city}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      className="flex items-center gap-3 p-4 rounded-xl border border-navy-100 bg-white hover:border-electric-300 hover:shadow-md transition-all group"
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-electric-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-electric-700" />
                      </span>
                      <span className="text-sm font-medium text-navy-700 group-hover:text-electric-600">
                        {s.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  Contact Grace Electrical Services in {area.city}
                </h2>
                <p className="text-navy-700 text-lg leading-relaxed mb-4">
                  If you are in {area.city} and need electrical wiring, repairs, or
                  installation services, call us at {BUSINESS.phone}. We will
                  discuss your project and confirm we can reach your location.
                </p>
                <a href={BUSINESS.phoneLink} className="btn-secondary">
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS.phone}
                </a>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  {area.city} Electrical Service FAQs
                </h2>
                <FAQAccordion items={locationFaqs} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-navy-900 rounded-2xl p-6 text-center sticky top-24">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Serving {area.city}, {area.state}
                </h3>
                <p className="text-navy-300 text-sm mb-4">
                  Call us to discuss your electrical needs.
                </p>
                <a href={BUSINESS.phoneLink} className="btn-primary w-full">
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS.phone}
                </a>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">
                  Other Service Areas
                </h3>
                <div className="space-y-2">
                  {SERVICE_AREAS.filter((a) => a.slug !== area.slug)
                    .slice(0, 6)
                    .map((a) => (
                      <Link
                        key={a.slug}
                        to={`/${a.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl border border-navy-100 bg-white hover:border-electric-300 hover:shadow-md transition-all group"
                      >
                        <span className="text-sm font-medium text-navy-700 group-hover:text-electric-600">
                          {a.city}, {a.state}
                        </span>
                        <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-electric-600 transition-colors" />
                      </Link>
                    ))}
                </div>
                <Link
                  to="/service-areas"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 hover:gap-2 transition-all"
                >
                  View All Areas
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Need an Electrician in ${area.city}?`}
        description={`Call ${BUSINESS.phone} to discuss your electrical project. We serve ${area.city}, ${area.state} and surrounding areas.`}
      />
    </>
  );
}
