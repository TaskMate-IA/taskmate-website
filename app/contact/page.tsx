"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
        setError("Échec de l'envoi du message. Veuillez réessayer.");
      }
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="pt-16 md:pt-20 lg:pt-24 bg-background text-gray-900 dark:text-gray-100 mt-40 mb-40">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20">
          <section className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 bg-background">
            <div className="flex flex-col mt-20 mb-20 md:flex-row items-center md:items-start gap-10">
              
              {/* Left Section - Text Content */}
              <div className="w-full md:w-1/3 text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">Entrons en Contact! 📩 </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  Une idée, un projet ou une question ? Remplissez le formulaire ci-contre et nous vous répondrons ASAP.
                </p>
                <ul className="text-lg text-gray-600 dark:text-gray-400 space-y-3">
                  <li>✅ Réponses rapides et personnalisées</li>
                  <li>✅ Ouverts aux collaborations ambitieuses</li>
                  <li>✅ Donnez vie à vos idées les plus audacieuses</li>
                </ul>
                <p className="text-lg font-medium text-primary">
                  Laissez-nous un message, et construisons l’avenir ensemble ! 👇
                </p>
              </div>

              {/* Right Section - Contact Form */}
              <div className="w-full md:w-3/5">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nom"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="py-4 text-lg"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="py-4 text-lg"
                    />
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Sujet"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="py-4 text-lg"
                    />
                    <Textarea
                      name="message"
                      placeholder="Votre message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="h-40 text-lg"
                    />
                    <Button type="submit" className="w-full py-4 text-lg" disabled={loading}>
                      {loading ? "Envoi en cours..." : "Envoyer! ✉️"}
                    </Button>
                  </form>

                  {success && (
                    <p className="text-green-500 text-center mt-4">🎉 Message envoyé avec succès !</p>
                  )}
                  {error && (
                    <p className="text-red-500 text-center mt-4">⚠️ {error}</p>
                  )}
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
