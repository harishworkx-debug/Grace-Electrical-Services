import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  ExternalLink,
  Clock,
  Star,
  Send,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';

export default function Contact() {
  useSEO({
    title: 'Contact & Request an Estimate | Grace Electrical Services | Hahnville, LA',
    description: `Contact Rodney at Grace Electrical Services in Hahnville, LA. Call ${BUSINESS.phone} or request an electrical estimate online. Serving St. Charles Parish.`,
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: `${BASE_URL}/contact`,
      sameAs: [BUSINESS.mapsListing],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.city,
        addressRegion: 'LA',
        postalCode: BUSINESS.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '29.9653',
        longitude: '-90.4919',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '08:00',
          closes: '15:00',
        },
      ],
      hasMap: BUSINESS.mapsListing,
    },
  });

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    timeframe: 'flexible',
    propertyType: 'residential',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate responsive submission feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Grace Electrical Services electrical work equipment and service dispatch in Hahnville, LA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-900" />
        </div>
        <div className="container-page relative text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30 mb-4">
            <Zap className="w-4 h-4 text-amber-400" />
            Hahnville &amp; St. Charles Parish Electrical Service
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-up">
            Contact Us &amp; Request an Estimate
          </h1>
          <p className="text-navy-200 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-in-up">
            Speak directly with Rodney for honest quotes, prompt troubleshooting, or scheduled electrical installations throughout Hahnville and surrounding communities.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={BUSINESS.phoneLink}
              className="btn-primary text-base px-6 py-3 shadow-lg"
            >
              <Phone className="w-4 h-4 fill-current" />
              Call Now: {BUSINESS.phone}
            </a>
            <a
              href="#contact-form"
              className="btn-secondary text-base px-6 py-3 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Request Online Estimate &darr;
            </a>
          </div>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'Contact' }]} />

      {/* Main Grid: Form & Key Information */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Contact & Estimate Form (Usable on Mobile) */}
            <div id="contact-form" className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-navy-100">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-electric-600 block mb-1">
                  Online Service Inquiry
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">
                  Request an Estimate or Callback
                </h2>
                <p className="text-navy-600 text-sm mt-1">
                  Fill out this brief form and Rodney will review your request and get in touch with you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
                    Thank You! Your Request Has Been Sent.
                  </h3>
                  <p className="text-navy-700 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    We received your project details. Rodney will contact you via phone or email shortly to discuss your electrical project.
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-navy-600 mb-6">
                    <strong>Need urgent same-day electrical help?</strong> Call us directly at{' '}
                    <a href={BUSINESS.phoneLink} className="text-electric-700 font-bold underline">
                      {BUSINESS.phone}
                    </a>.
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        phone: '',
                        email: '',
                        service: '',
                        timeframe: 'flexible',
                        propertyType: 'residential',
                        message: '',
                      });
                    }}
                    className="btn-outline text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. John Miller"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-electric-500 focus:ring-2 focus:ring-electric-100 outline-none text-sm text-navy-900 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="e.g. 504-555-0199"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-electric-500 focus:ring-2 focus:ring-electric-100 outline-none text-sm text-navy-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-electric-500 focus:ring-2 focus:ring-electric-100 outline-none text-sm text-navy-900 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        required
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-electric-500 focus:ring-2 focus:ring-electric-100 outline-none text-sm text-navy-900 bg-white transition-all"
                      >
                        <option value="">Select a service category...</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Emergency Repair">Emergency / Urgent Troubleshooting</option>
                        <option value="General Inspection">General Electrical Inspection</option>
                        <option value="Other">Other / Not Listed</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Property Type
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormState({ ...formState, propertyType: 'residential' })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            formState.propertyType === 'residential'
                              ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                              : 'bg-white text-navy-700 border-navy-200 hover:bg-slate-50'
                          }`}
                        >
                          Residential Home
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormState({ ...formState, propertyType: 'commercial' })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            formState.propertyType === 'commercial'
                              ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                              : 'bg-white text-navy-700 border-navy-200 hover:bg-slate-50'
                          }`}
                        >
                          Commercial / Business
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                        Urgency / Timeframe
                      </label>
                      <select
                        value={formState.timeframe}
                        onChange={(e) => setFormState({ ...formState, timeframe: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-navy-200 focus:border-electric-500 focus:ring-2 focus:ring-electric-100 outline-none text-sm text-navy-900 bg-white transition-all"
                      >
                        <option value="urgent">Urgent (Within 24 Hours / Today)</option>
                        <option value="soon">This Week / Next Few Days</option>
                        <option value="flexible">Flexible / Planning Stage</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">
                      Describe Your Project or Issue <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Please share details such as symptoms (e.g. breaker tripping, new ceiling fan installation, panel age, room location)..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-electric-500 focus:ring-2 focus:ring-electric-100 outline-none text-sm text-navy-900 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-4 text-base shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    {submitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Estimate Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-navy-500 text-center mt-2">
                    🔒 Your information is confidential. We do not sell or share your contact details.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Contact Details & Working Hours & Service Arrangements */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Phone Card */}
              <div className="bg-navy-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-navy-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Fastest Response
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Call or Text Direct
                </h3>
                <p className="text-navy-300 text-sm mb-4 leading-relaxed">
                  Have an urgent repair or want to describe your project over the phone? You will speak directly with Rodney.
                </p>
                <a
                  href={BUSINESS.phoneLink}
                  className="btn-primary w-full text-center py-3.5 text-lg shadow-md mb-3 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  {BUSINESS.phone}
                </a>
                <p className="text-xs text-navy-400 text-center">
                  Direct contact with the local electrician. No call centers.
                </p>
              </div>

              {/* Working Hours & Service Arrangements */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-navy-100 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-electric-600" />
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Working Hours &amp; Availability
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm text-navy-700">
                    <li className="flex justify-between items-center py-1.5 border-b border-navy-50">
                      <span className="font-medium">Monday &ndash; Friday</span>
                      <span className="font-bold text-navy-900">7:00 AM &ndash; 6:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center py-1.5 border-b border-navy-50">
                      <span className="font-medium">Saturday</span>
                      <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md text-xs">
                        By Appointment
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-1.5">
                      <span className="font-medium">Sunday</span>
                      <span className="text-navy-500 text-xs">Emergency calls only</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-navy-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Service Arrangements
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-xs text-navy-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>On-Site Assessments:</strong> Thorough evaluation of your panel, circuit loads, and existing wiring before starting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Clear, Upfront Pricing:</strong> Transparent quotes without surprise fees or big-corporation markup.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Respectful Workspaces:</strong> Prompt arrival, organized work, and complete site cleanup upon completion.</span>
                    </li>
                  </ul>
                </div>

                {/* Verified Location */}
                <div className="pt-4 border-t border-navy-100">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-electric-600" />
                    <h3 className="font-display text-base font-bold text-navy-900">
                      Verified Address &amp; Hub
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-navy-800">
                    {BUSINESS.name}
                  </p>
                  <p className="text-xs text-navy-600 mt-0.5">
                    {BUSINESS.fullLocation} &bull; St. Charles Parish
                  </p>
                  <a
                    href={BUSINESS.mapsListing}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-600 hover:text-electric-700 mt-2"
                  >
                    <span>View Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Google Reviews Trust Tag */}
                <div className="pt-4 border-t border-navy-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-navy-900 text-xs">5.0 Star Rating</span>
                  </div>
                  <Link to="/reviews" className="text-xs font-semibold text-electric-600 hover:underline">
                    6 Verified Reviews &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Location Map Section */}
      <section className="section-padding bg-white border-t border-navy-100">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-600 block mb-1">
              Local Presence
            </span>
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-2">
              Our Hahnville, LA Location
            </h2>
            <p className="text-navy-600 text-sm">
              Centrally based in Hahnville to ensure fast service across both the West Bank and East Bank of St. Charles Parish.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-navy-200">
            <GoogleMapEmbed height={420} />
          </div>
        </div>
      </section>
    </>
  );
}
