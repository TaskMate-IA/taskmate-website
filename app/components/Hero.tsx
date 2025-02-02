"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Réinventez vos opérations – Automatisez vos processus."
  
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
    <div className="mt-10 text-center pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
      <h1 className="sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-10 pt-8 ">
        {typedText || fullText}
      </h1>
      <p className="text-lg md:text-xl lg:text-xl mb-12 max-w-5xl mx-auto text-muted-foreground">
      Trouvez l'offre parfaite, automatisez l'acquisition de leads et réglez vos problèmes de gestion de projet – tout en scaleant votre entreprise vers les 8 chiffres.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="/call">
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-800 to-fuchsia-400 text-white font-semibold text-xl px-8 py-4 flex items-center gap-2 hover:from-purple-600 hover:to-fuchsia-300 transition duration-300 ease-in-out shadow-md"
        >
          Réservez un appel d'intro
          <span className="text-2xl"></span> {/* Arrow icon */}
        </Button>
      </Link>
      </div>
    </div>
  )
}

