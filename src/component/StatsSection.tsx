// components/StatsSection.tsx
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '7+', label: 'Years of Experience' },
    { number: '43+', label: 'Countries Served' },
    { number: '11,000+', label: 'Events Delivered' },
    { number: '400+', label: 'Happy Clients' }
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            One Stop Shop for All Event Requirements
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From small meetings to large-scale conferences, we provide comprehensive 
            event solutions with global reach and multilingual support.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
