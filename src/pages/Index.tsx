import About from "./About";
import News from "./News";
import Contact from "./Contact";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import SupportForm from "@/components/SupportForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <section id="about" className="py-16 bg-gray-50">
        <About />
      </section>
      <SupportForm />
      <section id="news" className="py-16 bg-gray-50">
        <News />
      </section>
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </div>
  );
};

export default Index;