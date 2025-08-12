"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SplitText from "../split-text"
import TextType from "../text-type"
import LightRays from "../light-rays"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div style={{ width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br pt-10 from-primary/5 via-transparent to-secondary/5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      <div className="text-left lg:text-left">
        <h1 className="flex flex-col">
          <SplitText
            text="Hello, I'm"
            className="text-5xl tracking-tight font-extrabold text-left text-foreground sm:text-5xl md:text-6xl"
            delay={70}
            duration={2}
            ease="elastic.out(1, 0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
          <SplitText
            text="Muhammad Nazril!"
            className="text-5xl tracking-tight font-extrabold text-left text-foreground sm:text-5xl md:text-6xl"
            delay={70}
            duration={2}
            ease="elastic.out(1, 0.3)"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
        </h1>
        <TextType
          className="mt-4 text-lg text-foreground bg-white px-2 rounded-md max-w-5xl max-md:w-4/5"
          text={["I am a high school student who is interested in web development and technology."]}
          initialDelay={500}
          typingSpeed={75}
          pauseDuration={1500}
          deletingSpeed={50}
          showCursor={true}
          cursorCharacter="_"
          textColors={["#000"]}
        />
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
