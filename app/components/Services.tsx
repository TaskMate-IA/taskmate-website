"use client"

import { useState, useEffect } from "react"
import { Bot, Users, Mail, Rocket, UserPlus, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const [visibleServices, setVisibleServices] = useState(0)
  const services = [
    { icon: Bot, title: "Automated Task Management", description: "AI-assisted workflow automation." },
    { icon: Users, title: "Smart CRM Integration", description: "Sales and client management made seamless." },
    { icon: Mail, title: "AI Lead Nurturing", description: "Smart follow-ups and lead conversion." },
    { icon: Rocket, title: "Project Optimization", description: "Agile project tracking with AI insights." },
    { icon: UserPlus, title: "Talent & Hiring Automation", description: "AI-powered recruitment & evaluation." },
    { icon: FileText, title: "SOPs & Knowledge Base", description: "Access to high-level business templates." },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleServices((prev) => (prev < services.length ? prev + 1 : prev))
    }, 500)

    return () => clearInterval(timer)
  }, [services.length])

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">🛠️ What TaskMate Offers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              <CardHeader>
                <service.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary dark:text-white mb-4" />
                <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

