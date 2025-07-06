'use client';

import React from 'react';

const RechargeBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 mt-8">
      <div className="relative rounded-lg bg-gradient-to-r from-[#faf0ff] via-[#fff7ea] to-[#f3f4f6] p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800">
            Keep your connection going
          </h3>
          <p className="text-sm text-gray-600 mt-1 max-w-xl">
            Each letter sent, each message delivered, uses a little bit of your
            Point balance. When you’re ready to send more love, simply top up to
            continue.
          </p>
        </div>

        <div className="mt-4 sm:mt-0">
          <button className="bg-gradient-to-r from-purple-500 to-amber-400 text-white text-sm font-semibold px-5 py-2.5 rounded-md shadow hover:shadow-lg transition">
            Recharge Points
          </button>
        </div>
      </div>
    </section>
  );
};

export default RechargeBanner;
