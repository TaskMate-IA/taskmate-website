"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function BookIntroCall() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500) // Simulate loading effect
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Section Wrapper */}
      <div className="pt-16 md:pt-20 lg:pt-24 bg-background text-gray-900 dark:text-gray-100 mt-40 mb-40">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20">

          {/* Call Section with Rounded Border */}
          <section className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 bg-backgroundshadow-lg">

            {/* Two-column layout */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-20 mb-20">
              
              {/* Left Section: Text Content */}
              <div className="w-full md:w-1/2 text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  🚀 Let's Build Something Great Together!
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  Book a quick intro call to discuss your needs. Whether you’re looking for innovative solutions or a partnership, we’d love to hear from you.
                </p>
                <ul className="text-lg text-gray-600 dark:text-gray-400 space-y-3">
                  <li>✅ Explore how we can help your business</li>
                  <li>✅ No commitment, just brainstorming</li>
                  <li>✅ 15-minute slot, easy & efficient</li>
                </ul>
                <p className="text-lg font-medium text-primary">
                  Ready to get started? Pick a time that works for you below. 👇
                </p>
              </div>

              {/* Right Section: Calendly Integration */}
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

      {/* Footer */}
      <Footer />
    </>
  )
}



