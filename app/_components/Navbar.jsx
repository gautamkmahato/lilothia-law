"use client";


import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95  backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex text-xl font-serif font-bold text-gray-100">
            <Image src='/logo.png' alt="logo" width="32" height="24" />
            <span className={` ${
        scrolled ? "text-yellow-800" : "text-yellow-100"
      } `}>Lilothia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 text-sm ${
        scrolled ? "text-gray-800" : "text-white"
      } `}
              >
                {item.name}
              </Link>
            ))}
            <button className={` ${
        scrolled ? "bg-[#141518] text-[#fff7ef]" : "bg-[#fff4f4] text-[#3D2914]"
      } px-6 py-3 text-sm rounded-md cursor-pointer hover:bg-[#fcfaf6]`}>Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 mt-1 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 mt-1 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-lg shadow-lg mt-2 overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-primary-600 bg-primary-50"
                        : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4">
                  <button className="btn-primary w-full bg-[#141518] text-white px-6 py-3 text-sm rounded-md cursor-pointer hover:bg-[#282119]">Get Started</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
