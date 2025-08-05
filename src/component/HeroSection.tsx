
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
      
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Multilingual Webcasts
                <span className="block text-blue-400">in 20 languages at a time</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Reach a global audience with our advanced multilingual webcast platform. 
                Connect with participants worldwide in their native language.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>

       
            <div className="grid grid-cols-10 gap-2 max-w-md">
              {[
                '🇺🇸', '🇬🇧', '🇫🇷', '🇩🇪', '🇪🇸', '🇮🇹', '🇯🇵', '🇰🇷', '🇨🇳', '🇮🇳',
                '🇧🇷', '🇷🇺', '🇳🇱', '🇸🇪', '🇳🇴', '🇵🇹', '🇵🇱', '🇹🇷', '🇸🇦', '🇦🇪'
              ].map((flag, index) => (
                <div key={index} className="text-2xl p-1 bg-white/10 rounded backdrop-blur-sm">
                  {flag}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl">
                <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm">Live Webcast Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
