import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Ensure you use framer-motion or motion/react per your setup
import { Database, Layout, Cloud, Cpu, ArrowRight, Github, Linkedin, Mail, Workflow, ExternalLink, Target, Zap } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// --- 1. EXPLICIT IMPORTS (Mandatory for Vercel if files are in src) ---
// Note: If you get a 'Module not found' error, double-check that the file extension 
// is exactly .png (lowercase) in your folder.
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
      className="h-1 w-20 bg-[#00f2ff] mb-4 origin-left"
    />
    <p className="text-slate-400 max-w-2xl">{subtitle}</p>
  </div>
);

const DashboardShowcase = () => {
  // Mapping the imported image variables to the dashboard objects
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
      desc: 'Quick-access strategic metrics with integrated commentary.'
    },
    { 
      title: 'Customer Detailed Summary', 
      src: dash2, 
      tag: 'FMCG Analytics',
      desc: 'High-density report providing deep visibility into retailer performance.'
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
      desc: 'Analyzing promotional investment versus brand share.'
    },
    { 
      title: 'Supply Chain Twin', 
      src: dash4, 
      tag: 'Logistics',
      desc: 'Integrated supply chain monitoring with competitor benchmarking.'
    }
  ];

  const [selected, setSelected] = useState<null | typeof dashboards[0]>(null);

  return (
    <section className="py-24" id="insights">
      <SectionHeader 
        title="Dashboard Architecture" 
        subtitle="Exploring the intersection of UI design and raw analytical power."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboards.map((dash) => (
          <motion.div
            key={dash.title}
            layoutId={`dash-${dash.title}`}
            onClick={() => setSelected(dash)}
            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-white/5"
          >
            <img 
              src={dash.src} 
              alt={dash.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-[10px] font-mono text-[#00f2ff] uppercase tracking-widest">{dash.tag}</span>
              <h4 className="text-lg font-bold text-white">{dash.title}</h4>
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
            className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              layoutId={`dash-${selected.title}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 p-4 rounded-[2rem] border border-white/10 max-w-5xl w-full shadow-2xl overflow-hidden"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-black flex items-center justify-center">
                <img src={selected.src} alt={selected.title} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-4 pb-4">
                <div className="flex-1">
                  <span className="text-xs font-mono text-[#00f2ff] uppercase">{selected.tag}</span>
                  <h3 className="text-3xl font-bold text-white">{selected.title}</h3>
                  <p className="text-slate-400 mt-2">{selected.desc}</p>
                </div>
                <button 
                  className="px-8 py-3 bg-[#00f2ff] text-slate-950 rounded-full font-bold hover:brightness-110 transition-all"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-slate-950/50 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00f2ff] rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-slate-950" />
            </div>
            <span>Keshav<span className="text-[#00f2ff]">Jha</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
             <a href="#insights" className="hover:text-[#00f2ff] transition-colors">Insights</a>
             <a href="mailto:keshavjhabca006@gmail.com" className="hover:text-[#00f2ff] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32">
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
              Turning <span className="text-[#00f2ff]">Data</span> into Decisions.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              Senior Data Architect specializing in Power BI ecosystems and enterprise-level insight delivery.
            </p>
            <a href="#insights" className="inline-flex items-center gap-2 bg-[#00f2ff] text-slate-950 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              View My Work <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

        <DashboardShowcase />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; 2026 Keshav Jha • Senior Data Architect. Built with React & Vercel.
      </footer>
    </div>
  );
}
