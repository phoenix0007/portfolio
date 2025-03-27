"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children: React.ReactNode
}

export function RippleButton({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([])
  const [nextId, setNextId] = useState(0)

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()

    // Get click position relative to button
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate ripple size (should be large enough to cover the button)
    const size = Math.max(rect.width, rect.height) * 2

    // Add new ripple
    const newRipple = { x, y, size, id: nextId }
    setRipples([...ripples, newRipple])
    setNextId(nextId + 1)
  }

  // Remove ripples after animation completes
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples(ripples.slice(1))
      }, 600) // Match the animation duration

      return () => clearTimeout(timer)
    }
  }, [ripples])

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("relative overflow-hidden", className)}
      onClick={addRipple}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      {children}
    </Button>
  )
}

