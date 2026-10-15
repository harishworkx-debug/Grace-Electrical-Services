import { Phone, MapPin, ExternalLink, Clock } from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';

export default function Contact() {
  useSEO({
    title: `Contact Grace Electrical Services | Hahnville, LA Electrician`,
    description: `Contact Grace Electrical Services at ${BUSINESS.phone}. Located in ${BUSINESS.fullLocation}. Call to discuss your electrical wiring, installation, or repair project.`,
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
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
      hasMap: BUSINESS.mapsListing,
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-page relative text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto animate-fade-in-up">
            The best way to reach Grace Electrical Services is by phone. Call us to
            discuss your electrical project.
          </p>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'Contact' }]} />

      {/* Contact info */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">
                  Get in Touch
                </h2>
                <div className="bg-navy-50 rounded-2xl p-8 space-y-6">
                  {/* Phone */}
                  <div>
                    <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a
                      href={BUSINESS.phoneLink}
                      className="text-2xl font-display font-bold text-electric-600 hover:text-electric-500 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-6 h-6" />
                      {BUSINESS.phone}
                    </a>
                  </div>

                  {/* Location */}
                  <div className="pt-4 border-t border-navy-200">
                    <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-lg text-navy-800 font-medium">
                      {BUSINESS.name}
                    </p>
                    <p className="text-navy-600 flex items-center gap-2 mt-1">
                      <MapPin className="w-5 h-5 text-electric-600" />
                      {BUSINESS.fullLocation}
                    </p>
                    <a
                      href={BUSINESS.mapsListing}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-electric-600 font-medium hover:text-electric-500 mt-2"
                    >
                      View on Google Maps
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="pt-4 border-t border-navy-200">
                    <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-1">
                      Business Hours
                    </p>
                    <p className="text-navy-600 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-electric-600" />
                      Call to confirm availability and schedule service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call CTA */}
              <div className="bg-electric-600 rounded-2xl p-8 text-center">
                <p className="text-white text-lg mb-4">
                  Ready to discuss your electrical project?
                </p>
                <a href={BUSINESS.phoneLink} className="btn-primary text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">
                Our Location
              </h2>
              <GoogleMapEmbed height={500} />
              <p className="text-sm text-navy-500 mt-4">
                Grace Electrical Services is located in {BUSINESS.fullLocation}. We
                serve Hahnville and surrounding communities in St. Charles Parish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
