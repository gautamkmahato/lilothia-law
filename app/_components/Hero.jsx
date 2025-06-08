"use client"

import { motion } from "framer-motion"
import { Scale, Phone, Mail, MapPin, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Navbar from "./Navbar"

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  

  return (
    <div className="min-h-screen bg-[#C4B5A0]">
      {/* Header */}
      {/* <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#C4B5A0] py-6 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Scale className="h-8 w-8 text-[#4A2C2A]" />
            <h1 className="text-2xl font-serif text-[#3D2914] tracking-wide">LILOTHIA LAW P.C.</h1>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home Page", "Services", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-[#5D4037] hover:text-[#3D2914] transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
             >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="bg-[#3D2914] text-white px-6 py-2 rounded-md hover:bg-[#2D1F0F] transition-colors duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book now
            </motion.button>
          </nav>
        </div>
      </motion.header> */}
      <Navbar />

      {/* Hero Section - New Design */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-[#5D4037] font-medium tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                LEGAL EXPERTISE
              </motion.p>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#3D2914] leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Guiding You Through Legal Challenges
              </motion.h1>
              <motion.p
                className="text-[#5D4037] text-lg max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Navigating complex legal issues can be financially, mentally & emotionally challenging. Our experience
                coupled with compassion is dedicated to providing clear, expert guidance.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <motion.button
                  className="flex items-center space-x-2 bg-[#3D2914] text-white px-8 py-3 rounded-full hover:bg-[#2D1F0F] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-1 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="bg-[#B8A082]/50 p-4 rounded-l-lg">
                  <h3 className="font-medium text-[#3D2914]">Practice Area</h3>
                  <p className="text-[#5D4037]">Family Law</p>
                </div>
                <div className="bg-[#B8A082]/50 p-4">
                  <h3 className="font-medium text-[#3D2914]">Experience</h3>
                  <p className="text-[#5D4037]">20+ Years</p>
                </div>
                <div className="bg-[#B8A082]/50 p-4 rounded-r-lg flex items-center justify-center">
                  <motion.button
                    className="bg-[#3D2914] text-white p-2 rounded-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[500px] lg:h-[600px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/image.jpg"
                  alt="Law firm building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-gray-800 bg-gradient-to-tr from-[#684a29]/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#C4B5A0]/80 to-transparent">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-[#C4B5A0] flex items-center justify-center">
                      <Scale className="h-5 w-5 text-[#3D2914]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Trusted Legal Counsel</p>
                      <p className="text-[#E8DDD4] text-sm">Since 1995</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-[#E8DDD4] p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-[#3D2914] flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#3D2914] text-sm font-medium">Free Consultation</p>
                    <p className="text-[#5D4037] font-bold">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {[
          {
            title: 'Family Law',
            description: 'Comprehensive family legal services including divorce, custody, and more.',
            image: '/family.jpg',
          },
          {
            title: 'Real Estate',
            description: 'Expert guidance through property transactions, contracts, and real estate disputes.',
            image: '/real.jpg',
          },
          {
            title: 'Criminal Defence',
            description: 'Aggressive defense strategies for criminal charges with personalized attention.',
            image: '/criminal.jpg',
          },
        ].map((area) => (
          <motion.div
            key={area.title}
            className="group cursor-pointer"
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="bg-[#E8DDD4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-stone-300 to-stone-500 relative overflow-hidden">
                <Image
                  src={area.image || '/placeholder.svg'}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#5D4037]/40 pointer-events-none" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#3D2914] mb-3">{area.title}</h3>
                <p className="text-[#5D4037] leading-relaxed">{area.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-[#C4B5A0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2 className="text-4xl md:text-5xl font-serif text-[#3D2914] mb-6" {...fadeInUp}>
                Excellence in Legal Representation
              </motion.h2>
              <motion.p
                className="text-[#5D4037] text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                With over two decades of combined experience, our team at Lilothia Law P.C. is dedicated to providing
                exceptional legal services with a personal touch. We understand that legal matters can be overwhelming,
                which is why we prioritize clear communication and strategic guidance.
              </motion.p>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  "Personalized legal strategies",
                  "Transparent communication",
                  "Proven track record",
                  "Compassionate approach",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ChevronRight className="h-5 w-5 text-[#5D4037]" />
                    <span className="text-[#4A2C2A]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/office.jpg"
                alt="Law office"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-[#C4B5A0]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-4xl md:text-5xl font-serif text-[#3D2914] mb-8" {...fadeInUp}>
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-[#5D4037] text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to discuss your legal needs? Contact us today to schedule a consultation with our experienced team.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "(555) 123-4567",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@lilothialaw.com",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "123 Legal Street, Suite 100",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-[#E8DDD4] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <contact.icon className="h-8 w-8 text-[#5D4037] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#3D2914] mb-2">{contact.title}</h3>
                  <p className="text-[#5D4037]">{contact.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="bg-[#3D2914] text-white px-8 py-3 rounded-md hover:bg-[#2D1F0F] transition-colors duration-200 font-medium text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Schedule Consultation
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D1F0F] text-white py-12 px-4 md:px-8">
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
    </div>
  )
}
