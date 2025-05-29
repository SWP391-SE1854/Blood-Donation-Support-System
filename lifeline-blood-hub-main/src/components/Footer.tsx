
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blood-red p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white animate-pulse-heart" />
              </div>
              <div>
                <h3 className="text-xl font-bold">LifeLine</h3>
                <p className="text-sm text-gray-400">Blood Hub</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting donors with those in need. Every donation saves up to 3 lives and strengthens our community's health network.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blood-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blood-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blood-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blood-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#donate" className="text-gray-300 hover:text-white transition-colors">Donate Blood</a></li>
              <li><a href="#request" className="text-gray-300 hover:text-white transition-colors">Request Blood</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blood Donation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Plasma Donation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Platelet Donation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Blood Drives</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Health Screening</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blood-red mt-1" />
                <div>
                  <p className="font-semibold">Emergency Line</p>
                  <p className="text-gray-300">+1 (555) 123-BLOOD</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blood-red mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">info@lifelineblood.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blood-red mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300">123 Health Street<br />Medical District, MD 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-blood-red rounded-lg p-6 mb-8 text-center">
          <h3 className="text-xl font-bold mb-2">Emergency Blood Needed</h3>
          <p className="mb-4">Critical shortage of O- and AB+ blood types. Your donation can save lives today.</p>
          <button className="bg-white text-blood-red px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Donate Now
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 LifeLine Blood Hub. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
