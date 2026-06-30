import React from 'react';
import './Projects.css';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="section-label">04 / Projects</span>
        <h2 className="section-title">What I've Built</h2>
        <div className="divider" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card card" key={i}>
              <div className="project-top">
                <div className="project-meta">
                  <span className="tag">{p.year}</span>
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="project-gh-link">
                  GitHub ↗
                </a>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <ul className="project-highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}>
                    <span className="highlight-dot" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
