"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext"; // adjust the path as needed

interface FooterLink {
  label: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterBottom {
  text: string;
  poweredBy: string;
}

interface FooterContent {
  sections: FooterSection[];
  bottom: FooterBottom;
}

export default function Footer() {
  // Use the language value from your context instead of URL detection.
  const { language } = useLanguage(); // language is "fr" or "en"
  const [content, setContent] = useState<FooterContent | null>(null);

  useEffect(() => {
    // Fetch the locale-specific JSON file from /public/locales/{language}/footer.json
    fetch(`/locales/${language}/footer.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: FooterContent) => setContent(data))
      .catch((err) => console.error("Error loading footer content:", err));
  }, [language]);

  const currentYear = new Date().getFullYear();

  if (!content) {
    return <div>Loading...</div>;
  }

  // Replace the %YEAR% placeholder with the current year
  const bottomText = content.bottom.text.replace("%YEAR%", currentYear.toString());

  return (
    <footer className="py-16 mt-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-lg hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-lg">
            {bottomText}
            <br />
            {content.bottom.poweredBy}
          </p>
          <div className="flex space-x-6">
            <a
              href="https://x.com/TaskMate_IA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/taskmate-ia-689ba3349/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
