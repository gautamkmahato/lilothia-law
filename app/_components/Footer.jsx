'use client';

import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Lilothia LLP</h2>
          <p className="text-sm leading-relaxed">
            Providing expert legal solutions with over 20 years of trusted service in criminal, civil, and corporate law.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Practice Areas</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Criminal Defense</a></li>
            <li><a href="#" className="hover:text-white">Family Law</a></li>
            <li><a href="#" className="hover:text-white">Corporate Law</a></li>
            <li><a href="#" className="hover:text-white">Legal Advice</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">123 Justice Street, New Delhi, India</p>
          <p className="text-sm mb-4">Email: contact@lawfirm.com</p>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Lilothia LLP. All rights reserved.
      </div>
    </footer>
  );
}
