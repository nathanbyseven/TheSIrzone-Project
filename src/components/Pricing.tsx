import { Section } from './Section';
import { Check, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const plans = [
  {
    name: 'Math / Physics Plan',
    price: 'R1,200',
    period: '/ month',
    features: [
      '1 session per week',
      'Structured lessons',
      'Weekly task guidance',
      'Feedback on work',
      'WhatsApp support'
    ],
    cta: 'Apply Now',
    popular: false
  },
  {
    name: 'Math + Science Plan',
    price: 'R1,800',
    period: '/ month',
    features: [
      '2 sessions per week',
      'Maths + Physical Sciences',
      'Structured plan',
      'Task feedback',
      'Priority support'
    ],
    cta: 'Apply Now',
    popular: true
  },
  {
    name: '1-on-1 Mentorship',
    price: 'Custom',
    period: ' Pricing',
    features: [
      'Private sessions',
      'Personalised plan',
      'Flexible scheduling',
      'Direct tutor access',
      'Intensive support'
    ],
    cta: 'Apply Now',
    popular: false
  }
];

export function Pricing({ onApply }: { onApply: () => void }) {
  return (
    <Section id="pricing" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Flexible Plans for Every Learner
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose a structured plan designed to support consistent academic improvement.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "relative p-10 rounded-3xl transition-all hover:scale-[1.02] duration-300",
              plan.popular 
                ? "bg-primary text-white shadow-2xl scale-105 z-10" 
                : "bg-white text-gray-900 shadow-sm border border-gray-100"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className={cn("text-sm", plan.popular ? "text-white/60" : "text-gray-500")}>
                {plan.period}
              </span>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", plan.popular ? "bg-white/20" : "bg-primary/10")}>
                    <Check className={cn("w-3 h-3", plan.popular ? "text-white" : "text-primary")} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={onApply}
              className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                plan.popular
                  ? "bg-white text-primary hover:bg-gray-100 shadow-lg"
                  : "bg-primary text-white hover:bg-primary/90"
              )}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <p className="text-sm text-gray-500 italic">
          Commitment Note: All plans require consistent participation, task completion, and engagement. Results come from commitment to the process.
        </p>
      </div>
    </Section>
  );
}
