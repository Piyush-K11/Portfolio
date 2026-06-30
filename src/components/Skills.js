import React from 'react';
import './Skills.css';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-label">02 / Skills</span>
        <h2 className="section-title">What I Work With</h2>
        <div className="divider" />

        <div className="skills-table">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skills-row" key={category}>
              <span className="skills-category">{category}</span>
              <div className="skill-tags">
                {items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}