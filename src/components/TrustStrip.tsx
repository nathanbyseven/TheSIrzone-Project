import { motion } from 'motion/react';

const logos = [
  { src: "https://i.ibb.co/W4mLYLDD/Group-1.png", alt: "UWC" },
  { src: "https://i.ibb.co/dsy71scc/image-2.png", alt: "Stellenbosch" },
  { src: "https://i.ibb.co/XN7DbVd/image-4.png", alt: "WCED" },
  { src: "https://i.ibb.co/99JWrqCR/image-1.png", alt: "SHAWCO" },
  { src: "https://i.ibb.co/PsmGrqRw/image-3.png", alt: "IAHET" },
];

export function TrustStrip() {
  return (
    <div className="bg-white py-12 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Trusted through years of teaching, mentorship, and academic development
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center whitespace-nowrap"
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-16 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
              referrerPolicy="no-referrer"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
