import Link from "next/link"
import { X, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 mt-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Case Studies
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
            <h3 className="text-2xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lg hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-lg">&copy; {currentYear} TaskMate. All rights reserved.</p>
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
  )
}

