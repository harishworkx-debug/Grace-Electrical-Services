import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/content';

export default function FloatingCallButton() {
  return (
    <aside aria-label="Quick contact" className="md:hidden">
      <a
        href={BUSINESS.phoneLink}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-navy-950 font-bold px-4 py-3 rounded-full shadow-2xl border-2 border-white/90 active:scale-95 hover:shadow-amber-500/30 transition-all duration-200"
        aria-label={`Call Grace Electrical Services at ${BUSINESS.phone}`}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-navy-950"></span>
        </span>
        <div className="w-7 h-7 rounded-full bg-navy-950 flex items-center justify-center text-amber-400 shadow-sm">
          <Phone className="w-4 h-4 fill-current" />
        </div>
        <div className="flex flex-col text-left leading-tight pr-1">
          <span className="text-[10px] font-semibold text-navy-800 uppercase tracking-wider">
            Call Direct
          </span>
          <span className="text-xs font-black tracking-tight text-navy-950">
            {BUSINESS.phone}
          </span>
        </div>
      </a>
    </aside>
  );
}
