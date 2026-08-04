import CustomCursor from './components/CustomCursor';
import ParticleField from './components/ParticleField';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Showcase from './components/Showcase';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cursor-glow relative min-h-screen overflow-hidden bg-carbon-950">
      <CustomCursor />
      <ParticleField />

      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Showcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
