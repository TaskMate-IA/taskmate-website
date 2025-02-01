import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <div className="py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-8 text-center text-black dark:text-white">
          🚀 Start Automating Your Business Today
        </h2>
        <p className="text-xl mb-12 text-muted-foreground max-w-3xl mx-auto">
          Experience the power of AI-driven productivity with a free consultation.
        </p>
        <Link href="/call">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-800 to-fuchsia-400 text-primary-foreground hover:from-purple-900 to-fuchsia-500 text-base md:text-lg lg:text-xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6"
          >
            Book a Free Consultation
          </Button>
        </Link>
        <p className="mt-6 text-base md:text-lg text-muted-foreground">No credit card required</p>
      </div>
    </div>
  )
}

