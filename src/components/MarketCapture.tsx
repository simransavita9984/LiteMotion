import React from 'react';

const MarketCapture = () => {
  return (
    <section className="py-20 bg-gradient-purple">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Capture market share on the
              <br />
              <span className="text-gray-700">most important marketplaces</span>
            </h2>
            
            <p className="text-xl font-semibold text-gray-700">
              Scale with advanced AI on Amazon and Walmart's $0.6 Trillion market.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Join thousands of sellers capturing the most valuable customers 
              with Teikametrics' AI.
            </p>
          </div>

          {/* Right Side - Animated Circles */}
          <div className="relative flex justify-center">
            <div className="relative w-96 h-96">
              {/* Amazon Circle */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex flex-col items-center justify-center shadow-2xl animate-pulse-glow">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">a</span>
                </div>
                <div className="text-center text-white">
                  <div className="text-lg font-bold">$500 Billion</div>
                  <div className="text-xs">2024 GMV</div>
                  <div className="text-xs">U.S. Marketplace</div>
                  <div className="text-lg font-bold">#1</div>
                  <div className="text-xs">2024 YoY Growth</div>
                  <div className="text-lg font-bold">+12%</div>
                </div>
              </div>

              {/* Walmart Circle */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex flex-col items-center justify-center shadow-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold text-xs">*</span>
                </div>
                <div className="text-center text-white">
                  <div className="text-sm font-bold">$100 Billion</div>
                  <div className="text-xs">2024 GMV</div>
                  <div className="text-xs">U.S. Marketplace</div>
                  <div className="text-sm font-bold">#2</div>
                  <div className="text-xs">2024 YoY Growth</div>
                  <div className="text-sm font-bold">+23%</div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <defs>
                  <pattern id="dots" patternUnits="userSpaceOnUse" width="4" height="4">
                    <circle cx="2" cy="2" r="1" fill="#D1D5DB" />
                  </pattern>
                </defs>
                <path
                  d="M 120 80 Q 200 150 280 200"
                  stroke="url(#dots)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M 280 120 Q 200 200 120 280"
                  stroke="url(#dots)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketCapture;