import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { AISection } from "./components/AISection";
import { TeamSection } from "./components/TeamSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
      }}
    >
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <AISection />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
}
