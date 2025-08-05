// components/UseCasesSection.tsx
import React from 'react';
import Image from 'next/image';

const UseCasesSection = () => {
  const useCases = [
    {
      title: 'AI Training',
      description: 'Advanced AI-powered training sessions',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Global Events',
      description: 'Worldwide conference management',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Live Streaming',
      description: 'High-quality live event broadcasting',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Interactive Sessions',
      description: 'Engaging participant interactions',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Use Cases
          </h2>
          <p className="text-gray-300 text-lg">
            Discover how our platform serves various industries and event types
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-blue-100">{useCase.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
