"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Pause, Zap, Clock } from "lucide-react";

export default function OperationsAsService() {
  const benefits = [
    {
      icon: Pause,
      title: "Pause à tout moment",
      description:
        "Les meilleurs systèmes se créent par sessions courtes, pas sur de longues périodes. Inutile de payer un forfait agence de 4mo+ ou plus : obtenez ce qu'il vous faut et mettez votre abonnement en pause ou annulez-le quand vous le souhaitez.",
    },
    {
      icon: Zap,
      title: "Pas de superflu",
      description: "Nous vous envoyons des mises à jour asynchrones sur Slack et offrons des consultations hebdomadaires pour discuter ou faire du brainstorming. Nous révisons également les systèmes jusqu'à ce que vous soyez entièrement satisfait.",
    },
    {
      icon: Clock,
      title: "Des résultats 2x plus rapides",
      description: "Nous pouvons commencer dès demain. Vous participerez à un appel d'intro de 30 minutes pour discuter des détails et préparer le lancement, puis nous passerons à l'action.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center text-black dark:text-white">
          🚀 Transformez vos opérations
        </h2>
        <p className="text-xl mb-12 text-center max-w-4xl mx-auto text-muted-foreground">
          Recruter en interne est long, coûteux et exige un engagement important dès le départ. 
          Nous optons pour une approche différente : des experts en automatisation à la demande, 
          via un abonnement mensuel simple, pour vous offrir les systèmes dont vous avez besoin à moindre coût.
        </p>
        <div className="grid md:grid-cols-3 gap-4"> {/* Reduced gap from 8 to 4 */}
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
  );
}
