'use client';

import { Briefcase, Gavel, Users } from 'lucide-react';

export default function LawPracticeSection() {
  return (
    <section className="bg-[#fdfafa] py-16 px-4 sm:px-8 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 max-w-3xl mx-auto">
        The virtue of justice consists in<br />
        <span className="text-gray-900">moderation as regulated by wisdom</span>
      </h2>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Business Law */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <Briefcase className="text-orange-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Law</h3>
          <p className="text-sm text-gray-600">
            There are various forms of legal business entities ranging from the sole trader.
          </p>
        </div>

        {/* Criminal Law */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <Gavel className="text-orange-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Criminal Law</h3>
          <p className="text-sm text-gray-600">
            Criminal law is the body of law that relates to crime, conduct perceived as threatening, harmful.
          </p>
        </div>

        {/* Family Law */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <Users className="text-orange-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Family Law</h3>
          <p className="text-sm text-gray-600">
            Family law is a legal practice area that focuses on issues involving family relationships.
          </p>
        </div>
      </div>
    </section>
  );
}
