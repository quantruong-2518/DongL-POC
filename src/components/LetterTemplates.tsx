import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const LetterTemplates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const letterTemplates = [
    {
      id: 1,
      title: 'Letters to Family',
      description: 'Warm messages for beloved family members far away',
      category: 'Family',
      image:
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=400&fit=crop',
      quote: 'Distance means nothing when someone means everything.',
      samples: '189 templates',
    },
    {
      id: 2,
      title: 'Encouragement Letters',
      description: 'Words of strength for difficult times',
      category: 'Support',
      image:
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=400&fit=crop',
      quote: 'Your strength is greater than any struggle.',
      samples: '245 templates',
    },
    {
      id: 3,
      title: 'Memory Letters',
      description: 'Preserving precious moments together',
      category: 'Memories',
      image:
        'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&h=400&fit=crop',
      quote: 'Beautiful memories are treasures that time cannot steal.',
      samples: '156 templates',
    },
    {
      id: 4,
      title: 'Home Updates',
      description: 'Sharing life and news from home',
      category: 'Updates',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop',
      quote: 'Home is wherever you are loved.',
      samples: '203 templates',
    },
    {
      id: 5,
      title: 'Holiday Wishes',
      description: 'Special greetings for meaningful occasions',
      category: 'Celebrations',
      image:
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=400&fit=crop',
      quote: 'Love travels across any distance.',
      samples: '167 templates',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % letterTemplates.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      prev => (prev - 1 + letterTemplates.length) % letterTemplates.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const TagComponent = ({
    tag,
    type = 'default',
  }: {
    tag?: string;
    type?: string;
  }) => {
    const getTagClass = () => {
      switch (type) {
        case 'love':
          return 'bg-pink-100 text-pink-700';
        case 'seasonal':
          return 'bg-amber-100 text-amber-700';
        case 'relationship':
          return 'bg-green-100 text-green-700';
        default:
          return 'bg-gray-100 text-gray-700';
      }
    };

    return (
      <span
        className={`inline-block text-xs px-1.5 py-0.5 rounded font-medium ${getTagClass()}`}
      >
        {tag}
      </span>
    );
  };

  return (
    <section className="container mx-auto px-4 mb-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover Our <span className="text-purple-600">Letter Templates</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Carefully written templates to help you send messages of comfort,
          love, or everyday connection — no matter the distance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Carousel - 2/3 width */}
        <div className="lg:w-2/3">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden group aspect-video">
            {/* Image Container */}
            <div className="h-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src={letterTemplates[currentSlide].image}
                alt={letterTemplates[currentSlide].title}
                width={600} // hoặc kích thước bạn muốn
                height={400}
                className="w-full h-full object-cover object-center transition-all duration-700"
                onError={e => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';

                  const fallback = document.createElement('div');
                  fallback.className =
                    'w-full h-full bg-gray-100 flex items-center justify-center rounded-xl';

                  fallback.innerHTML = `
      <div class="text-center text-gray-500">
        <svg class="w-12 h-12 mx-auto mb-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16v12H4V4zm2 2v8h12V6H6zm2 2h8v4H8V8z" />
        </svg>
        <p class="text-sm">Image unavailable</p>
      </div>
    `;

                  target.parentElement?.appendChild(fallback);
                }}
                unoptimized // nếu ảnh không nằm trong domain được phép
              />

              {/* Content Overlay with blur background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                <div className="w-full p-6">
                  {/* Blur background for text readability */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-2xl font-bold mb-2 leading-tight text-white">
                      {letterTemplates[currentSlide].title.toUpperCase()}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/90">
                      {letterTemplates[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
            {/* Letter Writing Button - Using primary purple color */}
            <button className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md">
              Start Writing
            </button>
            {/* Slide Indicators */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {letterTemplates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - 1/3 width, matching carousel height */}
        <div className="lg:w-1/3">
          <div className="h-full flex flex-col space-y-2">
            {/* Theme Hot - Half height */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold text-gray-800">
                  Theme Hot
                </h3>
                <button className="text-xs text-purple-600 hover:text-purple-700 font-medium">
                  see more
                </button>
              </div>

              <div className="space-y-2 flex-1 overflow-y-auto">
                <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💝</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-xs mb-1">
                      You Are So Precious To Me
                    </p>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-700">2,000 Won</span>
                      <span className="text-xs text-gray-500">3000 Used</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <TagComponent tag="#love" type="love" />
                      <TagComponent tag="#precious" type="relationship" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💌</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-xs mb-1">
                      When Will We Meet?
                    </p>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-700">2,000 Won</span>
                      <span className="text-xs text-gray-500">3000 Used</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <TagComponent tag="#meeting" type="relationship" />
                      <TagComponent tag="#longing" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">💭</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-xs mb-1">
                      Missing You Every Day
                    </p>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-700">2,000 Won</span>
                      <span className="text-xs text-gray-500">3000 Used</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <TagComponent tag="#missing" type="love" />
                      <TagComponent tag="#daily" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal - Half height */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold text-gray-800">
                  Seasonal
                </h3>
                <button className="text-xs text-purple-600 hover:text-purple-700 font-medium">
                  see more
                </button>
              </div>

              <div className="space-y-2 flex-1 overflow-y-auto">
                <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🎄</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-xs mb-1">
                      Holiday Greetings
                    </p>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-700">2,000 Won</span>
                      <span className="text-xs text-gray-500">3000 Used</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <TagComponent tag="#winter" type="seasonal" />
                      <TagComponent tag="#christmas" type="seasonal" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🎊</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-xs mb-1">
                      New Year Wishes
                    </p>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-700">2,000 Won</span>
                      <span className="text-xs text-gray-500">3000 Used</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <TagComponent tag="#newyear" type="seasonal" />
                      <TagComponent tag="#celebration" type="seasonal" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 p-2 rounded-md hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🎂</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-xs mb-1">
                      Birthday Love Letter
                    </p>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-700">2,000 Won</span>
                      <span className="text-xs text-gray-500">3000 Used</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <TagComponent tag="#summer" type="seasonal" />
                      <TagComponent tag="#birthday" type="seasonal" />
                    </div>
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

export default LetterTemplates;
