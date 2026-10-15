import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { ServiceAreaInfo } from '@/data/content';

export default function LocationCard({ area }: { area: ServiceAreaInfo }) {
  return (
    <Link
      to={`/${area.slug}`}
      className="card group p-5 flex flex-col"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-electric-50 flex items-center justify-center shrink-0 group-hover:bg-electric-100 transition-colors">
          <MapPin className="w-5 h-5 text-electric-600" />
        </div>
        <div>
          <h3 className="font-display font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
            {area.city}, {area.state}
          </h3>
        </div>
      </div>
      <p className="text-sm text-navy-600 leading-relaxed line-clamp-2 flex-1">
        {area.description}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-electric-600 group-hover:gap-2 transition-all">
        View {area.city} Services
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
