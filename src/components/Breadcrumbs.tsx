import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export type Crumb = {
  label: string;
  to?: string;
};

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6">
      <ol className="flex items-center gap-1.5 text-sm text-navy-500 flex-wrap">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-electric-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-navy-300" />
            {crumb.to ? (
              <Link
                to={crumb.to}
                className="hover:text-electric-600 transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-navy-700 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
