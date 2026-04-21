import './App.css'
import HeroSection from './components/church/HeroSection'
import MissionSection from './components/church/MissionSection'
import Navbar from './components/church/Navbar'
import ScrollSection from './components/church/ScrollSection'
import SundaysSection from './components/church/SundaysSection'

function App() {

  return (
     <div className="relative font-sans">
      <ScrollSection />
      <Navbar />
      <HeroSection />
      <MissionSection />
      <SundaysSection />
    </div>
  )
}

export default App
