import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BarChart, Users, ShoppingCart, TrendingUp, Zap, Target } from 'lucide-react';

const HeroSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const productImages = [
    { id: 1, type: 'watch', color: 'bg-pink-100' },
    { id: 2, type: 'phone', color: 'bg-blue-100' },
    { id: 3, type: 'dashboard', color: 'bg-purple-100' },
    { id: 4, type: 'chart', color: 'bg-green-100' },
  ];

  const floatingIcons = [
    { Icon: BarChart, position: 'top-20 left-20', delay: '0s' },
    { Icon: Users, position: 'top-32 right-32', delay: '0.5s' },
    { Icon: ShoppingCart, position: 'bottom-40 left-32', delay: '1s' },
    { Icon: TrendingUp, position: 'bottom-20 right-20', delay: '1.5s' },
    { Icon: Zap, position: 'top-1/2 left-16', delay: '2s' },
    { Icon: Target, position: 'top-1/3 right-16', delay: '2.5s' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % productImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-purple overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float`}
          style={{ animationDelay: delay }}
        >
          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The AI Marketplace
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Optimization Platform
                </span>
                <br />
                for Leading Brands
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Revolutionize your strategy with Teikametrics' cutting-edge AI platform. 
                Powering top brands with intelligent insights and unparalleled advertising performance.
              </p>
            </div>
            
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
              Request a Demo
            </Button>

            {/* Brand Logos */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Current AI-enabled Marketplaces</p>
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-orange-500">amazon</div>
                <div className="text-2xl font-bold text-blue-600">Walmart</div>
                <div className="text-2xl font-bold text-gray-800">TikTok</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Dashboard */}
          <div className="relative">
            <div className="relative z-10 space-y-6">
              {/* Main Dashboard Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl animate-fade-in-up">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold">AI Smart Campaigns</span>
                  </div>
                  <select className="text-sm border border-border rounded-lg px-3 py-1">
                    <option>Grow</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">18.5%</div>
                  <div className="text-sm text-muted-foreground">ACOS Limit</div>
                </div>
              </div>

              {/* Floating Product Cards */}
              <div className="relative">
                {productImages.map((product, index) => (
                  <div
                    key={product.id}
                    className={`absolute transition-all duration-500 ${
                      index === currentProduct 
                        ? 'opacity-100 transform scale-100' 
                        : 'opacity-60 transform scale-90'
                    }`}
                    style={{
                      right: `${index * 20}px`,
                      top: `${index * 15}px`,
                      zIndex: productImages.length - index,
                    }}
                  >
                    <div className={`w-32 h-32 ${product.color} rounded-2xl shadow-lg animate-pulse-glow flex items-center justify-center`}>
                      {product.type === 'watch' && <div className="w-16 h-16 bg-pink-300 rounded-full"></div>}
                      {product.type === 'phone' && <div className="w-12 h-20 bg-blue-300 rounded-lg"></div>}
                      {product.type === 'dashboard' && <BarChart className="w-12 h-12 text-purple-500" />}
                      {product.type === 'chart' && <TrendingUp className="w-12 h-12 text-green-500" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional UI Elements */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-sm font-medium mb-2">Optimize 4 listings</div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: `${Math.random() * 80 + 20}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;