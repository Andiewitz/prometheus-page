import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Flame, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Layout = () => {
    return (
        <div className="min-h-screen font-sans text-gray-100 selection:bg-[#f59e0b] selection:text-black">
            {/* Navbar */}
            <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#08090a]/80 backdrop-blur-md">
                <div className="container mx-auto flex h-20 items-center justify-between px-6">
                    <div className="flex items-center gap-10">
                        <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-tight text-white group">
                            <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all bg-gradient-to-br from-white to-orange-100">
                                <Flame size={20} className="text-black fill-black" />
                            </div>
                            Hefestus
                        </Link>

                        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
                            <div className="relative group/nav">
                                <button className="flex items-center gap-1 hover:text-white transition-colors">Products <ChevronDown size={14} /></button>
                            </div>
                            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
                            <Link to="/developers" className="hover:text-white transition-colors">Developers</Link>
                            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                            <Link to="/company" className="hover:text-white transition-colors">Company</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/login" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Log in</Link>
                        <Button size="sm" className="hidden sm:inline-flex h-10 px-6">Start Free Trial</Button>
                    </div>
                </div>
            </header>

            <main className="relative">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-[#050607] py-20">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
                    <div>
                        <div className="flex items-center gap-2 font-bold text-white mb-6">
                            <Flame size={16} className="text-primary" /> Hefestus
                        </div>
                        <p className="text-gray-500 leading-relaxed">
                            The Business Operating System for the modern world.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">System</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link to="/products" className="hover:text-primary transition-colors">Suite Overview</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Plans</Link></li>
                            <li><Link to="/pos" className="hover:text-primary transition-colors">Checkout</Link></li>
                            <li><Link to="/inventory" className="hover:text-primary transition-colors">Inventory</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Support</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Guides</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link to="/legal" className="hover:text-primary transition-colors">Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
