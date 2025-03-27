"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Isamah
            </h2>
            <p className="text-sm text-gray-400">Professional Virtual Assistant & Remote Services Expert</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6"
          >
            <Link href="/" className="text-sm hover:text-blue-400 transition-colors duration-300">
              Home
            </Link>
            <Link href="/#about" className="text-sm hover:text-blue-400 transition-colors duration-300">
              About
            </Link>
            <Link href="/#skills" className="text-sm hover:text-blue-400 transition-colors duration-300">
              Skills
            </Link>
            <Link href="/#services" className="text-sm hover:text-blue-400 transition-colors duration-300">
              Services
            </Link>
            <Link href="/#portfolio" className="text-sm hover:text-blue-400 transition-colors duration-300">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-sm hover:text-blue-400 transition-colors duration-300">
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Isamah Williams. Made with <Heart className="inline-block h-3 w-3 text-red-500" /> All
            rights reserved.
          </p>

          <div className="flex space-x-4">
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

