'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { portfolioData } from '@/data/portfolioData';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const contactItems = [
    { icon: 'EnvelopeIcon', label: 'Email', value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
    { icon: 'PhoneIcon', label: 'Phone', value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone}` },
    { icon: 'MapPinIcon', label: 'Location', value: portfolioData.contact.location, href: null },
    { icon: 'CodeBracketIcon', label: 'GitHub', value: 'siddharthawasthi', href: portfolioData.contact.github },
    { icon: 'BriefcaseIcon', label: 'LinkedIn', value: 'siddharthawasthi', href: portfolioData.contact.linkedin },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Glow blob */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] blob-cyan opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 blob-amber opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className={`flex items-center gap-4 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-700 text-sm uppercase tracking-widest">Contact</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-primary/40 to-transparent" />
          <span className="text-muted-foreground text-sm font-500">05</span>
        </div>

        <div className={`mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-section-heading text-foreground mb-3">
            Let&apos;s{' '}
            <span className="text-gradient-cyan">connect</span>
          </h2>
          <p className="text-muted-foreground font-300 max-w-xl">
            Open to internship opportunities, full-time roles, and project collaborations. Reach out — I respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info — left column */}
          <div
            className={`lg:col-span-2 flex flex-col justify-between gap-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl border border-border glass-card flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors duration-300">
                    <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={17} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-500 uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-600 text-foreground hover:text-primary transition-colors duration-200 truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-600 text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Big CTA headline */}
            <div className="glass-card border border-border rounded-2xl p-6">
              <p className="text-2xl font-700 text-foreground leading-tight mb-3">
                Let&apos;s build something{' '}
                <span className="text-gradient-cyan">great together.</span>
              </p>
              <p className="text-sm text-muted-foreground font-300">
                Available for full-time positions and freelance projects starting immediately.
              </p>
            </div>
          </div>

          {/* Contact form — right column */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card border border-border rounded-2xl p-6 md:p-8 space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-600 uppercase tracking-widest text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Priya Sharma"
                    className="contact-input w-full rounded-xl px-4 py-3 text-sm font-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-600 uppercase tracking-widest text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="priya@company.com"
                    className="contact-input w-full rounded-xl px-4 py-3 text-sm font-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-600 uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Siddharth, I came across your portfolio and would love to discuss an opportunity..."
                  className="contact-input w-full rounded-xl px-4 py-3 text-sm font-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary-glow py-3.5 rounded-xl text-sm font-700 flex items-center justify-center gap-2 group"
              >
                {submitted ? (
                  <>
                    <Icon name="CheckCircleIcon" size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Icon name="PaperAirplaneIcon" size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-400 font-500">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}