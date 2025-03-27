"use client"

import type React from "react"

import Image from "next/image"
import { RippleButton } from "@/components/ui/ripple-button"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Safe image error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    if (target) {
      target.src = "/placeholder.svg"
    }
  }

  // GSAP animations
  useEffect(() => {
    if (imageRef.current && sectionRef.current) {
      // Create a 3D rotation effect for the image container
      gsap.set(imageRef.current, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      })

      // Animate on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        if (!imageRef.current || !sectionRef.current) return

        const rect = sectionRef.current.getBoundingClientRect()
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5

        gsap.to(imageRef.current, {
          duration: 0.5,
          rotationY: mouseX * 10,
          rotationX: -mouseY * 10,
          ease: "power2.out",
        })
      }

      // Reset on mouse leave
      const handleMouseLeave = () => {
        if (!imageRef.current) return

        gsap.to(imageRef.current, {
          duration: 0.5,
          rotationY: 0,
          rotationX: 0,
          ease: "power2.out",
        })
      }

      sectionRef.current.addEventListener("mousemove", handleMouseMove)
      sectionRef.current.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        if (sectionRef.current) {
          sectionRef.current.removeEventListener("mousemove", handleMouseMove)
          sectionRef.current.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hello, I&apos;m <span className="text-blue-400">Isamah</span>{" "}
                <span className="text-blue-200">Williams</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-500 md:text-xl dark:text-gray-400"
              >
                Professional Virtual Assistant & Remote Expert specializing in community management, device repairs, web
                design, and graphic design.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <RippleButton
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const contactSection = document.querySelector("#contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Hire Me
              </RippleButton>
              <RippleButton
                variant="outline"
                className="border-blue-300 hover:bg-blue-50 dark:border-blue-700 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const portfolioSection = document.querySelector("#portfolio")
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View Portfolio
              </RippleButton>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div ref={imageRef} className="relative w-[300px] h-[300px]">
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>
              <div className="rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 relative z-10 w-[300px] h-[300px]">
                <div className="w-full h-full ken-burns-effect">
                  <Image
                    src="/images/profile-portrait.png"
                    alt="Isamah Williams - Professional Virtual Assistant and Remote Expert"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    onError={handleImageError}
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

