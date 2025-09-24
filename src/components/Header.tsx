import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold  text-black">teikametrics</span>
          </div>

    
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-primary   text-black transition-colors">
              <span className="font-medium">AI Platform</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="font-medium hover:text-primary  text-black transition-colors">Pricing</a>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-primary   text-black transition-colors">
              <span className="font-medium ">Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-primary   text-black transition-colors">
              <span className="font-medium">Company</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          <div className="flex items-center   space-x-4   text-black">
            <Button variant="ghost" className="font-medium">
              Log In
            </Button>
            <Button className="bg-gradient-primary  text-white hover:opacity-90 font-medium">
              Sign Up Risk-Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;