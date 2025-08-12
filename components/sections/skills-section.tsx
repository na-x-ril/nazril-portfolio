"use client"

import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiGit } from "react-icons/si"
import { AnimatedElement } from "@/components/animations/animated-element"

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, link: "https://www.typescriptlang.org/" },
  { name: "React", icon: <SiReact className="text-cyan-500" />, link: "https://react.dev/" },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, link: "https://nodejs.org/" },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-600" />, link: "https://expressjs.com/" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, link: "https://tailwindcss.com/" },
  { name: "Git", icon: <SiGit className="text-orange-500" />, link: "https://git-scm.com/" },
  { name: "GenAI", icon: <div className="text-purple-500 font-bold text-lg">AI</div>, link: "https://aistudio.google.com/" },
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedElement>
            <h2 className="text-4xl font-bold mb-4">Featured Skills</h2>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <AnimatedElement key={index} delay={index * 100} direction="up">
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-background hover:bg-muted/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted group-hover:bg-background transition-colors duration-300 text-3xl mb-4">
                  {skill.icon}
                </div>
                <p className="font-semibold group-hover:text-primary transition-colors">{skill.name}</p>
              </a>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
