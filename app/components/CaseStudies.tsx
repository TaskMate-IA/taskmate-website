import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Croissance d'une Startup SaaS",
      description: "Automatisation des interactions client avec des agents IA personnalisés",
      metric: "+250% de MRR",
    },
    {
      title: "Efficacité d'une Agence Immobilière",
      description: "Automatisation de la prospection commerciale et du suivi des leads",
      metric: "+45 % de taux de conversion client",
    },
    {
      title: "Automatisation d'une Clinique Dentaire",
      description: "Système de gestion des rendez-vous et automatisation administrative",
      metric: "+25 % de nouveaux patients",
    },
    /*
    {
      title: "Boost des Réservations pour un Hôtel",
      description: "Système de réception digitale interactive et optimisation des réservations",
      metric: "+15 % de réservations directes",
    },
    */
  ]

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">
          📈 Notre impact sur nos clients
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="flex flex-col bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl dark:text-white">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-base md:text-lg text-muted-foreground">{study.description}</p>
                <p className="text-2xl md:text-3xl font-bold text-primary dark:text-white">{study.metric}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 text-base md:text-lg">
                Lire l’étude de cas <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

