import { Link } from 'react-router-dom';
import {
  FileText,
  Wrench,
  MapPin,
  ArrowRight,
  Home,
  Info,
  HelpCircle,
  Phone,
  Layers,
} from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/data/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';

export default function Sitemap() {
  useSEO({
    title: 'Website Sitemap | Grace Electrical Services Hahnville, LA',
    description:
      'Explore all pages, electrical services, and service areas for Grace Electrical Services in Hahnville, Louisiana and St. Charles Parish.',
    canonicalPath: '/sitemap',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Website Sitemap',
      description:
        'Complete directory of pages, electrical services, and service locations for Grace Electrical Services.',
      url: `${BASE_URL}/sitemap`,
    },
  });

  const mainPages = [
    { title: 'Home', path: '/', description: 'Overview of Grace Electrical Services, featured electrical solutions, and company background.', icon: <Home className="w-5 h-5 text-electric-600" /> },
    { title: 'Electrical Services', path: '/services', description: 'Browse all residential and commercial electrical services offered.', icon: <Wrench className="w-5 h-5 text-electric-600" /> },
    { title: 'Service Areas', path: '/service-areas', description: 'Communities we serve throughout St. Charles Parish and the river corridor.', icon: <MapPin className="w-5 h-5 text-electric-600" /> },
    { title: 'About Us', path: '/about', description: 'Learn about our standards, experience, and commitment to electrical safety.', icon: <Info className="w-5 h-5 text-electric-600" /> },
    { title: 'Contact', path: '/contact', description: 'Direct phone number, location, and service inquiry information.', icon: <Phone className="w-5 h-5 text-electric-600" /> },
    { title: 'Frequently Asked Questions', path: '/faq', description: 'Answers to common questions about electrical repairs, wiring, and scheduling.', icon: <HelpCircle className="w-5 h-5 text-electric-600" /> },
    { title: 'Website Sitemap', path: '/sitemap', description: 'Complete directory of all pages, electrical service offerings, and local coverage areas.', icon: <Layers className="w-5 h-5 text-electric-600" /> },
  ];

  const totalPages = mainPages.length + SERVICES.length + SERVICE_AREAS.length;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-page relative text-center">
          <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Layers className="w-7 h-7 text-navy-900" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Website Sitemap
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-6 animate-fade-in-up">
            Quickly navigate all pages, electrical solutions, and community service areas offered by {BUSINESS.name}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/80 border border-navy-700 text-sm text-navy-300">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>{totalPages} Indexed Pages Available</span>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/80 hover:bg-navy-700/80 border border-navy-700 hover:border-electric-500 text-sm text-electric-400 transition-colors"
            >
              <span>View XML Sitemap (sitemap.xml)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <Breadcrumbs crumbs={[{ label: 'Sitemap' }]} />

      {/* Content Section */}
      <section className="section-padding bg-navy-50/50">
        <div className="container-page space-y-16">
          
          {/* Main Pages */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-electric-100 flex items-center justify-center text-electric-700">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">
                  Main Pages
                </h2>
                <p className="text-sm text-navy-600">
                  Core pages and primary information about our company
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {mainPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="card p-5 group flex flex-col justify-between hover:border-electric-300 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-md bg-navy-50 flex items-center justify-center">
                        {page.icon}
                      </div>
                      <h3 className="font-display font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
                        {page.title}
                      </h3>
                    </div>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-electric-600 group-hover:gap-2 transition-all">
                    Visit Page <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Electrical Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">
                  Electrical Services in Hahnville, LA
                </h2>
                <p className="text-sm text-navy-600">
                  Detailed information for all residential and commercial electrical services
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="card p-5 group flex flex-col justify-between hover:border-electric-300 transition-all"
                >
                  <div>
                    <h3 className="font-display font-bold text-navy-900 group-hover:text-electric-600 transition-colors mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-xs text-navy-600 leading-relaxed line-clamp-2">
                      {s.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-electric-600 group-hover:gap-2 transition-all">
                    View Service <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-electric-100 flex items-center justify-center text-electric-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">
                  Service Areas Across St. Charles Parish
                </h2>
                <p className="text-sm text-navy-600">
                  Local electrician services for communities in and around Hahnville, Louisiana
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICE_AREAS.map((a) => (
                <Link
                  key={a.slug}
                  to={`/${a.slug}`}
                  className="card p-5 group flex flex-col justify-between hover:border-electric-300 transition-all"
                >
                  <div>
                    <h3 className="font-display font-bold text-navy-900 group-hover:text-electric-600 transition-colors mb-1.5">
                      Electrician in {a.city}, {a.state}
                    </h3>
                    <p className="text-xs text-navy-600 leading-relaxed line-clamp-2">
                      {a.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-electric-600 group-hover:gap-2 transition-all">
                    View Location <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTABanner
        title="Ready to Discuss Your Electrical Project?"
        description={`Call Grace Electrical Services directly at ${BUSINESS.phone} for electrical wiring, repairs, and installations in Hahnville and surrounding areas.`}
      />
    </>
  );
}
