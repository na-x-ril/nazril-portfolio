"use client"

import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navigation/navbar"
import { ProfileSidebar } from "@/components/navigation/profile-sidebar"
import { HeroSection } from "@/components/sections/hero-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/project-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [mounted, setMounted] = useState(false)
  const navbarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      const heroSection = document.getElementById("home")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setShowSidebar(window.scrollY > heroBottom - 400)
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = navbarRef.current?.offsetHeight || 0
      const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <div className="h-dvh bg-background text-foreground w-full">
      {/* Pasang ref di sini */}
      <div ref={navbarRef}>
        <Navbar
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          showSidebar={showSidebar}
        />
      </div>

      <ProfileSidebar showSidebar={showSidebar} activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className={`transition-all duration-700 ease-in-out ${showSidebar ? "md:ml-80" : "ml-0"}`}>
        <HeroSection scrollToSection={scrollToSection} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
