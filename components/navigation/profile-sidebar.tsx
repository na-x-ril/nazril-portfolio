"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGithub, SiInstagram } from "react-icons/si";
import Image from "next/image";

import { personalInfo, navItems, skills, projects } from "@/data/portfolio-data";

interface ProfileSidebarProps {
  showSidebar: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const stats = [
  { label: "Skills", value: skills.length },
  { label: "Projects", value: projects.length },
];

export const ProfileSidebar = ({
  showSidebar,
  activeSection,
  scrollToSection,
}: ProfileSidebarProps) => {
  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background/95 backdrop-blur-sm border-r z-40 transition-transform duration-700 ease-in-out ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } hidden md:block`}
    >
      <div className="p-6 h-full overflow-y-auto">
        <Card className="mb-6">
          <CardContent className="p-6">
            {/* Avatar + Name */}
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                <Image
                  src={personalInfo.avatar}
                  alt="Profile Picture"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg">{personalInfo.name}</h3>
              <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
            </div>

            {/* Badges */}
            <div className="space-y-1 mb-4">
              {personalInfo.badges.map((b) => (
                <Badge key={b} variant="secondary" className="w-full justify-center text-base">
                  {b}
                </Badge>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-semibold text-lg">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex justify-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={personalInfo.socials.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={personalInfo.socials.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiInstagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
            Navigation
          </h4>
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};