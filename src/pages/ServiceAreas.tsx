import { Phone, MapPin } from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICE_AREAS } from '@/data/content';
import LocationCard from '@/components/LocationCard';
import CTABanner from '@/components/CTABanner';
import Breadcrumbs from '@/components/Breadcrumbs';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';

export default function ServiceAreas() {
  useSEO({
    title: 'Service Areas in St. Charles Parish, LA | Grace Electrical Services',
    description:
      'Grace Electrical Services provides electrical services in Hahnville, Louisiana and surrounding communities in St. Charles Parish including Luling, Destrehan, Norco, Boutte, and more.',
    canonicalPath: '/service-areas',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BASE_URL,
      areaServed: SERVICE_AREAS.map((a) => ({
        '@type': 'City',
        name: a.city,
        addressRegion: a.state,
      })),
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-page relative text-center">
          <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-7 h-7 text-navy-900" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Service Areas
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Grace Electrical Services is based in Hahnville, Louisiana and serves
            surrounding communities throughout St. Charles Parish. Call to confirm
            we serve your specific location.
          </p>
          <a href={BUSINESS.phoneLink} className="btn-primary">
            <Phone className="w-4 h-4" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'Service Areas' }]} />

      {/* Areas grid */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mb-10">
            <p className="text-navy-700 text-lg leading-relaxed">
              We provide electrical services to homes and businesses throughout
              Hahnville and the surrounding communities in St. Charles Parish,
              Louisiana. Browse the areas below and click through for more
              information about the services available in each community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <LocationCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-navy-600">
              Grace Electrical Services is located in {BUSINESS.fullLocation}.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <GoogleMapEmbed />
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure If We Serve Your Area?"
        description="Call us at 504-559-5351 to confirm we can reach your location."
      />
    </>
  );
}
