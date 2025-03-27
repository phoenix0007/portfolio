"use client"

import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function SkillsSection() {
  const skills = [
    {
      name: "Community Management",
      percentage: 90,
      description:
        "Building and managing online communities, creating engagement strategies, and moderating discussions.",
    },
    {
      name: "Device Repair & Engineering",
      percentage: 85,
      description:
        "Troubleshooting and repairing various electronic devices, providing technical support and solutions.",
    },
    {
      name: "Frontend Web Design",
      percentage: 88,
      description: "Creating responsive, user-friendly websites with modern design principles and best practices.",
    },
    {
      name: "Graphic Design",
      percentage: 92,
      description:
        "Producing creative visual content including branding materials, social media graphics, and marketing collateral.",
    },
    {
      name: "Social Media Management",
      percentage: 90,
      description: "Managing social media accounts, creating content calendars, and analyzing engagement metrics.",
    },
    {
      name: "Customer Service",
      percentage: 95,
      description: "Providing exceptional customer support and resolving client issues efficiently.",
    },
    {
      name: "Project Management",
      percentage: 85,
      description:
        "Planning, executing, and closing projects while ensuring they are delivered on time and within scope.",
    },
    {
      name: "Technical Support",
      percentage: 88,
      description: "Providing technical assistance and troubleshooting for software and hardware issues.",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-12 md:py-24 overflow-hidden">
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
              My <span className="text-blue-400">Skills</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              A showcase of my technical abilities and professional expertise
            </p>
          </div>
        </motion.div>

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    className="space-y-2 cursor-help"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-500">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  )
}

