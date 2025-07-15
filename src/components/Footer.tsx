'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: '온라인 작성', href: '#' },
    { name: '편지 템플릿', href: '#' },
    { name: '교도소 편지', href: '#' },
    { name: '군인 편지', href: '#' },
  ];

  const company = [
    { name: '회사 소개', href: '#' },
    { name: '연락처', href: '#' },
    { name: '개인정보처리방침', href: '#' },
    { name: '이용약관', href: '#' },
  ];

  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
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

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              의미 있는 편지를 통해 마음을 연결하세요. 가장 필요한 사람들에게 사랑과 지원을 전합니다.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-gray-500 text-sm">
              <p>부산광역시 사하구 하신중앙로 27번길 6</p>
              <p>사업자등록번호: 401-17-62774</p>
              <p>통신판매업번호: 2024-부산사하-0698</p>
              <p>대표자: 황종민</p>
              <p>Email: support@dongl.vn</p>
              <p>Phone: +84 (0) 123 456 789</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">서비스</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">회사</h3>
            <ul className="space-y-4">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-yellow-50">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              <p>&copy; {currentYear} 동글 DongL. 모든 권리 보유.</p>
            </div>
            <div className="text-sm text-gray-500">
              <p>의미 있는 연결을 위해 정성을 담아 제작하였습니다</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
