import { Section } from './Section';

const stats = [
  { label: 'Teaching & Academic Experience', value: '30+', sub: 'Years' },
  { label: 'Across schools and tutoring programs', value: '1000+', sub: 'Learners Supported' },
  { label: 'UCT • UWC • Stellenbosch • WCED & more', value: '10+', sub: 'Institutions & Programs' },
  { label: 'Ongoing guidance via WhatsApp', value: '24/7', sub: 'Support Access' },
];

export function Stats() {
  return (
    <Section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</p>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">{stat.sub}</p>
              <p className="text-sm text-white/60 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
