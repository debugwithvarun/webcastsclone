
import React from 'react';

const UseCasesCTA = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-[#101823] py-20">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Want to create with us?
          </h2>
          
          <p className="text-xl text-gray-300">
            We would love to discuss your project. Step up, come and leverage our 
            experience with a budgets appropriate to the objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2">
              <span>LETS TALK</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="pt-8 text-center">
            <p className="text-gray-400 text-sm">
              Ready to transform your events? • Free consultation available • Global support team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesCTA;
