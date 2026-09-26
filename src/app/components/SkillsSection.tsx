'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setBarsVisible(true), 400);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 blob-cyan opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className={`flex items-center gap-4 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-700 text-sm uppercase tracking-widest">Skills</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-primary/40 to-transparent" />
          <span className="text-muted-foreground text-sm font-500">02</span>
        </div>

        <div className={`mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-section-heading text-foreground mb-3">
            Technologies I{' '}
            <span className="text-gradient-cyan">work with</span>
          </h2>
          <p className="text-muted-foreground font-300 max-w-xl">
            A focused stack built through hands-on projects and coursework — covering languages, frameworks, and developer tools.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
            Array: [C#, Java, HTML, CSS, JavaScript, React, ASP.NET MVC, SQL, Git, GitHub] = 10 cards
            Desktop grid-cols-5:
              Row 1: [col-1: C#] [col-2: Java] [col-3: HTML] [col-4: CSS] [col-5: JavaScript]
              Row 2: [col-1: React] [col-2: ASP.NET] [col-3: SQL] [col-4: Git] [col-5: GitHub]
            Placed 10/10 ✓
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {portfolioData.skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-card glass-card-hover skill-card-glow border border-border rounded-2xl p-5 flex flex-col gap-3 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 60}ms` }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
              >
                <Icon
                  name={skill.icon as Parameters<typeof Icon>[0]['name']}
                  size={20}
                  className="transition-colors"
                  style={{ color: skill.color } as React.CSSProperties}
                />
              </div>

              {/* Name */}
              <div>
                <p className="text-sm font-600 text-foreground">{skill.name}</p>
                <p className="text-xs text-muted-foreground font-400 mt-0.5">{skill.category}</p>
              </div>

              {/* Level bar */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-muted-foreground font-500">Proficiency</span>
                  <span className="text-xs font-600" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-1 w-full rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full skill-bar-fill"
                    style={{ width: barsVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}