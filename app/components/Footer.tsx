import Link from "next/link";
import { X, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 mt-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Général</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  L'Équipe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Ressources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Légal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Termes et conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-lg">
            &copy; {currentYear} TaskMate. Tous droits réservés. <br />
            Soutenu par Pledge & Grow 📈
          </p>
          <div className="flex space-x-6">
            <a
              href="https://x.com/TaskMate_IA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/taskmate-ia-689ba3349/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
