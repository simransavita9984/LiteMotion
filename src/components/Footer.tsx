import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Advertising Optimization */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Advertising Optimization</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Self-Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Managed Edition</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Agency</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inventory Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GenAI Smart Pages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hiive Social Shopping</a></li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Pricing</h3>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Agency & Solutions Directory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ebooks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Human in the Loop Podcast</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Logo and Badges */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-2xl font-bold">teikametrics</span>
              </div>
              
              {/* Award Badges */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold">BEST<br/>PLACES<br/>TO WORK</span>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-white">G2<br/>Leader</span>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-white">Walmart<br/>Connect</span>
                </div>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-white">amazon<br/>marketplace<br/>developer council</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-8 space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Teikametrics, Inc. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Teikametrics</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;