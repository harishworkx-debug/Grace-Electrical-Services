import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/content';

type CTABannerProps = {
  title?: string;
  description?: string;
};

export default function CTABanner({
  title = 'Need Help With an Electrical Project?',
  description = 'Call Grace Electrical Services to discuss your electrical wiring, installation, or repair needs.',
}: CTABannerProps) {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
      </div>
      <div className="container-page relative text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
          {title}
        </h2>
        <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up">
          {description}
        </p>
        <a href={BUSINESS.phoneLink} className="btn-primary text-lg px-8 py-4">
          <Phone className="w-5 h-5" />
          Call {BUSINESS.phone}
        </a>
        <div className="mt-6">
          <Link
            to="/contact"
            className="text-electric-400 hover:text-electric-300 font-medium transition-colors"
          >
            Or visit our contact page
          </Link>
        </div>
      </div>
    </section>
  );
}
