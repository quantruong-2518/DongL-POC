'use client';

import React from 'react';

const RechargeBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 mt-8">
      <div className="relative rounded-lg bg-gradient-to-r from-[#faf0ff] via-[#fff7ea] to-[#f3f4f6] p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800">
            연결을 계속 유지하세요
          </h3>
          <p className="text-sm text-gray-600 mt-1 max-w-xl">
            보내는 각 편지와 전달되는 각 메시지는 포인트 잔액을 사용합니다. 더 많은 사랑을 보낼 준비가 되면 간단히 충전하여 계속하세요.
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <button className="bg-gradient-to-r from-purple-500 to-amber-400 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow hover:shadow-lg transition">
            포인트 충전
          </button>
        </div>
      </div>
    </section>
  );
};

export default RechargeBanner;