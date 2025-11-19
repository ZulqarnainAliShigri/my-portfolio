import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const ref = useIntersectionObserver();
  const projects = [
    {
      title: 'AI Chat Assistant',
      desc: 'Chatbot using OpenAI APIs with custom workflows for customer support.',
      image: '/images/aichatbot.png',
      tags: ['AI', 'Node']
    },
    {
      title: 'MERN E-Commerce',
      desc: 'Full-featured online store with authentication, admin panel and payments.',
      image: '/images/eCommerce-mern.jpg',
      tags: ['MERN', 'Payments']
    },
    {
      title: 'Portfolio Website',
      desc: 'High-performance portfolio showcasing projects, blog and contact integration.',
      image: '/images/portfolio.jpg',
      tags: ['React', 'Design']
    },
    {
      title: 'Travel Booking Platform',
      desc: 'Booking flow, admin dashboards and maps integration for travel operators.',
      image: '/images/travel.webp',
      tags: ['Fullstack', 'Maps']
    }
  ];

  return (
    <section id="projects" className="section">
      <div ref={ref} className="container container-lg" data-animate>
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.title} className="project">
              <img src={project.image} alt={project.title} />
              <div className="project-body">
                <h5 style={{color: 'var(--text)', margin: '0 0 6px'}}>{project.title}</h5>
                <p>{project.desc}</p>
                <div style={{display: 'flex', gap: '8px', marginTop: '10px'}}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;