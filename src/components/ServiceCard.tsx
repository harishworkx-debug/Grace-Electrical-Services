import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceInfo } from '@/data/content';

type ServiceCardProps = {
  service: ServiceInfo;
  icon: React.ReactNode;
};

export default function ServiceCard({ service, icon }: ServiceCardProps) {
  return (
    <Link
      to={`/${service.slug}`}
      className="card group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.heroAlt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
        <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg">
          {icon}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-electric-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-navy-600 leading-relaxed flex-1">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 group-hover:gap-2.5 transition-all">
          <span>View {service.shortTitle} Details</span>
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
