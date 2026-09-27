'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: 'CodeBracketIcon',
      label: 'Languages',
      value: portfolioData.skills
        .filter((skill) => skill.category === 'Language')
        .map((skill) => skill.name)
        .join(', '),
    },
    {
      icon: 'GlobeAltIcon',
      label: 'Web',
      value: portfolioData.skills
        .filter((skill) => skill.category === 'Web')
        .map((skill) => skill.name)
        .join(', '),
    },
    {
      icon: 'CodeBracketIcon',
      label: 'Framework',
      value: 'ASP.NET MVC',
    },
    {
      icon: 'CircleStackIcon',
      label: 'Database',
      value: portfolioData.skills
        .filter((skill) => skill.category === 'Database')
        .map((skill) => skill.name)
        .join(', '),
    },
    {
      icon: 'AcademicCapIcon',
      label: 'Education',
      value: portfolioData.education[0]?.grade || 'Diploma CSE',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-purple opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Label */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-700 text-sm uppercase tracking-widest">
            About
          </span>

          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-primary/40 to-transparent" />

          <span className="text-muted-foreground text-sm font-500">
            01
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* =========================
              LEFT - PROFILE IMAGE
          ========================== */}
          <div
            className={`relative transition-all duration-700 delay-100 ${
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">

              <AppImage
                src={
                  imgError
                    ? portfolioData.about.profileFallback
                    : portfolioData.about.profileImage
                }
                alt="Siddharth Awasthi - Aspiring Software Developer"
                fill
                className="object-cover img-zoom"
                onError={() => setImgError(true)}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

              {/* Current Education */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card border border-border px-4 py-3 rounded-xl">

                  <p className="text-xs text-muted-foreground font-500 uppercase tracking-widest mb-1">
                    Currently
                  </p>

                  <p className="text-sm font-600 text-foreground">
                    Diploma in Computer Science & Engineering
                  </p>

                  <p className="text-xs text-primary font-500 mt-0.5">
                    Government Polytechnic Sikandra
                  </p>

                </div>
              </div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-2xl rotate-12 pointer-events-none" />

            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-secondary/20 rounded-xl -rotate-6 pointer-events-none" />
          </div>

          {/* =========================
              RIGHT - ABOUT CONTENT
          ========================== */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >

            {/* Heading */}
            <h2 className="text-section-heading text-foreground mb-6">
              Crafting software with{' '}
              <span className="text-gradient-cyan">
                purpose
              </span>{' '}
              and precision.
            </h2>

            {/* Intro */}
            <p className="text-muted-foreground leading-relaxed mb-5 font-300 text-base">
              {portfolioData.about.intro}
            </p>

            {/* Goal */}
            <p className="text-muted-foreground leading-relaxed mb-8 font-300 text-base">
              {portfolioData.about.goal}
            </p>

            {/* =========================
                AREAS OF INTEREST
            ========================== */}
            <div className="mb-8">

              <p className="text-xs font-600 uppercase tracking-widest text-muted-foreground mb-3">
                Areas of Interest
              </p>

              <div className="flex flex-wrap gap-2">

                {portfolioData.about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-500 text-primary"
                  >
                    {interest}
                  </span>
                ))}

              </div>
            </div>

            {/* =========================
                HIGHLIGHTS
            ========================== */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="glass-card glass-card-hover border border-border rounded-xl p-4"
                >

                  <Icon
                    name={
                      highlight.icon as Parameters<typeof Icon>[0]['name']
                    }
                    size={18}
                    className="text-primary mb-2"
                  />

                  <p className="text-xs text-muted-foreground font-500 uppercase tracking-wide mb-0.5">
                    {highlight.label}
                  </p>

                  <p className="text-sm font-600 text-foreground">
                    {highlight.value}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}