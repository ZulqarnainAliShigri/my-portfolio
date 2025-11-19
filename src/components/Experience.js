import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../../src/styles/App.css'

const Experience = () => {
  const ref = useIntersectionObserver();
  const experiences = [
    {
      title: 'Front-end Developer — Techsolab',
      period: '2020 — 2024',
      desc: '4 years of front-end web development experience with expertise in HTML, CSS, JavaScript, Bootstrap, and jQuery.'
    },
    {
      title: 'Back-end Developer — Techsolab',
      period: '2023 — 2024',
      desc: '1 year of backend development experience with proficiency in C++ and C#.'
    },
    {
      title: 'Database Developer — Techsolab',
      period: '2023 — 2024',
      desc: '1 year of database experience with SQL, focused on designing and optimizing databases.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <h6>{exp.title}</h6>
              <p>{exp.period} · {exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;