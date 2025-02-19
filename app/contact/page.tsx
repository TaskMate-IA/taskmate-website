"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext"; // Adjust the path as needed
import LanguageSwitcher from "../components/LanguageSwitcher"; // Ensure the path is correct

export interface ContactContent {
  title: string;
  description: string;
  list: string[];
  finalMessage: string;
  placeholders: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  buttonText: string;
  loadingButtonText: string;
  successMessage: string;
  errorMessage: string;
}

export default function Contact() {
  // Use language context to get the current language.
  const { language } = useLanguage(); // "fr" or "en"
  const [content, setContent] = useState<ContactContent | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Fetch the localized content for this contact page.
  useEffect(() => {
    fetch(`/locales/${language}/contact.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: ContactContent) => setContent(data))
      .catch((err) =>
        console.error("Error loading contact content:", err)
      );
  }, [language]);

  // Simulate sending/loading state (and emailjs integration remains unchanged)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      const response = await emailjs.send(
        "service_g1gvr0h",
        "template_ywjy4qc",
        templateParams,
        "iqznrHcAy5GIWDQ2e"
      );

      if (response.status === 200) {
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(content?.errorMessage || "Échec de l'envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      setError(content?.errorMessage || "Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <LanguageSwitcher />
      <div className="pt-16 md:pt-20 lg:pt-24 bg-background text-gray-900 dark:text-gray-100 mt-40 mb-40">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20">
          {/* Call-to-action section */}
          <section className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 bg-background shadow-lg">
            <div className="flex flex-col mt-20 mb-20 md:flex-row items-center md:items-start gap-10">
              {/* Left Section – Text Content */}
              <div className="w-full md:w-1/3 text-left space-y-6">
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

              {/* Right Section – Contact Form */}
              <div className="w-full md:w-3/5">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      type="text"
                      name="name"
                      placeholder={content.placeholders.name}
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="py-4 text-lg"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder={content.placeholders.email}
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="py-4 text-lg"
                    />
                    <Input
                      type="text"
                      name="subject"
                      placeholder={content.placeholders.subject}
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="py-4 text-lg"
                    />
                    <Textarea
                      name="message"
                      placeholder={content.placeholders.message}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="h-40 text-lg"
                    />
                    <Button type="submit" className="w-full py-4 text-lg" disabled={loading}>
                      {loading ? content.loadingButtonText : content.buttonText}
                    </Button>
                  </form>

                  {success && (
                    <p className="text-green-500 text-center mt-4">
                      {content.successMessage}
                    </p>
                  )}
                  {error && (
                    <p className="text-red-500 text-center mt-4">
                      {error}
                    </p>
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
