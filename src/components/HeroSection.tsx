import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[60vh] bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/754ba45c-00bc-4664-9f0f-3ff785f43a65.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-4">
            University of Maryland's Unmanned Aerial Systems (MUAS) Team
          </h1>
          <p className="text-xl">
            Pushing the boundaries of autonomous flight technology
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;