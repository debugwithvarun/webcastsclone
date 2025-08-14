
import React from 'react';

const ServicesCTA = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-[#101823] py-20">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Need us to serve you?
          </h2>
          
          <p className="text-xl text-gray-300">
            We work closely with you to understand your unique requirements and deliver 
            customized solutions that exceed your expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2">
              <span>Let's Talk</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Case Studies
            </button>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">400+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">11,000+</div>
              <div className="text-gray-300">Events Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
