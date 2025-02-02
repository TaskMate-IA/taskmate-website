"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BookIntroCall() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Simulation de chargement
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* En-tête */}
      <Header />

      {/* Section principale */}
      <div className="pt-16 md:pt-20 lg:pt-24 bg-background text-gray-900 dark:text-gray-100 mt-40 mb-40">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16 lg:space-y-20">

          {/* Section d'appel à l'action */}
          <section className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 lg:p-10 bg-background shadow-lg">

            {/* Mise en page en deux colonnes */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-20 mb-20">
              
              {/* Partie gauche : Contenu textuel */}
              <div className="w-full md:w-1/2 text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  🚀 Construisons Ensemble Quelque Chose d’Exceptionnel !
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                  Réservez un appel d’introduction rapide pour discuter de vos besoins. 
                  Que vous cherchiez des solutions innovantes ou un partenariat stratégique, nous sommes à votre écoute.
                </p>
                <ul className="text-lg text-gray-600 dark:text-gray-400 space-y-3">
                  <li>✅ Découvrez comment nous pouvons booster votre entreprise</li>
                  <li>✅ Aucune obligation, juste un échange d’idées</li>
                  <li>✅ Créneau de 30 minutes : simple et efficace</li>
                </ul>
                <p className="text-lg font-medium text-primary">
                  Prêt à démarrer ? Choisissez l’horaire qui vous convient ci-dessous. 👇
                </p>
              </div>

              {/* Partie droite : Intégration de Calendly */}
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

      {/* Pied de page */}
      <Footer />
    </>
  );
}
