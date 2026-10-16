import { Phone, MapPin, Navigation, ArrowRight, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICE_AREAS } from '@/data/content';
import LocationCard from '@/components/LocationCard';
import CTABanner from '@/components/CTABanner';
import Breadcrumbs from '@/components/Breadcrumbs';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { Link } from 'react-router-dom';

export default function ServiceAreas() {
  useSEO({
    title: 'Service Areas in St. Charles Parish, LA | Grace Electrical Services',
    description:
      'Grace Electrical Services provides electrical wiring and repairs throughout St. Charles Parish, including Hahnville, Luling, Destrehan, Norco, Boutte, and nearby river communities.',
    canonicalPath: '/service-areas',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: `${BASE_URL}/service-areas`,
      areaServed: SERVICE_AREAS.map((a) => ({
        '@type': 'City',
        name: a.city,
        addressRegion: a.state,
      })),
    },
  });

  const westBankAreas = SERVICE_AREAS.filter((a) =>
    ['electrician-hahnville-la', 'electrician-luling-la', 'electrician-boutte-la', 'electrician-paradis-la', 'electrician-ama-la'].includes(a.slug)
  );

  const eastBankAreas = SERVICE_AREAS.filter((a) =>
    ['electrician-destrehan-la', 'electrician-norco-la', 'electrician-st-rose-la', 'electrician-new-sarpy-la', 'electrician-montz-la'].includes(a.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="St. Charles Parish electrical service areas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-900" />
        </div>
        <div className="container-page relative text-center">
          <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MapPin className="w-7 h-7 text-navy-900" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30 mb-4">
            St. Charles Parish &bull; Mississippi River Corridor
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-up">
            Our Genuine Service Coverage in St. Charles Parish
          </h1>
          <p className="text-navy-200 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            Grace Electrical Services is proudly based in Hahnville, Louisiana, providing prompt residential and commercial electrical work across both banks of St. Charles Parish.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS.phoneLink} className="btn-primary">
              <Phone className="w-4 h-4 fill-current" />
              Call Rodney: {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              Check Your Location
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'Service Areas' }]} />

      {/* Coverage Explanation & Boundaries */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-electric-600 block">
                Local Dispatch &amp; Geographic Reach
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                Authentic Service Boundaries in St. Charles Parish
              </h2>
              <p className="text-navy-700 text-base leading-relaxed">
                Rather than claiming unrealistic coverage over the entire Gulf Coast, Grace Electrical Services focuses specifically on St. Charles Parish and immediate neighboring communities along the Mississippi River.
              </p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Our central location in <strong>Hahnville</strong> (the parish seat) allows rapid transit across the <strong>Hale Boggs Memorial Bridge (I-310)</strong>, connecting our West Bank hub directly with East Bank river communities in minutes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-navy-100 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Prompt Local Response</h4>
                    <p className="text-xs text-navy-600 mt-0.5">Most St. Charles Parish calls can be evaluated the same day or next morning.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-navy-100 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-electric-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Parish Code Compliance</h4>
                    <p className="text-xs text-navy-600 mt-0.5">Familiar with local Louisiana weather challenges, humidity, and parish inspections.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-navy-800">
              <div className="flex items-center gap-2 text-amber-400 mb-3">
                <Navigation className="w-5 h-5" />
                <h3 className="font-display text-xl font-bold text-white">
                  Coverage at a Glance
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-navy-200">
                <li className="pb-3 border-b border-navy-800">
                  <strong className="text-white block mb-0.5">Primary Parish Hub:</strong>
                  <span>Hahnville, LA 70057 (West Bank central dispatch)</span>
                </li>
                <li className="pb-3 border-b border-navy-800">
                  <strong className="text-white block mb-0.5">West Bank Corridor (US-90 &amp; LA-18):</strong>
                  <span>Hahnville, Luling, Boutte, Paradis, and Ama</span>
                </li>
                <li className="pb-3 border-b border-navy-800">
                  <strong className="text-white block mb-0.5">East Bank Corridor (US-61 &amp; LA-48):</strong>
                  <span>Destrehan, Norco, St. Rose, New Sarpy, and Montz</span>
                </li>
                <li>
                  <strong className="text-white block mb-0.5">River Crossing Route:</strong>
                  <span>Immediate access via Interstate 310 Hale Boggs Bridge</span>
                </li>
              </ul>
            </div>
          </div>

          {/* West Bank Communities */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h3 className="font-display text-2xl font-bold text-navy-900">
                West Bank Communities (St. Charles Parish)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {westBankAreas.map((area) => (
                <LocationCard key={area.slug} area={area} />
              ))}
            </div>
          </div>

          {/* East Bank Communities */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-electric-600" />
              <h3 className="font-display text-2xl font-bold text-navy-900">
                East Bank Communities (St. Charles Parish)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eastBankAreas.map((area) => (
                <LocationCard key={area.slug} area={area} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Verification */}
      <section className="section-padding bg-slate-50 border-t border-navy-100">
        <div className="container-page">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-2">
              Our Central Hahnville Location
            </h2>
            <p className="text-navy-600 text-sm">
              Explore our verified business location on Google Maps. Call {BUSINESS.phone} to confirm availability for your address.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-navy-200">
            <GoogleMapEmbed height={400} />
          </div>
          <div className="text-center mt-6">
            <a
              href={BUSINESS.mapsListing}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 hover:text-electric-700"
            >
              <span>Open Grace Electrical Services in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Live in St. Charles Parish and Need an Electrician?"
        description={`Call Rodney at Grace Electrical Services today at ${BUSINESS.phone} to discuss your electrical project.`}
      />
    </>
  );
}
