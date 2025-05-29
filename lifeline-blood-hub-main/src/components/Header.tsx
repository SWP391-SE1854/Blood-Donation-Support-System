
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blood-red" />
            <span className="text-xl font-bold">LifeLine</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blood-red transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-blood-red transition-colors">
              About Us
            </a>
            <a href="#find" className="text-white hover:text-blood-red transition-colors">
              Find Blood
            </a>
            <a href="#register" className="text-white hover:text-blood-red transition-colors">
              Register Now
            </a>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-blood-red transition-colors">
                Home
              </a>
              <a href="#about" className="text-white hover:text-blood-red transition-colors">
                About Us
              </a>
              <a href="#find" className="text-white hover:text-blood-red transition-colors">
                Find Blood
              </a>
              <a href="#register" className="text-white hover:text-blood-red transition-colors">
                Register Now
              </a>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black mt-4">
                Log In
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
