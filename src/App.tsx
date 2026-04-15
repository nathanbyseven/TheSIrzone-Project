import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { MoreThanTutoring } from './components/MoreThanTutoring';
import { Stats } from './components/Stats';
import { Subjects } from './components/Subjects';
import { LearningProcess } from './components/LearningProcess';
import { LearningSystem } from './components/LearningSystem';
import { MeetTutor } from './components/MeetTutor';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ApplicationForm } from './components/ApplicationForm';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const openApplication = () => setIsApplicationOpen(true);
  const closeApplication = () => setIsApplicationOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onApply={openApplication} />
      
      <main>
        <Hero onApply={openApplication} />
        <TrustStrip />
        <MoreThanTutoring />
        <Stats />
        <Subjects />
        <LearningProcess />
        <LearningSystem />
        <MeetTutor />
        <Pricing onApply={openApplication} />
        <FAQ />
        <FinalCTA onApply={openApplication} />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {isApplicationOpen && (
          <ApplicationForm isOpen={isApplicationOpen} onClose={closeApplication} />
        )}
      </AnimatePresence>
    </div>
  );
}
