
import React from 'react';
import Image from 'next/image';

const ServicesGrid = () => {
  const services = [
    {
      title: "Webcasting - Live, Simulive & OnDemand",
      description: "Professional live streaming solutions with global reach and multilingual support.",
      image: "/api/placeholder/400/250",
      features: ["HD Quality", "Global CDN", "Real-time Analytics"]
    },
    {
      title: "Video Conferencing - Onsite, Virtual & Inhouse",
      description: "Seamless video conferencing solutions for all your business communication needs.",
      image: "/api/placeholder/400/250",
      features: ["Multi-platform", "Screen Sharing", "Recording"]
    },
    {
      title: "3D Virtual Platform - for Conferences & Exhibitions",
      description: "Immersive 3D virtual environments for conferences, trade shows, and exhibitions.",
      image: "/api/placeholder/400/250",
      features: ["Interactive Booths", "Networking", "Gamification"]
    },
    {
      title: "Managed Webinars - with a Dedicated Project Manager",
      description: "Full-service webinar management with dedicated support from planning to execution.",
      image: "/api/placeholder/400/250",
      features: ["Project Management", "Technical Support", "Analytics"]
    },
    {
      title: "Multilingual Webcasts - with Simultaneous Live Translation in 20 Languages at a time",
      description: "Break language barriers with real-time interpretation in multiple languages simultaneously.",
      image: "/api/placeholder/400/250",
      features: ["20+ Languages", "Professional Interpreters", "AI-Assisted"]
    },
    {
      title: "HYBRID Events - with multisensorial Onsite AV arrangements",
      description: "Perfect blend of physical and virtual events with comprehensive AV solutions.",
      image: "/api/placeholder/400/250",
      features: ["AV Equipment", "Live Streaming", "Interactive Elements"]
    },
    {
      title: "Event Management - Stage, Backdrop, MI - What got you covered!",
      description: "Complete event production services from stage design to technical execution.",
      image: "/api/placeholder/400/250",
      features: ["Stage Design", "Audio Visual", "Production"]
    },
    {
      title: "Voting Pads on Hire - upto 500 Voting Pads in a single event",
      description: "Interactive audience response systems for polls, surveys, and Q&A sessions.",
      image: "/api/placeholder/400/250",
      features: ["Real-time Results", "Anonymous Voting", "Data Analytics"]
    },
    {
      title: "Video Production - Includes Post Production and Editing",
      description: "Professional video production services with complete post-production support.",
      image: "/api/placeholder/400/250",
      features: ["4K Recording", "Professional Editing", "Motion Graphics"]
    },
    {
      title: "Webcast Portal Creation - Custom Landing & Registration Pages",
      description: "Custom-branded portals with registration, payment, and user management features.",
      image: "/api/placeholder/400/250",
      features: ["Custom Branding", "Payment Gateway", "User Management"]
    },
    {
      title: "Medical Transcription - Accuracy over Speed",
      description: "Precise medical transcription services with industry expertise and compliance.",
      image: "/api/placeholder/400/250",
      features: ["HIPAA Compliant", "Medical Expertise", "99% Accuracy"]
    },
    {
      title: "Webcast Receiving - We manage your audience experience",
      description: "Complete audience management and technical support for webcast attendees.",
      image: "/api/placeholder/400/250",
      features: ["Technical Support", "Audience Management", "Engagement Tools"]
    }
  ];

  return (
    <section className="bg-[#101823] py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive event technology solutions designed to deliver exceptional experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                {/* Service Icon/Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
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

export default ServicesGrid;
