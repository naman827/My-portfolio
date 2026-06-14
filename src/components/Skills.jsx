import React from 'react'
import '../css/sections.css'

function Skills() {
    const frontendSkills = ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3/SCSS", "Tailwind CSS", "Three.js"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs", "GraphQL"];
    const toolsSkills = ["Git / GitHub", "Docker", "AWS", "Figma", "VS Code", "Postman", "Linux"];

    return (
        <section className="section-wrapper" id="skills">
            <h2 className="section-title">Technical <span>Skills</span></h2>
            
            <div className="skills-grid">
                {/* Frontend Category */}
                <div className="skill-category">
                    <h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#00d4ff"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                        Frontend
                    </h3>
                    <div className="badges-container">
                        {frontendSkills.map((skill, index) => (
                            <span key={index} className="tech-badge">{skill}</span>
                        ))}
                    </div>
                </div>

                {/* Backend Category */}
                <div className="skill-category">
                    <h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#ff6b6b"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        Backend
                    </h3>
                    <div className="badges-container">
                        {backendSkills.map((skill, index) => (
                            <span key={index} className="tech-badge">{skill}</span>
                        ))}
                    </div>
                </div>

                {/* Tools Category */}
                <div className="skill-category">
                    <h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#6c63ff"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        Tools & Workflow
                    </h3>
                    <div className="badges-container">
                        {toolsSkills.map((skill, index) => (
                            <span key={index} className="tech-badge">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
