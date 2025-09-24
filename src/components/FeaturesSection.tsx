import React from 'react';
import { Brain, Zap, BarChart, Target, Layers, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive AI',
      description: 'Intelligent bidding calculates the perfect bid for every keyword and target, ensuring you never overspend or underspend on your advertising.',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Layers,
      title: 'Holistic AI Integration',
      description: 'Our Predictive AI is seamlessly integrated across all our solutions, ensuring a unified approach to optimizing every aspect of your marketplace strategy.',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Advanced AI Models',
      description: 'Teikametrics\' proprietary algorithms use a wealth of data points, including seasonality, holidays, product category, and more to forecast the optimal bid.',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Gain deep insights into your performance, monitor key metrics, track progress, and make data-driven decisions to enhance your marketplace strategy.',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: Target,
      title: 'Automation and real-time adjustments',
      description: 'The AI-powered bidder handles all bid management automatically, making real-time adjustments to maximize your advertising performance.',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: BarChart,
      title: 'Tailored to your goals',
      description: 'Set your ACoS Limit and other constraints to ensure our AI optimizes your campaigns according to your specific business objectives.',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            The Ultimate AI Platform for Your Marketplace Needs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="space-y-6">
      
                <div className="relative">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-200 rounded-full animate-float opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-200 rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;