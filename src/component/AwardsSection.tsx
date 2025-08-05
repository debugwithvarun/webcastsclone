// components/AwardsSection.tsx
import React from 'react';

const AwardsSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Awards & Recognitions
            </h2>
            <p className="text-gray-300 text-lg">
              Our commitment to excellence has been recognized by industry leaders 
              and organizations worldwide.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Best Event Technology Platform 2024</h3>
                  <p className="text-gray-400 text-sm">Global Events Awards</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥇</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Innovation in Multilingual Solutions</h3>
                  <p className="text-gray-400 text-sm">Tech Excellence Awards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Testimonial */}
          <div className="relative">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-sm">Client Testimonial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
