import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/746ce7ed-050f-48cb-b1a2-6cce35460acc.png" 
              alt="UMD MUAS Logo" 
              className="h-10 w-10"
            />
            <span className="text-umdred font-bold text-xl">UMD MUAS</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-umdred font-semibold"
                  : "text-gray-600 hover:text-umdred"
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about")
                  ? "text-umdred font-semibold"
                  : "text-gray-600 hover:text-umdred"
              } transition-colors duration-200`}
            >
              About
            </Link>
            <Link
              to="/news"
              className={`${
                isActive("/news")
                  ? "text-umdred font-semibold"
                  : "text-gray-600 hover:text-umdred"
              } transition-colors duration-200`}
            >
              News
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "text-umdred font-semibold"
                  : "text-gray-600 hover:text-umdred"
              } transition-colors duration-200`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;