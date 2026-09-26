'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

export default function HeroSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay pt-24 pb-16"
    >
      {/* Atmospheric depth blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] blob-cyan animate-blob opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-amber animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blob-purple pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-16">

          {/* Left: Massive typography */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-600 tracking-widest uppercase text-primary mb-8 animate-stagger-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              Available for opportunities
            </div>

            {/* Hero headline — massive typography */}
            <h1 className="text-display-hero mb-2 animate-stagger-2">
              <span className="text-display-outline block">
                {portfolioData.shortName}
              </span>
              <span className="text-display-solid block">
                Awasthi
              </span>
            </h1>

            {/* Title */}
            <div className="flex items-center gap-3 mb-6 animate-stagger-3">
              <div className="h-px w-12 bg-primary/60" />
              <p className="text-lg md:text-xl font-500 text-muted-foreground tracking-wide">
                {portfolioData.title}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted-foreground font-300 leading-relaxed max-w-xl mb-10 border-l-2 border-primary/30 pl-5 animate-stagger-4">
              {portfolioData.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-stagger-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary-glow px-7 py-3.5 rounded-xl text-sm font-600 flex items-center gap-2 group"
              >
                View Projects
                <Icon name="ArrowRightIcon" size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={portfolioData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-glow px-7 py-3.5 rounded-xl text-sm font-600 flex items-center gap-2 group"
              >
                Download Resume
                <Icon name="ArrowDownTrayIcon" size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 animate-stagger-4">
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-500">Connect</span>
              <div className="h-px w-8 bg-border" />
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                aria-label="GitHub profile"
              >
                <Icon name="CodeBracketIcon" size={18} />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <Icon name="BriefcaseIcon" size={18} />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-10 h-10 rounded-xl border border-border glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                aria-label="Send email"
              >
                <Icon name="EnvelopeIcon" size={18} />
              </a>
            </div>
          </div>

          {/* Right: Profile photo with 3D tilt */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            <div
              ref={photoRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
              style={{ perspective: '800px' }}
            >
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-rotate-slow scale-110" />
              <div className="absolute inset-0 rounded-full border border-secondary/10 animate-rotate-slow scale-125" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

              {/* Photo container */}
              <div
                className="photo-tilt relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden gradient-border"
                style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
              >
                <AppImage
                  src={imgError ? portfolioData.about.profileFallback : portfolioData.about.profileImage}
                  alt="Siddharth Awasthi, aspiring software developer, professional headshot against neutral background"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImgError(true)}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 glass-card border border-border px-3 py-2 rounded-xl flex items-center gap-2 animate-float">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-600 text-foreground">Open to work</span>
              </div>
            </div>

            {/* Stat pills */}
            <div className="flex gap-3">
              <div className="glass-card border border-border px-4 py-3 rounded-xl text-center">
                <div className="text-xl font-700 text-gradient-cyan">3+</div>
                <div className="text-xs text-muted-foreground font-500 mt-0.5">Projects</div>
              </div>
              <div className="glass-card border border-border px-4 py-3 rounded-xl text-center">
                <div className="text-xl font-700 text-gradient-cyan">10+</div>
                <div className="text-xs text-muted-foreground font-500 mt-0.5">Skills</div>
              </div>
              <div className="glass-card border border-border px-4 py-3 rounded-xl text-center">
                <div className="text-xl font-700 text-gradient-amber">8.2</div>
                <div className="text-xs text-muted-foreground font-500 mt-0.5">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-500">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}