import React from 'react';
import AnimatedText from './AnimatedText';
import { Zap } from 'lucide-react';

const ProfitabilitySection = () => {
  const profitabilityTexts = [
    { text: 'increase profitability', color: '#8B5CF6' },
    { text: 'boost revenue', color: '#EC4899' },
    { text: 'maximize ROI', color: '#3B82F6' },
    { text: 'optimize growth', color: '#10B981' },
  ];

  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
    
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80">
         
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-300 "></div>
              
           
              <div className="absolute inset-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Zap className="w-10 h-10 text-purple-600" />
                </div>
              </div>
              
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-purple-400 rounded-full animate-pulse-glow"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-150px)`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Next-Generation AI to{' '}
              <AnimatedText 
                texts={profitabilityTexts}
                className="text-5xl font-bold"
              />
              <br />
              <span className="text-gray-600">
                for Amazon, Walmart, TikTok, & Hiive
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitabilitySection;