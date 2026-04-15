import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const [step, setStep] = useState(1);
  const [state, handleSubmit] = useForm('mlgagnzy');
  const [agreements, setAgreements] = useState({
    attendance: false,
    tasks: false,
    questions: false,
    effort: false,
  });

  const totalSteps = 6;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const allAgreed = Object.values(agreements).every(Boolean);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 md:p-8 border-b flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900">Apply to Join The Sirzone</h2>
            {step > 1 && !state.succeeded && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-1.5 w-32 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    className="h-full bg-primary"
                  />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {step} of {totalSteps}</span>
              </div>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {state.succeeded ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Application Received</h3>
              <p className="text-gray-600 mb-10 max-w-md mx-auto">
                Thank you for applying to The Sirzone. We will review your application and contact you shortly with the next steps.
              </p>
              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Prefer faster assistance?</p>
                <a
                  href="https://wa.me/27795178174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" /> Contact us on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="application-form">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="bg-secondary p-8 rounded-3xl">
                      <p className="text-lg text-primary font-medium leading-relaxed mb-6">
                        This is a structured academic programme designed for learners who are ready to improve through consistency, effort, and guided support.
                      </p>
                      <ul className="space-y-4">
                        {[
                          'Weekly structured sessions',
                          'Task-based learning',
                          'Continuous feedback',
                          'WhatsApp support'
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-primary/80 font-semibold">
                            <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                    >
                      Start Application <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Learner Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Learner Full Name</label>
                        <input type="text" name="learner_name" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Date of Birth</label>
                        <input type="date" name="learner_dob" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">School Name</label>
                        <input type="text" name="school_name" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Grade</label>
                        <select name="grade" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none">
                          <option value="Grade 10">Grade 10</option>
                          <option value="Grade 11">Grade 11</option>
                          <option value="Grade 12">Grade 12</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase">Parent/Guardian Name</label>
                      <input type="text" name="parent_name" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Parent Contact Number</label>
                        <input type="tel" name="parent_phone" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                        <input type="email" name="email" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Last Mathematics Mark (%)</label>
                        <input type="number" name="math_mark" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase">Last Physical Sciences Mark (%)</label>
                        <input type="number" name="science_mark" required className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-bold text-gray-500 uppercase">Subjects Needed</label>
                      <div className="flex flex-wrap gap-4">
                        {['Mathematics', 'Physical Sciences', 'Both'].map((subj) => (
                          <label key={subj} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" name="subjects" value={subj} className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">{subj}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase">Where do you feel you need the most help?</label>
                      <textarea name="help_needed" required rows={4} className="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 outline-none resize-none" />
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Commitment to the Process</h3>
                      <p className="text-gray-600">I understand that success in this programme requires consistency, effort, and participation.</p>
                    </div>
                    <div className="space-y-4">
                      {[
                        { id: 'attendance', label: 'I will attend sessions consistently' },
                        { id: 'tasks', label: 'I will complete and submit tasks' },
                        { id: 'questions', label: 'I will ask questions when I need help' },
                        { id: 'effort', label: 'I understand that progress depends on my effort' },
                      ].map((item) => (
                        <label key={item.id} className={cn(
                          "flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer",
                          agreements[item.id as keyof typeof agreements] ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200"
                        )}>
                          <input
                            type="checkbox"
                            checked={agreements[item.id as keyof typeof agreements]}
                            onChange={(e) => setAgreements({ ...agreements, [item.id]: e.target.checked })}
                            className="w-6 h-6 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <span className="font-bold text-gray-700">{item.label}</span>
                        </label>
                      ))}
                    </div>
                    {!allAgreed && (
                      <p className="text-xs text-red-500 font-bold text-center">Please agree to all points to proceed.</p>
                    )}
                  </motion.div>
                )}

                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Plan Selection</h3>
                    <div className="space-y-4">
                      {[
                        { id: 'math', label: 'Mathematics Plan', price: 'R1200/month', desc: '1 session per week' },
                        { id: 'both', label: 'Math + Science Plan', price: 'R1800/month', desc: '2 sessions per week' },
                        { id: 'mentor', label: '1-on-1 Mentorship', price: 'Custom', desc: 'Private sessions' },
                      ].map((plan) => (
                        <label key={plan.id} className="flex items-center justify-between p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/30 cursor-pointer group transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                          <div className="flex items-center gap-4">
                            <input type="radio" name="plan" value={plan.label} required className="w-5 h-5 text-primary focus:ring-primary" />
                            <div>
                              <p className="font-bold text-gray-900">{plan.label}</p>
                              <p className="text-sm text-gray-500">{plan.desc}</p>
                            </div>
                          </div>
                          <span className="font-bold text-primary">{plan.price}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Review & Submit</h3>
                    <div className="bg-gray-50 p-6 rounded-2xl space-y-4 text-sm">
                      <p className="flex justify-between border-b pb-2"><span className="text-gray-500">Learner:</span> <span className="font-bold">Check form for details</span></p>
                      <p className="flex justify-between border-b pb-2"><span className="text-gray-500">Selected Plan:</span> <span className="font-bold">Check form for details</span></p>
                    </div>
                    <label className="flex items-center gap-3 p-4 bg-secondary rounded-2xl cursor-pointer">
                      <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-sm font-bold text-primary">I confirm that all information provided is accurate</span>
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Footer Buttons */}
              <div className="mt-10 flex gap-4 sticky bottom-0 bg-white pt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-4 border-2 border-gray-100 rounded-2xl font-bold text-gray-500 hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                )}
                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={step === 4 && !allAgreed}
                    className="flex-[2] bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    Next Step <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="flex-[2] bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {state.submitting ? 'Submitting...' : 'Submit Application'} <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
