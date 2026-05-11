import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Layout, Cloud, Cpu, ArrowRight, Github, Linkedin, Mail, Workflow, ExternalLink, MoveUpRight, Zap, Target } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { cn } from './lib/utils';
import { SKILLS, PROJECTS, EXPERIENCES } from './constants';

// --- 1. IMAGE IMPORTS (CRITICAL FIX) ---
// This tells Vite to bundle these files and gives you a working URL
import dash0 from './input_file_0.png';
import dash1 from './input_file_1.png';
import dash2 from './input_file_2.png';
import dash3 from './input_file_3.png';
import dash4 from './input_file_4.png';
import dash5 from './input_file_5.png';
import dash6 from './input_file_6.png';

// --- UTILS ---
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold mb-4"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      className="h-1 w-20 bg-brand-cyan mb-4 origin-left"
    />
    <p className="text-slate-400 max-w-2xl">{subtitle}</p>
  </div>
);

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-slate-950" />
          </div>
          <span>Keshav<span className="text-brand-cyan">Jha</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Works', 'Experience', 'Insights', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-cyan transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-brand-cyan text-slate-950 px-5 py-2 rounded-full font-bold text-sm hover:brightness-110 transition-all">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

const KPISection = () => {
  const kpis = [
    { label: 'Dashboards Architected', value: '100+', sub: 'End-to-end delivery', icon: Layout },
    { label: 'Business Impact', value: '$12M+', sub: 'Annual cost savings', icon: Target },
    { label: 'Cloud Infrastructure', value: '5PB+', sub: 'Data volume managed', icon: Cloud },
    { label: 'Decision Efficiency', value: '45%', sub: 'Faster time-to-insight', icon: Zap },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/5 border border-white/10 p-6 rounded-2xl group hover:border-brand-cyan/50 transition-all"
        >
          <div className="w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4 text-brand-cyan group-hover:scale-110 transition-transform">
            <kpi.icon className="w-5 h-5" />
          </div>
          <div className="text-3xl font-bold mb-1">{kpi.value}</div>
          <div className="text-sm font-medium text-slate-200 mb-1">{kpi.label}</div>
          <div className="text-xs text-slate-500">{kpi.sub}</div>
        </motion.div>
      ))}
    </div>
  );
};

const DashboardShowcase = () => {
  const dashboards = [
    { 
      title: 'Sales Performance Overview', 
      src: dash0, 
      tag: 'Retail & Sales',
      desc: 'Enterprise-grade sales performance dashboard featuring period-over-period growth analysis.'
    },
    { 
      title: 'Insights at a Glance', 
      src: dash1, 
      tag: 'Executive BI',
      desc: 'Quick-access strategic metrics with integrated commentary for high-impact decision support.'
    },
    { 
      title: 'Customer Detailed Summary', 
      src: dash2, 
      tag: 'FMCG Analytics',
      desc: 'High-density report providing deep visibility into retailer and distributor performance.'
    },
    { 
      title: 'Sales Hierarchy Analysis', 
      src: dash3, 
      tag: 'Data Modeling',
      desc: 'Visualizing complex sales structures with interactive decomposition trees.'
    },
    { 
      title: 'Promo & Offer ROI', 
      src: dash6, 
      tag: 'F&B Strategy',
      desc: 'Analyzing promotional investment versus brand share for major clients.'
    },
    { 
      title: 'Supply Chain Twin', 
      src: dash4, // Using available file
      tag: 'Logistics',
      desc: 'Integrated supply chain monitoring with competitor benchmarking and loyalty tracking.'
    }
  ];

  const [selected, setSelected] = useState<null | typeof dashboards[0]>(null);

  return (
    <section className="py-24" id="insights">
      <SectionHeader 
        title="Dashboard Architecture" 
        subtitle="Exploring the intersection of UI design and raw analytical power. Real-world solutions delivered to global clients."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map((dash) => (
          <motion.div
            key={dash.title}
            layoutId={`dash-${dash.title}`}
            onClick={() => setSelected(dash)}
            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/5 shadow-xl"
          >
            <img src={dash.src} alt={dash.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest">{dash.tag}</span>
              <h4 className="text-lg font-bold">{dash.title}</h4>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-cyan text-slate-950 p-2 rounded-lg">
              <ExternalLink size={16} />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              layoutId={`dash-${selected.title}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 p-4 rounded-[2rem] border border-white/10 max-w-5xl w-full overflow-hidden shadow-2xl"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-slate-950 flex items-center justify-center">
                <img src={selected.src} alt={selected.title} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-4 pb-4">
                <div className="flex-1">
                  <span className="text-xs font-mono text-brand-cyan uppercase">{selected.tag}</span>
                  <h3 className="text-3xl font-bold">{selected.title}</h3>
                  <p className="text-slate-400 mt-2 text-lg">{selected.desc}</p>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors" onClick={() => setSelected(null)}>Close</button>
                  <button className="px-6 py-2 bg-brand-cyan text-slate-950 rounded-full font-bold hover:brightness-110 transition-all">View Case Study</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ... Other Sections (ProjectsSection, ExperienceTimeline, etc.) would follow here ...

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-brand-cyan/30">
      <Navbar />
      
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-brand-cyan" />
                  <span className="text-sm font-mono tracking-widest text-brand-cyan uppercase">Senior Data & Business Architect</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
                  Turning <span className="text-brand-cyan">Data</span> into <br /> Business Decisions.
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                  I architect scalable analytical ecosystems that transform fragmented numbers into 
                  strategic clarity. 6+ years of expertise in Power BI storytelling and AI-driven automation.
                </p>

                <div className="flex flex-wrap gap-6">
                  <button className="bg-brand-cyan text-slate-950 px-8 py-4 rounded-full font-bold flex items-center gap-2 group hover:scale-105 transition-all">
                    Explore My Architecture <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative aspect-square w-full max-w-[400px] bg-white/5 rounded-[3rem] border border-brand-cyan/20 flex items-center justify-center p-8 overflow-hidden">
                <Database size={80} className="text-brand-cyan animate-pulse" />
                <div className="absolute inset-0 bg-brand-cyan/5 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5">
             <KPISection />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <DashboardShowcase />
        {/* Call other sections here as needed */}
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; 2026 Keshav Jha Portfolio • Senior Power BI Developer & Data Architect.
      </footer>
    </div>
  );
}
