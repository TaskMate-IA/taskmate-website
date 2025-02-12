"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext"; // adjust the path as needed

interface NavLink {
  label: string;
  url: string;
}

interface Logo {
  light: string;
  dark: string;
  altLight: string;
  altDark: string;
}

interface CTA {
  label: string;
  url: string;
}

interface HeaderContent {
  logo: Logo;
  navLinks: NavLink[];
  cta: CTA;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [content, setContent] = useState<HeaderContent | null>(null);
  
  // Get the current language from your context instead of parsing the URL
  const { language } = useLanguage(); // language will be "fr" or "en"

  useEffect(() => {
    // Fetch the locale-specific header JSON file from /public/locales/{language}/header.json
    fetch(`/locales/${language}/header.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: HeaderContent) => setContent(data))
      .catch((err) => console.error("Error loading header content:", err));
  }, [language]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 pt-1 pb-3">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center w-48">
            <Image
              src={content.logo.light}
              alt={content.logo.altLight}
              width={150}
              height={50}
              className="block dark:hidden"
              priority
            />
            <Image
              src={content.logo.dark}
              alt={content.logo.altDark}
              width={150}
              height={50}
              className="hidden dark:block"
              priority
            />
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8 whitespace-nowrap">
            {content.navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-lg hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right-side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href={content.cta.url}>
              <Button className="bg-gradient-to-r from-purple-800 to-fuchsia-400 hidden lg:inline-flex text-white hover:from-purple-600 hover:to-fuchsia-300 text-lg px-6 py-3 whitespace-nowrap">
                {content.cta.label}
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
            {content.navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-lg hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link href={content.cta.url}>
              <Button className="bg-gradient-to-r from-purple-800 to-fuchsia-400 text-white hover:from-purple-600 hover:to-fuchsia-300 text-lg px-6 py-3 w-60">
                {content.cta.label}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
