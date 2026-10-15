import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FAQItem = { question: string; answer: string };

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
            className="border border-navy-100 rounded-xl bg-white overflow-hidden hover:border-navy-200 transition-colors"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy-900">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-electric-600 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-navy-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
