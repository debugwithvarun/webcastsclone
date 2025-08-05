// components/ReviewsSection.tsx
import React from 'react';

const ReviewsSection = () => {
  const review = {
    text: "The multilingual webcast platform exceeded our expectations. The seamless translation and global reach helped us connect with our international audience effectively.",
    author: "Sarah Johnson",
    position: "Global Events Director",
    company: "Tech Solutions Inc.",
    rating: 5
  };

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Reviews
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="text-white text-lg">4.9/5</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 text-center lg:text-left">
                <blockquote className="text-white text-lg lg:text-xl mb-6 italic">
                  "{review.text}"
                </blockquote>
                
                <div>
                  <div className="text-blue-400 font-semibold text-lg">
                    {review.author}
                  </div>
                  <div className="text-gray-400">
                    {review.position} at {review.company}
                  </div>
                  <div className="flex justify-center lg:justify-start mt-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
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

export default ReviewsSection;
