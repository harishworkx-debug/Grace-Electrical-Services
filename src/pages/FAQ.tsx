import { useState } from 'react';
import { Phone, ArrowRight, HelpCircle, Sparkles, Wrench, Calendar, Zap, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, GENERAL_FAQS } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFaqs =
    activeCategory === 'All'
      ? GENERAL_FAQS
      : GENERAL_FAQS.filter((f) => f.category === activeCategory);

  useSEO({
    title: 'Electrical FAQs | Grace Electrical Services | Hahnville, LA',
    description:
      'Answers to frequent customer questions about tripping breakers, panel upgrades, rewiring, and scheduling electrical service in Hahnville and St. Charles Parish.',
    canonicalPath: '/faq',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: GENERAL_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  });

  const categories = [
    { id: 'All', label: 'All Questions', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: 'Troubleshooting', label: 'Troubleshooting & Diagnostics', icon: <Wrench className="w-3.5 h-3.5" /> },
    { id: 'Appointments', label: 'Appointments & Availability', icon: <Calendar className="w-3.5 h-3.5" /> },
    { id: 'Installations', label: 'Installations & Wiring', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'Estimates', label: 'Estimates & Pricing', icon: <DollarSign className="w-3.5 h-3.5" /> },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/7937305/pexels-photo-7937305.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt="Grace Electrical Services electrical diagnostic tools and multimeters in Hahnville, LA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-900" />
        </div>
        <div className="container-page relative text-center">
          <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <HelpCircle className="w-7 h-7 text-navy-900" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Clear Answers from a Local Electrician
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight animate-fade-in-up">
            Frequently Asked Electrical Questions
          </h1>
          <p className="text-navy-200 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            Find straightforward answers to real questions regarding circuit troubleshooting, emergency response, Saturday scheduling, installations, and fair pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BUSINESS.phoneLink} className="btn-primary">
              <Phone className="w-4 h-4 fill-current" />
              Call Rodney: {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              Ask a Specific Question
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'FAQ' }]} />

      {/* Main FAQ Section with Category Filters */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-white text-navy-700 border border-navy-200 hover:border-navy-400 hover:bg-slate-100'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Accordion Component with Links to Service Pages */}
            <FAQAccordion items={filteredFaqs} />

            {/* Direct Helpline Box */}
            <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 text-center border border-navy-100 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-electric-50 text-electric-600 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
                Have an Electrical Question Not Listed Here?
              </h2>
              <p className="text-navy-600 text-sm sm:text-base max-w-lg mx-auto mb-6 leading-relaxed">
                Describe the issue you are experiencing directly to Rodney. We will walk you through the diagnosis and discuss the safest, most cost-effective path forward.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a href={BUSINESS.phoneLink} className="btn-primary">
                  <Phone className="w-4 h-4 fill-current" />
                  Call {BUSINESS.phone}
                </a>
                <Link to="/contact" className="btn-outline">
                  Submit Online Inquiry
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Discuss Your Electrical Project?"
        description={`Call Grace Electrical Services directly at ${BUSINESS.phone}. We answer calls promptly and handle wiring, repairs, and upgrades with genuine care.`}
      />
    </>
  );
}
