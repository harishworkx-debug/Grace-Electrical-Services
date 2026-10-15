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
} from 'lucide-react';
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
  useSEO({
    title: 'Electrical Services in Hahnville, LA | Grace Electrical Services',
    description:
      'Explore our electrical services including wiring installation, repairs, troubleshooting, outlet and switch installation, panel repair and upgrades, lighting, and more in Hahnville, Louisiana.',
    canonicalPath: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      provider: {
        '@type': 'Electrician',
        name: BUSINESS.name,
        telephone: BUSINESS.phone,
      },
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-page relative text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            All Electrical Services
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Grace Electrical Services offers a full range of electrical services for
            homes and businesses in Hahnville, Louisiana and surrounding areas.
          </p>
          <a href={BUSINESS.phoneLink} className="btn-primary">
            <Phone className="w-4 h-4" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                icon={iconMap[service.icon]}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service You Need?"
        description="Call us at 504-559-5351 and we will help you figure out the right service for your electrical project."
      />
    </>
  );
}
