'use client';

import { Button } from '@/components/ui/button';
import { Github, ArrowRight, Instagram } from 'lucide-react';
import Link from 'next/link';
import { SiInstagram, SiGithub, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNodedotjs, SiGit } from 'react-icons/si';
import SplitText from '@/components/split-text';
import TextType from '@/components/text-type';
import LightRays from '@/components/light-rays';

const skills = [
  { name: "JavaScript", level: 90, icon: <SiJavascript className="text-foreground" />},
  { name: "TypeScript", level: 80, icon: <SiTypescript className="text-foreground" />},
  { name: "React", level: 85, icon: <SiReact className="text-foreground" />},
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-foreground" />},
  { name: "Node.js", level: 75, icon: <SiNodedotjs className="text-foreground" />},
  { name: "Git", level: 85, icon: <SiGit className="text-foreground" />},
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div style={{ width: '100%', height: '100dvh', position: 'fixed' }}>
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
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col justify-center py-20">
        <div className="max-w-fit mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="mt-8 flex sm:justify-center lg:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
              <Button variant="ghost" size="icon">
                <Link href="https://github.com/na-x-ril" target="_blank">
                  <SiGithub className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
              <Link href="https://www.instagram.com/mnazril_7673/" target="_blank">
                  <SiInstagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mt-32 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
                Featured Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-16">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center rounded-full text-white text-3xl"
                    >
                      {skill.icon}
                    </div>
                    <p className="mt-2 font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </main>
  );
}
