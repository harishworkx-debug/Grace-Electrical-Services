import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Zap } from 'lucide-react';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/data/content';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
    setAreasDropdown(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive(path) ? 'text-electric-600' : 'text-navy-700 hover:text-electric-600'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100 shadow-sm">
      <div className="container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center group-hover:bg-navy-800 transition-colors">
              <Zap className="w-6 h-6 text-amber-400" fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-navy-900 text-base md:text-lg">
                Grace Electrical
              </span>
              <span className="text-xs text-navy-500 font-medium">
                Hahnville, LA
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className={navLinkClass('/')}>
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 ${navLinkClass('/services')}`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>
              {servicesDropdown && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-slide-down">
                  <div className="bg-white rounded-xl shadow-xl border border-navy-100 py-2 max-h-[480px] overflow-y-auto">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}`}
                        className="block px-4 py-2 text-sm text-navy-700 hover:bg-electric-50 hover:text-electric-700 transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasDropdown(true)}
              onMouseLeave={() => setAreasDropdown(false)}
            >
              <Link
                to="/service-areas"
                className={`flex items-center gap-1 ${navLinkClass('/service-areas')}`}
              >
                Service Areas
                <ChevronDown className="w-4 h-4" />
              </Link>
              {areasDropdown && (
                <div className="absolute top-full left-0 pt-2 w-48 animate-slide-down">
                  <div className="bg-white rounded-xl shadow-xl border border-navy-100 py-2 max-h-[400px] overflow-y-auto">
                    {SERVICE_AREAS.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/${a.slug}`}
                        className="block px-4 py-2 text-sm text-navy-700 hover:bg-electric-50 hover:text-electric-700 transition-colors"
                      >
                        {a.city}, {a.state}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className={navLinkClass('/about')}>
              About
            </Link>
            <Link to="/faq" className={navLinkClass('/faq')}>
              FAQ
            </Link>
            <Link to="/contact" className={navLinkClass('/contact')}>
              Contact
            </Link>
          </nav>

          {/* Phone CTA */}
          <a
            href={BUSINESS.phoneLink}
            className="hidden md:inline-flex btn-primary text-sm"
          >
            <Phone className="w-4 h-4" />
            Call {BUSINESS.phone}
          </a>

          {/* Mobile direct call button */}
          <a
            href={BUSINESS.phoneLink}
            className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs shadow-sm active:scale-95 transition-all"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call Now</span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-navy-700 hover:bg-navy-50"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-100 bg-white animate-slide-down">
          <div className="container-page py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link to="/" className="block py-2 font-medium text-navy-700">
              Home
            </Link>

            <div>
              <Link to="/services" className="block py-2 font-medium text-navy-700">
                Services
              </Link>
              <div className="pl-4 space-y-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="block py-1.5 text-sm text-navy-600"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <Link to="/service-areas" className="block py-2 font-medium text-navy-700">
                Service Areas
              </Link>
              <div className="pl-4 space-y-1">
                {SERVICE_AREAS.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/${a.slug}`}
                    className="block py-1.5 text-sm text-navy-600"
                  >
                    {a.city}, {a.state}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className="block py-2 font-medium text-navy-700">
              About
            </Link>
            <Link to="/faq" className="block py-2 font-medium text-navy-700">
              FAQ
            </Link>
            <Link to="/contact" className="block py-2 font-medium text-navy-700">
              Contact
            </Link>

            <a href={BUSINESS.phoneLink} className="btn-primary w-full">
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
