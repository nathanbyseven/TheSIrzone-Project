import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/llewellyn-williams-87a83b1a/' },
  { icon: Facebook, href: 'https://www.facebook.com/thesirzone' },
  { icon: Instagram, href: 'https://www.instagram.com/mrlwilliams/' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Programs', href: '#programs' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <img 
            src="https://i.ibb.co/4wrnBdQp/Group-9.png" 
            alt="The Sirzone" 
            className="h-12 w-auto mb-6"
            referrerPolicy="no-referrer"
          />
          <p className="text-white/60 leading-relaxed mb-8">
            Academic Excellence Starts Here! Online Mathematics and Physical Sciences tutoring led by an experienced educator.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/60">
              <Phone className="w-5 h-5 text-primary" /> 079 517 8174
            </li>
            <li className="flex items-center gap-3 text-white/60">
              <Mail className="w-5 h-5 text-primary" /> info@sirzone.co.za
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-white/60 text-sm mb-4">Stay updated with academic tips and program news.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} The Sirzone. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
