"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Intelligent, Automated Workspaces"
  
  useEffect(() => {
    let i = 0;
    setTypedText(""); // Ensure text resets before typing starts
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1)); // Ensure proper character display
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="text-center pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 pt-8 ">
        {typedText || fullText}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground">
        Enhance productivity, automate workflows, and scale operations with AI-powered efficiency.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
      <Link href="/call">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg lg:text-xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6"
        >
          Book a Free Consultation
        </Button>
      </Link>
      </div>
    </div>
  )
}

