"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { RippleButton } from "@/components/ui/ripple-button"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import gsap from "gsap"

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const portfolioRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(portfolioRef, { once: false, amount: 0.2 })

  const filters = ["All", "Web Design", "Graphic Design", "Tech Support", "Community"]

  const portfolioItems = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      category: "Web Design",
      image: "/images/ecommerce-platform.png",
      description: "A fully responsive e-commerce website with cart functionality and payment integration.",
      demoLink: "https://example.com/demo1",
      githubLink: "https://github.com/isamahwilliams/project1",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    },
    {
      id: 2,
      title: "Brand Identity Package",
      category: "Graphic Design",
      image: "/images/brand-identity.png",
      description: "Complete brand identity design including logo, color palette, and marketing materials.",
      demoLink: "https://example.com/demo2",
      githubLink: null,
      technologies: ["Photoshop", "Illustrator", "Figma"],
    },
    {
      id: 3,
      title: "Community Management Platform",
      category: "Community",
      image: "/images/community-management.png",
      description: "A platform for managing online communities with analytics and moderation tools.",
      demoLink: "https://example.com/demo3",
      githubLink: "https://github.com/isamahwilliams/project3",
      technologies: ["React", "Firebase", "Node.js", "Express"],
    },
    {
      id: 4,
      title: "Remote Tech Support Portal",
      category: "Tech Support",
      image: "/images/iot-tech-support.png",
      description: "A web application for providing remote technical support with video chat and screen sharing.",
      demoLink: "https://example.com/demo4",
      githubLink: "https://github.com/isamahwilliams/project4",
      technologies: ["Vue.js", "WebRTC", "Socket.io", "MongoDB"],
    },
    {
      id: 5,
      title: "Project Management Dashboard",
      category: "Project Management",
      image: "/images/project-management.png",
      description: "A comprehensive dashboard for tracking project progress, tasks, and team collaboration.",
      demoLink: "https://example.com/demo5",
      githubLink: "https://github.com/isamahwilliams/project5",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
    },
    {
      id: 6,
      title: "Responsive Portfolio Template",
      category: "Web Design",
      image: "/images/portfolio-template.png",
      description: "A customizable portfolio template for creative professionals with dark/light mode.",
      demoLink: "https://example.com/demo6",
      githubLink: "https://github.com/isamahwilliams/project6",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    },
  ]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  // GSAP 3D animations
  useEffect(() => {
    if (isInView && portfolioRef.current) {
      const cards = portfolioRef.current.querySelectorAll(".portfolio-card")

      cards.forEach((card, index) => {
        // Set initial 3D properties
        gsap.set(card, {
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        })

        // Create hover effect for each card
        card.addEventListener("mouseenter", (e) => {
          const rect = card.getBoundingClientRect()
          const mouseX = e.clientX - rect.left
          const mouseY = e.clientY - rect.top
          const rotateX = 20 * (0.5 - mouseY / rect.height)
          const rotateY = -20 * (0.5 - mouseX / rect.width)

          gsap.to(card, {
            duration: 0.5,
            rotateX: rotateX,
            rotateY: rotateY,
            z: 50,
            ease: "power2.out",
            boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
          })
        })

        // Reset on mouse leave
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            duration: 0.5,
            rotateX: 0,
            rotateY: 0,
            z: 0,
            ease: "power2.out",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          })
        })
      })
    }
  }, [isInView, filteredItems])

  // Safe image error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    if (target) {
      target.src = "/placeholder.svg"
    }
  }

  // Animation variants
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
    <section id="portfolio" className="py-12 md:py-24">
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
              My <span className="text-blue-400">Portfolio</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Showcasing some of my best work across different domains
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter, index) => (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <RippleButton
                variant={activeFilter === filter ? "default" : "outline"}
                className={cn(
                  activeFilter === filter ? "bg-blue-500 hover:bg-blue-600" : "",
                  "rounded-full transition-all duration-300 hover:scale-105",
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </RippleButton>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={portfolioRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="portfolio-card group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <div className="w-full h-full ken-burns-effect">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} - ${item.category} project by Isamah Williams`}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2 mt-1">{item.description}</p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-blue-500/80 text-white px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={item.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                          >
                            <Eye className="h-4 w-4 text-white" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    {item.githubLink && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={item.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                            >
                              <Github className="h-4 w-4 text-white" />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={item.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors ml-auto"
                          >
                            <ExternalLink className="h-4 w-4 text-white" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Visit Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

