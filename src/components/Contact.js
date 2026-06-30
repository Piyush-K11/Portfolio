import React from 'react';
import './Contact.css';

export default function Contact({ data }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="section-label">06 / Contact</span>
        <h2 className="section-title">Let's Connect</h2>
        <div className="divider" />

        <div className="contact-layout">
          <div className="contact-left">
            <p className="contact-intro">
              I'm actively looking for data science and analyst roles. Whether you have an
              opportunity, a project, or just want to talk data — my inbox is open.
            </p>

            <div className="contact-links">
              <a href={`mailto:${data.email}`} className="contact-item">
                <span className="contact-icon">✉</span>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{data.email}</span>
                </div>
              </a>

              <a href={data.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">in</span>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Piyush Kumar</span>
                </div>
              </a>

              <a href={data.github} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">⌥</span>
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">Piyush-K11</span>
                </div>
              </a>

              
            </div>
          </div>

          <div className="contact-cta card">
            <p className="cta-headline">Open to Opportunities</p>
            <p className="cta-body">
               Seeking internships and entry-level roles in Data Analytics, Business 
              Analytics, and Data Science. I work with SQL, Python, Excel, and Power BI 
              — and I'm looking for a team where real problems need real answers.
            </p>
            <a
              href={`mailto:${data.email}`}
              className="cta-button"
            >
              Send me a message →
            </a>
            <a
              href={data.resumeUrl}
              className="cta-resume"
              download
              target="_blank"
              rel="noreferrer"
            >
              ↓ Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
