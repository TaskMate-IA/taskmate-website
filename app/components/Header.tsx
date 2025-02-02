"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 pt-1 pb-3">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center w-48">
            <Image
              src="/images/taskmate-light.png"
              alt="TaskMate Logo"
              width={150}
              height={50}
              className="block dark:hidden"
              priority
            />
            <Image
              src="/images/taskmate-dark.png"
              alt="TaskMate Logo Dark Mode"
              width={150}
              height={50}
              className="hidden dark:block"
              priority
            />
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8 whitespace-nowrap">
            <Link href="#" className="text-lg hover:text-primary transition-colors">
              Notre Processus
            </Link>
            <Link href="#" className="text-lg hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="#" className="text-lg hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-lg hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right-side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/call">
              <Button className="bg-gradient-to-r from-purple-800 to-fuchsia-400 hidden lg:inline-flex text-white hover:from-purple-600 hover:to-fuchsia-300 text-lg px-6 py-3 whitespace-nowrap">
                Réservez un appel d'intro
              </Button>
            </Link>
            <button className="lg:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/90 backdrop-blur-sm shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="#" className="text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
              Notre Processus
            </Link>
            <Link href="#" className="text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link href="#" className="text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/contact" className="text-lg hover:text-primary transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/call">
              <Button className="bg-gradient-to-r from-purple-800 to-fuchsia-400 text-white hover:from-purple-600 hover:to-fuchsia-300 text-lg px-6 py-3 w-60">
                Réservez un appel d'intro
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
