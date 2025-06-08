'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Gavel, Award } from 'lucide-react';


export default function HeroSection() {
  return (
    <section className="bg-[#fff9f6] px-4 sm:px-8 lg:px-20 py-12 flex flex-col lg:flex-row justify-between items-start gap-8 relative overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-6/12 mt-20 flex flex-col justify-between space-y-8 relative z-10">
        {/* Title + Subtitle */}
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Specialize in
            <span className="block">all aspects of</span>
            <span>LAW</span>
          </motion.h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl">
            We offer flexible payment structures and legal aid. One of the largest criminal defence teams.
          </p>
        </div>

        {/* Button */}
        <div>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Hire Expert
          </button>
        </div>

        {/* Quote Card */}
        {/* <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="bg-white shadow-md border border-gray-50 p-4 rounded-xl w-fit"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#d3643b] rounded-full">
              <Gavel className="text-white w-5 h-5" />
            </div>
            <p className="text-gray-700 text-sm font-medium">
              “Injustice anywhere is a threat to justice everywhere.” — Martin Luther King Jr.
            </p>
          </div>
        </motion.div> */}
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-6/12 flex justify-center items-center relative z-10">
        <div className="relative w-4/5 aspect-[4/5]">
                {/* Background Blobs */}
      <div className="absolute z-0 top-32 sm:top-24 md:top-16 lg:top-48 left-2 sm:left-48 w-44 sm:w-64 md:w-72 h-56 sm:h-72 md:h-80 bg-[#d3643b] opacity-100 rounded-[50%_40%_30%_60%/40%_50%_60%_30%]" />
      <div className="absolute z-0 bottom-2 sm:bottom-10 right-0 sm:right-6 md:right-40 w-32 sm:w-40 md:w-44 h-40 sm:h-44 md:h-48 bg-[#f8d97b] opacity-100 rounded-[40%_60%_40%_60%/50%_30%_70%_50%]" />
    
          {/* Image */}
          <Image
            src="/law-3.png"
            alt="Lady Justice"
            fill
            className="relative z-10 object-contain"
            sizes="(max-width: 824px) 100vw, 80vw"
            priority
          />

          {/* Floating Card - Top Left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 left-[-120px] bg-white shadow-md border border-gray-50 p-4 rounded-xl text-sm flex items-center gap-3 z-20 w-fit"
          >
            <div className="p-2 bg-[#d3643b] rounded-full">
              <Award className="text-white w-4 h-4" />
            </div>
            <p className="text-gray-700 font-medium whitespace-nowrap">Award-Winning Firm</p>
          </motion.div>

          {/* Floating Card - Bottom Right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className="absolute bottom-[-30px] right-0 bg-white shadow-md border border-gray-50 p-4 rounded-xl text-sm flex items-center gap-3 z-20 w-fit"
          >
            <div className="p-2 bg-[#d3643b] rounded-full">
              <Users className="text-white w-4 h-4" />
            </div>
            <p className="text-gray-700 font-medium whitespace-nowrap">Client Satisfaction 98%</p>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
