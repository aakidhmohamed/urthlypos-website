import React from 'react';
import {
    WifiOff,
    Video,
    MessageCircle,
    Search,
    Bell,
    LayoutDashboard,
    ShoppingCart,
    Users,
    PieChart,
    Settings,
    Plus,
    Banknote,
    ShoppingBag,
    AlertCircle
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import FadeIn from './FadeIn';
import Parallax from './Parallax';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn delay={0}>
                        {/* Foreground Element: Speed 1.2x */}
                        <Parallax speed={1.2} maxOffset={20} className="inline-block">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-raised border border-border-premium text-primary text-[11px] font-bold mb-8 tracking-wider uppercase font-mono animate-float hover:scale-105 transition-transform duration-300 ease-premium cursor-default">
                                <WifiOff className="w-3.5 h-3.5" />
                                <span>Zero Downtime Guarantee</span>
                            </div>
                        </Parallax>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <h1 className="text-5xl md:text-7xl font-bold text-text tracking-tight mb-8 leading-[1.05] text-pretty">
                            Stop Losing Sales When <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-green-300">Your Internet Dies</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto leading-relaxed text-balance font-medium">
                            Frustrated with slow cloud POS systems, spinning loading screens, and monthly fees?
                            Switch to the <strong className="text-text">offline-first solution</strong> that guarantees 100% uptime, instant billing, and zero recurring costs.
                        </p>
                    </FadeIn>

                    <FadeIn delay={300}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                            <a href="#contact" className="group w-full sm:w-auto px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-full text-sm font-medium transition-all duration-300 ease-premium flex items-center justify-center gap-2 shadow-glow-primary hover:shadow-premium transform hover:scale-105 active:scale-95 focus-ring whitespace-nowrap">
                                <Video className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                                Book Free Demo
                            </a>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-5 py-2.5 bg-surface-raised hover:bg-zinc-800 text-text border border-border rounded-full text-sm font-medium transition-all duration-300 ease-premium flex items-center justify-center gap-2 hover:border-primary/50 hover:text-primary focus-ring hover:scale-105 active:scale-95 whitespace-nowrap"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Chat on WhatsApp
                            </a>
                        </div>
                        <p className="mt-6 text-xs text-text-dim font-medium animate-pulse">
                            ⚡️ One-Time Payment • Lifetime License • No Monthly Fees
                        </p>
                    </FadeIn>
                </div>

                {/* Dashboard Mockup */}
                <FadeIn delay={500} className="relative mx-auto max-w-6xl mt-16 perspective-[2000px] group">
                    {/* Glow Effect behind dashboard */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/20 blur-[120px] -z-10 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

                    <Parallax speed={1.05} maxOffset={30}>
                        <div className="relative rounded-2xl bg-[#09090b]/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden transform transition-all duration-700 hover:scale-[1.01] hover:border-primary/30 hover:shadow-glow-surface ring-1 ring-white/5">

                            {/* Top Bar */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner"></div>
                                    </div>
                                    <div className="h-4 w-[1px] bg-white/10 mx-2 hidden md:block"></div>
                                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-white/5 text-xs text-text-muted hover:border-white/10 transition-colors w-64">
                                        <Search className="w-3 h-3" />
                                        <span>Search inventory, orders...</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span className="text-[10px] font-mono font-bold text-emerald-500 tracking-wider">OFFLINE_MODE</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors relative">
                                        <Bell className="w-4 h-4 text-text-muted" />
                                        <div className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-primary rounded-full border border-black"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
                                {/* Sidebar */}
                                <div className="hidden md:flex w-20 border-r border-white/5 bg-white/[0.02] flex-col items-center py-8 gap-8">
                                    <div className="p-3 rounded-xl bg-primary text-white shadow-glow hover:scale-110 transition-transform cursor-pointer">
                                        <LayoutDashboard className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col gap-6 w-full px-4">
                                        {[ShoppingCart, Users, PieChart, Settings].map((Icon, i) => (
                                            <div key={i} className="group/icon relative flex justify-center">
                                                <div className="p-3 rounded-xl text-text-muted hover:text-white hover:bg-white/10 transition-all cursor-pointer relative z-10">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                {/* Active/Hover Indicator */}
                                                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover/icon:opacity-100 scale-75 group-hover/icon:scale-100 transition-all duration-300"></div>
                                                {/* Tooltip dot */}
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover/icon:opacity-100 transition-opacity"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-transparent to-black/40">

                                    {/* Header Section */}
                                    <div className="flex flex-wrap justify-between items-end mb-8 gap-4">
                                        <div>
                                            <h2 className="text-2xl font-heading font-bold text-white mb-1">Dashboard</h2>
                                            <p className="text-text-muted text-sm">Overview for <span className="text-white font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span></p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="px-4 py-2 bg-white/5 border border-white/10 text-text rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">Export</button>
                                            <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0">
                                                <Plus className="w-4 h-4" /> New Sale
                                            </button>
                                        </div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                                        {[
                                            { label: 'Total Revenue', value: 'LKR 500,000.00', trend: '+15%', icon: Banknote, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                                            { label: 'Active Orders', value: '24', trend: '+8', icon: ShoppingBag, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                                            { label: 'Low Stock', value: '3 Items', trend: 'Urgent', icon: AlertCircle, color: 'text-amber-400', bg: 'bg-amber-400/10' },
                                        ].map((stat, i) => (
                                            <div key={i} className="group/card p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity transform group-hover/card:scale-125 duration-500">
                                                    <stat.icon className={`w-16 h-16 ${stat.color}`} />
                                                </div>

                                                <div className="flex justify-between items-start mb-4 relative z-10">
                                                    <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} border border-white/5 shadow-sm group-hover/card:scale-110 transition-transform duration-300`}>
                                                        <stat.icon className="w-5 h-5" />
                                                    </div>
                                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full border border-white/5 backdrop-blur-md ${stat.bg} ${stat.color} uppercase tracking-wider`}>{stat.trend}</span>
                                                </div>
                                                <div className="text-3xl font-heading font-bold text-white mb-1 relative z-10 tracking-tight">{stat.value}</div>
                                                <div className="text-xs text-text-muted font-medium relative z-10">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chart Area */}
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-64 mb-8">
                                        <div className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden group/chart flex flex-col h-64 lg:h-auto">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                                            <div className="flex justify-between items-center mb-6 relative z-10">
                                                <h3 className="font-bold text-white flex items-center gap-2">
                                                    Sales Overview
                                                    <span className="px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary border border-primary/20">Real-time</span>
                                                </h3>
                                                <div className="flex gap-2">
                                                    <div className="flex items-center gap-1.5">
                                                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                                        <span className="text-xs text-text-muted">This Week</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Animated Bars */}
                                            <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 px-2 relative z-10">
                                                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                                    <div key={i} className="w-full relative group/bar h-full flex items-end">
                                                        <div
                                                            className="w-full bg-gradient-to-t from-primary/10 to-primary/80 rounded-t-sm hover:from-primary/30 hover:to-primary transition-all duration-500 ease-out cursor-pointer relative"
                                                            style={{ height: `${h}%` }}
                                                        >
                                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50 opacity-0 group-hover/bar:opacity-100"></div>
                                                        </div>
                                                        {/* Tooltip */}
                                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 text-white text-[10px] py-1.5 px-3 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 shadow-xl whitespace-nowrap z-20 pointer-events-none font-mono">
                                                            <span className="text-primary font-bold block mb-0.5">Rs. {h * 1500}</span>
                                                            <span className="text-zinc-500 text-[9px]">Oct {i + 10}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Recent Activity */}
                                        <div className="lg:col-span-1 p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col h-64 lg:h-auto overflow-hidden relative">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="font-bold text-white">Recent Activity</h3>
                                                <button className="text-xs text-primary hover:text-primary-hover transition-colors">View All</button>
                                            </div>
                                            <div className="flex-1 space-y-3 overflow-hidden relative">
                                                {[1, 2, 3, 4].map((_, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5 group/item">
                                                        <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover/item:scale-110 transition-transform">
                                                            <Users className="w-4 h-4" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="text-sm font-bold text-white truncate flex items-center gap-2">
                                                                New Order
                                                                {i === 0 && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>}
                                                            </div>
                                                            <div className="text-xs text-text-muted">Just now</div>
                                                        </div>
                                                        <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/10">+Rs. 32,400</div>
                                                    </div>
                                                ))}
                                                {/* Fade out bottom */}
                                                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0e0e11] to-transparent pointer-events-none"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* System Status Footer */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/5 text-[10px] md:text-xs">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                                                <span className="text-text-muted font-medium">Database: <span className="text-emerald-500">Connected</span></span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
                                                <span className="text-text-muted font-medium">Backup: <span className="text-blue-500">Local (Hourly)</span></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-text-dim font-mono">
                                            <span>v2.4.0 (Stable)</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Parallax>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;