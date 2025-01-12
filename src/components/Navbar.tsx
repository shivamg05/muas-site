import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={() => scrollToSection('home')}>
            <img 
              src="/lovable-uploads/746ce7ed-050f-48cb-b1a2-6cce35460acc.png" 
              alt="UMD MUAS Logo" 
              className="h-10 w-10"
            />
            <span className="text-umdred font-bold text-xl">UMD MUAS</span>
          </Link>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-umdred transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-white md:relative md:top-0 md:block`}>
            <div className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-umdred transition-colors py-2 md:py-0"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('support')}
                className="text-gray-600 hover:text-umdred transition-colors py-2 md:py-0"
              >
                Sponsor
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className="text-gray-600 hover:text-umdred transition-colors py-2 md:py-0"
              >
                News
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-umdred transition-colors py-2 md:py-0"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;