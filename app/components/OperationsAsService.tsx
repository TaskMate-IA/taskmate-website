"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Pause, Zap, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; // Adjust this path as needed

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface OperationsAsServiceContent {
  heading: string;
  description: string;
  benefits: Benefit[];
}

export default function OperationsAsService() {
  // Instead of using usePathname to determine locale, we get it from the language context.
  const { language } = useLanguage(); // language is either "fr" or "en"
  const [content, setContent] = useState<OperationsAsServiceContent | null>(null);

  useEffect(() => {
    // Fetch the JSON file from /public/locales/{language}/operationsAsService.json
    fetch(`/locales/${language}/operationsAsService.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: OperationsAsServiceContent) => setContent(data))
      .catch((err) =>
        console.error("Error loading operations as service content:", err)
      );
  }, [language]);

  // Map icon names from the JSON file to the actual imported icon components.
  const iconComponents: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  } = {
    Pause: Pause,
    Zap: Zap,
    Clock: Clock,
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center text-black dark:text-white">
          {content.heading}
        </h2>
        <p className="text-xl mb-12 text-center max-w-4xl mx-auto text-muted-foreground">
          {content.description}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {content.benefits.map((benefit, index) => {
            const IconComponent = iconComponents[benefit.icon];
            return (
              <Card
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-primary dark:text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
