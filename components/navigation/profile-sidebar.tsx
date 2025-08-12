"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiGithub, SiInstagram } from "react-icons/si"
import Image from "next/image"
import profile from "@/public/profile.png"

interface ProfileSidebarProps {
  showSidebar: boolean
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export const ProfileSidebar = ({ showSidebar, activeSection, scrollToSection }: ProfileSidebarProps) => {
  const navItems = [
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const socialLinks: Record<
    string,
    { label: string; href: string; icon: JSX.Element }
  > = {
    github: {
      label: "GitHub",
      href: "https://github.com/na-x-ril",
      icon: <SiGithub className="h-4 w-4" />,
    },
    instagram: {
      label: "Instagram",
      href: "https://instagram.com/mnazril_7673",
      icon: <SiInstagram className="h-4 w-4" />,
    },
  }

  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background/95 backdrop-blur-sm border-r z-40 transition-transform duration-700 ease-in-out ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } hidden md:block`}
    >
      <div className="p-6 h-full overflow-y-auto">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                <Image src={profile} alt="Profile Picture" width={80} height={80} className="rounded-full"/>
              </div>
              <h3 className="font-bold text-lg">Muhammad Nazril</h3>
              <p className="text-sm text-muted-foreground">High School Student</p>
            </div>

            <div className="space-y-3 mb-4">
              <Badge variant="secondary" className="w-full justify-center">
                Web Developer
              </Badge>
              <Badge variant="secondary" className="w-full justify-center">
                Tech Enthusiast
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div>
                <div className="font-semibold text-lg">8+</div>
                <div className="text-xs text-muted-foreground">Skills</div>
              </div>
              <div>
                <div className="font-semibold text-lg">3+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {Object.entries(socialLinks).map(([key, { href, icon }]) => (
                <Button key={key} variant="ghost" size="sm" asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Navigation</h4>
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
  )
}
