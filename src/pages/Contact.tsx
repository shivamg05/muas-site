import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-up">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-lg mb-6">Check us out on Instagram @umd_muas</p>
        
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.instagram.com/umd_muas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-umdred transition-colors"
          >
            <Instagram size={24} />
            <span>Instagram</span>
          </a>
          
          <a
            href="https://www.linkedin.com/company/umd-muas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-umdred transition-colors"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;