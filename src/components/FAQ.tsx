import { useState } from 'react';
import { Section } from './Section';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    q: "Are sessions online or in person?",
    a: "All sessions are online. In-person is for institutions only."
  },
  {
    q: "Do you offer 1-on-1 tutoring?",
    a: "Yes, on request."
  },
  {
    q: "What’s included?",
    a: "Sessions, structured learning, feedback, WhatsApp support."
  },
  {
    q: "Do I need to commit monthly?",
    a: "Yes — consistency is key."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border rounded-2xl transition-all",
                openIndex === index ? "border-primary bg-primary/5 shadow-sm" : "border-gray-100 hover:border-gray-200"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
