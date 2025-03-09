'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Tech Stack', href: '/tech-stack' },
    { name: 'Contact', href: '/contact' },
  ];

  const renderThemeToggle = () => {
    if (!mounted) return null;
    
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        }}
        className="ml-2"
      >
        {resolvedTheme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    );
  };

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MA</span>
          </Link>
          <div className="h-9 w-9" />
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">MA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          {renderThemeToggle()}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === item.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {renderThemeToggle()}
          </div>
        </div>
      )}
    </header>
  );
} 