// components/LawyerHeroSection.jsx
'use client';

import Image from 'next/image';
import { Gavel, Scale, Handshake } from 'lucide-react';

const LawyerHeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fff9f6]  p-8 font-['Inter'] relative overflow-hidden">

      {/* Main content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl relative z-10">
        {/* Left Section */}
        <div className="md:col-span-1 bg-[#d3643b] relative min-h-[500px] flex items-center justify-center rounded-2xl">

          <div className="relative z-10 w-full h-full p-8 text-white flex flex-col justify-center">
            <div className="absolute top-8 left-8">
              <Gavel size={48} className="text-white" />
            </div>

            <h2 className="text-4xl font-bold mt-16 mb-4">
              We are Ready to Provide Best service for Our Client
            </h2>
            <p className="text-lg mb-8">
              Long established fact that to a reader will be readable content.
            </p>
            <button className="bg-gray-900 text-gray-50 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 self-start">
              Hire Expert
            </button>
          </div>
        </div>

        {/* Middle Section - Full width/height image */}
        <div className="md:col-span-1 relative w-full h-[500px] rounded-2xl">
          <Image
            src="/middle.jpg"
            alt="Lawyer holding a gavel and book"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Right Section */}
        <div className="md:col-span-1 space-y-6 rounded-2xl">
          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-md flex flex-col items-start">
            <Scale size={32} className="bg-white text-yellow-600 p-1.5 mb-3 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Expert Lawyer</h3>
            <p className="text-sm">
              One of the first things we will do is help you understand your rights.
            </p>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-md flex flex-col items-start">
            <Gavel size={32} className="bg-white text-yellow-600 p-1.5 mb-3 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Allegations</h3>
            <p className="text-sm">
              You have a right to know every detail of the allegations.
            </p>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-md flex flex-col items-start">
            <Handshake size={32} className="bg-white text-yellow-600 p-1.5 mb-3 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-sm">
              Our team is available 24/7 to provide help and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerHeroSection;
