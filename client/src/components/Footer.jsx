import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-100">
      {/* Main Footer Content */}

      <div className="container mx-auto px-4 h-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Column */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Shop<span className="text-indigo-600">Ease</span>
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <Facebook size={18} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            aria-label="Youtube"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
