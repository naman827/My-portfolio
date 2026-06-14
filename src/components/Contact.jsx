"use client"
import React from 'react'
import '../css/sections.css'

function Contact() {
    return (
        <section className="section-wrapper" id="contact">
            <h2 className="section-title">Get In <span>Touch</span></h2>
            
            <div className="contact-container">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="John Doe" required />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Hi Naman, I'd like to work with you..." required></textarea>
                    </div>
                    
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
