import { Phone } from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, GENERAL_FAQS } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

export default function FAQ() {
  useSEO({
    title: 'Electrical Service FAQs | Grace Electrical Services',
    description:
      'Frequently asked questions about Grace Electrical Services, our electrical services, service areas, and how to contact us. Call 504-559-5351.',
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

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/7937305/pexels-photo-7937305.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-page relative text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Frequently Asked Questions
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto animate-fade-in-up">
            Common questions about our electrical services and how to contact Grace
            Electrical Services.
          </p>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'FAQ' }]} />

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={GENERAL_FAQS} />

            <div className="mt-12 bg-navy-50 rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
                Still Have Questions?
              </h2>
              <p className="text-navy-600 mb-6">
                Call us and we will be happy to answer any questions you have about
                our electrical services.
              </p>
              <a href={BUSINESS.phoneLink} className="btn-primary">
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Discuss Your Electrical Project?"
        description="Call Grace Electrical Services to discuss your electrical wiring, installation, or repair needs."
      />
    </>
  );
}
