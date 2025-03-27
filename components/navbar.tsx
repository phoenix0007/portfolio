"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Menu, X, Mail, MessageSquare } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Only render the full navbar on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Services", path: "/#services" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Contact", path: "/#contact" },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Isamah
          </Link>
        </motion.div>

        {mounted ? (
          <>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative group",
                      pathname === item.path ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </>
        ) : (
          <div className="hidden md:block h-4"></div>
        )}

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="https://wa.me/2348100351157?text=Hello%20Isamah,%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-md transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="h-4 w-4" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact via WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href="mailto:isamahwilliams9@gmail.com"
                  className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-md transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send an Email</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>

      {/* Mobile menu */}
      {mounted && mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "block py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact options in mobile menu */}
            <div className="flex items-center space-x-3 py-2">
              <a
                href="https://wa.me/2348100351157?text=Hello%20Isamah,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-medium text-green-600 dark:text-green-400"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:isamahwilliams9@gmail.com"
                className="flex items-center space-x-2 text-sm font-medium text-blue-600 dark:text-blue-400"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

