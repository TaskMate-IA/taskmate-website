// app/layout.tsx
import { ThemeProvider } from "./components/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskMate IA",
  description: "L'IA qui booste votre productivité : réinventez vos processus et propulsez votre succès.",
  icon: "/images/logo.ico", // Corrected path to the favicon
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {/* Include the language switcher so it appears on every page */}
            <LanguageSwitcher />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
