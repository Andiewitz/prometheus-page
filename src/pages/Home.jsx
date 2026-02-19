import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Boxes, BarChart3 } from 'lucide-react';
import Button from '../components/ui/Button';
import DashboardPreview from '../components/dashboard/DashboardPreview';

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const barOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    return (
        <div ref={containerRef} className="relative">
            {/* Scroll Progress Bar - Refined for zero-start */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left"
                style={{
                    scaleX: scrollYProgress,
                    opacity: barOpacity
                }}
            />
            {/* Background Atmosphere - Global Page Bleed */}
            <div className="absolute inset-0 overflow-visible pointer-events-none -z-10">
                <motion.div style={{ y: y1 }} className="absolute top-[5%] left-[-15%] w-[1200px] h-[1200px] bg-amber-600/[0.04] rounded-full blur-[180px] mix-blend-screen"></motion.div>
                <motion.div style={{ y: y2 }} className="absolute top-[-5%] right-[-10%] w-[1000px] h-[1000px] bg-red-900/[0.03] rounded-full blur-[200px] mix-blend-screen"></motion.div>
                <motion.div style={{ y: y3 }} className="absolute bottom-[20%] left-[20%] w-[1500px] h-[800px] bg-orange-900/[0.01] rounded-full blur-[220px]"></motion.div>
            </div>

            {/* Hero Section - Padding to clear fixed header */}
            <section className="container mx-auto px-4 text-center relative z-10 pt-48 pb-32">
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
                        Consolidate your Point of Sale, inventory, and analytics into one reliable platform. <br />
                        Built to handle <span className="text-white">high-volume retail</span> operations.
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

            {/* THE "WHY" SECTION: REDESIGNED WITH SPARK BACKGROUND */}
            <section className="relative min-h-screen pt-24">
                {/* Background Transition Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* The Grid Background with a smooth top mask */}
                    <div className="absolute inset-0 bg-[#050607]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                            maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)'
                        }}>
                    </div>



                    {/* Subtle Glow inside the Grid section */}
                    <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[150px]"></div>
                </div>

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    {/* Logo Bar - Technical Aesthetic */}
                    <div className="flex items-center justify-between px-8 py-6 bg-white/[0.02] border border-white/10 rounded-t-2xl backdrop-blur-sm">
                        <div className="flex-1 flex justify-center border-r border-white/5 opacity-50">
                            <span className="font-bold text-lg tracking-tighter">hud</span>
                        </div>
                        <div className="flex-1 flex justify-center border-r border-white/5 opacity-50">
                            <span className="font-bold text-lg tracking-tighter">BILT</span>
                        </div>
                        <div className="flex-1 flex justify-center border-r border-white/5 opacity-50 uppercase text-xs font-bold tracking-widest">
                            mgm resorts
                        </div>
                        <div className="flex-1 flex justify-center border-r border-white/5 opacity-50 italic font-bold">
                            Switzerland
                        </div>
                        <div className="flex-1 flex justify-center opacity-50 uppercase text-xs font-bold tracking-widest">
                            numeral
                        </div>
                    </div>

                    {/* Main Container - Redesigned to match image */}
                    <div className="bg-[#0c0e12]/60 border-x border-b border-white/10 rounded-b-2xl p-8 md:p-20 relative overflow-hidden backdrop-blur-xl">
                        <div className="relative z-10 space-y-48">

                            {/* Section 1: POS / Terminal Control */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                            >
                                {/* The Technical Spine */}
                                <div className="hidden lg:flex lg:col-span-1 flex-col items-center relative h-full">
                                    <div className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center relative z-20 bg-[#0c0e12]">
                                        <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#f59e0b]"></div>
                                    </div>
                                    <div className="w-[1px] flex-1 bg-white/5 relative flex justify-center min-h-[400px]">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 }}
                                                className="absolute w-[2px] h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Content Block */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
                                        Legacy Replacement
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
                                        Retire your janky <br />
                                        legacy systems.
                                    </h3>
                                    <p className="text-base text-gray-400 leading-relaxed font-medium">
                                        Fragmented software and outdated hardware are holding you back. Prometheus replaces your disconnected legacy tools with a single, high-performance business suite.
                                    </p>

                                    {/* Feature List */}
                                    <div className="space-y-6 pt-4 border-t border-white/5">
                                        <div className="flex gap-4 group">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Unified Infrastructure</h4>
                                                <p className="text-xs text-gray-500">Every store, tablet, and terminal runs on the same codebase, eliminating regional data silos.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 group">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Legacy Bridge</h4>
                                                <p className="text-xs text-gray-500">Integrations designed to port data from your existing systems without disrupting daily sales.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Alternative to */}
                                    <div className="pt-8 flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Alternative to</span>
                                        <div className="h-4 w-[1px] bg-white/20" />
                                        <span className="font-bold text-xs">Toast</span>
                                        <span className="font-bold text-xs italic">Clover</span>
                                        <span className="font-bold text-xs uppercase">Square</span>
                                    </div>
                                </div>

                                {/* Visual Mockup Placeholder - Virtual POS Terminal */}
                                <div className="lg:col-span-6 relative flex items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl h-[400px] overflow-hidden group">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />

                                    {/* Virtual POS Terminal Interface */}
                                    <div className="relative z-10 w-full max-w-sm bg-[#050607]/90 rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
                                        {/* Terminal Header */}
                                        <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                            <div className="flex items-center gap-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#f59e0b]" />
                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Node_Terminal_041</span>
                                            </div>
                                            <div className="flex gap-1.5">
                                                <div className="h-1 w-4 bg-white/10 rounded-full" />
                                                <div className="h-1 w-8 bg-primary/40 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Terminal Grid */}
                                        <div className="p-6 grid grid-cols-6 gap-4">
                                            {/* Sidebar Tools */}
                                            <div className="col-span-1 space-y-3">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="h-8 w-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-primary/20 transition-colors">
                                                        <div className="h-3 w-3 rounded-sm bg-white/10" />
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Main Viewport */}
                                            <div className="col-span-5 space-y-4">
                                                <div className="h-32 w-full bg-white/[0.02] rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                                                    <div className="flex justify-between items-start">
                                                        <div className="space-y-1.5">
                                                            <div className="h-1.5 w-20 bg-white/20 rounded" />
                                                            <div className="h-3 w-32 bg-white/10 rounded" />
                                                        </div>
                                                        <div className="px-2 py-1 bg-primary/10 rounded border border-primary/20">
                                                            <span className="text-[10px] font-bold text-primary tracking-tighter leading-none">$1,240.00</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div className="h-1.5 w-1/3 bg-white/5 rounded" />
                                                        <div className="h-1.5 w-1/4 bg-white/5 rounded" />
                                                        <div className="h-1.5 w-1/5 bg-white/5 rounded" />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="h-16 bg-white/[0.03] rounded-xl border border-white/5 p-3 flex flex-col justify-end">
                                                        <div className="h-1 w-8 bg-green-500/40 rounded mb-2" />
                                                        <div className="h-2 w-16 bg-white/10 rounded" />
                                                    </div>
                                                    <div className="h-16 bg-white/[0.03] rounded-xl border border-white/5 p-3 flex flex-col justify-end">
                                                        <div className="h-1 w-8 bg-blue-500/40 rounded mb-2" />
                                                        <div className="h-2 w-16 bg-white/10 rounded" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connection Pulse */}
                                        <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
                                            <motion.div
                                                animate={{ left: ["-100%", "200%"] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Section 2: Global Inventory */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start order-last lg:order-none"
                            >
                                {/* The Technical Spine */}
                                <div className="hidden lg:flex lg:col-span-1 flex-col items-center relative h-full">
                                    <div className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center relative z-20 bg-[#0c0e12]">
                                        <div className="h-2 w-2 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
                                    </div>
                                    <div className="w-[1px] flex-1 bg-white/5 relative flex justify-center min-h-[400px]">
                                        {[0, 1].map((i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
                                                className="absolute w-[2px] h-20 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Content Block */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div className="inline-block px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[10px] font-mono text-orange-500 uppercase tracking-[0.2em]">
                                        Unified Suite
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
                                        One unified suite, <br />
                                        zero silos.
                                    </h3>
                                    <p className="text-base text-gray-400 leading-relaxed font-medium">
                                        Maintaining separate systems for POS, warehouse, and e-commerce is inefficient. Prometheus consolidates your entire business operations into a single source of truth.
                                    </p>

                                    {/* Feature List */}
                                    <div className="space-y-6 pt-4 border-t border-white/5">
                                        <div className="flex gap-4 group">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-white/20 group-hover:bg-orange-500 transition-colors" />
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Cross-Platform Sync</h4>
                                                <p className="text-xs text-gray-500">Real-time updates across physical stores, warehouse inventory, and online marketplaces simultaneously.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 group">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-white/20 group-hover:bg-orange-500 transition-colors" />
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Deep Integration</h4>
                                                <p className="text-xs text-gray-500">A suite where every module talks to each other natively. No manual data imports or spreadsheet hacks.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Alternative to */}
                                    <div className="pt-8 flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Alternative to</span>
                                        <div className="h-4 w-[1px] bg-white/20" />
                                        <span className="font-bold text-xs uppercase tracking-tight tracking-[-1px]">SAP</span>
                                        <span className="font-bold text-xs tracking-tight">NetSuite</span>
                                        <span className="font-bold text-xs">Oracle</span>
                                    </div>
                                </div>

                                {/* Visual Mockup Placeholder - Virtual Suite/Asset Tracker */}
                                <div className="lg:col-span-6 relative flex items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl h-[400px] overflow-hidden group">
                                    <div className="absolute inset-0 bg-[#050607]/40"
                                        style={{
                                            backgroundImage: `radial-gradient(rgba(245,158,11,0.1) 1px, transparent 0)`,
                                            backgroundSize: '20px 20px'
                                        }} />

                                    {/* Virtual Inventory / Asset Tracker */}
                                    <div className="relative z-10 w-full max-w-sm bg-[#0c0e12]/80 rounded-2xl border border-white/10 p-6 backdrop-blur-xl shadow-2xl">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex gap-4">
                                                <div className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                                    <Boxes className="w-5 h-5 text-orange-500" />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-0.5">Global_Stock</div>
                                                    <div className="text-sm font-bold text-white tracking-tight">Suite_Asset_Mesh.sys</div>
                                                </div>
                                            </div>
                                            <div className="h-6 px-2 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                                                <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                                                <span className="text-[8px] font-mono text-gray-400">SYNCED</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="relative group/item">
                                                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 group-hover/item:border-orange-500/30 transition-colors">
                                                        <div className="flex items-center gap-3">
                                                            <div className="h-8 w-8 rounded-md bg-white/5 border border-white/5 flex items-center justify-center">
                                                                <span className="text-[10px] text-gray-500 font-mono">0{i}</span>
                                                            </div>
                                                            <div>
                                                                <div className="h-1.5 w-16 bg-white/20 rounded mb-1.5" />
                                                                <div className="h-2 w-24 bg-white/10 rounded" />
                                                            </div>
                                                        </div>
                                                        <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: "0%" }}
                                                                whileInView={{ width: i === 1 ? "80%" : i === 2 ? "40%" : "65%" }}
                                                                className={`h-full ${i === 2 ? 'bg-amber-500/60' : 'bg-orange-500/60'}`}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between">
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                                    <div key={i} className={`h-4 w-1 rounded-full ${i < 5 ? 'bg-orange-500/50' : 'bg-white/5'}`} />
                                                ))}
                                            </div>
                                            <div className="text-[8px] font-mono text-orange-500/60 tracking-widest uppercase">Integration_Active</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Section 3: Intelligence & Analytics */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative p-8 md:p-12 rounded-3xl overflow-hidden group/s3"
                            >
                                {/* The Technical Spine */}
                                <div className="hidden lg:flex lg:col-span-1 flex-col items-center relative h-full">
                                    <div className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center relative z-20 bg-[#0c0e12]">
                                        <div className="h-2 w-2 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                                    </div>
                                    <div className="w-[1px] flex-1 bg-gradient-to-b from-white/5 to-transparent relative min-h-[400px]" />
                                </div>

                                {/* Content Block */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em]">
                                        Reporting & Analytics
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
                                        Business Intelligence. <br />
                                        Not just dashboards.
                                    </h3>
                                    <p className="text-base text-gray-400 leading-relaxed font-medium">
                                        Access deep insights into your revenue, margins, and employee performance. Stop waiting for end-of-month reports to understand your numbers.
                                    </p>

                                    {/* Feature List */}
                                    <div className="space-y-6 pt-4 border-t border-white/5">
                                        <div className="flex gap-4 group">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-white/20 group-hover:bg-blue-500 transition-colors" />
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Margin Analysis</h4>
                                                <p className="text-xs text-gray-500">Monitor profitability at the product, store, or regional level in real-time.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 group">
                                            <div className="mt-1 h-2 w-2 rounded-full bg-white/20 group-hover:bg-blue-500 transition-colors" />
                                            <div>
                                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Trend Forecasting</h4>
                                                <p className="text-xs text-gray-500">Identify seasonal trends and customer behavior patterns to optimize operations.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Alternative to */}
                                    <div className="pt-8 flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Alternative to</span>
                                        <div className="h-4 w-[1px] bg-white/20" />
                                        <span className="font-bold text-xs">Tableau</span>
                                        <span className="font-bold text-xs italic">Looker</span>
                                        <span className="font-bold text-xs uppercase tracking-tighter text-[9px]">PowerBI</span>
                                    </div>
                                </div>

                                {/* Visual Mockup Placeholder - Virtual Analytics Dashboard */}
                                <div className="lg:col-span-6 relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 overflow-hidden min-h-[400px] flex items-center justify-center group">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1)_0%,transparent_70%)]" />

                                    {/* Virtual Analytics Interface */}
                                    <div className="relative z-10 w-full max-w-sm bg-[#050607]/60 rounded-3xl border border-white/10 p-6 backdrop-blur-2xl shadow-2xl">
                                        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                                            <div className="flex gap-2">
                                                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                                                <div className="h-2 w-2 rounded-full bg-amber-500/40" />
                                                <div className="h-2 w-2 rounded-full bg-green-500/40" />
                                            </div>
                                            <div className="text-[9px] font-mono text-gray-500 tracking-tighter uppercase">PROMETHEUS_QUANTUM_CORE</div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="flex justify-between items-end gap-3 h-24">
                                                {[40, 70, 45, 90, 65, 80, 55, 75, 50, 85].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${h}%` }}
                                                        transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
                                                        className="flex-1 bg-gradient-to-t from-blue-500/10 to-blue-500/40 border-t border-blue-500/60 rounded-t-sm"
                                                    />
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-2">
                                                    <div className="text-[8px] font-mono text-gray-500 tracking-widest uppercase mb-1">Net_Revenue</div>
                                                    <div className="text-xl font-bold text-white tracking-tight">$82.4k</div>
                                                    <div className="flex items-center gap-1">
                                                        <div className="h-1 w-1 rounded-full bg-green-500" />
                                                        <span className="text-[8px] font-mono text-green-500">+12.4%</span>
                                                    </div>
                                                </div>
                                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-2">
                                                    <div className="text-[8px] font-mono text-gray-500 tracking-widest uppercase mb-1">Margin_Cap</div>
                                                    <div className="text-xl font-bold text-white tracking-tight">42.1%</div>
                                                    <div className="flex items-center gap-1 text-gray-500">
                                                        <div className="h-1 w-1 rounded-full bg-gray-500" />
                                                        <span className="text-[8px] font-mono tracking-tighter">OPTIMAL</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-6 w-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                        <BarChart3 className="w-3 h-3 text-blue-500" />
                                                    </div>
                                                    <div className="h-2 w-24 bg-white/10 rounded" />
                                                </div>
                                                <div className="h-4 w-4 rounded-full border border-white/10" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
                                </div>
                            </motion.div>

                            {/* Section 4: Built for Your Business */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                            >
                                {/* The Technical Spine */}
                                <div className="hidden lg:flex lg:col-span-1 flex-col items-center relative h-full">
                                    <div className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center relative z-20 bg-[#0c0e12]">
                                        <div className="h-2 w-2 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
                                    </div>
                                    <div className="w-[1px] flex-1 bg-gradient-to-b from-white/5 to-transparent relative min-h-[400px]" />
                                </div>

                                {/* Content Block */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div className="inline-block px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] font-mono text-green-500 uppercase tracking-[0.2em]">
                                        Built For You
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
                                        One platform. <br />
                                        Every business.
                                    </h3>
                                    <p className="text-base text-gray-400 leading-relaxed font-medium">
                                        Whether you run a single café or a multi-location retail chain, Prometheus adapts to how you operate — not the other way around.
                                    </p>

                                    {/* Business Type List */}
                                    <div className="space-y-6 pt-4 border-t border-white/5">
                                        {[
                                            { label: "Restaurants & Cafés", desc: "Table management, kitchen display, and split bills — all unified." },
                                            { label: "Retail & Grocery", desc: "Multi-location inventory, barcode scanning, and loyalty built in." },
                                            { label: "Franchises & Chains", desc: "Centralized control with per-location reporting and role-based access." },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className="mt-1 h-2 w-2 rounded-full bg-white/20 group-hover:bg-green-500 transition-colors flex-shrink-0" />
                                                <div>
                                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{item.label}</h4>
                                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-4">
                                        <Button size="sm" className="px-8 h-12 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                                            Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Visual Mockup — Business Type Selector */}
                                <div className="lg:col-span-6 relative flex items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl h-[400px] overflow-hidden group">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]" />

                                    <div className="relative z-10 w-full max-w-sm space-y-3">
                                        {[
                                            { name: "Restaurants & Cafés", icon: "☕", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/5", active: true },
                                            { name: "Retail Stores", icon: "🛍️", color: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/5", active: false },
                                            { name: "Hospitality & Hotels", icon: "🏨", color: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/5", active: false },
                                            { name: "Franchises & Chains", icon: "🏢", color: "text-green-400", border: "border-green-500/20", bg: "bg-green-500/5", active: false },
                                            { name: "Pop-ups & Events", icon: "⚡", color: "text-pink-400", border: "border-pink-500/20", bg: "bg-pink-500/5", active: false },
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${item.active ? `${item.border} ${item.bg}` : 'border-white/5 bg-white/[0.01] opacity-50'}`}
                                            >
                                                <span className="text-lg">{item.icon}</span>
                                                <span className={`text-sm font-medium ${item.active ? item.color : 'text-gray-500'}`}>{item.name}</span>
                                                {item.active && (
                                                    <div className="ml-auto flex items-center gap-1.5">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                                                        <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest">Active</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA — THE FORGE */}
            <section className="relative overflow-hidden" style={{ height: '760px' }}>
                {/* Extended Top Glow - Seamlessly blends the gap */}
                <div className="absolute top-0 left-0 right-0 h-[500px] z-0 pointer-events-none flex justify-center overflow-hidden">
                    <div className="w-[120%] h-full bg-[radial-gradient(ellipse_at_bottom,rgba(245,100,0,0.15),transparent_70%)] blur-3xl opacity-80" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-stretch top-[80px]"
                >
                    {/* ── UNIFIED TOP CAP / LINTEL ── */}
                    <div className="absolute top-0 left-0 right-0 h-16 z-40 flex pointer-events-none">
                        {/* Left Cap */}
                        <div className="w-[28%] h-full bg-gradient-to-b from-[#1a1a1a] to-transparent" />
                        {/* Center Arch Cap */}
                        <div className="flex-1 h-full bg-gradient-to-b from-[#111] to-transparent" />
                        {/* Right Cap */}
                        <div className="w-[28%] h-full bg-gradient-to-b from-[#1a1a1a] to-transparent" />
                        {/* Continuous top edge highlight - softened */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-white/10 opacity-50" />
                    </div>

                    {/* ── SEAM COVER PILLARS (Hide the gap) ── */}
                    <div className="absolute top-0 bottom-0 left-[28%] w-24 -translate-x-1/2 z-20 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 40%, transparent 70%)' }}>
                        <div className="mx-auto w-2 h-full bg-[#111]/80" /> {/* Central dark spine */}
                    </div>
                    <div className="absolute top-0 bottom-0 right-[28%] w-24 translate-x-1/2 z-20 pointer-events-none"
                        style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 40%, transparent 70%)' }}>
                        <div className="mx-auto w-2 h-full bg-[#111]/80" /> {/* Central dark spine */}
                    </div>

                    {/* LEFT IRON WALL — Soft Blend to Center */}
                    <div className="relative flex-shrink-0" style={{ width: '28%' }}>
                        <div className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(160deg, #1c1c1c 0%, #111 30%, #0a0a0a 70%, #0d0d0d 100%)',
                                zIndex: 1
                            }}>
                            {/* Texture Lines */}
                            {[12, 25, 38, 52, 65, 78, 90].map(t => (
                                <div key={t} className="absolute left-0 right-0 h-px"
                                    style={{ top: `${t}%`, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.03), transparent)' }} />
                            ))}
                            {[15, 30, 45, 60, 75, 88].map(t => (
                                <div key={t} className="absolute left-5 w-4 h-4 rounded-full"
                                    style={{ top: `${t}%`, background: 'radial-gradient(circle at 35% 35%, #2a2a2a, #0d0d0d)', boxShadow: 'inset 1px 1px 3px #333, inset -1px -1px 3px #000' }} />
                            ))}
                            {[22, 37, 52, 67, 82].map(t => (
                                <div key={t} className="absolute right-6 w-4 h-4 rounded-full"
                                    style={{ top: `${t}%`, background: 'radial-gradient(circle at 35% 35%, #2a2a2a, #0d0d0d)', boxShadow: 'inset 1px 1px 3px #333, inset -1px -1px 3px #000' }} />
                            ))}

                            {/* Inner Fade to black — smooth vertical blend */}
                            <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[#060606] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* FURNACE CHAMBER */}
                    <div className="relative flex-1 flex flex-col overflow-hidden"
                        style={{ background: '#060606', boxShadow: 'inset 0 10px 40px rgba(0,0,0,0.8)' }}>

                        {/* Top arch — sits above doors */}
                        <div className="absolute top-0 left-0 right-0 h-16 z-30"
                            style={{ background: 'linear-gradient(to bottom, #111, #080808)' }} />

                        {/* ── BLAST DOORS ── */}
                        <div className="absolute inset-0 z-20 pointer-events-none flex">
                            {/* Left Door */}
                            <motion.div
                                initial={{ x: 0 }}
                                whileInView={{ x: '-100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.2, ease: [0.2, 0, 0.2, 1], delay: 0.2 }}
                                className="w-1/2 h-full relative"
                                style={{
                                    background: 'linear-gradient(90deg, #111 0%, #0d0d0d 100%)',
                                    boxShadow: 'inset -2px 0 10px rgba(0,0,0,0.8)' // Soft shadow seam
                                }}
                            >
                                {/* Door Detail Lines */}
                                {[10, 30, 50, 70, 90].map(p => (
                                    <div key={p} className="absolute left-0 right-0 h-px bg-white/[0.03]" style={{ top: `${p}%` }} />
                                ))}
                                {/* Rivets */}
                                {[20, 40, 60, 80].map(p => (
                                    <div key={p} className="absolute right-4 w-3 h-3 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#333,inset_-1px_-1px_2px_black]" style={{ top: `${p}%` }} />
                                ))}
                            </motion.div>

                            {/* Right Door */}
                            <motion.div
                                initial={{ x: 0 }}
                                whileInView={{ x: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.2, ease: [0.2, 0, 0.2, 1], delay: 0.2 }}
                                className="w-1/2 h-full relative"
                                style={{
                                    background: 'linear-gradient(-90deg, #111 0%, #0d0d0d 100%)',
                                    boxShadow: 'inset 2px 0 10px rgba(0,0,0,0.8)' // Soft shadow seam
                                }}
                            >
                                {[10, 30, 50, 70, 90].map(p => (
                                    <div key={p} className="absolute left-0 right-0 h-px bg-white/[0.03]" style={{ top: `${p}%` }} />
                                ))}
                                {[20, 40, 60, 80].map(p => (
                                    <div key={p} className="absolute left-4 w-3 h-3 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#333,inset_-1px_-1px_2px_black]" style={{ top: `${p}%` }} />
                                ))}
                            </motion.div>
                        </div>


                        {/* Fire layers */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 h-[70%]"
                                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(160,25,0,0.95) 0%, rgba(100,15,0,0.7) 40%, transparent 75%)' }} />
                            <div className="absolute bottom-0 left-0 right-0 h-[55%]"
                                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(240,90,0,0.85) 0%, rgba(190,50,0,0.55) 45%, transparent 78%)' }} />
                            <div className="absolute bottom-0 left-0 right-0 h-[38%]"
                                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,190,0,0.75) 0%, rgba(245,140,0,0.5) 40%, transparent 72%)' }} />
                            <div className="absolute bottom-0 left-[25%] right-[25%] h-[18%]"
                                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(255,255,220,0.95) 0%, rgba(255,210,60,0.5) 50%, transparent 100%)' }} />

                            {[
                                { left: '5%', w: '13%', delay: 0, dur: 2.0 },
                                { left: '17%', w: '17%', delay: 0.5, dur: 1.7 },
                                { left: '32%', w: '19%', delay: 0.2, dur: 2.3 },
                                { left: '49%', w: '15%', delay: 0.8, dur: 1.9 },
                                { left: '62%', w: '18%', delay: 0.1, dur: 2.1 },
                                { left: '77%', w: '14%', delay: 0.6, dur: 1.8 },
                                { left: '88%', w: '11%', delay: 0.3, dur: 2.4 },
                            ].map((f, i) => (
                                <motion.div key={i} className="absolute bottom-0 rounded-t-full"
                                    style={{ left: f.left, width: f.w, background: `linear-gradient(to top, rgba(255,${120 + i * 18},0,0.95), rgba(255,80,0,0.4), transparent)`, transformOrigin: 'bottom center' }}
                                    animate={{ height: ['28%', '52%', '33%', '58%', '30%'], scaleX: [1, 0.82, 1.12, 0.88, 1], x: [0, (i % 2 === 0 ? 6 : -6), 0, (i % 2 === 0 ? -4 : 4), 0] }}
                                    transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            ))}

                            {[
                                { left: '10%', delay: 0, dur: 2.8 },
                                { left: '27%', delay: 0.7, dur: 3.2 },
                                { left: '44%', delay: 0.2, dur: 2.5 },
                                { left: '58%', delay: 1.1, dur: 3.6 },
                                { left: '73%', delay: 0.4, dur: 2.9 },
                                { left: '87%', delay: 0.9, dur: 3.1 },
                            ].map((e, i) => (
                                <motion.div key={i} className="absolute w-2 h-2 rounded-full"
                                    style={{ left: e.left, bottom: '28%', background: 'rgba(255,170,40,0.95)', boxShadow: '0 0 8px rgba(255,140,0,0.9)' }}
                                    animate={{ y: [0, -320], x: [0, (i % 2 === 0 ? 30 : -30)], opacity: [1, 0.9, 0], scale: [1, 0.6, 0] }}
                                    transition={{ duration: e.dur, delay: e.delay, repeat: Infinity, ease: 'easeOut' }}
                                />
                            ))}
                        </div>

                        {/* CTA inside the furnace */}
                        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-8 pb-16 pt-20 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <p className="text-[10px] font-mono text-amber-400/60 uppercase tracking-[0.4em] mb-5">No lock-in. No excuses.</p>
                                <h2 className="font-serif text-5xl md:text-7xl font-medium text-white leading-[1.05] mb-5"
                                    style={{ textShadow: '0 0 60px rgba(245,140,0,0.5), 0 0 120px rgba(245,100,0,0.2)' }}>
                                    Stop patching.<br />
                                    <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 bg-clip-text text-transparent">Start running.</span>
                                </h2>
                                <p className="text-gray-400 text-base max-w-sm mx-auto mb-10 leading-relaxed">One system. Every store. Real-time, always.</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Button size="default" className="px-12 h-12 rounded-full bg-primary hover:bg-amber-400 text-black font-bold shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_70px_rgba(245,158,11,0.7)] transition-all">
                                        Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                    <Button variant="secondary" size="default" className="px-12 h-12 rounded-full border-white/10 hover:border-white/20">
                                        Talk to Sales
                                    </Button>
                                </div>
                                <p className="mt-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">14-day free trial · no credit card</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT IRON WALL — Soft Blend to Center */}
                    <div className="relative flex-shrink-0" style={{ width: '28%' }}>
                        <div className="absolute inset-0"
                            style={{ background: 'linear-gradient(200deg, #1c1c1c 0%, #111 30%, #0a0a0a 70%, #0d0d0d 100%)', zIndex: 1 }}>

                            {/* Inner Fade to black — smooth vertical blend */}
                            <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[#060606] via-[#0a0a0a]/80 to-transparent pointer-events-none" />

                            {[12, 25, 38, 52, 65, 78, 90].map(t => (
                                <div key={t} className="absolute left-0 right-0 h-px"
                                    style={{ top: `${t}%`, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.03), transparent)' }} />
                            ))}
                            {[15, 30, 45, 60, 75, 88].map(t => (
                                <div key={t} className="absolute right-5 w-4 h-4 rounded-full"
                                    style={{ top: `${t}%`, background: 'radial-gradient(circle at 35% 35%, #2a2a2a, #0d0d0d)', boxShadow: 'inset 1px 1px 3px #333, inset -1px -1px 3px #000' }} />
                            ))}
                            {[22, 37, 52, 67, 82].map(t => (
                                <div key={t} className="absolute left-6 w-4 h-4 rounded-full"
                                    style={{ top: `${t}%`, background: 'radial-gradient(circle at 35% 35%, #2a2a2a, #0d0d0d)', boxShadow: 'inset 1px 1px 3px #333, inset -1px -1px 3px #000' }} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom floor */}
                <div className="absolute bottom-0 left-0 right-0 h-6"
                    style={{ background: 'linear-gradient(to bottom, #1a1a1a, #0a0a0a)' }} />
                <div className="absolute -bottom-4 left-[28%] right-[28%] h-12 blur-3xl"
                    style={{ background: 'radial-gradient(ellipse, rgba(245,100,0,0.35), transparent 70%)' }} />


            </section>

        </div>
    );
};

export default Home;
