
import About from "../components/About";
import News from "./News";
import Contact from "./Contact";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import SupportForm from "@/components/SupportForm";
import Sponsors from "@/components/Sponsors";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <section id="about" className="py-16 bg-gray-50">
        <About />
      </section>
      <section id="sponsors" className="py-12 bg-white">
        <Sponsors />
      </section>
      <SupportForm />
      <section id="news" className="py-8 bg-gray-50">
        <News />
      </section>
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
