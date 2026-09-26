'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-96 blob-purple opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className={`flex items-center gap-4 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-700 text-sm uppercase tracking-widest">Education</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-primary/40 to-transparent" />
          <span className="text-muted-foreground text-sm font-500">04</span>
        </div>

        <div className={`mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-section-heading text-foreground mb-3">
            Academic{' '}
            <span className="text-gradient-cyan">background</span>
          </h2>
          <p className="text-muted-foreground font-300 max-w-xl">
            A strong academic foundation in computer science and software engineering principles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden md:block" />

          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative transition-all duration-700 ${
                  visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-12 h-12 rounded-full border border-primary/30 bg-muted glass-card hidden md:flex items-center justify-center z-10">
                  <Icon name={edu.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-primary" />
                </div>

                {/* Card */}
                <div className="md:ml-20 glass-card glass-card-hover border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      {/* Mobile icon */}
                      <div className="flex items-center gap-3 mb-2 md:hidden">
                        <div className="w-8 h-8 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center">
                          <Icon name={edu.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-700 text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-600 text-sm mt-1">{edu.institution}</p>
                      <p className="text-muted-foreground text-xs font-400 mt-0.5 flex items-center gap-1">
                        <Icon name="MapPinIcon" size={12} />
                        {edu.location}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                      <span className="px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-600 text-primary">
                        {edu.year}
                      </span>
                      <span className="text-xs font-600 text-secondary">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}