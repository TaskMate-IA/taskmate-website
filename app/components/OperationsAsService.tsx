"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Pause, Zap, Clock } from "lucide-react"

export default function OperationsAsService() {
  const benefits = [
    {
      icon: Pause,
      title: "Pause or Scale Anytime",
      description: "No long-term contracts",
    },
    {
      icon: Zap,
      title: "AI-Driven Processes",
      description: "Automated updates & insights",
    },
    {
      icon: Clock,
      title: "Faster Results",
      description: "Get started within 24 hours",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">🚀 A Smarter Way to Work</h2>
        <p className="text-2xl mb-16 text-center max-w-3xl mx-auto text-muted-foreground">
          TaskMate provides on-demand AI-driven automation through a simple subscription model.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary dark:text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 dark:text-white">{benefit.title}</h3>
                <p className="text-lg text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

