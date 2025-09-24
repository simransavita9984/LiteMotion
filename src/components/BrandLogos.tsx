import React from 'react';

const BrandLogos = () => {
  const brands = [
    'Disney', 'Squatch', 'FRUIT OF THE LOOM', 'JLab', 'hp', 
    'Lasko', 'Jabra', 'NORDIC NATURALS', 'NIXON',
    'Disney', 'Squatch', 'FRUIT OF THE LOOM', 'JLab', 'hp'
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text uppercase tracking-wider">
            TRUSTED BY THE WORLD'S LEADING BRANDS
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-slide-left">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
                style={{ minWidth: '150px' }}
              >
                <span className="text-2xl font-bold text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;