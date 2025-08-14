
import React from 'react';

const useCaseTerms = [
  { text: "TOWN HALL WEBCASTS", size: "text-2xl", position: "top-20 left-10" },
  { text: "Product Launches", size: "text-lg", position: "top-32 right-20" },
  { text: "Investor Relations", size: "text-xl", position: "top-40 left-32" },
  { text: "Virtual Advisory Boards", size: "text-base", position: "top-16 right-32" },
  { text: "Live Surgery Events", size: "text-xl", position: "top-52 left-20" },
  { text: "KOL Webinars & ISP", size: "text-lg", position: "top-60 right-16" },
  { text: "Live CEO Address", size: "text-lg", position: "top-28 left-48" },
  { text: "USE CASES", size: "text-4xl font-bold text-blue-400", position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
  { text: "Expert Symposiums", size: "text-base", position: "bottom-40 left-16" },
  { text: "WEBINARS", size: "text-2xl", position: "bottom-32 right-24" },
  { text: "ONLINE (CMEs)", size: "text-xl", position: "bottom-20 left-40" },
  { text: "AGM", size: "text-lg", position: "bottom-48 right-40" },
];

const UseCasesHero = () => (
  <section className="relative bg-gradient-to-br from-[#101823] via-blue-900/20 to-[#101823] py-20 min-h-[70vh] overflow-hidden">
 
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
    </div>

  
    <div className="relative container mx-auto px-6 lg:px-8 h-full">
      <div className="relative h-96 lg:h-[500px]">
        {useCaseTerms.map((term, index) => (
          <div
            key={index}
            className={`absolute ${term.position} ${term.size} text-white/90 hover:text-blue-400 hover:scale-105 transition duration-300 cursor-default select-none`}
            style={{
              textShadow: "0 2px 8px rgba(30,41,59,0.7)"
            }}
            aria-hidden="true"
          >
            {term.text}
          </div>
        ))}
      </div>
    </div>

   
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#101823] to-transparent pointer-events-none"></div>
  </section>
);

export default UseCasesHero;
