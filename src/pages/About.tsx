import { Phone, ArrowRight, Zap, Shield, MessageCircle, CheckCircle2, Award, Clock, DollarSign, MapPin } from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES, REVIEWS } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import ReviewsSection from '@/components/ReviewsSection';
import { Link } from 'react-router-dom';

export default function About() {
  useSEO({
    title: 'About Grace Electrical Services | Local Owner-Operator in Hahnville, LA',
    description:
      'Learn about Rodney and Grace Electrical Services in Hahnville, LA. Discover our commitment to National Electrical Code standards, fair pricing, and personal service.',
    canonicalPath: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: `${BASE_URL}/about`,
      sameAs: [BUSINESS.mapsListing],
      hasMap: BUSINESS.mapsListing,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.city,
        addressRegion: 'LA',
        postalCode: BUSINESS.zip,
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '6',
        bestRating: '5',
        worstRating: '1',
      },
    },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Rodney - Grace Electrical Services electrician working on electrical systems in Hahnville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-800/80" />
        </div>
        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30 mb-4">
              <Award className="w-4 h-4 text-amber-400" />
              Locally Owned &amp; Operated by Rodney
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              About Grace Electrical Services in Hahnville, LA
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-6">
              A dependable, Hahnville-based electrical company founded on direct communication, thorough diagnostics, and honest, fair pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BUSINESS.phoneLink} className="btn-primary">
                <Phone className="w-4 h-4 fill-current" />
                Speak with Rodney: {BUSINESS.phone}
              </a>
              <Link to="/contact" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
                Contact Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'About Us' }]} />

      {/* Story & Background */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-electric-600 block">
                Our Story &amp; Philosophy
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                The Owner-Operator Difference for St. Charles Parish
              </h2>
              <p className="text-navy-700 text-base sm:text-lg leading-relaxed">
                When homeowners need electrical repairs or wiring installation, they often face a frustrating dilemma: nationwide corporate franchises with call centers and steep markup, or fly-by-night operators who take shortcuts with code compliance.
              </p>
              <p className="text-navy-600 text-base leading-relaxed">
                <strong>Rodney</strong> founded <strong>Grace Electrical Services</strong> right here in <strong>Hahnville, Louisiana</strong> to provide an honest, highly skilled local alternative. When you call us, you aren't forwarded to an out-of-state customer service queue. You speak directly with Rodney—the electrician who evaluates your problem, arrives on time, and executes the work according to strict electrical codes.
              </p>
              <p className="text-navy-600 text-base leading-relaxed">
                Whether you are wiring a brand-new home, upgrading an outdated breaker panel, installing ceiling fans, or chasing down dangerous flickering lights, we treat every home and commercial facility with the utmost care, clean workspaces, and complete transparency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-navy-100 flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Honest Upfront Quotes</h4>
                    <p className="text-xs text-navy-600 mt-0.5">Customers routinely report our quotes are almost half the cost of big-name corporate electricians.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-navy-100 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-electric-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Prompt &amp; Weekend Ready</h4>
                    <p className="text-xs text-navy-600 mt-0.5">Same-day inspection and Saturday appointments available to fit your busy schedule.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-80 sm:h-96">
                <img
                  src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=900&dpr=1"
                  alt="Rodney examining circuit panel connections in Hahnville"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-navy-100 shadow-md">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-electric-600" />
                    <span>Based in Hahnville, LA 70057</span>
                  </div>
                  <p className="text-xs text-navy-600 mt-0.5">
                    Proudly serving homes and businesses across St. Charles Parish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Standards & Qualifications */}
      <section className="section-padding bg-slate-50 border-y border-navy-100">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-600 block mb-1">
              Safety &amp; Workmanship
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Verified Technical Standards
            </h2>
            <p className="text-navy-600 text-base leading-relaxed">
              Electrical work carries real safety responsibilities. Here are the core technical standards we uphold on every project:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-navy-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-electric-600 text-white flex items-center justify-center mb-5 shadow-md">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                  National Electrical Code (NEC)
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Every circuit calculation, wire gauge selection, breaker sizing, and ground rod installation strictly follows modern NEC standards and local parish requirements.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-electric-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Code-Compliant Safety</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-navy-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-navy-950 flex items-center justify-center mb-5 shadow-md">
                  <Zap className="w-6 h-6" fill="currentColor" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                  Root-Cause Troubleshooting
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  Rather than slapping on a quick patch, we isolate circuit faults with a smart, step-by-step diagnostic process to find why the issue occurred and fix it for good.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-amber-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Permanent Diagnostics</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-navy-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center mb-5 shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                  Respectful, Clean Workmanship
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  We show up on time, treat your property with respect, explain technical findings in straightforward plain English, and leave your work area neat and clean.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-navy-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Clean &amp; Respectful</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews */}
      <ReviewsSection />

      {/* Service categories */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Explore What We Do
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto text-sm sm:text-base">
              Learn more about each of our primary electrical service categories available across Hahnville and St. Charles Parish.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {SERVICES.slice(0, 10).map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="p-4 rounded-xl border border-navy-100 bg-white hover:border-electric-300 hover:shadow-md transition-all group text-center flex flex-col justify-between"
              >
                <span className="text-xs sm:text-sm font-semibold text-navy-800 group-hover:text-electric-600 transition-colors">
                  {s.shortTitle}
                </span>
                <span className="inline-flex items-center justify-center text-xs text-electric-600 font-bold mt-2 group-hover:gap-1.5 transition-all">
                  <span>View {s.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Work With a Trusted Local Electrician?"
        description={`Call Rodney at Grace Electrical Services today at ${BUSINESS.phone} to discuss your electrical project.`}
      />
    </>
  );
}
