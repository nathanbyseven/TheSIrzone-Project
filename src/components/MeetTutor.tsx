import { Section } from './Section';
import { Quote } from 'lucide-react';

const tags = ['30+ Years Experience', 'Academic Mentor', 'Proven Results'];

export function MeetTutor() {
  return (
    <Section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Meet Your Tutor
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Learn directly from an experienced educator with over 30 years of teaching, mentoring, and academic leadership.
          </p>

          <div className="relative mb-10">
            <Quote className="absolute -top-6 -left-6 w-12 h-12 text-primary/10" />
            <blockquote className="text-2xl font-display italic text-gray-900 leading-relaxed pl-8 border-l-4 border-primary">
              “Success in these subjects is not about talent — it’s about consistency, effort, and the right guidance.”
            </blockquote>
          </div>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            “I’ve spent decades helping learners understand, not just memorise. My focus is to build confidence, discipline, and real problem-solving ability.”
          </p>

          <div className="mb-10">
            <h4 className="text-xl font-bold text-gray-900">Llewellyn Williams</h4>
            <p className="text-primary font-medium">Mathematics & Physical Sciences Educator</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
            <img
              src="https://i.ibb.co/qLfVq8JF/Card-05.png"
              alt="Llewellyn Williams"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </Section>
  );
}
