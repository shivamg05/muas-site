
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Meet Our 2024-2025 Sponsors</h2>
        <div className="h-32">
          {/* Space reserved for sponsor logos */}
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
