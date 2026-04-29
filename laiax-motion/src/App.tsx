/**
 * Sandbox de motion/UI (Vite + React). Producción oficial: SPA por hash en /index.html
 * (Vanilla CSS + misma marca). Videos locales: `public/` o equivalente host en `/assets/`.
 */
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WorldCoreSection from "./components/WorldCoreSection";
import ThresholdSection from "./components/ThresholdSection";
import FeaturedVideoSection from "./components/FeaturedVideoSection";
import PhilosophySection from "./components/PhilosophySection";
import RegionSection from "./components/RegionSection";
import DecisionEngineSection from "./components/DecisionEngineSection";
import ServicesSection from "./components/ServicesSection";

export default function App() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <WorldCoreSection />
      <ThresholdSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <RegionSection />
      <DecisionEngineSection />
      <ServicesSection />
    </main>
  );
}
