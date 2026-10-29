import React, { useState } from 'react';
import './Experience.css';

export default function Experience({ experience }) {
  const [active, setActive] = useState(0);
  const groupedExperience = experience.reduce((groups, exp) => {
    const existingGroup = groups.find((group) => group.company === exp.company);
    if (existingGroup) {
      existingGroup.entries.push(exp);
    } else {
      groups.push({ company: exp.company, entries: [exp] });
    }
    return groups;
  }, []);
  const activeGroup = groupedExperience[active];

  return (
    <section id="experience">
      <div className="container">
        <span className="section-label">03 / Experience</span>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="divider" />

        <div className="exp-layout">
          <div className="exp-tabs">
            {groupedExperience.map((group, i) => (
              <button
                key={i}
                className={`exp-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                {group.company}
              </button>
            ))}
          </div>

          <div className="exp-detail card">
            {activeGroup.entries.map((exp, i) => (
              <div className={`exp-entry ${i > 0 ? 'exp-entry-separated' : ''}`} key={exp.role}>
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
                  {exp.bullets.map((b, bulletIndex) => (
                    <li key={bulletIndex}>
                      <span className="bullet-marker">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
