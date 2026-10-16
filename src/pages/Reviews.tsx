import { Star, ShieldCheck, Sparkles, MapPin, ExternalLink, Phone } from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, REVIEWS, REVIEW_SUMMARY } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import ReviewsSection from '@/components/ReviewsSection';

const reviewsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  url: `${BASE_URL}/reviews`,
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
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: r.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating.toString(),
      bestRating: '5',
    },
    reviewBody: r.text,
  })),
};

export default function Reviews() {
  useSEO({
    title: 'Customer Reviews & Testimonials | Grace Electrical Services',
    description:
      'Read real 5.0-star verified Google reviews from homeowners and businesses in Hahnville and St. Charles Parish. Prompt, honest, and professional electrical work.',
    canonicalPath: '/reviews',
    structuredData: reviewsStructuredData,
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Grace Electrical Services client reviews and verified feedback in Hahnville, LA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-800/80" />
        </div>
        <div className="container-page relative py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Verified Google Business Reviews
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-medium border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% 5-Star Recommendation
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight">
              Verified Customer Reviews &amp; Local Feedback
            </h1>

            <p className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-6 max-w-2xl">
              See what our customers have to say about our prompt service, fair pricing, and professional electrical work across Hahnville and St. Charles Parish.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-lg">5.0</span>
                <span className="text-navy-300 text-xs">(6 Reviews)</span>
              </div>

              <a
                href={BUSINESS.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 px-6 shadow-xl flex items-center gap-2"
              >
                <span>Leave a Review on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'Customer Reviews' }]} />

      {/* Main Reviews Section */}
      <ReviewsSection showTitle={false} />

      {/* Google Maps Embed / Verification */}
      <section className="section-padding bg-white border-t border-navy-100">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-100 text-electric-800 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Business Location</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-navy-900 leading-tight">
                Verified Local Electrician in Hahnville, Louisiana
              </h2>
              <p className="text-navy-600 leading-relaxed">
                All customer reviews are submitted by real clients directly to our Google Business Profile. We are proud to maintain an unblemished 5.0-star reputation across Hahnville, Luling, Destrehan, Norco, and all surrounding communities.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS.phoneLink} className="btn-primary">
                  <Phone className="w-4 h-4 fill-current" />
                  Call Rodney: {BUSINESS.phone}
                </a>
                <a
                  href={BUSINESS.mapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-navy-200 h-80 sm:h-96">
                <iframe
                  title="Google Maps Location - Grace Electrical Services"
                  src={BUSINESS.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Experience 5-Star Electrical Service?"
        description={`Contact Rodney at Grace Electrical Services today at ${BUSINESS.phone} for prompt answers and fair quotes.`}
      />
    </>
  );
}
