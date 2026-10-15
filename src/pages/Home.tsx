import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Zap,
  Wrench,
  Plug,
  ToggleRight,
  ShieldAlert,
  Lightbulb,
  Cable,
  Home as HomeIcon,
  Building2,
  PhoneCall,
  ClipboardList,
  Sparkles,
  MapPin,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Clock,
  Shield,
  Activity,
  Check,
} from 'lucide-react';
import { useSEO, BASE_URL } from '@/hooks/useSEO';
import { BUSINESS, SERVICES, SERVICE_AREAS, GENERAL_FAQS } from '@/data/content';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
import CTABanner from '@/components/CTABanner';
import FAQAccordion from '@/components/FAQAccordion';

const iconMap: Record<string, React.ReactNode> = {
  Cable: <Cable className="w-5 h-5 text-navy-900" />,
  Wrench: <Wrench className="w-5 h-5 text-navy-900" />,
  Plug: <Plug className="w-5 h-5 text-navy-900" />,
  ToggleRight: <ToggleRight className="w-5 h-5 text-navy-900" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-navy-900" />,
  Zap: <Zap className="w-5 h-5 text-navy-900" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-navy-900" />,
  Home: <HomeIcon className="w-5 h-5 text-navy-900" />,
  Building2: <Building2 className="w-5 h-5 text-navy-900" />,
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  url: BASE_URL,
  areaServed: {
    '@type': 'City',
    name: BUSINESS.city,
    addressRegion: 'LA',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.city,
    addressRegion: 'LA',
    postalCode: BUSINESS.zip,
    addressCountry: 'US',
  },
};

