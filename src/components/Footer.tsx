'use client';

import Link from 'next/link';
import { Github, Mail, Twitter, Linkedin, Instagram, Globe, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-sm text-muted-foreground">
              A passionate full-stack developer crafting beautiful and functional web experiences.
              Specialized in modern web technologies and user-centric design.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/smustafaamir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/tech-stack" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#frontend" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="/services#backend" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="/services#uiux" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:your.email@example.com" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="mr-2 h-4 w-4" />
                  your.email@example.com
                </Link>
              </li>
              <li>
                <Link href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="group flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <Globe className="mr-2 h-4 w-4" />
                  yourwebsite.com
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                Based in Your Location
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mustafa Amir. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 