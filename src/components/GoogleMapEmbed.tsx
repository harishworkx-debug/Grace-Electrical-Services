import { BUSINESS } from '@/data/content';

export default function GoogleMapEmbed({ height = 450 }: { height?: number }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-navy-100">
      <iframe
        src={BUSINESS.mapsEmbed}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title={`Map showing ${BUSINESS.name} in ${BUSINESS.city}, ${BUSINESS.state}`}
      />
    </div>
  );
}
