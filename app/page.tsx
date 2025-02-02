import dynamic from "next/dynamic"
import Header from "./components/Header"
import OperationsAsService from "./components/OperationsAsService"
import Services from "./components/Services"
import TestimonialsComparison from "./components/TestimonialsComparison"
import CaseStudies from "./components/CaseStudies"
import HowItWorks from "./components/HowItWorks"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

const DynamicHero = dynamic(() => import("./components/Hero"), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-16 md:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20">
          <section className="rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <DynamicHero />
          </section>
          <section className="rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <OperationsAsService />
          </section>
          <section className="rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <Services />
          </section>
          <section className="rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <TestimonialsComparison />
          </section>
          <section className="rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <CaseStudies />
          </section>
          <section className="rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <HowItWorks />
          </section>
          <section className="rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <FAQ />
          </section>
          <section className="rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
            <FinalCTA />
          </section>
        </div>
      </div>
      <section className="mt-10 rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
        <Footer />
      </section>
    </main>
  )
}

