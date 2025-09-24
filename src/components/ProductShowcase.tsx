import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, TrendingUp, Users } from 'lucide-react';

const ProductShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const productImages = [
    { type: 'watch', name: 'Smart Watch', price: '$125.00' },
    { type: 'headphones', name: 'Wireless Headphones', price: '$89.99' },
    { type: 'phone', name: 'Smartphone', price: '$299.00' },
    { type: 'tablet', name: 'Tablet', price: '$199.99' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Rotating Product Display */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Dotted Circle Animation */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-300 animate-spin-slow"></div>
              
              {/* Central Product Display */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 m-8">
                <div className="text-center space-y-6">
                  {/* Product Image Placeholder */}
                  <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center animate-pulse-glow">
                    <div className="w-20 h-20 bg-white/30 rounded-xl"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {productImages[currentImage].name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mt-2">
                      {productImages[currentImage].price}
                    </p>
                  </div>
                  
                  {/* Amazon/Walmart Badges */}
                  <div className="flex justify-center space-x-4">
                    <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                      Amazon
                    </div>
                    <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      Walmart
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Analytics Cards */}
              <div className="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-4 animate-fade-in-up">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm font-medium">Campaign Goal</div>
                    <div className="text-xs text-muted-foreground">Profit</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-lg p-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm font-medium">ACOS Limit</div>
                    <div className="text-lg font-bold">14.5%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Empower Your Business with{' '}
              <span className="text-transparent bg-gradient-primary bg-clip-text">
                Intelligent AI Solutions
              </span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Advertising Optimization
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Join thousands of sellers and brands using the premier AI ads platform.
                </p>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Boost your ads with AI
                </Button>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-foreground">
                  Solutions for every business model
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShoppingCart className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-foreground">Self-Service</h5>
                      <p className="text-muted-foreground">Designed for in-house teams and individual sellers.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-foreground">Managed Edition</h5>
                      <p className="text-muted-foreground">Built for businesses who need full service strategy and support.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-foreground">Agency</h5>
                      <p className="text-muted-foreground">Advanced tools for advertising strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;