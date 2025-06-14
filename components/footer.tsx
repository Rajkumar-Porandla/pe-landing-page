"use client"

import Link from "next/link"
import { Instagram, Facebook, MessageSquare, ArrowUp, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-matte-black text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">
              Parameshwara<span className="text-gold">Enterprises</span>
            </h3>
            <p className="text-white/70 mb-6">
              Your trusted partner for electrical goods, water tanks, and pipes and fittings from reputed brands since
              2015.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/917674878976"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@parameshwaraenterprises.com"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* New WhatsApp Info */}
            <div className="mt-6 p-3 bg-green-600/20 rounded-lg border border-green-600/30 flex items-center">
              <MessageSquare className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-sm text-white/90">
                Need quick assistance? Use the WhatsApp chat button to connect with us instantly!
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-6 h-1 bg-gold mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#brands"
                  className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-6 h-1 bg-gold mr-2"></span>
              Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Switches & Sockets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Lights & Fixtures
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Wires & Cables
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Fans & Appliances
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Water Tanks
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-gold transition-colors duration-300">
                  Pipes & Fittings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-6 h-1 bg-gold mr-2"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white/70 hover:text-white premium-transition">76748 78976</p>
                  <p className="text-white/70 hover:text-white premium-transition">92469 36935</p>
                  <p className="text-white/70 hover:text-white premium-transition">99498 08831</p>
                </div>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <p className="text-white/70">
                  Jayaprakash Narayan Road, opposite to Bharat petroleum, Warangal, Telangana 506002
                </p>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@parameshwaraenterprises.com"
                  className="text-white/70 hover:text-gold premium-transition"
                >
                  info@parameshwaraenterprises.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Parameshwara Enterprises. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-white/50 text-sm mr-6">Premium Electrical & Water Solutions</span>
            <button
              onClick={scrollToTop}
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
