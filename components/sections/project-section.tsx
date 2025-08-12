"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { AnimatedElement } from "@/components/animations/animated-element"
import SpotlightCard from "../spotlight-card"

// Mapping teknologi -> link resmi
const techLinks: Record<string, string> = {
  "Next.js": "https://nextjs.org/",
  "Tailwind CSS": "https://tailwindcss.com/",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
}

const projects = [
  {
    title: "D'Nazrill Portfolio",
    description: "Portfolio website showcasing my projects, contacts and social media.",
    tags: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/na-x-ril/nazril-portfolio",
    liveUrl: "https://onlynazril7z.vercel.app/"
  },
  {
    title: "Whatsapp Ext",
    description: "Chrome extension to send many chats at once.",
    tags: ["JavaScript"],
    githubUrl: "https://github.com/na-x-ril/whatsapp-ext/"
  },
  {
    title: "GainNode",
    description: "JavaScript script to change the sound quality on a website.",
    tags: ["JavaScript"],
    githubUrl: "https://github.com/na-x-ril/audioGain/"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="max-w-7xl min-lg:pt-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <AnimatedElement>
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in web development.
            </p>
          </AnimatedElement>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedElement key={index} delay={index * 200} direction="up">
              <SpotlightCard
                className="group flex flex-col h-full transition-all duration-300 hover:scale-105"
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </div>
                <div className="mt-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <a
                        key={tag}
                        href={techLinks[tag] || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge
                          variant="secondary"
                          className="hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      </a>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:scale-105 transition-transform bg-transparent border-neutral-600 hover:border-blue-400"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-transform bg-transparent border-neutral-600 hover:border-blue-400"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
