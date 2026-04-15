import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero({ onApply }: { onApply: () => void }) {
  return (
    <section id="home" className="relative min-height-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-primary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
            Academic Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Academic Excellence Starts With the Right Guidance
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Online Mathematics and Physical Sciences tutoring led by an experienced educator with over 30 years of teaching, mentoring, and academic leadership.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onApply}
              className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#programs"
              className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              View Programs
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img
              src="https://i.ibb.co/tp61ztr7/Card-01.png"
              alt="Hero Main"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">30+</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Years Experience</p>
                <p className="text-xs text-gray-500">Expert Mentorship</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
