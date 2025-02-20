"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const switchLanguage = (lang: "fr" | "en") => {
    if (lang === language) return;
    setLanguage(lang);
    // On ne modifie pas l'URL, on gère uniquement via le contexte.
  };

  return (
    <div style={{ position: "fixed", top: "80px", left: "20px", zIndex: 50 }}>
      <div
        style={{
          display: "flex",
          border: "1px solid #ccc",
          borderRadius: "9999px",
          overflow: "hidden",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          backgroundColor: "white",
        }}
      >
        {language === "en" ? (
          <>
            {/* English actif : affiché en premier avec effet flou */}
            <button
              onClick={() => switchLanguage("en")}
              style={{
                padding: "0.5rem 1rem",
                filter: "blur(2px)",
                backgroundColor: "#f3f4f6",
                border: "none",
                cursor: "default",
              }}
              aria-label="Anglais actif"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 60 40">
                <clipPath id="t">
                  <path d="M30,20 h30 v20 z v20 h-30 z h-30 v-20 z v-20 h30 z" />
                </clipPath>
                <path d="M0,0 v40 h60 v-40 z" fill="#00247d" />
                <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,0 0,40" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4" />
                <path d="M30,0 v40 M0,20 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v40 M0,20 h60" stroke="#cf142b" strokeWidth="6" />
              </svg>
            </button>
            {/* Français inactif */}
            <button
              onClick={() => switchLanguage("fr")}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Passer au français"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 3 2">
                <rect width="3" height="2" fill="#ED2939" />
                <rect width="2" height="2" fill="#fff" />
                <rect width="1" height="2" fill="#002395" />
              </svg>
            </button>
          </>
        ) : (
          <>
            {/* Français actif : affiché en premier avec effet flou */}
            <button
              onClick={() => switchLanguage("fr")}
              style={{
                padding: "0.5rem 1rem",
                filter: "blur(2px)",
                backgroundColor: "#f3f4f6",
                border: "none",
                cursor: "default",
              }}
              aria-label="Français actif"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 3 2">
                <rect width="3" height="2" fill="#ED2939" />
                <rect width="2" height="2" fill="#fff" />
                <rect width="1" height="2" fill="#002395" />
              </svg>
            </button>
            {/* Anglais inactif */}
            <button
              onClick={() => switchLanguage("en")}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Passer à l'anglais"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 60 40">
                <clipPath id="t">
                  <path d="M30,20 h30 v20 z v20 h-30 z h-30 v-20 z v-20 h30 z" />
                </clipPath>
                <path d="M0,0 v40 h60 v-40 z" fill="#00247d" />
                <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,0 0,40" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4" />
                <path d="M30,0 v40 M0,20 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v40 M0,20 h60" stroke="#cf142b" strokeWidth="6" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
