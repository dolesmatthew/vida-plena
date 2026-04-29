import './App.css';
import AboutSection from './components/church/AboutSection';
import BeliefsSection from './components/church/BeliefsSection';
import FooterSection from './components/church/FooterSection';
import GivingSection from './components/church/GivingSection';
import HeroSection from './components/church/HeroSection';
import LeadershipSection from './components/church/LeadershipSection';
import MinistriesSection from './components/church/MinistriesSection';
import MissionSection from './components/church/MissionSection';
import Navbar from './components/church/Navbar';
import SundaysSection from './components/church/SundaysSection';

function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <SundaysSection />
      <MinistriesSection />
      <BeliefsSection />
      <GivingSection />
      <FooterSection />
    </div>
  );
}

export default App;
