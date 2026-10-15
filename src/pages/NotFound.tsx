import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Home } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { BUSINESS } from '@/data/content';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | Grace Electrical Services',
    description:
      'The page you are looking for could not be found. Please visit our homepage or call Grace Electrical Services at 504-559-5351.',
    canonicalPath: '/404',
  });

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-navy-50">
      <div className="container-page text-center py-20">
        <p className="font-display text-7xl md:text-9xl font-bold text-electric-200 mb-4">
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-navy-600 text-lg max-w-xl mx-auto mb-8">
          The page you are looking for may have been moved or removed. Try visiting
          our homepage or call us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-secondary">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <a href={BUSINESS.phoneLink} className="btn-primary">
            <Phone className="w-4 h-4" />
            Call {BUSINESS.phone}
          </a>
        </div>
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-electric-600 font-medium hover:gap-2 transition-all"
          >
            Browse our services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
