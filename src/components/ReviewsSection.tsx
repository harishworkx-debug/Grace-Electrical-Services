import { useState } from 'react';
import {
  Star,
  CheckCircle2,
  ExternalLink,
  ThumbsUp,
  Share2,
  Sparkles,
  ShieldCheck,
  Clock,
  DollarSign,
  Award,
} from 'lucide-react';
import { REVIEWS, REVIEW_SUMMARY, BUSINESS } from '@/data/content';

export default function ReviewsSection({ showTitle = true }: { showTitle?: boolean }) {
  const [activeTopic, setActiveTopic] = useState('All Reviews');

  const filteredReviews =
    activeTopic === 'All Reviews'
      ? REVIEWS
      : REVIEWS.filter((r) => r.tags.includes(activeTopic));

  return (
    <section id="reviews" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-electric-50/50 via-amber-50/30 to-transparent pointer-events-none -z-10" />

      <div className="container-page">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200 text-xs sm:text-sm font-semibold mb-3">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Real Google Customer Feedback</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
              Rated 5.0 Stars by Local Homeowners
            </h2>
            <p className="text-navy-600 text-base sm:text-lg leading-relaxed">
              Read authentic, unfiltered Google reviews from clients across Hahnville and St. Charles Parish who trust Grace Electrical Services for their electrical needs.
            </p>
          </div>
        )}

        {/* Google Summary Scorecard */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-navy-100/80 mb-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Overall Score */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-navy-100 pb-8 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-3 mb-3">
                {/* Official Google G SVG Icon */}
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="font-display font-bold text-lg text-navy-900 tracking-tight">
                  Google Reviews
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-5xl sm:text-6xl font-black text-navy-950 tracking-tight">
                  5.0
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 mt-1">
                    100% 5-Star Rating
                  </span>
                </div>
              </div>

              <p className="text-sm text-navy-600 mb-6">
                Based on <strong className="text-navy-900 font-bold">{REVIEW_SUMMARY.reviewCount} customer reviews</strong> on Google Business Profile
              </p>

              <a
                href={BUSINESS.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-sm py-2.5 px-5 shadow-md flex items-center justify-center gap-2"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Star Distribution Bars */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-navy-100 pb-8 lg:pb-0 lg:pr-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-3">
                Rating Breakdown
              </h4>
              <div className="space-y-2">
                {REVIEW_SUMMARY.ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3 text-xs sm:text-sm">
                    <span className="font-semibold text-navy-700 w-12 flex items-center gap-1">
                      {item.stars} <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-navy-500 font-medium w-8 text-right">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-navy-100 flex items-center gap-2 text-xs text-navy-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All reviews verified directly on Google Maps</span>
              </div>
            </div>

            {/* Customer Endorsements Highlights */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500">
                What Customers Praise Most
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60">
                  <DollarSign className="w-5 h-5 text-amber-600 shrink-0" />
                  <div className="text-xs leading-tight">
                    <strong className="text-navy-900 block font-semibold">Fair, Honest Pricing</strong>
                    <span className="text-navy-600">Clients note quotes were almost half big-name rates</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-electric-50/70 border border-electric-200/60">
                  <Clock className="w-5 h-5 text-electric-600 shrink-0" />
                  <div className="text-xs leading-tight">
                    <strong className="text-navy-900 block font-semibold">Prompt &amp; Weekend Ready</strong>
                    <span className="text-navy-600">Fast same-day response &amp; Saturday availability</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div className="text-xs leading-tight">
                    <strong className="text-navy-900 block font-semibold">Rodney's Knowledge &amp; Care</strong>
                    <span className="text-navy-600">Thorough explanations, clean workspaces &amp; code-compliant work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Chips by Popular Topics */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-bold uppercase text-navy-500 mr-2">Filter By Topic:</span>
          {REVIEW_SUMMARY.popularTopics.map((topic) => {
            const isSelected = activeTopic === topic.name;
            return (
              <button
                key={topic.name}
                onClick={() => setActiveTopic(topic.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-navy-700 border border-navy-200 hover:border-navy-400 hover:bg-navy-50'
                }`}
              >
                {topic.name} ({topic.count})
              </button>
            );
          })}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-navy-100 hover:border-amber-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Avatar, Name, Reviews Count, Google Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-sm`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-display font-bold text-navy-900 text-base leading-tight">
                          {review.author}
                        </h3>
                        {review.verified && (
                          <span
                            title="Verified Google Review"
                            className="inline-flex text-blue-500"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-navy-500 mt-0.5">
                        <span>{review.reviewCount}</span>
                        <span>•</span>
                        <span>{review.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google G small badge */}
                  <span
                    className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0"
                    title="Google Verified Review"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-navy-700 ml-1.5">5.0</span>
                </div>

                {/* Review Text */}
                <div className="text-navy-700 text-sm leading-relaxed whitespace-pre-line mb-4 font-normal">
                  &ldquo;{review.text}&rdquo;
                </div>
              </div>

              {/* Badges / Metas at bottom */}
              <div className="pt-4 border-t border-slate-100 space-y-2 mt-2">
                {review.priceAssessment && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200/60">
                    <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                    <span>Price Assessment: {review.priceAssessment}</span>
                  </div>
                )}

                {review.services && review.services.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {review.services.map((svc, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 text-xs text-navy-400">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1 hover:text-navy-700 transition-colors">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Helpful</span>
                    </span>
                    <a
                      href={BUSINESS.mapsListing}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-electric-600 transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>View on Google</span>
                    </a>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Rodney's Promise */}
        <div className="mt-12 p-8 rounded-3xl bg-navy-900 text-white relative overflow-hidden shadow-2xl border border-navy-800">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold border border-amber-500/30">
                <Award className="w-4 h-4" />
                <span>Locally Owned &amp; Operated by Rodney</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Experience the 5-Star Difference for Your Home
              </h3>
              <p className="text-navy-300 text-sm sm:text-base leading-relaxed">
                Whether you need ceiling fan installation, whole-house wiring, outlet relocation, or emergency troubleshooting, speak directly with Rodney today. No middlemen, no doubled prices.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <a href={BUSINESS.phoneLink} className="btn-primary w-full text-center py-3.5 shadow-lg">
                Call {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center py-3.5 text-xs sm:text-sm bg-navy-800 hover:bg-navy-700 text-white border-navy-700"
              >
                <span>Read All Reviews on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
