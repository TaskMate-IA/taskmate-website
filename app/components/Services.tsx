"use client"

import { useState, useEffect } from "react"
import { Bot, Users, Mail, UserPlus, FileText, Waypoints } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const [visibleServices, setVisibleServices] = useState(0)
  const services = [
    { icon: Mail, title: "Génération de leads", description: "Des systèmes outbound et marketing évolutifs pour faire croître votre entreprise en pilote automatique." },
    { icon: Users, title: "Systèmes internes", description: "Centralisez vos opérations et votre gestion des connaissances avec des outils automatisés performants." },
    { icon: FileText, title: "Automatisation administrative", description: "Des solutions intelligentes qui gèrent vos tâches administratives et contractuelles sans effort." },
    { icon: Bot, title: "Exécution IA", description: "L’intelligence artificielle qui automatise les étapes clés de votre processus d’exécution pour réduire vos coûts de personnel." },
    { icon: UserPlus, title: "Déploiement CRM", description: "Des systèmes de vente pour suivre, itérer et scaler votre croissance, à l’image d’une entreprise à 8 chiffres." },
    { icon: Waypoints, title: "Systèmes de recrutement", description: "Des processus automatisés qui identifient, contactent et évaluent vos candidats" },
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
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">Ce que nos clients reçoivent 🛠️</h2>
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

