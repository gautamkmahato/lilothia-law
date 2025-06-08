'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  {
    logo: '/clients/logo1.png', // Store logos in public/clients/
    name: 'Acme Corp',
    tagline: 'Innovating legal solutions',
  },
  {
    logo: '/clients/logo2.png',
    name: 'LexTrust',
    tagline: 'Your trusted legal partner',
  },
  {
    logo: '/clients/logo3.png',
    name: 'JurisOne',
    tagline: 'Simplifying justice for all',
  },
  {
    logo: '/clients/logo4.png',
    name: 'VerdictEdge',
    tagline: 'Empowering smart decisions',
  },
  {
    logo: '/clients/logo5.png',
    name: 'LawBridge',
    tagline: 'Connecting you to legal clarity',
  },
];

export default function ScrollingComponents({ speed = 20 }) {
  return (
    <div className="bg-[#fff9f6] py-10">
      <h3 className="text-center text-4xl font-semibold text-gray-900 mb-8">
        Trusted by Our Clients
      </h3>
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: 'linear',
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white border border-gray-200 text-gray-800 p-6 rounded-lg shadow-sm flex flex-col items-center justify-center gap-2"
            >
              <div className="w-20 h-20 relative mb-2">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold">{client.name}</h4>
              <p className="text-sm text-gray-500 text-center">{client.tagline}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
