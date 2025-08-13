"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import SplitText from "../split-text"
import TextType from "../text-type"
import { Separator } from "@radix-ui/react-context-menu"
import Particles from "@/components/ui/particles"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div style={{ width: '100%', height: '100%', position: 'absolute'}}>
        <Particles
          particleColors={['#ffffff', '#0ac20aff', '#0ac20a']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="text-left lg:text-left z-10">
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
          className="mt-4 text-lg text-foreground rounded-md max-w-full max-md:w-4/5"
          text={["I am a high school student who is interested in web development and technology."]}
          initialDelay={500}
          typingSpeed={75}
          pauseDuration={500}
          deletingSpeed={50}
          showCursor={true}
          cursorCharacter="_"
        />
        <Separator className="w-full mt-5 h-[1px] bg-primary" />
        <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
