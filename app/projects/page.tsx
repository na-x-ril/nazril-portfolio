"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinux } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "D'Nazrill Portfolio",
    description: "Portfolio website showcasing my projects, contacts and social media.",
    tags: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/na-x-ril/nazril-portfolio",
    liveUrl: "https://na-x-ril.github.io/nazril-portfolio-2/"
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

export default function Projects() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden">
              <CardHeader className="flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <SiGithub className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
