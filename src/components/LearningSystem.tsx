import { Section } from './Section';
import { CheckCircle2, Star } from 'lucide-react';

const processItems = [
  'Structured Weekly Sessions',
  'Guided Practice & Task Completion',
  'Consistent Engagement',
  'Feedback That Builds Understanding',
  'Accountability & Discipline',
  'Continuous Support via WhatsApp'
];

const gainItems = [
  'Stronger Problem-Solving Skills',
  'Improved Confidence in Maths & Science',
  'Better Test & Exam Performance',
  'Independent Learning Ability',
  'Clear Academic Progress',
  'A Growth Mindset'
];

export function LearningSystem() {
  return (
    <Section className="py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          A Learning System That Produces Results
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Success comes from structured learning, consistent effort, and guided support — not shortcuts.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            The Sirzone Learning Process
          </h3>
          <ul className="space-y-4">
            {processItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-accent/10 p-10 rounded-3xl border border-accent/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-accent">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white">
              <Star className="w-6 h-6" />
            </div>
            What Learners Gain
          </h3>
          <ul className="space-y-4">
            {gainItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
