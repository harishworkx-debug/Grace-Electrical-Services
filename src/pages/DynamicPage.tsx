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

  return <Navigate to="/404" replace />;
}
