"use client"
import { useState, useEffect } from 'react'
import "../css/navbar.css"

function Navbar() {
    const [theme, setTheme] = useState('dark');
    const [activeSelection, setActiveSelection] = useState('home')

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    useEffect(() => {
        const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']; // ✅ Fix 1: 'contacts' → 'contact'

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSelection(entry.target.id) // ✅ Fix 2: .target → .target.id
                }
            })
        }, {
            rootMargin: '0px 0px -70% 0px', // activates when section hits top 30% of screen
            threshold: 0
        })

        // ✅ Fix 3: actually observe the elements + cleanup (you had neither)
        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, []) // ✅ Fix 3 cont: empty [] so it only runs once on mount

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">Naman</span>
                <span className="logo-bracket">/&gt;</span>
            </div>
            <ul className="nav-links">
                <li><a href="#home" className={`nav-link ${activeSelection === 'home' ? 'active' : ''}`}>Home</a></li>
                <li><a href="#about" className={`nav-link ${activeSelection === 'about' ? 'active' : ''}`}>About</a></li>
                <li><a href="#skills" className={`nav-link ${activeSelection === 'skills' ? 'active' : ''}`}>Skills</a></li>
                <li><a href="#projects" className={`nav-link ${activeSelection === 'projects' ? 'active' : ''}`}>Projects</a></li>
                <li><a href="#contact" className={`nav-link ${activeSelection === 'contact' ? 'active' : ''}`}>Contact</a></li>
                
                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Dark/Light Mode">
                    {theme === 'dark' ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
            </ul>
        </nav>
    )
}

export default Navbar