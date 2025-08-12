"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return [ref, isIntersecting] as const
}

export const AnimatedElement = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  const directionClasses = {
    up: isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    down: isIntersecting ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0",
    left: isIntersecting ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
    right: isIntersecting ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${directionClasses[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
