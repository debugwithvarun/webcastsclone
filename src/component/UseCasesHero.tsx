// components/UseCasesHero.tsx
import React from 'react';

const useCaseTerms = [
  { text: "TOWN HALL WEBCASTS", size: "text-2xl md:text-3xl", position: "top-10 left-4 md:top-20 md:left-10" },
  { text: "Product Launches", size: "text-lg md:text-xl", position: "top-20 right-4 md:top-32 md:right-20" },
  { text: "Investor Relations", size: "text-xl md:text-2xl", position: "top-28 left-10 md:top-40 md:left-32" },
  { text: "Virtual Advisory Boards", size: "text-base md:text-lg", position: "top-8 right-8 md:top-16 md:right-32" },
  { text: "Live Surgery Events", size: "text-xl md:text-2xl", position: "top-36 left-4 md:top-52 md:left-20" },
  { text: "KOL Webinars & ISP", size: "text-lg md:text-xl", position: "top-40 right-4 md:top-60 md:right-16" },
  { text: "Live CEO Address", size: "text-lg md:text-xl", position: "top-16 left-32 md:top-28 md:left-48" },
  // Center text always centered and larger
  { text: "USE CASES", size: "text-2xl md:text-4xl font-bold text-blue-400", position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" },
  { text: "Expert Symposiums", size: "text-base md:text-lg", position: "bottom-24 left-4 md:bottom-40 md:left-16" },
  { text: "WEBINARS", size: "text-xl md:text-2xl", position: "bottom-20 right-4 md:bottom-32 md:right-24" },
  { text: "ONLINE (CMEs)", size: "text-xl md:text-2xl", position: "bottom-8 left-24 md:bottom-20 md:left-40" },
  { text: "AGM", size: "text-lg md:text-xl", position: "bottom-28 right-8 md:bottom-48 md:right-40" },
];

const UseCasesHero: React.FC = () => (
  <section className="relative bg-gradient-to-br from-[#101823] via-blue-900/20 to-[#101823] py-12 md:py-20 min-h-[350px] md:min-h-[70vh] overflow-hidden">
    {/* Background gradient pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
    </div>

    {/* Responsive container */}
    <div className="relative max-w-6xl mx-auto px-4 md:px-8 h-full">
      <div className="relative h-64 md:h-96 lg:h-[500px]">
        {useCaseTerms.map((term, idx) => (
          <div
            key={idx}
            className={`absolute ${term.position} ${term.size} whitespace-nowrap text-white/90 hover:text-blue-400 hover:scale-105 transition duration-300 cursor-default select-none`}
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

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-[#101823] to-transparent pointer-events-none"></div>
  </section>
);

export default UseCasesHero;
