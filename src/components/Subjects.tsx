import { Section } from './Section';

const subjects = [
  {
    title: 'Mathematics',
    desc: 'Build strong foundations and improve problem-solving through structured weekly sessions.',
    icon: 'https://i.ibb.co/HLJHfz9N/Icon-2.png'
  },
  {
    title: 'Physical Sciences (Physics)',
    desc: 'Understand key concepts and apply them with confidence through guided learning.',
    icon: 'https://i.ibb.co/twt4NVr1/Icon-1.png'
  },
  {
    title: 'Chemistry',
    desc: 'Master complex topics with clear explanations and consistent practice.',
    icon: 'https://i.ibb.co/bjNbVk6Y/Icon.png'
  }
];

export function Subjects() {
  return (
    <Section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Subjects We Specialise In
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Focused academic support designed to strengthen understanding and improve performance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <img src={subject.icon} alt={subject.title} className="w-12 h-12" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{subject.title}</h3>
            <p className="text-gray-600 leading-relaxed">{subject.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
