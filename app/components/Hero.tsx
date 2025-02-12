"use client";

import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroContent {
  headline: string;
  description: string;
  ctaLabel: string;
}

export default function Hero() {
  const { language } = useLanguage(); // "fr" or "en"
  const [content, setContent] = useState<HeroContent | null>(null);

  useEffect(() => {
    const url = `/locales/${language}/hero.json`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: HeroContent) => setContent(data))
      .catch((err) => console.error("Error fetching hero content:", err));
  }, [language]);

  if (!content) return <div>Loading…</div>;

  return (
    <div className="mt-10 text-center pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
      <h1 className="text-5xl xl:text-6xl font-bold mb-10 pt-8">
        {content.headline}
      </h1>
      <p className="text-lg md:text-xl lg:text-xl mb-12 max-w-5xl mx-auto text-muted-foreground">
        {content.description}
      </p>
      <div className="flex justify-center items-center">
        <Link href="/call">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-800 to-fuchsia-400 text-white font-semibold text-xl px-8 py-4 flex items-center justify-center gap-2 hover:from-purple-600 hover:to-fuchsia-300 transition duration-300 ease-in-out shadow-md"
          >
            {content.ctaLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
}
