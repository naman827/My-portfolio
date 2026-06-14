"use client"
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import '../css/sections.css'

function AnimatedShape() {
    const mesh = useRef();
    
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Sphere args={[1, 100, 200]} scale={1.8} ref={mesh}>
            <MeshDistortMaterial 
                color="#6c63ff" 
                attach="material" 
                distort={0.4} 
                speed={2} 
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
}

function About() {
    return (
        <section className="section-wrapper" id="about">
            <h2 className="section-title">About <span>Me</span></h2>
            
            <div className="about-container">
                <div className="about-content">
                    <h3>Building Digital Experiences</h3>
                    <p>
                        I am a passionate Full Stack Developer with a knack for building robust and scalable web applications. 
                        I love blending modern design with clean, efficient code to create digital products that solve real-world problems.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source, or designing futuristic UI concepts.
                    </p>
                    
                    <div className="glass-stats-grid">
                        <div className="glass-stat">
                            <h4>2+</h4>
                            <p>Years Exp.</p>
                        </div>
                        <div className="glass-stat">
                            <h4>15+</h4>
                            <p>Projects Done</p>
                        </div>
                        <div className="glass-stat">
                            <h4>10+</h4>
                            <p>Happy Clients</p>
                        </div>
                        <div className="glass-stat">
                            <h4>∞</h4>
                            <p>Lines of Code</p>
                        </div>
                    </div>
                </div>
                
                <div className="about-3d">
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        <pointLight position={[-10, -10, -10]} intensity={2} color="#00d4ff" />
                        <AnimatedShape />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default About
