"use client"

import type React from "react"

import Image from "next/image"
import { Calendar, MapPin, Mail, MessageSquare } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import gsap from "gsap"

export default function AboutSection() {
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(imageRef, { once: true })

  // Safe image error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    if (target) {
      target.src = "/placeholder.svg"
    }
  }

  // GSAP 3D effect for the image
  useEffect(() => {
    if (isInView && imageRef.current) {
      // Set initial 3D properties
      gsap.set(imageRef.current, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      })

      // Create floating animation
      gsap.to(imageRef.current, {
        rotateY: 10,
        rotateX: 5,
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })

      // Add hover interaction
      const handleMouseMove = (e: MouseEvent) => {
        if (!imageRef.current) return

        const rect = imageRef.current.getBoundingClientRect()
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5

        gsap.to(imageRef.current, {
          rotateY: mouseX * 20,
          rotateX: -mouseY * 20,
          duration: 0.5,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        if (!imageRef.current) return

        gsap.to(imageRef.current, {
          rotateY: 10,
          rotateX: 5,
          duration: 1,
          ease: "power2.out",
        })
      }

      const element = imageRef.current
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isInView])

  return (
    <section id="about" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Get to know me better and discover what drives my passion for excellence
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div ref={imageRef} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-blue-400 rounded-lg opacity-30 blur-xl dark:from-blue-700 dark:to-blue-900"></div>
              <div className="rounded-lg overflow-hidden relative z-10 shadow-xl">
                <div className="w-full h-full ken-burns-effect">
                  <Image
                    src="/images/profile-portrait.png"
                    alt="Isamah Williams - Professional headshot"
                    width={400}
                    height={500}
                    className="object-cover"
                    onError={handleImageError}
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Isamah Williams</h3>
            <p className="text-gray-500 dark:text-gray-400">
              I am a versatile professional with expertise across multiple domains. As a virtual assistant and remote
              work specialist, I combine technical skills with creative problem-solving to deliver exceptional results
              for my clients.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900/30">
                  <Calendar className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Birthday</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">June 8</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2"
              >
                <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900/30">
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Remote Professional</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900/30">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">isamahwilliams9@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <div className="bg-blue-100 p-2 rounded-full dark:bg-blue-900/30">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+234 810 035 1157</p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold">Professional Experience</h4>

              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-2"
                >
                  <div className="mt-1 h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">Community Manager</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Building and managing online communities, creating engagement strategies, and moderating
                      discussions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <div className="mt-1 h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">Device Engineer & Repair Specialist</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Troubleshooting and repairing various electronic devices, providing technical support and
                      solutions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <div className="mt-1 h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">Frontend Website Designer</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Creating responsive, user-friendly websites with modern design principles and best practices.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-2"
                >
                  <div className="mt-1 h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium">Graphics Designer</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Producing creative visual content including branding materials, social media graphics, and
                      marketing collateral.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

