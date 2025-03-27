"use client"

import { Users, PenToolIcon as Tool, MonitorSmartphone, Check } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesSection() {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Community Management",
      description: "Expert community building and management for social media platforms, forums, and online groups.",
      features: [
        "Engagement strategy development",
        "Content moderation & curation",
        "Member growth & retention tactics",
      ],
    },
    {
      icon: <Tool className="h-10 w-10 text-blue-500" />,
      title: "Device Repair & Tech Support",
      description: "Remote technical assistance and guidance for device repairs and troubleshooting.",
      features: ["Remote device diagnostics", "Step-by-step repair guidance", "Software troubleshooting"],
    },
    {
      icon: <MonitorSmartphone className="h-10 w-10 text-blue-500" />,
      title: "Frontend Web Design",
      description: "Creating beautiful, responsive websites that provide excellent user experiences.",
      features: ["Responsive design implementation", "Modern UI/UX principles", "Performance optimization"],
    },
    {
      icon: <Tool className="h-10 w-10 text-blue-500" />,
      title: "Graphic Design",
      description: "Creative visual designs for branding, marketing materials, and digital content.",
      features: ["Logo & brand identity design", "Social media graphics", "Marketing & promotional materials"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
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
              My <span className="text-blue-400">Services</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Comprehensive remote solutions tailored to your specific needs
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-full w-fit dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-800/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-blue-500" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

