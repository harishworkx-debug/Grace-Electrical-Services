import { useState } from 'react';
import {
  Cable,
  Wrench,
  Plug,
  ToggleRight,
  ShieldAlert,
  Zap,
  Lightbulb,
  Home as HomeIcon,
  Building2,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES } from '@/data/content';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import Breadcrumbs from '@/components/Breadcrumbs';

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

export default function Services() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'wiring' | 'repairs' | 'fixtures' | 'commercial'>('all');

  useSEO({
    title: 'Electrical Services Hub | Grace Electrical Services | Hahnville, LA',
    description:
      'Browse our complete range of electrical services in Hahnville, LA and St. Charles Parish. Wiring, panel upgrades, repairs, lighting, rewiring, and commercial solutions.',
    canonicalPath: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Grace Electrical Services Catalog',
      description: 'Comprehensive residential and commercial electrical services in Hahnville and St. Charles Parish, Louisiana.',
      provider: {
        '@type': 'Electrician',
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
        url: BASE_URL,
      },
      itemListElement: SERVICES.map((s, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
          url: `${BASE_URL}/${s.slug}`,
        },
        position: index + 1,
      })),
    },
  });

  const filteredServices = SERVICES.filter((s) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'wiring') {
      return s.slug.includes('wiring') || s.slug.includes('panel');
    }
    if (filterCategory === 'repairs') {
      return s.slug.includes('repair') || s.slug.includes('switch') || s.slug.includes('outlet');
    }
    if (filterCategory === 'fixtures') {
      return s.slug.includes('lighting') || s.slug.includes('outlet') || s.slug.includes('switch');
    }
    if (filterCategory === 'commercial') {
      return s.slug.includes('commercial') || s.slug.includes('residential');
    }
    return true;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Grace Electrical Services full service offerings in Hahnville, LA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-900" />
        </div>
        <div className="container-page relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Complete Residential &amp; Commercial Solutions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-up">
            Complete Electrical Services in Hahnville, LA
          </h1>
          <p className="text-navy-200 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            From new construction and home rewiring to breaker panels and troubleshooting, explore our code-compliant electrical solutions in Hahnville and across St. Charles Parish.
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

      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      {/* Main Service Hub Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          {/* Hub Overview Intro */}
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-600 block mb-1">
              Hahnville Service Directory
            </span>
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-3">
              Tailored Electrical Solutions by a Local Electrician
            </h2>
            <p className="text-navy-700 text-base leading-relaxed">
              Every home and business has distinct power demands. Whether you need an urgent repair, a dedicated circuit for a heavy appliance, or a complete panel overhaul, select an individual service below to learn about common situations, what the process involves, and local safety standards.
            </p>
          </div>

          {/* Quick Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-navy-100">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-500 mr-2">Category:</span>
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === 'all'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-navy-700 border border-navy-200 hover:border-navy-400'
              }`}
            >
              All 10 Services
            </button>
            <button
              onClick={() => setFilterCategory('wiring')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === 'wiring'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-navy-700 border border-navy-200 hover:border-navy-400'
              }`}
            >
              Wiring &amp; Panel Upgrades
            </button>
            <button
              onClick={() => setFilterCategory('repairs')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === 'repairs'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-navy-700 border border-navy-200 hover:border-navy-400'
              }`}
            >
              Repairs &amp; Troubleshooting
            </button>
            <button
              onClick={() => setFilterCategory('fixtures')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === 'fixtures'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-navy-700 border border-navy-200 hover:border-navy-400'
              }`}
            >
              Lighting, Fans &amp; Outlets
            </button>
            <button
              onClick={() => setFilterCategory('commercial')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === 'commercial'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-navy-700 border border-navy-200 hover:border-navy-400'
              }`}
            >
              Property Types
            </button>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                icon={iconMap[service.icon]}
              />
            ))}
          </div>

          {/* Service Guarantees Strip */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-navy-100 shadow-sm">
            <h3 className="font-display text-xl font-bold text-navy-900 mb-4 text-center">
              Our Professional Electrical Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-3">
                <ShieldCheck className="w-8 h-8 text-electric-600 mx-auto mb-2" />
                <h4 className="font-bold text-navy-900 text-sm">NEC Code Strict</h4>
                <p className="text-xs text-navy-600 mt-1">Every installation follows current safety and parish building codes.</p>
              </div>
              <div className="p-3">
                <CheckCircle2 className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h4 className="font-bold text-navy-900 text-sm">Transparent Pricing</h4>
                <p className="text-xs text-navy-600 mt-1">Quotes without corporate overhead or inflated price tags.</p>
              </div>
              <div className="p-3">
                <Zap className="w-8 h-8 text-electric-600 mx-auto mb-2" />
                <h4 className="font-bold text-navy-900 text-sm">Safety First</h4>
                <p className="text-xs text-navy-600 mt-1">Full load testing on every circuit before completion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Advice on Your Electrical Project?"
        description={`Call Grace Electrical Services directly at ${BUSINESS.phone}. Rodney will discuss your situation and arrange prompt, dependable service.`}
      />
    </>
  );
}
