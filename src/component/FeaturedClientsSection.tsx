// components/FeaturedClientsSection.tsx
import React from 'react';

const FeaturedClientsSection = () => {
  const clients = [
    'TCS', 'Accenture', 'KPMG', 'Deloitte', 'Wipro', 'Infosys',
    'IBM', 'Microsoft', 'Amazon', 'Oracle', 'SAP', 'Adobe'
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Clients
          </h2>
          <p className="text-gray-300 text-lg">
            Trusted by leading organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full text-center hover:bg-white/20 transition-colors">
                <span className="text-white font-semibold text-sm lg:text-base">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClientsSection;
