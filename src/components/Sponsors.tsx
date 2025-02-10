
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
        
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-8 px-4 md:justify-center min-w-max">
              <div className="relative">
                <a 
                  href="https://www.solidworks.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="/lovable-uploads/b47c78db-1cfa-437e-915f-32e68aaff55e.png"
                    alt="Solidworks"
                    className="h-32 w-auto object-contain"
                  />
                </a>
              </div>
              
              <div className="relative">
                <a 
                  href="https://www.leidos.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="/lovable-uploads/6b3c559b-b264-42cb-9704-dfc841ead825.png"
                    alt="Leidos"
                    className="h-32 w-auto object-contain"
                  />
                </a>
              </div>
              
              <div className="relative">
                <a 
                  href="https://eng.umd.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="/lovable-uploads/46ab79f9-004b-4145-8cb5-e70719337560.png"
                    alt="UMD Engineering"
                    className="h-32 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Fade effect for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent md:hidden"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
