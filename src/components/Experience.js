import React, { useState } from 'react';
import './Experience.css';

export default function Experience({ experience }) {
  const [active, setActive] = useState(0);
  const exp = experience[active];

  return (
    <section id="experience">
      <div className="container">
        <span className="section-label">03 / Experience</span>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="divider" />

        <div className="exp-layout">
          <div className="exp-tabs">
            {experience.map((e, i) => (
              <button
                key={i}
                className={`exp-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                {e.company}
              </button>
            ))}
          </div>

          <div className="exp-detail card">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noreferrer" className="company-link">{exp.company}</a>
                  ) : (
                    exp.company
                  )} · <span>{exp.location}</span>
                </p>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>

            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>
                  <span className="bullet-marker">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
