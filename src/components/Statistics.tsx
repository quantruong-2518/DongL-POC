'use client';

export default function Statistics() {
  const items = [
    {
      number: '12,000+',
      label: 'Letters Delivered',
      desc: 'Each letter sent with care and purpose',
    },
    {
      number: '35,000+',
      label: 'Registered Users',
      desc: 'Users joining us to connect hearts',
    },
    {
      number: '500+',
      label: 'Templates Available',
      desc: 'Meaningful messages for every moment',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Gaining <span className="text-purple-600">Trust</span> from Thousands
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
          Every letter is a step toward warmth, care, and genuine connection —
          trusted by families across the globe.
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
