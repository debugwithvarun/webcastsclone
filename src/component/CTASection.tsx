// components/CTASection.tsx
import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to discuss your next
            <span className="block text-blue-400">LIVE Event?</span>
          </h2>
          
          <p className="text-xl text-gray-300">
            Let's create an unforgettable multilingual experience for your global audience. 
            Our experts are ready to help you plan and execute your next event.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2">
              <span>📞</span>
              <span>Schedule a Call</span>
            </button>
            
            <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Quote
            </button>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Join 400+ satisfied clients worldwide • Available 24/7 • Free consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
