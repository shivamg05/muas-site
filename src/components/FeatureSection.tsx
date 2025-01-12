import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
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
  );
};

export default FeatureSection;