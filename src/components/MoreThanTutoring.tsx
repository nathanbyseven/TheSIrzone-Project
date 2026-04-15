import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';

const tags = ['Mathematics', 'Physical Sciences', 'Problem Solving', 'Exam Preparation'];

export function MoreThanTutoring() {
  return (
    <Section id="programs" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://i.ibb.co/G3CLRPCb/image-8.png"
              alt="Learning System"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-2xl font-bold">30+</p>
            <p className="text-xs uppercase tracking-wider">Years Experience</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            More Than Tutoring — A Proven Academic System
          </h2>
          <div className="space-y-6 text-lg text-gray-600 mb-10 leading-relaxed">
            <p>
              The Sirzone is built on over 30 years of teaching, mentorship, and academic leadership.
            </p>
            <p>
              This is not just extra lessons — it’s a structured process designed to help learners improve consistently through discipline, guided practice, and continuous support.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {tag}
              </span>
            ))}
          </div>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
          >
            View Programs <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
