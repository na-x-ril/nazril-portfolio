"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { SiGmail } from "react-icons/si"
import { toast } from "sonner"
import { AnimatedElement } from "@/components/animations/animated-element"

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields")
      return
    }

    toast.success("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedElement>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedElement direction="left" delay={400}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 group hover:text-primary transition-colors">
                  <SiGmail className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <p>nazrilpro10@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4 group hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                  <p>+62 85 806 477 799 (Nazril)</p>
                </div>
                <div className="flex items-center space-x-4 group hover:text-primary transition-colors">
                  <MapPin className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  <p>Jakarta</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement direction="right" delay={600}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="focus:ring-2 focus:ring-primary transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="focus:ring-2 focus:ring-primary transition-all min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full hover:scale-105 transition-transform">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
