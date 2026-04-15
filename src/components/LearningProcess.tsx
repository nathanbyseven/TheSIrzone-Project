import { Section } from './Section';

const steps = [
  { title: 'Weekly Sessions', desc: 'Structured lessons focused on key concepts' },
  { title: 'Practice & Submit Work', desc: 'Students actively attempt and submit tasks' },
  { title: 'Get Feedback', desc: 'Understand mistakes and improve' },
  { title: 'Stay Supported', desc: 'Ongoing help via WhatsApp and direct guidance' },
];

export function LearningProcess() {
  return (
    <Section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-12">
            A Proven Learning Process
          </h2>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://i.ibb.co/FL7gwBfx/image-9-1.png"
              alt="Learning Process"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative circles */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </Section>
  );
}
