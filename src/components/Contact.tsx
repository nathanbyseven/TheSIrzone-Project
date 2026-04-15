import { useForm, ValidationError } from '@formspree/react';
import { Section } from './Section';
import { Phone, Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';

export function Contact() {
  const [state, handleSubmit] = useForm('mlgagnwy');

  return (
    <Section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out and we’ll guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-6">
                <a href="tel:+27795178174" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone / WhatsApp</p>
                    <p className="font-bold">079 517 8174</p>
                  </div>
                </a>
                <a href="mailto:info@sirzone.co.za" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email</p>
                    <p className="font-bold">info@sirzone.co.za</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" /> Prefer a Faster Response?
              </h3>
              <p className="text-white/80 mb-6">
                Contact us directly via WhatsApp for quick assistance.
              </p>
              <a
                href="https://wa.me/27795178174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Before You Reach Out</h3>
              <p className="text-gray-600 mb-4">We work with learners who are ready to:</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Attend sessions consistently
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Complete tasks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> Take responsibility
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
              
              {state.succeeded ? (
                <div className="bg-secondary p-8 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">Message Sent!</h4>
                  <p className="text-primary/80">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="john@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="079 517 8174"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Learner Grade</label>
                      <select
                        name="grade"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                      >
                        <option value="">Select Grade</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Pricing Plan</label>
                    <select
                      name="plan"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                    >
                      <option value="">Select a Plan</option>
                      <option value="Math / Physics Plan">Math / Physics Plan (R1,200/mo)</option>
                      <option value="Math + Science Plan">Math + Science Plan (R1,800/mo)</option>
                      <option value="1-on-1 Mentorship">1-on-1 Mentorship (Custom)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      placeholder="Your message here..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'} <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
