import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, RefreshCw, TrendingUp } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Rocket,
      title: "Onboarding",
      description: "Quick 30-minute setup & consultation",
    },
    {
      icon: RefreshCw,
      title: "Integrate Workflows",
      description: "AI seamlessly syncs with your processes",
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimization",
      description: "Weekly performance reviews & improvements",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">
          🔧 Your Path to AI-Powered Productivity
        </h2>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 border-none">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <step.icon className="w-6 h-6 text-primary dark:text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-2 dark:text-white">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl text-muted-foreground dark:text-gray-300">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white dark:text-black flex items-center justify-center text-xl font-bold relative z-10">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

