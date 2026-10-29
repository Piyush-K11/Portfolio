import React, { useEffect, useState } from 'react';
import './Hero.css';

const TYPED_STRINGS = [
  'Data Analyst',
  'Ex-Data Analyst Intern @ Zippee',
  'Aspiring Data Scientist',
];

export default function Hero({ data }) {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[stringIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex((i) => (i + 1) % TYPED_STRINGS.length);
    }

    setDisplayText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" aria-hidden />
      <div className="container hero-content">
        <div className="hero-eyebrow">
          <span className="mono-tag">Hello, World! 👋</span>
        </div>
        <h1 className="hero-name">{data.name}</h1>
        <div className="hero-role">
          <span className="typed-text">{displayText}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-tagline">{data.tagline}</p>
        <p className="hero-bio">{data.bio}</p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">209K+</span>
            <span className="stat-label">Records Analyzed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">$2.86M</span>
            <span className="stat-label">Revenue Risk Identified</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">11</span>
            <span className="stat-label">Stores Managed</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>
            Get in Touch
          </button>
        </div>

        <div className="hero-socials">
          <a href={data.github} target="_blank" rel="noreferrer" className="social-link">
            GitHub
          </a>
          <span className="social-sep">·</span>
          <a href={data.linkedin} target="_blank" rel="noreferrer" className="social-link">
            LinkedIn
          </a>
          <span className="social-sep">·</span>
          <a href={`mailto:${data.email}`} className="social-link">
            {data.email}
          </a>
        </div>
      </div>

      <div className="scroll-hint" onClick={() => scrollTo('about')}>
        <span />
      </div>
    </section>
  );
}
