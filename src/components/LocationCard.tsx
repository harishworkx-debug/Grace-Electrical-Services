import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Clock, Compass } from 'lucide-react';
import { ServiceAreaInfo } from '@/data/content';

export default function LocationCard({ area }: { area: ServiceAreaInfo }) {
  return (
    <Link
      to={`/${area.slug}`}
      className="card group p-6 flex flex-col justify-between hover:shadow-lg hover:border-electric-300 transition-all bg-white rounded-2xl border border-navy-100"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-electric-50 flex items-center justify-center shrink-0 group-hover:bg-electric-600 group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5 text-electric-600 group-hover:text-white" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900 group-hover:text-electric-700 transition-colors">
                {area.city}, {area.state}
              </h3>
              <span className="text-xs text-navy-500 font-medium">
                ZIP: {area.zip}
              </span>
            </div>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
              area.bank === 'West Bank'
                ? 'bg-amber-100 text-amber-900 border border-amber-200'
                : 'bg-electric-50 text-electric-800 border border-electric-200'
            }`}
          >
            {area.bank}
          </span>
        </div>

        <p className="text-xs font-semibold text-electric-700 mb-2">
          {area.headline}
        </p>

        <p className="text-xs sm:text-sm text-navy-600 leading-relaxed line-clamp-3 mb-4">
          {area.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-navy-500 flex items-center gap-1 font-medium">
          <Clock className="w-3.5 h-3.5 text-amber-500" />
          {area.travelTimeFromHQ.split('(')[0].trim()}
        </span>
        <span className="inline-flex items-center gap-1 font-bold text-electric-600 group-hover:text-electric-800 transition-colors">
          View Services
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
