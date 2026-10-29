import React from 'react';
import './Education.css';

export default function Education({ education, certifications }) {
  return (
    <section id="education">
      <div className="container">
        <span className="section-label">05 / Education</span>
        <h2 className="section-title">Learning Path</h2>
        <div className="divider" />

        <div className="edu-grid">
          <div>
            <h3 className="edu-sub-title">Degree</h3>
            {education.map((e, i) => (
              <div className="card edu-card" key={i}>
                <div className="edu-header">
                  <h4 className="edu-degree">{e.degree}</h4>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-location">{e.location}</p>
                  <span className="edu-period">{e.period}</span>
                  <span className="cgpa-badge">CGPA {e.cgpa}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="edu-sub-title">Certifications</h3>
            <div className="cert-list">
              {certifications.map((c, i) => (
                <div className="cert-item card" key={i}>
                  <span className="cert-icon">✦</span>
                  <div>
                    <p className="cert-name">
                      {c.url ? (
                        <a href={c.url} target="_blank" rel="noreferrer" className="cert-link">
                          {c.name}
                        </a>
                      ) : (
                        c.name
                      )}
                    </p>
                    <p className="cert-issuer">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}