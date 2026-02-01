
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ChevronRight, ChevronLeft } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const SkillPresenter = ({ skills }) => {
    // Flatten skills into a linear deck
    const skillDeck = Object.entries(skills).flatMap(([category, items]) =>
        items.map(item => ({ category, name: item }))
    );

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Auto-play logic
    useEffect(() => {
        let interval;
        if (isAutoPlay) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % skillDeck.length);
            }, 4000); // 4 seconds per slide
        }
        return () => clearInterval(interval);
    }, [isAutoPlay, skillDeck.length]);

    const currentSkill = skillDeck[activeIndex];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % skillDeck.length);
        setIsAutoPlay(false); // Pause on interaction
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + skillDeck.length) % skillDeck.length);
        setIsAutoPlay(false);
    };

    return (
        <div className="presenter-scene relative h-[500px] w-full flex items-center justify-center overflow-hidden">

            {/* Bot Avatar (The Presenter) */}
            <motion.div
                className="presenter-avatar absolute top-10 z-20"
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 rounded-full"></div>
                    <Bot className="w-24 h-24 text-blue-500 dark:text-blue-400 relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    {/* Talking animation effect */}
                    <motion.div
                        className="absolute -right-4 -top-4 bg-white/90 dark:bg-blue-900/80 border border-blue-500/30 text-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full whitespace-nowrap shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
                        transition={{ duration: 3, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 1 }}
                    >
                        Here is a skill...
                    </motion.div>
                </div>
            </motion.div>

            {/* The Stage / Card Area */}
            <div className="stage-area relative mt-20 w-full max-w-md perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: 45 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 1.2, y: -50, rotateX: -10 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-full flex justify-center"
                    >
                        <Card
                            className="w-full max-w-[320px] mx-4 h-96 relative bg-white/80 dark:bg-slate-900/90 border-blue-500/30 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center shadow-[0_0_50px_rgba(37,99,235,0.2)]"
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Holographic rim effect */}
                            <div className="absolute inset-0 border border-blue-400/20 rounded-xl" />
                            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent blur-sm -z-10 rounded-xl" />

                            <div className="mb-4">
                                <Badge variant="outline" className="border-blue-500/50 text-blue-600 dark:text-blue-300 tracking-widest text-xs uppercase mb-2">
                                    {currentSkill.category}
                                </Badge>
                            </div>

                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 drop-shadow-sm dark:drop-shadow-md">
                                {currentSkill.name}
                            </h3>

                            <div className="h-1 w-20 bg-blue-500/50 rounded-full mx-auto" />
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-10 flex gap-4 z-30">
                <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-blue-100 dark:hover:bg-blue-600/20 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all text-blue-900 dark:text-white"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-xs text-blue-900 dark:text-blue-200 font-mono flex items-center">
                    CARD {activeIndex + 1} / {skillDeck.length}
                </div>
                <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-blue-100 dark:hover:bg-blue-600/20 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all text-blue-900 dark:text-white"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-900/20 blur-[100px] rounded-full" />
            </div>

        </div>
    );
};

export default SkillPresenter;
