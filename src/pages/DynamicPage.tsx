import { useParams, Navigate } from 'react-router-dom';
import { SERVICES, SERVICE_AREAS } from '@/data/content';
import ServiceDetail from '@/pages/ServiceDetail';
import ServiceAreaDetail from '@/pages/ServiceAreaDetail';

export default function DynamicPage() {
  const { slug } = useParams<{ slug: string }>();

  if (SERVICES.some((s) => s.slug === slug)) {
    return <ServiceDetail />;
  }

  if (SERVICE_AREAS.some((a) => a.slug === slug)) {
    return <ServiceAreaDetail />;
  }

  // Backward compatibility: redirect old service slugs (without -hahnville-la)
  const legacyService = SERVICES.find(
    (s) => s.slug === `${slug}-hahnville-la`
  );
  if (legacyService) {
    return <Navigate to={`/${legacyService.slug}`} replace />;
  }

  // Backward compatibility: redirect old area slugs (without electrician- prefix)
  const legacyArea = SERVICE_AREAS.find(
    (a) => a.slug === `electrician-${slug}`
  );
  if (legacyArea) {
    return <Navigate to={`/${legacyArea.slug}`} replace />;
  }

  return <Navigate to="/404" replace />;
}
