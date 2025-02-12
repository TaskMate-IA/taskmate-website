"use client";

import { useLanguage } from "../context/LanguageContext"; // Adjust the path as needed
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQContent {
  heading: string;
  faqItems: FAQItem[];
}

export default function FAQ() {
  // Use the language value from your context.
  const { language } = useLanguage(); // "fr" or "en"
  const [content, setContent] = useState<FAQContent | null>(null);

  useEffect(() => {
    // Fetch the FAQ JSON file based on the language from context.
    fetch(`/locales/${language}/faq.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FAQContent) => setContent(data))
      .catch((err) => console.error("Error loading FAQ content:", err));
  }, [language]);

  if (!content) {
    return <div>Loading...</div>;
  }

  // Split FAQ items into two columns
  const half = Math.ceil(content.faqItems.length / 2);
  const firstColumn = content.faqItems.slice(0, half);
  const secondColumn = content.faqItems.slice(half);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-black dark:text-white">
          {content.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Accordion type="single" collapsible className="w-full">
            {firstColumn.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            {secondColumn.map((item, index) => (
              <AccordionItem
                key={index + half}
                value={`item-${index + half}`}
              >
                <AccordionTrigger className="text-left text-xl hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
