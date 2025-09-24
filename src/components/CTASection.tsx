import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-purple">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-black  leading-tight">
            Ready to transform your marketplace strategy?
          </h2>
          
          <p className="text-xl  text-black max-w-2xl mx-auto">
            Join thousands of leading brands that trust Teikametrics to power their growth and success.
          </p>
          
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;