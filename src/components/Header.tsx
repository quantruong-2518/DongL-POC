'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="inline-block">
          <Image
            src="https://dongl.co.kr/assets/image/logo.png?v=1"
            alt="DongL Logo"
            width={400}
            height={100}
            priority
            quality={100}
            className="w-auto h-12 drop-shadow-md"
          />
        </Link>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="#" className="hover:text-purple-600">
            Home
          </Link>
          <Link href="#" className="hover:text-purple-600">
            Services
          </Link>
          <Link href="#" className="hover:text-purple-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
