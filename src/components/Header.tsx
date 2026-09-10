'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { portfolioData } from '@/data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);

    const sections = navLinks.map((l) => l.href.replace('#', ''));
    let current = 'home';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Go to home"
          >
            <AppLogo
              size={36}
              iconName="CodeBracketIcon"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-display font-800 text-lg tracking-tight text-foreground hidden sm:block">
              <span className="text-primary">S</span>iddharth
              <span className="text-muted-foreground font-400 text-sm ml-1">Awasthi</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link-hover text-sm font-500 transition-colors duration-200 focus:outline-none ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href={portfolioData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow px-5 py-2 rounded-lg text-sm font-600 ml-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-700 text-foreground hover:text-primary transition-colors duration-200 py-3 focus:outline-none"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={portfolioData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow px-8 py-3 rounded-xl text-base font-600 mt-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}