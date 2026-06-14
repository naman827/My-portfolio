import React from 'react'
import '../css/sections.css'

function Projects() {
    const projects = [
        {
            title: "Neon E-Commerce",
            description: "A full-stack e-commerce platform built with Next.js and Stripe. Features dark-mode UI, 3D product previews, and secure checkout system.",
            tech: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
            image: "https://placehold.co/600x400/12152a/00d4ff?text=Neon+E-Commerce",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Task AI Dashboard",
            description: "An AI-powered productivity dashboard that automatically categorizes tasks using OpenAI's API. Includes interactive charts and team collaboration.",
            tech: ["React", "Express.js", "OpenAI API", "Chart.js"],
            image: "https://placehold.co/600x400/12152a/6c63ff?text=AI+Dashboard",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Crypto Tracker Plus",
            description: "Real-time cryptocurrency tracking widget built with WebSockets. Delivers live price updates and historical data graphs in a sleek glassmorphic UI.",
            tech: ["JavaScript", "WebSockets", "CSS3", "CoinGecko API"],
            image: "https://placehold.co/600x400/12152a/ff6b6b?text=Crypto+Tracker",
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    return (
        <section className="section-wrapper" id="projects">
            <h2 className="section-title">Featured <span>Projects</span></h2>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-thumbnail">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-links">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link link-live">View Live</a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link link-github">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
