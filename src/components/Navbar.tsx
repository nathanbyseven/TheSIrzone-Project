import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Programs', href: '#programs' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar({ onApply }: { onApply: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={isScrolled ? "https://i.ibb.co/4nwyyZ90/Group-10.png" : "https://i.ibb.co/4wrnBdQp/Group-9.png"} 
            alt="The Sirzone Logo" 
            className="h-10 w-auto transition-all"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isScrolled ? 'text-gray-700' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onApply}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95',
              isScrolled 
                ? 'bg-primary text-white shadow-md hover:bg-primary/90' 
                : 'bg-white text-primary hover:bg-gray-100'
            )}
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden border-t mt-4 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onApply();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold mt-2"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
