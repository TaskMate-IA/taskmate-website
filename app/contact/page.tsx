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
        "template_ywjy4qc", // Replace with your actual template ID
        templateParams,
        "iqznrHcAy5GIWDQ2e"
      );

      if (response.status === 200) {
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
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
            <div className="flex flex-col mt-20 mb-20  md:flex-row items-center md:items-start gap-10">
              <div className="w-full md:w-1/2 text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">📩 Get in Touch with Us!</h1>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Have a question or want to collaborate? Fill out the form and we’ll get back to you as soon as possible.
                  </p>
                  <ul className="text-lg text-gray-600 dark:text-gray-400 space-y-3">
                    <li>✅ Quick responses from our team</li>
                    <li>✅ Open to collaborations & partnerships</li>
                    <li>✅ Your ideas matter to us!</li>
                  </ul>
                  <p className="text-lg font-medium text-primary">
                    Drop us a message and let’s connect! 👇
                  </p>
              </div>

              <div className="w-full md:w-1/2">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                    <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                    <Input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
                    <Textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>

                  {success && <p className="text-green-500 text-center mt-4">Message sent successfully! ✅</p>}
                  {error && <p className="text-red-500 text-center mt-4">{error}</p>}
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
