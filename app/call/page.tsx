"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext"; // Make sure this path is correct
import LanguageSwitcher from "../components/LanguageSwitcher"; // Ensure the path is correct


export interface BookIntroCallContent {
  title: string;
  description: string;
  list: string[];
  finalMessage: string;
}

export default function BookIntroCall() {
  // Use your language context instead of URL-based detection.
  const { language } = useLanguage(); // language is "fr" or "en"
  const [content, setContent] = useState<BookIntroCallContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for the Calendly embed.
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Fetch the localized content for this page.
  useEffect(() => {
    fetch(`/locales/${language}/bookIntroCall.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: BookIntroCallContent) => setContent(data))
      .catch((err) =>
        console.error("Error loading book intro call content:", err)
      );
  }, [language]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <LanguageSwitcher/>
      <div className="pt-16 md:pt-20 lg:pt-24 bg-background text-gray-900 dark:text-gray-100 mt-40 mb-40">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20">
          {/* Call-to-action section */}
          <section className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 bg-background shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-20 mb-20">
              {/* Left side: Text content */}
              <div className="w-full md:w-1/2 text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {content.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  {content.description}
                </p>
                <ul className="text-lg text-gray-600 dark:text-gray-400 space-y-3">
                  {content.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-lg font-medium text-primary">
                  {content.finalMessage}
                </p>
              </div>

              {/* Right side: Calendly integration */}
              <div className="w-full md:w-1/2">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 border border-gray-200 dark:border-gray-700">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-96">
                      <span className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></span>
                    </div>
                  ) : (
                    <iframe
                      src="https://calendly.com/taskmate-ia"
                      width="100%"
                      height="500px"
                      className="border-none rounded-xl"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="mt-10 rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10">
        <Footer />
      </section>
    </>
  );
}
