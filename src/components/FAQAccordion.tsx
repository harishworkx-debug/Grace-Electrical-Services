import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export type FAQItem = {
  question: string;
  answer: string;
  linkPath?: string;
  linkText?: string;
  category?: string;
};

export default function FAQAccordion({
  items,
  className = '',
}: {
  items: FAQItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="border border-navy-100 rounded-2xl bg-white overflow-hidden hover:border-navy-200 transition-all shadow-sm"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 group"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-navy-900 group-hover:text-electric-600 text-sm sm:text-base transition-colors">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isOpen ? 'bg-electric-50 text-electric-600 rotate-180' : 'bg-slate-50 text-navy-400 group-hover:bg-slate-100'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-50">
                  <p className="text-navy-600 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                  {item.linkPath && item.linkText && (
                    <div className="mt-3.5 pt-3 border-t border-slate-100">
                      <Link
                        to={item.linkPath}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-600 hover:text-electric-800 transition-colors"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
