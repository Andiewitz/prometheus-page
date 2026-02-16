import React from 'react';
import { ArrowRight, Store, Package, Users, CreditCard, BarChart3, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import DashboardPreview from '../components/dashboard/DashboardPreview';

const Home = () => {
    return (
        <>
            {/* Background Atmosphere - Enhanced Subtle Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] left-[-15%] w-[1200px] h-[1200px] bg-amber-600/[0.03] rounded-full blur-[180px] mix-blend-screen"></div>
                <div className="absolute top-[-5%] right-[-10%] w-[1000px] h-[1000px] bg-red-900/[0.02] rounded-full blur-[200px] mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[1500px] h-[1000px] bg-orange-900/[0.02] rounded-full blur-[220px]"></div>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 drop-shadow-2xl leading-[1.1]">
                        The Operating System <br />
                        for Modern Business.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        From advanced Point of Sale to global inventory management. <br className="hidden md:block" />
                        Prometheus gives you the tools to <span className="text-white underline decoration-primary underline-offset-4 decoration-2">scale infinitely</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
                        <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                            Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[160px]">
                            View Pricing
                        </Button>
                    </div>
                </motion.div>

                {/* Interactive Demo Wrapper */}
                <div className="text-center mb-6">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-gray-400">
                        Interactive Demo • Try the dashboard below
                    </span>
                </div>
                <DashboardPreview />
            </section>

            {/* Product Suite Section (Original) */}
            <section className="container mx-auto px-6 py-32 border-t border-white/5 mt-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium text-white mb-4">A complete suite of tools.</h2>
                    <p className="text-gray-400">Everything you need to run your business, all in one place.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Store, title: "Prometheus POS", desc: "Lightning fast point of sale for retail and hospitality." },
                        { icon: Package, title: "Global Inventory", desc: "Real-time stock tracking across multiple locations." },
                        { icon: Users, title: "CRM & Loyalty", desc: "Turn visitors into regulars with automated marketing." },
                        { icon: CreditCard, title: "Payments", desc: "Accept payments anywhere with 0.5% transaction fees." },
                        { icon: BarChart3, title: "Intelligence", desc: "AI-powered insights to predict trends before they happen." },
                        { icon: Settings, title: "API First", desc: "Connect with anything. Built for developers by developers." },
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-left">
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="text-primary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