export default function Home() {
  useSEO({
    title: 'Grace Electrical Services | Electrician & Wiring in Hahnville, LA',
    description:
      'Trusted electrical wiring installation, panel upgrades, repairs, and troubleshooting in Hahnville, Louisiana & St. Charles Parish. Call 504-559-5351 for prompt service.',
    canonicalPath: '/',
    structuredData,
  });

  const warningSigns = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
      title: 'Frequent Circuit Breaker Trips',
      desc: 'Breakers that trip constantly signal an overloaded circuit, a short circuit, or a failing breaker that needs professional diagnosis.',
    },
    {
      icon: <Flame className="w-6 h-6 text-red-500" />,
      title: 'Burning Smell or Warm Outlets',
      desc: 'Wall plates feeling warm or producing a faint burning plastic smell indicate dangerous arching and should be addressed immediately.',
    },
    {
      icon: <Activity className="w-6 h-6 text-amber-500" />,
      title: 'Flickering or Dimming Lights',
      desc: 'Lights fluctuating when large appliances (like AC units or refrigerators) start up show voltage drops or wiring connectivity issues.',
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-electric-600" />,
      title: 'Outdated Fuse Boxes or 100A Panels',
      desc: 'Older properties with fuse boxes or undersized panels cannot handle modern power draws from computers, EVs, and modern appliances.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Buzzing or Crackling Panel Noises',
      desc: 'Electrical panels should operate silently. Humming, clicking, or buzzing sounds point to loose wire lugs or failing breaker connections.',
    },
    {
      icon: <Plug className="w-6 h-6 text-electric-600" />,
      title: 'Ungrounded 2-Prong Receptacles',
      desc: 'Old two-prong outlets lack crucial ground path protection, exposing valuable sensitive electronics and your family to shock hazards.',
    },
  ];

  const safetyPillars = [
    {
      title: 'National Electrical Code (NEC) Adherence',
      desc: 'Every wire run, panel connection, and fixture installation is strictly executed according to the latest electrical safety standards and local Parish codes.',
    },
    {
      title: 'Licensed Standards & Proven Workmanship',
      desc: 'We prioritize long-term safety over quick shortcuts, utilizing commercial-grade copper conductors, robust enclosures, and proper grounding rods.',
    },
    {
      title: 'South Louisiana Weather & Surge Resilience',
      desc: 'Hahnville and river corridor homes endure high humidity, heavy rainfall, and severe storm surges. We install equipment built to handle coastal conditions.',
    },
    {
      title: 'Transparent Diagnosis Before Any Repair',
      desc: 'No confusing jargon or surprise add-ons. We walk you through what the electrical problem is, the safest solution, and clear next steps.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Electrician installing electrical wiring wearing safety gear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-800/75" />
        </div>
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold border border-amber-500/30">
                <Zap className="w-4 h-4" fill="currentColor" />
                Primary Hub: Hahnville, Louisiana 70057
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-electric-500/20 text-electric-300 text-xs sm:text-sm font-medium border border-electric-500/30">
                <MapPin className="w-3.5 h-3.5" />
                Serving All of St. Charles Parish
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Professional Electrical Wiring &amp; Repair Services in Hahnville, LA
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8 max-w-xl">
              From new construction wiring and panel replacements to safety troubleshooting
              and dedicated circuits, Grace Electrical Services provides dependable, code-compliant
              electrical solutions for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={BUSINESS.phoneLink} className="btn-primary text-lg px-8 py-4 shadow-xl">
                <Phone className="w-5 h-5 fill-current" />
                Call {BUSINESS.phone}
              </a>
              <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="pt-4 border-t border-navy-800/80 flex flex-wrap items-center gap-6 text-xs text-navy-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Prompt Troubleshooting</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>NEC Code Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Direct Local Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Strip */}
      <section className="bg-navy-900 border-y border-navy-800 py-6">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <div className="font-display text-2xl md:text-3xl font-bold text-amber-400 mb-1">
                100%
              </div>
              <p className="text-xs md:text-sm text-navy-300 font-medium">
                Code Compliant Standards
              </p>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                Direct
              </div>
              <p className="text-xs md:text-sm text-navy-300 font-medium">
                Owner &amp; Electrician Contact
              </p>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl md:text-3xl font-bold text-amber-400 mb-1">
                10+
              </div>
              <p className="text-xs md:text-sm text-navy-300 font-medium">
                Communities Served
              </p>
            </div>
            <div className="p-3">
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                Residential &amp; Commercial
              </div>
              <p className="text-xs md:text-sm text-navy-300 font-medium">
                Full-Service Electrical Work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About Feature */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-electric-50 text-electric-700 text-sm font-semibold">
                About Grace Electrical Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
                Dependable Electrical Expertise for Hahnville &amp; St. Charles Parish
              </h2>
              <p className="text-lg text-navy-700 leading-relaxed">
                Grace Electrical Services is proudly based in Hahnville, Louisiana, located
                along the Mississippi River corridor. Electrical work requires rigorous precision,
                deep technical understanding of circuit loads, and an uncompromising commitment to safety.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Whether you are remodeling a historic plantation home, building a new addition, upgrading
                an outdated fuse box to a 200-amp circuit panel, or chasing down dangerous flickering lights,
                we provide the localized experience and responsive care you deserve. We treat every home
                and business like our own community neighbors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-50 border border-navy-100">
                  <ShieldCheck className="w-5 h-5 text-electric-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Safe Installations</h4>
                    <p className="text-xs text-navy-600 mt-0.5">Built to endure heavy Louisiana electrical demands.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-50 border border-navy-100">
                  <PhoneCall className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">Direct Answers</h4>
                    <p className="text-xs text-navy-600 mt-0.5">Speak with a knowledgeable professional on the first call.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Electrician working on electrical circuit panel in Hahnville"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg border border-navy-100">
                  <p className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                    Location &amp; Dispatch
                  </p>
                  <p className="text-sm font-semibold text-electric-700">
                    {BUSINESS.fullLocation}
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">
                    Fast response across St. Charles Parish communities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-100 text-electric-700 text-sm font-semibold mb-3">
              Comprehensive Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Electrical Services in Hahnville, LA
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto text-base">
              Explore our primary electrical solutions tailored to meet residential and
              commercial requirements across Hahnville and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                icon={iconMap[service.icon]}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All 10 Electrical Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Signs Section - When to Call an Electrician */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-3">
              <AlertTriangle className="w-4 h-4" />
              Safety Warning Signs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              When Should You Call An Electrician in Hahnville?
            </h2>
            <p className="text-navy-600 text-base leading-relaxed">
              Electrical hazards are often hidden behind sheetrock or inside breaker enclosures.
              If your home or facility is showing any of the following symptoms, prompt inspection is critical to prevent fire hazards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-navy-100 bg-white shadow-sm hover:shadow-md hover:border-amber-300 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-navy-950 shrink-0 shadow-md">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-base">
                  Experiencing any of these electrical warning signs?
                </h4>
                <p className="text-sm text-navy-700">
                  Call Grace Electrical Services right away at {BUSINESS.phone} to discuss troubleshooting.
                </p>
              </div>
            </div>
            <a href={BUSINESS.phoneLink} className="btn-primary shrink-0 whitespace-nowrap">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Weather & Storm Resilience Section */}
      <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-page relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs sm:text-sm font-semibold">
                South Louisiana Weather Readiness
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight text-white">
                Storm, Surge &amp; Generator Electrical Resilience in St. Charles Parish
              </h2>
              <p className="text-navy-300 text-base leading-relaxed">
                Between severe summer storms, high humidity, and hurricane season along the Mississippi
                River, electrical systems in Hahnville must withstand demanding conditions.
              </p>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm">Whole-Home Surge Suppression:</strong>
                    <p className="text-xs text-navy-300 mt-0.5">Protects air conditioners, refrigeration, and smart electronics from lightning grid spikes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm">Generator Transfer Switches &amp; Interlocks:</strong>
                    <p className="text-xs text-navy-300 mt-0.5">Safe, code-compliant back-feed prevention so you can power essentials during extended outages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm">Weatherproof Exterior Outlets &amp; Conduits:</strong>
                    <p className="text-xs text-navy-300 mt-0.5">Moisture-resistant outdoor GFCI installations that prevent dangerous water intrusion.</p>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <a href={BUSINESS.phoneLink} className="btn-primary">
                  <Phone className="w-4 h-4 fill-current" />
                  Discuss Storm Prep: {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-navy-900/90 border border-navy-800 backdrop-blur-sm">
                <Shield className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display font-bold text-lg text-white mb-2">Panel Upgrades</h3>
                <p className="text-xs text-navy-300 leading-relaxed">
                  Upgrade old 100A service to modern 200A capacity with dedicated breaker space for backup systems.
                </p>
                <Link
                  to="/electrical-panel-upgrades-hahnville-la"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-navy-900/90 border border-navy-800 backdrop-blur-sm">
                <Cable className="w-8 h-8 text-electric-400 mb-3" />
                <h3 className="font-display font-bold text-lg text-white mb-2">Rewiring Projects</h3>
                <p className="text-xs text-navy-300 leading-relaxed">
                  Replace degraded or ungrounded wiring with safe, heat-rated copper circuits throughout your property.
                </p>
                <Link
                  to="/electrical-rewiring-hahnville-la"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-electric-400 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-navy-900/90 border border-navy-800 backdrop-blur-sm">
                <Plug className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display font-bold text-lg text-white mb-2">GFCI Receptacles</h3>
                <p className="text-xs text-navy-300 leading-relaxed">
                  Required safety interrupters for wet areas, kitchens, bathrooms, laundry spaces, and garages.
                </p>
                <Link
                  to="/outlet-installation-hahnville-la"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-navy-900/90 border border-navy-800 backdrop-blur-sm">
                <Lightbulb className="w-8 h-8 text-electric-400 mb-3" />
                <h3 className="font-display font-bold text-lg text-white mb-2">Security Lighting</h3>
                <p className="text-xs text-navy-300 leading-relaxed">
                  Outdoor floodlights, motion-sensing perimeter illumination, and landscape lighting enhancements.
                </p>
                <Link
                  to="/lighting-installation-hahnville-la"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-electric-400 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential & Commercial Two-Card Showcase */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-100 text-electric-700 text-sm font-semibold mb-3">
              Sector Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Dedicated Solutions for Homes &amp; Commercial Facilities
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto text-base">
              Whether you need residential repairs or commercial tenant renovations, we have the experience and equipment to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/residential-electrical-services-hahnville-la"
              className="group relative rounded-2xl overflow-hidden h-80 flex items-end shadow-lg"
            >
              <img
                src="https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Residential electrical wiring installation in Hahnville"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/60 to-transparent" />
              <div className="relative p-8">
                <HomeIcon className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Residential Electrical Services
                </h3>
                <p className="text-navy-200 mb-4 text-sm leading-relaxed">
                  Complete wiring, service upgrades, recessed lighting, ceiling fans, and circuit repairs
                  tailored specifically for homeowners in Hahnville and nearby areas.
                </p>
                <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-sm group-hover:gap-2.5 transition-all">
                  Explore Residential Work <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link
              to="/commercial-electrical-services-hahnville-la"
              className="group relative rounded-2xl overflow-hidden h-80 flex items-end shadow-lg"
            >
              <img
                src="https://images.pexels.com/photos/8961695/pexels-photo-8961695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Commercial electrical cable installation"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-900/60 to-transparent" />
              <div className="relative p-8">
                <Building2 className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Commercial Electrical Work
                </h3>
                <p className="text-navy-200 mb-4 text-sm leading-relaxed">
                  Lighting installations, three-phase power distribution, tenant improvements, and electrical
                  diagnostics designed to minimize downtime for your business operations.
                </p>
                <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-sm group-hover:gap-2.5 transition-all">
                  Explore Commercial Work <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Safety & Quality Standards Pillars */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-100 text-electric-700 text-sm font-semibold mb-3">
              Safety Guarantees
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Safety &amp; Code Quality Commitment
            </h2>
            <p className="text-navy-600 text-base">
              Electricity is essential, but improper installation carries serious safety risks.
              Here is how we ensure every job is completed right.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {safetyPillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-navy-100 bg-navy-50/50 hover:bg-white hover:border-electric-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-electric-600 text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-navy-600 leading-relaxed pl-12">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold mb-3">
              Why Contact Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Grace Electrical Services?
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              We focus on honest advice, thorough diagnostics, and transparent communication before picking up any tool.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-navy-800/80 border border-navy-700">
              <div className="w-14 h-14 rounded-xl bg-electric-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <PhoneCall className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Clear Communication
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                We start by listening. Call us, describe what is happening, and we will
                discuss the situation in clear, straightforward terms without pressure.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-navy-800/80 border border-navy-700">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <ClipboardList className="w-7 h-7 text-navy-950" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Root-Cause Diagnostics
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                We don’t just swap breakers or reset outlets. We test circuit loads and
                wiring integrity to identify and fix the underlying issue permanently.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-navy-800/80 border border-navy-700">
              <div className="w-14 h-14 rounded-xl bg-electric-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Direct Local Service
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                You speak directly with the local professional handling your job. No nationwide
                call centers, no middlemen. Just dial {BUSINESS.phone}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-100 text-electric-700 text-sm font-semibold mb-3">
              Local Communities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Service Areas Across St. Charles Parish
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Based in Hahnville, Grace Electrical Services regularly serves neighboring communities
              on both sides of the Mississippi River corridor.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.slice(0, 6).map((area) => (
              <LocationCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/service-areas" className="btn-outline">
              View All 10 Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-navy-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Simple Workflow
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Simple Steps to Get Started
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Getting quality electrical work completed is straightforward and transparent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative p-6 rounded-2xl bg-white shadow-sm border border-navy-100">
              <div className="w-10 h-10 rounded-xl bg-electric-600 flex items-center justify-center text-white font-display font-bold text-lg mb-4 shadow-md">
                1
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                Call Our Office
              </h3>
              <p className="text-xs text-navy-600 leading-relaxed">
                Dial {BUSINESS.phone} and speak directly with us regarding your project or repair needs.
              </p>
            </div>
            <div className="relative p-6 rounded-2xl bg-white shadow-sm border border-navy-100">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-navy-950 font-display font-bold text-lg mb-4 shadow-md">
                2
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                Scope &amp; Details
              </h3>
              <p className="text-xs text-navy-600 leading-relaxed">
                Explain your property layout, electrical requirements, timeline, or urgent issues.
              </p>
            </div>
            <div className="relative p-6 rounded-2xl bg-white shadow-sm border border-navy-100">
              <div className="w-10 h-10 rounded-xl bg-electric-600 flex items-center justify-center text-white font-display font-bold text-lg mb-4 shadow-md">
                3
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                Expert Execution
              </h3>
              <p className="text-xs text-navy-600 leading-relaxed">
                We perform wiring, upgrades, or troubleshooting adhering strictly to National Electrical Codes.
              </p>
            </div>
            <div className="relative p-6 rounded-2xl bg-white shadow-sm border border-navy-100">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-navy-950 font-display font-bold text-lg mb-4 shadow-md">
                4
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                Safety Verification
              </h3>
              <p className="text-xs text-navy-600 leading-relaxed">
                Every circuit, switch, and outlet is thoroughly tested under load before we consider the job done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-electric-100 text-electric-700 text-sm font-semibold mb-3">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Clear answers to common questions about our electrical services and service areas.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={GENERAL_FAQS.slice(0, 6)} />
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="btn-outline">
              View All Frequently Asked Questions
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Electrical Project in Hahnville?"
        description={`Call Grace Electrical Services directly at ${BUSINESS.phone}. We are ready to answer your questions and arrange reliable electrical service.`}
      />
    </>
  );
}
