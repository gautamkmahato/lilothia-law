'use client';

import { Scale, Phone, Mail, MapPin, ChevronRight, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
      <footer className="bg-[#17191d] text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-6 w-6" />
                <h3 className="text-xl font-serif">LILOTHIA LAW P.C.</h3>
              </div>
              <p className="text-stone-300 leading-relaxed">
                Providing exceptional legal services with integrity, dedication, and personalized attention to each
                client's unique needs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-stone-300">
                <li>Family Law</li>
                <li>Real Estate</li>
                <li>Criminal Defence</li>
                <li>Corporate Law</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-stone-300">
                <li>(555) 123-4567</li>
                <li>info@lilothialaw.com</li>
                <li>123 Legal Street</li>
                <li>Suite 100</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>&copy; 2024 Lilothia Law P.C. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
  );
}
