
import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#101823] via-blue-900 to-[#101823] py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Physical, Virtual & Hybrid
                <span className="block text-blue-400">Event Management Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Comprehensive event solutions for all your business needs. 
                From intimate meetings to large-scale global conferences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Quote
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl aspect-video flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div className="bg-white/20 rounded p-2">
                        <div className="text-green-400 font-bold text-lg">98%</div>
                        <div>Uptime</div>
                      </div>
                      <div className="bg-white/20 rounded p-2">
                        <div className="text-blue-400 font-bold text-lg">24/7</div>
                        <div>Support</div>
                      </div>
                      <div className="bg-white/20 rounded p-2">
                        <div className="text-yellow-400 font-bold text-lg">20+</div>
                        <div>Languages</div>
                      </div>
                      <div className="bg-white/20 rounded p-2">
                        <div className="text-purple-400 font-bold text-lg">Global</div>
                        <div>Reach</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-white text-sm">
                  Event Management Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
