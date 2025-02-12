"use client";

import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CaseStudy {
  title: string;
  description: string;
  metric: string;
}

interface CaseStudiesContent {
  heading: string;
  studies: CaseStudy[];
  buttonText: string;
}

export default function CaseStudies() {
  const { language } = useLanguage(); // "fr" or "en"
  const [content, setContent] = useState<CaseStudiesContent | null>(null);

  useEffect(() => {
    fetch(`/locales/${language}/caseStudies.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: CaseStudiesContent) => setContent(data))
      .catch((err) => console.error("Error loading translations:", err));
  }, [language]);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">
          {content.heading}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.studies.map((study, index) => (
            <Card
              key={index}
              className="flex flex-col bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl dark:text-white">
                  {study.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-base md:text-lg text-muted-foreground">
                  {study.description}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-primary dark:text-white">
                  {study.metric}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 p-0 text-base md:text-lg"
                >
                  {content.buttonText}{" "}
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
