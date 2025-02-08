'use client';

import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, ArrowRight, InstagramIcon } from 'lucide-react';
import Link from 'next/link';
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "JavaScript", level: 90, icon: <DiJavascript1 className="text-foreground" />},
  { name: "React", level: 85, icon: <DiReact className="text-foreground" />},
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-foreground" />},
  { name: "Node.js", level: 75, icon: <DiNodejs className="text-foreground" />},
  { name: "Git", level: 85, icon: <DiGit className="text-foreground" />},
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col justify-center py-20">
        <div className="animated-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary">Muhammad Nazril</span>
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
              I am a high school student who is interested in web development
              and technology.
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
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
                  <GithubIcon className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
              <Link href="https://www.instagram.com/mnazril_7673/" target="_blank">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mt-32 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
                Featured Skills
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-16">
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
