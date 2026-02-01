
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const NeuralConstellation = ({ skills }) => {
    const containerRef = useRef(null);
    const [nodes, setNodes] = useState([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Initialize nodes
    useEffect(() => {
        if (!containerRef.current) return;

        // Flatten skills into a single array with category info
        const skillList = Object.entries(skills).flatMap(([category, items], catIndex) =>
            items.map((item, itemIndex) => ({
                id: `${category}-${itemIndex}`,
                name: item,
                category,
                x: Math.random() * 100, // %
                y: Math.random() * 100, // %
                z: Math.random() * 200 - 100, // Depth
                size: Math.random() * 20 + 40, // Node size
            }))
        );

        setNodes(skillList);
    }, [skills]);

    // Mouse interaction
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: (e.clientX - rect.left) / rect.width - 0.5,
            y: (e.clientY - rect.top) / rect.height - 0.5
        });
    };

    return (
        <div
            ref={containerRef}
            className="neural-constellation-container"
            onMouseMove={handleMouseMove}
            style={{
                position: 'relative',
                height: '600px',
                width: '100%',
                perspective: '1000px',
                overflow: 'hidden',
                background: 'radial-gradient(circle at center, #1e1e2e 0%, #000000 100%)',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.1)'
            }}
        >
            <div
                className="stars"
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
                    opacity: 0.3
                }}
            />

            <div
                className="constellation-scene"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${mousePos.y * 20}deg) rotateY(${mousePos.x * 20}deg)`
                }}
            >
                {/* Render Connections */}
                <svg
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        pointerEvents: 'none',
                        zIndex: 0
                    }}
                >
                    {nodes.map((node, i) => (
                        nodes.slice(i + 1).map((otherNode, j) => {
                            // Simple distance check to draw lines
                            const dist = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                            if (dist < 25) { // Only connect close nodes
                                return (
                                    <line
                                        key={`${node.id}-${otherNode.id}`}
                                        x1={`${node.x}%`} y1={`${node.y}%`}
                                        x2={`${otherNode.x}%`} y2={`${otherNode.y}%`}
                                        stroke="rgba(147, 51, 234, 0.2)"
                                        strokeWidth="1"
                                    />
                                );
                            }
                            return null;
                        })
                    ))}
                </svg>

                {/* Render Nodes */}
                {nodes.map((node, i) => (
                    <motion.div
                        key={node.id}
                        className="skill-node"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            transform: `translate(-50%, -50%) translateZ(${node.z}px)`,
                            padding: '0.5rem 1rem',
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(147, 51, 234, 0.5)',
                            borderRadius: '2rem',
                            color: '#fff',
                            fontSize: '0.8rem',
                            boxShadow: '0 0 15px rgba(147, 51, 234, 0.3)',
                            cursor: 'pointer',
                            zIndex: Math.floor(node.z + 100)
                        }}
                        whileHover={{
                            scale: 1.2,
                            zIndex: 1000,
                            backgroundColor: 'rgba(147, 51, 234, 0.9)',
                            boxShadow: '0 0 30px rgba(147, 51, 234, 0.8)'
                        }}
                    >
                        {node.name}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default NeuralConstellation;
