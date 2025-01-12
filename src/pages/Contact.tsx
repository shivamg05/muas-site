import { Instagram, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-up">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <p className="text-lg mb-6 text-center">Check us out on Instagram @umdmuas</p>
        
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.instagram.com/umdmuas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-umdred transition-colors"
          >
            <Instagram size={24} />
            <span>Instagram</span>
          </a>
          
          <a
            href="https://www.linkedin.com/company/maryland-uas/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-umdred transition-colors"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:umdmuas@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-umdred transition-colors"
          >
            <Mail size={24} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;