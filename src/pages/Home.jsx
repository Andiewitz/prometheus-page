import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Lock, Terminal } from 'lucide-react';
import Button from '../components/ui/Button';
import DashboardPreview from '../components/dashboard/DashboardPreview';

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    return (
        <>
            {/* Background Atmosphere - Restored to Original Design */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] left-[-15%] w-[1200px] h-[1200px] bg-amber-600/[0.03] rounded-full blur-[180px] mix-blend-screen"></div>
                <div className="absolute top-[-5%] right-[-10%] w-[1000px] h-[1000px] bg-red-900/[0.02] rounded-full blur-[200px] mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[1500px] h-[1000px] bg-orange-900/[0.02] rounded-full blur-[220px]"></div>
            </div>

            {/* Hero Section - Restored Original Text & Scaling */}
            <section className="container mx-auto px-4 text-center relative z-10 pt-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
                        The Operating System <br />
                        for Modern Business.
                    </h1>
                    <p className="text-base md:text-lg text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
                        From advanced Point of Sale to global inventory management. <br />
                        Web provide the tools to <span className="text-white">scale infinitely</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
                        <Button size="sm" className="px-8 h-12 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                            Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="secondary" size="sm" className="px-8 h-12">
                            View Pricing
                        </Button>
                    </div>
                </motion.div>

                <DashboardPreview />
            </section>

            {/* THE "WHY" SECTION: NEW KINETIC BACKBONE ONLY */}
            <section ref={containerRef} className="container mx-auto px-6 py-40 relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative">

                    {/* The Center Line (Backbone) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ height: "100%", scaleY: pathLength, originY: 0 }}
                            className="w-full bg-gradient-to-b from-primary via-orange-500 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                        />
                    </div>

                    <div className="space-y-48">
                        {[
                            {
                                icon: Terminal,
                                title: "Edge Engine",
                                metric: "< 0.8ms",
                                desc: "High-concurrency processing with sub-millisecond atomic settlement.",
                                align: "left"
                            },
                            {
                                icon: Globe,
                                title: "Global Mesh",
                                metric: "100%",
                                desc: "Instant telemetry across every node in your business, anywhere on Earth.",
                                align: "right"
                            },
                            {
                                icon: Lock,
                                title: "Resilience",
                                metric: "99.99%",
                                desc: "Offline-first sync protocols that keep transactions alive through network failures.",
                                align: "left"
                            },
                            {
                                icon: Cpu,
                                title: "Hardware Neutral",
                                metric: "Agnostic",
                                desc: "Run your OS on commodity hardware—iPads, ARM tablets, or custom silicon.",
                                align: "right"
                            }
                        ].map((node, i) => (
                            <div key={i} className={`flex items-center w-full relative ${node.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                <div className={`w-full md:w-1/2 ${node.align === 'left' ? 'md:pr-24 text-right' : 'md:pl-24 text-left'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: node.align === 'left' ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="space-y-4"
                                    >
                                        <div className={`flex items-center gap-3 ${node.align === 'left' ? 'justify-end' : 'justify-start'}`}>
                                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60">{node.metric}</span>
                                            <div className="h-[1px] w-8 bg-white/10" />
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-serif text-white leading-none italic">{node.title}</h3>
                                        <p className="text-sm md:text-base text-gray-500 max-w-sm ml-auto md:ml-0 inline-block leading-relaxed">
                                            {node.desc}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Node Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                    <motion.div
                                        whileInView={{ scale: [0, 1.2, 1], opacity: 1 }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        viewport={{ once: true }}
                                        className="h-4 w-4 rounded-full bg-[#050607] border border-white/20 flex items-center justify-center z-20 group"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(245,158,11,1)]" />
                                    </motion.div>
                                </div>
                                <div className="w-full md:w-1/2 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
