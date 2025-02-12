"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext"; // adjust the path if needed

interface FinalCTAContent {
  heading: string;
  description: string;
  buttonText: string;
  disclaimer: string;
}

export default function FinalCTA() {
  // Use the language from your context instead of URL detection.
  const { language } = useLanguage();
  const [content, setContent] = useState<FinalCTAContent | null>(null);

  useEffect(() => {
    // Fetch the JSON file from /public/locales/{language}/finalCTA.json
    fetch(`/locales/${language}/finalCTA.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FinalCTAContent) => setContent(data))
      .catch((err) => console.error("Error loading Final CTA content:", err));
  }, [language]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-8 text-center text-black dark:text-white">
          {content.heading}
        </h2>
        <p className="text-xl mb-12 text-muted-foreground max-w-3xl mx-auto">
          {content.description}
        </p>
        <Link href="/call">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-800 to-fuchsia-400 text-primary-foreground hover:from-purple-600 hover:to-fuchsia-300 text-base md:text-lg lg:text-xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6"
          >
            {content.buttonText}
          </Button>
        </Link>
        <p className="mt-6 text-base text-md text-muted-foreground">
          {content.disclaimer}
        </p>
      </div>
    </div>
  );
}
