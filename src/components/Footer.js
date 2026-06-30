import React from 'react';
import './Footer.css';

export default function Footer({ name, github, linkedin }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          <span className="footer-mono">Built by</span> {name}
        </p>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <span>·</span>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
