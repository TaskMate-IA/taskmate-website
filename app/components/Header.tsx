"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 pt-1 pb-3">
        <div className="flex items-center justify-between h-24">
          {/* Logo with auto dark mode support */}
          <Link href="/" className="flex items-center w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src="/images/taskmate-light.png"
            alt="TaskMate Logo"
            width={180} // Bigger for large screens
            height={70}
            className="block dark:hidden"
            priority
          />
          <Image
            src="/images/taskmate-dark.png"
            alt="TaskMate Logo Dark Mode"
            width={180}
            height={70}
            className="hidden dark:block"
            priority
          />
        </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/components/CaseStudies" className="text-lg md:text-md hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/components/HowItWorks" className="text-lg md:text-lg hover:text-primary transition-colors">
              Notre Processus
            </Link>
            <Link href="#" className="text-lg md:text-lg hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-lg md:text-lg hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right-side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/call">
              <Button className="bg-gradient-to-r from-purple-800 to-fuchsia-400 hidden md:inline-flex bg-primary text-primary-foreground hover:from-purple-600 hover:to-fuchsia-300 text-lg md:text-xl px-6 py-3">
              Réservez un appel d'intro
              </Button>
            </Link>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/components/CaseStudies" className="text-lg md:text-xl hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/components/HowItWorks" className="text-lg md:text-xl hover:text-primary transition-colors">
              Notre Processus
            </Link>
            <Link href="#" className="text-lg md:text-xl hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-lg md:text-xl hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/call">
              <Button className="bg-gradient-to-r from-purple-800 to-fuchsia-400 hidden md:inline-flex bg-primary text-primary-foreground hover:from-purple-600 hover:to-fuchsia-300 text-lg md:text-xl px-6 py-3">
              Réservez un appel d'intro
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}


