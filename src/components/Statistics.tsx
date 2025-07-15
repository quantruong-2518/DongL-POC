'use client';

export default function Statistics() {
  const items = [
    {
      number: '12,000+',
      label: '전달된 편지',
      desc: '소중하고 의미 있게 전달된 각 편지',
    },
    {
      number: '35,000+',
      label: '등록 사용자',
      desc: '마음을 연결하기 위해 저희와 함께하는 사용자',
    },
    {
      number: '500+',
      label: '이용 가능한 템플릿',
      desc: '모든 순간에 의미 있는 메시지',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          수많은 사람들의 <span className="text-purple-600">신뢰</span>를 얻다
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          모든 편지는 따뜻함, 보살핌, 진정한 연결을 향한 한 걸음 — 전 세계 가족들의 신뢰를 받고 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent mb-2">
                {item.number}
              </div>
              <div className="text-lg font-medium text-gray-800 mb-1">
                {item.label}
              </div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
