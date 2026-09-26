import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Arc Pattern 7 — Logo + tagline left, links right */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <AppLogo size={28} iconName="CodeBracketIcon" />
              <span className="font-display font-700 text-base tracking-tight text-foreground">
                Siddharth Awasthi
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-400 text-center sm:text-left">
              Aspiring Software Developer · India
            </p>
          </div>

          {/* Right: Essential links */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <div className="flex items-center gap-6">
              <a
                href={portfolioData?.contact?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:text-primary"
              >
                GitHub
              </a>
              <a
                href={portfolioData?.contact?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:text-primary"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${portfolioData?.contact?.email}`}
                className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:text-primary"
              >
                Email
              </a>
            </div>
            <p className="text-xs text-muted-foreground font-400">
              © {new Date()?.getFullYear()} Siddharth Awasthi · All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}