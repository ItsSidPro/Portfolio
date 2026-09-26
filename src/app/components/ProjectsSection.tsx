    
'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 blob-amber opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className={`flex items-center gap-4 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-700 text-sm uppercase tracking-widest">Projects</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-primary/40 to-transparent" />
          <span className="text-muted-foreground text-sm font-500">03</span>
        </div>

        <div className={`mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-section-heading text-foreground mb-3">
            Things I&apos;ve{' '}
            <span className="text-gradient-cyan">built</span>
          </h2>
          <p className="text-muted-foreground font-300 max-w-xl">
            Real projects demonstrating object-oriented design, web development, and problem-solving skills.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
            Array: [Student Management, College Management, Portfolio] = 3 cards
            Desktop grid-cols-3:
              Row 1: [col-1: Student cs-1] [col-2: College cs-1] [col-3: Portfolio cs-1]
            Placed 3/3 ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData?.projects?.map((project, index) => (
            <article
              key={project?.id}
              className={`group glass-card border border-border rounded-2xl overflow-hidden flex flex-col transition-all duration-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={project?.image}
                  alt={`${project?.name} project screenshot, dark interface showing code and data, professional developer application`}
                  fill
                  className="object-cover img-zoom"
                />
                {/* Dark scrim for white text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />

                {/* Project number */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-lg glass-card border border-border flex items-center justify-center">
                  <span className="text-xs font-700 text-primary">0{project?.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-700 text-foreground mb-3">{project?.name}</h3>
                <p className="text-sm text-muted-foreground font-300 leading-relaxed mb-5 flex-1">
                  {project?.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project?.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg border border-border bg-muted/30 text-xs font-500 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-600 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                    aria-label={`View ${project?.name} on GitHub`}
                  >
                    <Icon name="CodeBracketIcon" size={15} />
                    GitHub
                  </a>
                  {project?.demo ? (
                    <a
                      href={project?.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary-glow flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-600"
                      aria-label={`View live demo of ${project?.name}`}
                    >
                      <Icon name="ArrowTopRightOnSquareIcon" size={15} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/30 text-sm font-500 text-muted-foreground/40 cursor-not-allowed">
                      <Icon name="LockClosedIcon" size={15} />
                      Console App
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}