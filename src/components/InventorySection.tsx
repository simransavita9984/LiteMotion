import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Package, BarChart } from 'lucide-react';

const InventorySection = () => {
  const [spinning, setSpinning] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const products = [
    { name: 'Smart Shoe', image: 'shoe', flags: ['🇺🇸', '🇨🇦', '🇬🇧', '🇫🇷'] },
    { name: 'Headphones', image: 'headphones', flags: ['🇺🇸', '🇩🇪', '🇯🇵'] },
    { name: 'Watch', image: 'watch', flags: ['🇺🇸', '🇬🇧', '🇦🇺'] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinning(true);
      setTimeout(() => {
        setCurrentProduct((prev) => (prev + 1) % products.length);
        setSpinning(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Inventory Optimization
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Maximize your stock's potential with intelligent FBA/WFS inventory 
              management. Predict demand, reduce stockouts, and optimize reorder 
              points to keep your sales flowing smoothly.
            </p>
            
            <Button className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-4">
              Transform your Inventory Strategy
            </Button>
          </div>

         
          <div className="relative">
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80">
                <div className={`absolute inset-0 rounded-full border-4 border-dashed border-purple-300 transition-transform duration-1000 ${spinning ? 'animate-spin' : ''}`}></div>
                
             
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 shadow-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center">
                    <Package className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">86</div>
                      <div className="text-sm text-muted-foreground">Current Level</div>
                    </div>
                  </div>
                </div>

         
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 animate-fade-in-up">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">71</div>
                    <div className="text-xs text-muted-foreground">Undelivered Products with<br />Low Sell Through Rate</div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-8 bg-white rounded-lg shadow-lg p-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <div className="text-center">
                    <div className="text-xl font-bold text-foreground">86</div>
                    <div className="text-xs text-muted-foreground">Current Inventory Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
        
          <div className="relative">
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
              
                <div className={`absolute inset-0 rounded-full border-4 border-dashed border-purple-300 transition-transform duration-1000 ${spinning ? 'animate-spin' : ''}`}></div>
                
        
                <div className="absolute inset-12 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6">
                  <div className="w-32 h-24 bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                    {products[currentProduct].image === 'shoe' && <div className="w-20 h-12 bg-gray-600 rounded-xl"></div>}
                    {products[currentProduct].image === 'headphones' && <div className="w-16 h-16 bg-black rounded-full"></div>}
                    {products[currentProduct].image === 'watch' && <div className="w-12 h-12 bg-pink-300 rounded-full"></div>}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{products[currentProduct].name}</h3>
                  
                  <div className="flex space-x-1 mb-4">
                    {products[currentProduct].flags.map((flag, i) => (
                      <span key={i} className="text-sm">{flag}</span>
                    ))}
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-2 w-full">
                    <div className="text-center">
                      <div className="text-sm font-medium">Listing Quality</div>
                      <div className="text-2xl font-bold">97<span className="text-sm">/100</span></div>
                    </div>
                  </div>
                </div>

             
                <div className="absolute bottom-0 left-0 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  amazon
                </div>

          
                <div className="absolute bottom-8 right-0 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                  <span>Walmart</span>
                  <span className="text-yellow-300">*</span>
                </div>

            
                <div className="absolute top-0 right-0 bg-white shadow-lg rounded-full p-2">
                  <div className="text-xs text-center">
                    <div className="font-bold text-pink-500">+</div>
                    <div className="text-gray-600">Expand to Walmart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                <BarChart className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            <h2 className="text-5xl font-bold text-foreground">
              GenAI Smart Pages
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Transform your product listings across Amazon and Walmart with AI-powered optimization.
            </p>
            
            <Button className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-4">
              Optimize Your GenAI Smart Pages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;