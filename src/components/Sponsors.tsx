
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
        <h2 id="sponsors-title" className="text-4xl font-bold mb-12 text-center">Meet Our 2024-2025 Sponsors</h2>
        
        <div className="flex justify-center items-center relative h-24">
          <div className="absolute inset-0 flex justify-between items-center">
            <a 
              href="https://www.solidworks.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-1/3"
            >
              <img 
                src="/lovable-uploads/d6e52c95-2b37-470a-ba7e-77496fec355f.png"
                alt="Solidworks"
                className="h-16 w-auto object-contain"
              />
            </a>
            
            <a 
              href="https://www.leidos.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-1/3"
            >
              <img 
                src="/lovable-uploads/6b3c559b-b264-42cb-9704-dfc841ead825.png"
                alt="Leidos"
                className="h-16 w-auto object-contain"
              />
            </a>
            
            <a 
              href="https://eng.umd.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-1/3"
            >
              <img 
                src="/lovable-uploads/46ab79f9-004b-4145-8cb5-e70719337560.png"
                alt="UMD Engineering"
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
