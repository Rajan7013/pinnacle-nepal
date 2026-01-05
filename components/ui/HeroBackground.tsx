'use client';

import { motion } from 'framer-motion';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Tech Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] z-10 opacity-20"></div>

            {/* Aurora Blobs */}
            <div className="absolute inset-0 bg-black">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/30 rounded-full blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/30 rounded-full blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-500/30 rounded-full blur-[120px]"
                />
            </div>

            {/* Vignette to blend edges */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black z-20"></div>
        </div>
    );
}
