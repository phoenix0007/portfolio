"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e || !e.target) return
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    if (e) {
      e.preventDefault()
      console.log("Form submitted:", formData)
      // Here you would typically send the form data to a server
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
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
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Let&apos;s discuss how I can help you achieve your goals
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold">
              Contact Information
            </motion.h3>

            <div className="space-y-4">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <motion.a
                  href="https://wa.me/2348100351157?text=Hello%20Isamah,%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-full dark:bg-gradient-to-br dark:from-green-900/30 dark:to-green-800/20 hover:shadow-md transition-all duration-300"
                >
                  <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                </motion.a>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/2348100351157?text=Hello%20Isamah,%20I'm%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline dark:text-green-400"
                  >
                    +234 810 035 1157
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <motion.a
                  href="mailto:isamahwilliams9@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-full dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-800/20 hover:shadow-md transition-all duration-300"
                >
                  <Mail className="h-6 w-6 text-blue-500" />
                </motion.a>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:isamahwilliams9@gmail.com" className="text-blue-500 hover:underline">
                    isamahwilliams9@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-full dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-800/20">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-gray-500 dark:text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-500 dark:text-gray-400">Weekend: 10:00 AM - 4:00 PM</p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-medium">Connect With Me</h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#"
                  className="bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-full hover:shadow-md dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-800/20"
                >
                  <Linkedin className="h-5 w-5 text-blue-500" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#"
                  className="bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-full hover:shadow-md dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-800/20"
                >
                  <Twitter className="h-5 w-5 text-blue-500" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#"
                  className="bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-full hover:shadow-md dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-800/20"
                >
                  <Instagram className="h-5 w-5 text-blue-500" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  href="#"
                  className="bg-gradient-to-br from-blue-100 to-blue-200 p-2 rounded-full hover:shadow-md dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-800/20"
                >
                  <Facebook className="h-5 w-5 text-blue-500" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg border bg-card text-card-foreground shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 dark:border-blue-800"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 dark:border-blue-800"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 dark:border-blue-800"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300 dark:border-blue-800"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>

              <div className="text-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://wa.me/2348100351157?text=Hello%20Isamah,%20I'm%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 text-sm flex items-center justify-center gap-1 dark:text-green-400 dark:hover:text-green-300"
                >
                  <MessageSquare className="h-4 w-4" />
                  Or contact me via WhatsApp
                </motion.a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

