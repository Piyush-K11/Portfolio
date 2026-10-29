import React, { useState, useEffect, useRef } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export const data = {
  name: 'Piyush Kumar',
  role: 'Data Scientist & MIS Analyst',
  tagline: 'Delivering Insights That Drive Decisions.',
  bio: "Data-driven BCA student with real-world experience managing rider payouts across 11 stores and building Power BI dashboards for operational reporting. Delivered measurable insights across projects involving 209,874 retail records and 7,043 telecom customers — identifying $2.86M in revenue at risk.",
  email: 'work.piyushk11@gmail.com',
  phone: '+91 7291881611',
  github: 'https://github.com/Piyush-K11',
  linkedin: 'https://www.linkedin.com/in/piyush-kumar-67190630a/',
  resumeUrl: '/PIYUSH_KUMAR_RESUME.pdf', 

  skills: {
  'Languages': ['Python', 'SQL', 'C/C++', 'Java', 'PHP'],
  'Data Analysis & BI': ['Power BI', 'DAX', 'Excel (Advanced)', 'Data Modeling', 'KPI Dashboards'],
  'Python Libraries': ['Pandas', 'NumPy', 'scikit-learn', 'openpyxl', 'Matplotlib', 'Seaborn', 'Plotly'],
  'Web Development': ['Flask', 'React', 'HTML', 'CSS', 'JavaScript'],
  'CS Fundamentals': ['DSA', 'OOP', 'Operating Systems'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code'],
},

  experience: [
    {
      role: 'Data Analyst Intern',
      company: 'Zippee',
      url: 'https://www.zippee.delivery/',
      location: 'Delhi',
      period: 'May 2026 – Sep 2026',
      bullets: [
        'Processed weekly rider payout cycles across 11 stores for in-house and vendor-supplied riders, auditing vendor commissions to flag anomalies and ensure zero billing discrepancies.',
        'Built a full-stack payout automation tool (Flask + Python) that converts raw rider attendance files into formatted payout workbooks across 11 vendor rate schemes — reducing manual processing time from hours to minutes.',
        'Built Power BI dashboards tracking DCPO, weekly sales, rider count, order volume, and vendor-wise cost breakdown to surface weekly performance insights for management.',
        'Streamlined weekly MIS reporting in Excel by consolidating rider activity, payout summaries, and vendor invoices into structured trackers.',
      ],
    },
    {
      role: 'Technical Assistant Director – Google Developers Group (GDG)',
      company: 'JIMS',
      location: 'Delhi',
      period: 'Oct 2026 – Present',
      bullets: [
        'Serve as Technical Assistant Director for Google Developers Group (GDG) at JIMS, supporting the planning and delivery of technical events and workshops for student developers.',
        'Coordinate speakers, members, communication, and event logistics to help grow the student developer community at JIMS.',
      ],
    },
    {
      role: 'IPR Coordinator – Institution\'s Innovation Council (IIC)',
      company: 'JIMS',
      location: 'Delhi',
      period: '2025 – 2026',
      bullets: [
        'Organized 30+ IPR sessions, workshops, and innovation events with average participation of 40–50 students per event.',
        'Led Smart India Hackathon 2025 as Main Coordinator for 100+ participants; secured 2nd place as a participant.',
      ],
    },
  ],

  projects: [
    {
      title: "Women's Labour Force Participation, India (PLFS 2025)",
      description: "Analyzed 1.15M-record national survey microdata from the Periodic Labour Force Survey using survey weights, validating results against published MoSPI figures. Built weighted logistic regression and gradient boosting models to identify what drives women's workforce participation.",
      tech: ['Python', 'Pandas', 'scikit-learn'],
      highlights: [
        '1.15M survey records analyzed with survey weights',
        'Validated against MoSPI: 40.0% female, 79.1% male participation',
        'Weighted logistic regression and gradient boosting (AUC 0.763)',
        'Found a U-shaped relationship between education and participation',
      ],
      github: 'https://github.com/Piyush-K11/plfs-women-labour-force',
      year: '2026',
    },
    {
      title: 'Last-Mile Rider Payout Automation',
      description: 'A Flask web app and Python engine that automates weekly rider payout calculations across 11 vendor rate schemes. Upload raw attendance files, preview payouts, and download formatted Excel workbooks — with bulk mode, shipment cross-checks, and outlier flagging.',
      tech: ['Python', 'Flask', 'Pandas', 'openpyxl', 'Excel'],
      highlights: [
        '11 payout schemes across 13 vendors behind one interface',
        'Bulk mode processes multiple files and returns a ZIP',
        'Reduced manual payout processing from hours to minutes',
        'Auditable Excel output with real formulas',
      ],
      github: 'https://github.com/Piyush-K11/Last-Mile-Rider-Payout-Automation',
      year: '2026',
    },
    {
      title: 'Telecom Customer Churn Analysis',
      description: 'Built two interactive Power BI dashboards analyzing churn behavior of 7,043 telecom customers, identifying $2.86M in yearly charges at risk with an overall churn rate of 26.54%.',
      tech: ['Power BI', 'DAX', 'Excel'],
      highlights: [
        '$2.86M in revenue at risk identified',
        '26.54% overall churn rate mapped',
        'Key drivers: Month-to-Month contracts (88.55%), Fiber Optic (41.89% churn)',
      ],
      github: 'https://github.com/Piyush-K11/Telecom-Customer-Churn-Analysis',
      year: '2026',
    },
    {
      title: 'Retail Sales Analysis',
      description: 'Transformed a denormalized retail dataset of 209,874 records into a normalized relational database across 5 tables. Performed end-to-end BI analysis across product performance, regional trends, and customer segmentation.',
      tech: ['Python', 'MySQL', 'Pandas', 'Matplotlib'],
      highlights: [
        '209,874 records normalized into 5 MySQL tables',
        'West region: 31.6% of total sales',
        'Technology category: $836K revenue',
        'Sales-profit correlation of 0.716',
      ],
      github: 'https://github.com/Piyush-K11/Retail-Sales-Analysis',
      year: '2026',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Jagannath International Management School (JIMS)',
      location: 'Vasant Kunj, Delhi',
      period: '2024 – Present',
      cgpa: '8.9',
    },
  ],

  certifications: [
    {
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera',
      url: 'https://www.coursera.org/account/accomplishments/verify/FR9VEHWIIDXO?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    },
    {
      name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A2FFF9548D950717EFB39C59749E857ABF308ABC3FFA948A60744FAF1E83DA91',
    },
    { name: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild' },
  ],
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

return (
    <div className="app">
      <ParticleBackground />
      <Navbar activeSection={activeSection} resumeUrl={data.resumeUrl} />
      <main>
        <Hero data={data} />
        <About data={data} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Education education={data.education} certifications={data.certifications} />
        <Contact data={data} />
      </main>
      <Footer name={data.name} github={data.github} linkedin={data.linkedin} />
    </div>
  );
}

export default App;
