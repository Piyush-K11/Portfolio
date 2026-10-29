import React from 'react';
import './About.css';

export default function About({ data }) {
  return (
    <section id="about">
      <div className="container">
        <span className="section-label">01 / About</span>
        <h2 className="section-title">Who I Am</h2>
        <div className="divider" />

        <div className="about-grid">
          <div className="about-text">
                   <p>
              I'm a <strong>BCA student at JIMS, Delhi</strong> with real-world experience as an
              Data Analyst Intern at <strong>Zippee</strong> — where I managed rider payouts across 11 stores
              and built Power BI dashboards that surfaced weekly insights for management.
            </p>
            <p>
              I enjoy working with data end-to-end — from wrangling raw Excel sheets and
              SQL databases to building dashboards that actually get used. My projects have
              spanned 209,874 retail records and flagged <strong>$2.86M in revenue at risk</strong>.
            </p>
            <p>
              Currently sharpening my Python and ML skills with a clear goal — to evolve
              from someone who analyzes data today into a <strong>Data Scientist</strong> who can also
              build the models behind it tomorrow.
            </p>
          </div>

          <div className="about-meta">
            <div className="meta-card">
              <div className="meta-item">
                <span className="meta-key">Location</span>
                <span className="meta-val">Delhi, India</span>
              </div>
              <div className="meta-item">
                <span className="meta-key">Status</span>
                <span className="meta-val available">Available for Opportunities</span>
              </div>
              <div className="meta-item">
                <span className="meta-key">Focus</span>
                <span className="meta-val">Data Science · BI · ML</span>
              </div>
              <div className="meta-item">
                <span className="meta-key">Education</span>
                <span className="meta-val">BCA, JIMS Vasant Kunj (CGPA: 8.9)</span>
              </div>
              <div className="meta-item">
                <span className="meta-key">Email</span>
                <a href={`mailto:${data.email}`} className="meta-val meta-link">{data.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
