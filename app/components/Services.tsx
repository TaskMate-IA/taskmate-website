"use client";

import { useState, useEffect } from "react";
import { Bot, Users, Mail, UserPlus, FileText, Waypoints } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../context/LanguageContext"; // adjust the path as needed

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesContent {
  heading: string;
  services: Service[];
}

export default function Services() {
  // Instead of using usePathname() to determine the locale,
  // we now use the language value from our global context.
  const { language } = useLanguage(); // "fr" or "en"
  const [content, setContent] = useState<ServicesContent | null>(null);
  const [visibleServices, setVisibleServices] = useState(0);

  useEffect(() => {
    // Fetch the JSON file based on the current language from context.
    fetch(`/locales/${language}/services.json`)
      .then((res) => res.json())
      .then((data: ServicesContent) => setContent(data))
      .catch((err) =>
        console.error("Error loading services content:", err)
      );
  }, [language]);

  useEffect(() => {
    if (!content) return;
    // Reveal one additional service every 500ms until all are visible
    const timer = setInterval(() => {
      setVisibleServices((prev) =>
        prev < content.services.length ? prev + 1 : prev
      );
    }, 500);
    return () => clearInterval(timer);
  }, [content]);

  // Map icon names from the JSON file to the actual icon components.
  const iconComponents: {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  } = {
    Mail: Mail,
    Users: Users,
    FileText: FileText,
    Bot: Bot,
    UserPlus: UserPlus,
    Waypoints: Waypoints,
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">
          {content.heading}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => {
            // Only render services that have become visible
            if (index >= visibleServices) return null;
            const IconComponent = iconComponents[service.icon];
            return (
              <Card
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  {IconComponent && (
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary dark:text-white mb-4" />
                  )}
                  <CardTitle className="text-xl md:text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base md:text-lg text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
