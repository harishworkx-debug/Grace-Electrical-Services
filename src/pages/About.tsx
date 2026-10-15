import { Phone, ArrowRight, Zap, Shield, MessageCircle } from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import { Link } from 'react-router-dom';

export default function About() {
  useSEO({
    title: 'About Grace Electrical Services | Hahnville, LA Electrician',
    description:
      'Learn about Grace Electrical Services, an electrical services business based in Hahnville, Louisiana offering wiring installation, repairs, and more for residential and commercial properties.',
    canonicalPath: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.city,
        addressRegion: 'LA',
        postalCode: BUSINESS.zip,
        addressCountry: 'US',
      },
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Electrician installing wiring in a new building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/85 to-navy-800/80" />
        </div>
        <div className="container-page relative py-16 md:py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg">
              <Zap className="w-7 h-7 text-navy-900" fill="currentColor" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              About Grace Electrical Services
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed">
              An electrical services business based in Hahnville, Louisiana,
              focused on electrical wiring installation and related services for
              residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'About' }]} />

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-navy-900">
                Our Story
              </h2>
              <p className="text-navy-700 text-lg leading-relaxed">
                Grace Electrical Services is an electrical services business serving
                Hahnville, Louisiana and surrounding communities in St. Charles
                Parish. We focus on electrical wiring installation and offer a range
                of additional electrical services for both residential and
                commercial properties.
              </p>
              <p className="text-navy-700 text-lg leading-relaxed">
                Whether you are building a new home, renovating an existing space,
                dealing with an electrical problem, or planning a panel upgrade, we
                are available to discuss your project. We believe in clear
                communication and understanding your needs before starting any work.
              </p>
              <p className="text-navy-700 text-lg leading-relaxed">
                Call us at {BUSINESS.phone} to discuss your electrical project and
                find out how we can help.
              </p>
              <a href={BUSINESS.phoneLink} className="btn-secondary">
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phone}
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-full min-h-[400px]">
              <img
                src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=900&dpr=1"
                alt="Professional electrician working on a circuit breaker panel"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How We Work
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Our approach is straightforward: listen first, understand the project,
              and communicate clearly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-electric-600 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                Listen First
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We start every project by listening to what you need. Your
                description of the problem or project is the foundation of our work.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-navy-900" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                Safety Focused
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Electrical work demands attention to safety. We approach every
                project with care and attention to detail.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-electric-600 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                Clear Communication
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We keep you informed throughout the process, explaining what we are
                doing and why, in language you can understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              We offer electrical services across these main categories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES.slice(0, 10).map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="p-4 rounded-xl border border-navy-100 bg-white hover:border-electric-300 hover:shadow-md transition-all group text-center"
              >
                <span className="text-sm font-medium text-navy-700 group-hover:text-electric-600">
                  {s.shortTitle}
                </span>
                <ArrowRight className="w-4 h-4 text-navy-300 group-hover:text-electric-500 mx-auto mt-2 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Work With Us?"
        description={`Call ${BUSINESS.phone} to discuss your electrical project.`}
      />
    </>
  );
}
