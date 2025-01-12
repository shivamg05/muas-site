import { motion } from "framer-motion";
import About from "./About";
import News from "./News";
import Contact from "./Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section id="home" className="relative h-[60vh] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
            opacity: 0.6,
          }}
        ></div>
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

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              Developing cutting-edge autonomous systems and advanced flight control algorithms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Competition</h3>
            <p className="text-gray-600">
              Participating in international competitions and achieving excellence in autonomous flight challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="text-gray-600">
              Training the next generation of aerospace engineers, computer scientists, and robotics specialists.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-50">
        <About />
      </section>

      <section id="news" className="py-16">
        <News />
      </section>

      <section id="contact" className="py-16 bg-gray-50">
        <Contact />
      </section>
    </div>
  );
};

export default Index;