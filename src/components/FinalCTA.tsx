import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function FinalCTA({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-[3rem] overflow-hidden relative">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="grid lg:grid-cols-2 items-center relative z-10">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Start Improving Today
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-md">
                Take control of your learning and start seeing real progress.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onApply}
                  className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://wa.me/27795178174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" /> Contact via WhatsApp
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] lg:min-h-0">
              <img
                src="https://i.ibb.co/6RY0ZFcP/Image.png"
                alt="Final CTA"
                className="absolute inset-0 w-full h-full object-cover lg:rounded-l-[3rem]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
