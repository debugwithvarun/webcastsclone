
import React from 'react';

const UseCasesGrid = () => {
  const useCases = [
    {
      title: "Online (CMEs)",
      description: "Continuing Medical Education programs with interactive features and certification tracking.",
      image: "/api/placeholder/400/250",
      category: "Healthcare"
    },
    {
      title: "Webinars",
      description: "Professional webinar solutions with audience engagement tools and analytics.",
      image: "/api/placeholder/400/250",
      category: "Education"
    },
    {
      title: "Virtual Advisory Boards",
      description: "Secure, private virtual meetings for strategic discussions and expert consultations.",
      image: "/api/placeholder/400/250",
      category: "Corporate"
    },
    {
      title: "Town Hall Webcasts",
      description: "Large-scale corporate communications with interactive Q&A and polling features.",
      image: "/api/placeholder/400/250",
      category: "Corporate"
    },
    {
      title: "Live Surgery Events",
      description: "High-definition medical procedure broadcasts with multi-camera angles and expert commentary.",
      image: "/api/placeholder/400/250",
      category: "Healthcare"
    },
    {
      title: "Live CEO Address",
      description: "Executive communications to global audiences with professional production quality.",
      image: "/api/placeholder/400/250",
      category: "Corporate"
    },
    {
      title: "KOL Webinars",
      description: "Key Opinion Leader presentations with specialized medical and scientific content.",
      image: "/api/placeholder/400/250",
      category: "Healthcare"
    },
    {
      title: "Expert Symposiums & International Speaker Programs",
      description: "Multi-speaker events with global reach and simultaneous interpretation capabilities.",
      image: "/api/placeholder/400/250",
      category: "Education"
    },
    {
      title: "Investor Relations Webcasts",
      description: "Financial communications with secure access and compliance features.",
      image: "/api/placeholder/400/250",
      category: "Finance"
    },
    {
      title: "AGM",
      description: "Annual General Meetings with voting capabilities and regulatory compliance.",
      image: "/api/placeholder/400/250",
      category: "Corporate"
    },
    {
      title: "Product Launches",
      description: "Global product unveiling events with interactive demonstrations and media distribution.",
      image: "/api/placeholder/400/250",
      category: "Marketing"
    },
    {
      title: "Virtual & Hybrid Trainings",
      description: "Comprehensive training programs combining online and in-person elements.",
      image: "/api/placeholder/400/250",
      category: "Education"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Healthcare: "bg-green-600/20 text-green-300",
      Corporate: "bg-blue-600/20 text-blue-300",
      Education: "bg-purple-600/20 text-purple-300",
      Finance: "bg-yellow-600/20 text-yellow-300",
      Marketing: "bg-pink-600/20 text-pink-300"
    };
    return colors[category] || "bg-gray-600/20 text-gray-300";
  };

  return (
    <section className="bg-[#101823] py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Use Cases
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover how our platform serves various industries and event types with tailored solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50">
              {/* Image Container */}
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
                <div className="relative z-10 text-center p-6">
                  {/* Icon based on category */}
                  <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    {useCase.category === 'Healthcare' && (
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {useCase.category === 'Corporate' && (
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {useCase.category === 'Education' && (
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {useCase.category === 'Finance' && (
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {useCase.category === 'Marketing' && (
                      <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${getCategoryColor(useCase.category)}`}>
                    {useCase.category}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                
                <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesGrid;
