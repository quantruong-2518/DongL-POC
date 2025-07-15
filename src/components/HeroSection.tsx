'use client';

import React from 'react';
import { Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-yellow-50 to-purple-50 section-spacing overflow-hidden pt-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-soft"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-soft"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-soft"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="relative container-custom">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">
              35,000개 가족 이상이 신뢰
            </span>
            <Star className="h-5 w-5 text-yellow-500" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            마음을 연결하다
          </h1>

          <h2 className="text-3xl font-medium bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent leading-snug mb-6">
            작은 편지의 큰 힘으로
          </h2>

          <p className="text-base text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            집에서 멀리 떨어져 있고 사랑이 필요한 사람들과 연결되는 따뜻하고 사려 깊은 방법입니다.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <button className="px-6 py-3 text-white rounded-md bg-gradient-to-r from-amber-400 to-purple-500 shadow-md hover:shadow-lg transition">
              작성 시작
            </button>

            <button className="px-6 py-3 border border-purple-300 text-purple-700 rounded-md hover:bg-purple-50 transition">
              주제 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
