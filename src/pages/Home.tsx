import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Zap,
  Wrench,
  Plug,
  ToggleRight,
  ShieldAlert,
  Lightbulb,
  Cable,
  Home as HomeIcon,
  Building2,
  PhoneCall,
  ClipboardList,
  Sparkles,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES, SERVICE_AREAS, GENERAL_FAQS } from '@/data/content';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  url: BASE_URL,
  areaServed: {
    '@type': 'City',
    name: BUSINESS.city,
    addressRegion: 'LA',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.city,
    addressRegion: 'LA',
    postalCode: BUSINESS.zip,
    addressCountry: 'US',
  },
};

export default function Home() {
  useSEO({
    title: 'Grace Electrical Services | Electrical Wiring & Installation in Hahnville, LA',
    description:
      'Electrical wiring, installation, and repair services in Hahnville, Louisiana. Call Grace Electrical Services at 504-559-5351 to discuss your electrical project.',
    canonicalPath: '/',
    structuredData,
  });

  const featuredServices = SERVICES.slice(0, 6);
  const featuredAreas = SERVICE_AREAS.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Electrician installing electrical wiring wearing safety gear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-800/70" />
        </div>
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium border border-amber-500/30 mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              Hahnville, Louisiana
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Electrical Wiring &amp; Installation Services in Hahnville, Louisiana
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8 max-w-xl">
              Looking for electrical wiring, installation, or repair services?
              Contact Grace Electrical Services to discuss your electrical project
              and find out how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS.phoneLink} className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-50 text-electric-700 text-sm font-medium mb-4">
              About Grace Electrical Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Your Local Electrical Service Provider in Hahnville
            </h2>
            <p className="text-lg text-navy-600 leading-relaxed">
              Grace Electrical Services is an electrical services business based in
              Hahnville, Louisiana. We focus on electrical wiring installation and a
              range of other electrical services for residential and commercial
              properties. From new wiring and panel upgrades to repairs and lighting
              installation, we are available to discuss your project and help
              determine the right approach for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-50 text-electric-700 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Featured Electrical Services
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Explore the electrical services we offer in Hahnville and nearby
              communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                icon={iconMap[service.icon]}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Contact */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-sm font-medium mb-4">
              Why Contact Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Why Contact Grace Electrical Services?
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              We focus on clear communication and understanding your electrical
              needs before starting any work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-navy-50 hover:bg-navy-100 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-electric-600 flex items-center justify-center mx-auto mb-5">
                <PhoneCall className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                Clear Communication
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We start by listening. Call us, describe what you need, and we will
                discuss your project in plain language.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-navy-50 hover:bg-navy-100 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mx-auto mb-5">
                <ClipboardList className="w-7 h-7 text-navy-900" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                Understanding Your Needs
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We take the time to understand your electrical requirements, your
                property, and the scope of your project.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-navy-50 hover:bg-navy-100 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-electric-600 flex items-center justify-center mx-auto mb-5">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                Direct Contact
              </h3>
              <p className="text-navy-600 leading-relaxed">
                You speak directly with us. No call centers, no runaround. Just call
                {BUSINESS.phone} and discuss your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential & Commercial */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/residential-electrical-services"
              className="group relative rounded-2xl overflow-hidden h-72 flex items-end"
            >
              <img
                src="https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Residential electrical wiring installation"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/50 to-transparent" />
              <div className="relative p-8">
                <HomeIcon className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Residential Electrical Work
                </h3>
                <p className="text-navy-200 mb-3">
                  Wiring, repairs, lighting, and panel services for homes in
                  Hahnville and nearby areas.
                </p>
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold group-hover:gap-2 transition-all">
                  Residential Electrical Work <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link
              to="/commercial-electrical-services"
              className="group relative rounded-2xl overflow-hidden h-72 flex items-end"
            >
              <img
                src="https://images.pexels.com/photos/8961695/pexels-photo-8961695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Commercial electrical cable installation"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/50 to-transparent" />
              <div className="relative p-8">
                <Building2 className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Commercial Electrical Work
                </h3>
                <p className="text-navy-200 mb-3">
                  Electrical services for commercial properties, including wiring,
                  panels, and lighting.
                </p>
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold group-hover:gap-2 transition-all">
                  Commercial Electrical Work <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-50 text-electric-700 text-sm font-medium mb-4">
              Service Areas
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Grace Electrical Services is based in Hahnville, Louisiana and serves
              surrounding communities in St. Charles Parish.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAreas.map((area) => (
              <LocationCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/service-areas" className="btn-outline">
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Simple Steps to Get Started
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Getting started is as easy as making a phone call.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-2xl bg-white shadow-md">
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-electric-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3 mt-2">
                Call to Discuss Your Needs
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Call {BUSINESS.phone} and tell us about your electrical project or
                the issue you are experiencing.
              </p>
            </div>
            <div className="relative p-8 rounded-2xl bg-white shadow-md">
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-navy-900 font-display font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3 mt-2">
                Explain the Project
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Share the details of your electrical needs and we will discuss the
                next steps and arrange the work.
              </p>
            </div>
            <div className="relative p-8 rounded-2xl bg-white shadow-md">
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-electric-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3 mt-2">
                Discuss Service Details
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We will discuss the appropriate service and project details so
                everyone is on the same page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-50 text-electric-700 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Common questions about our electrical services and how to contact us.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={GENERAL_FAQS.slice(0, 4)} />
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="btn-outline">
              View All FAQs
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
