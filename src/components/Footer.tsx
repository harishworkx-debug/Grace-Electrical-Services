import { Link } from 'react-router-dom';
import { Zap, Phone, MapPin, Mail } from 'lucide-react';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-400" fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg">
                  Grace Electrical
                </span>
                <span className="text-xs text-navy-400">Services</span>
              </div>
            </div>
            <p className="text-sm text-navy-400 leading-relaxed mb-4">
              Electrical wiring installation and services for Hahnville, Louisiana
              and surrounding communities.
            </p>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="text-sm text-navy-400 hover:text-electric-400 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm text-electric-400 hover:text-electric-300 font-medium"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/${a.slug}`}
                    className="text-sm text-navy-400 hover:text-electric-400 transition-colors"
                  >
                    {a.city}, {a.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm text-electric-400 hover:text-electric-300 font-medium"
                >
                  All Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-navy-400 hover:text-electric-400 transition-colors"
                >
                  Contact Page
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-navy-400 hover:text-electric-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-navy-400 hover:text-electric-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-sm text-navy-400 hover:text-electric-400 transition-colors"
                >
                  Sitemap
                </Link>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-400 pt-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-navy-500" />
                {BUSINESS.fullLocation}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-navy-500">
            <span>Electrical services in Hahnville, LA &amp; surrounding areas</span>
            <span>&bull;</span>
            <Link to="/sitemap" className="text-electric-400 hover:text-electric-300 transition-colors">
              Website Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
