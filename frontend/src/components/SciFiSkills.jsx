
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SciFiSkills = ({ skills }) => {
    const [rotation, setRotation] = useState(0);
    const controls = useAnimation();
    const containerRef = useRef(null);

    // Flatten skills
    const allSkills = Object.entries(skills).flatMap(([category, items]) =>
        items.map(item => ({ category, name: item }))
    );

    // Limit to a reasonable number for the cylinder ring to look good
    const displaySkills = allSkills.slice(0, 15);
    const angleStep = 360 / displaySkills.length;
    const radius = 400;

    useEffect(() => {
        controls.start({
            rotateY: 360,
            transition: { duration: 40, ease: "linear", repeat: Infinity }
        });
    }, [controls]);

    return (
        <div
            className="scifi-skills-container"
            style={{
                height: '500px',
                width: '100%',
                perspective: '1200px',
                overflow: 'hidden',
                background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.5) 0%, rgba(0,0,0,1) 100%)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* Sci-Fi Grid Floor */}
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(transparent 0%, var(--accent-primary) 2%, transparent 3%)',
                backgroundSize: '50px 50px',
                transform: 'rotateX(80deg)',
                opacity: 0.2,
                zIndex: 0
            }} />

            <motion.div
                className="cylinder-scene"
                animate={controls}
                style={{
                    position: 'relative',
                    width: '0px',
                    height: '0px',
                    transformStyle: 'preserve-3d',
                }}
            >
                {displaySkills.map((skill, index) => {
                    const angle = index * angleStep;
                    return (
                        <div
                            key={index}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <div
                                className="scifi-card"
                                style={{
                                    width: '220px',
                                    padding: '1.5rem',
                                    background: 'rgba(5, 5, 10, 0.8)',
                                    border: '1px solid var(--accent-primary)',
                                    boxShadow: '0 0 15px rgba(var(--accent-rgb), 0.2), inset 0 0 20px rgba(var(--accent-rgb), 0.05)',
                                    color: 'var(--text-primary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    backfaceVisibility: 'visible', /* Show back for cool effect or hidden if preferred */
                                    backdropFilter: 'blur(5px)',
                                    clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'
                                }}
                            >
                                <div style={{
                                    fontSize: '0.7rem',
                                    color: 'var(--accent-secondary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    marginBottom: '0.5rem',
                                    borderBottom: '1px solid var(--accent-primary)',
                                    width: '100%',
                                    textAlign: 'center',
                                    paddingBottom: '0.25rem'
                                }}>
                                    {skill.category.split(' ')[0]}
                                </div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'center', textShadow: '0 0 5px var(--accent-primary)' }}>
                                    {skill.name}
                                </div>
                                {/* Tech Deco */}
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '2px solid var(--accent-primary)', borderLeft: '2px solid var(--accent-primary)' }} />
                                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: '2px solid var(--accent-primary)', borderRight: '2px solid var(--accent-primary)' }} />
                            </div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Central Core Hologram */}
            <div style={{
                position: 'absolute',
                width: '100px',
                height: '250px',
                background: 'linear-gradient(to bottom, transparent, rgba(var(--accent-rgb), 0.2), transparent)',
                filter: 'blur(10px)',
                animation: 'pulse 2s infinite',
                zIndex: 1
            }} />

        </div>
    );
};

export default SciFiSkills;
