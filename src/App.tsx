import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Layout, Cloud, Cpu, ArrowRight, Github, Linkedin, Mail, Layers, PieChart, BarChart3, Workflow, ExternalLink, MoveUpRight, Zap, Target } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from 'recharts';
import { cn } from './lib/utils';
import { SKILLS, PROJECTS, EXPERIENCES } from './constants';

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
      scrolled ? "glass border-b" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-surface-dark" />
          </div>
          <span>Keshav<span className="text-brand-cyan">Jha</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Works', 'Experience', 'Insights', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-cyan transition-colors">
              {item}
            </a>
          ))}
          <button className="btn-primary py-2 text-sm">Resume</button>
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
          className="glass p-6 rounded-2xl group hover:border-brand-cyan/50 transition-all"
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

const LiveSimulation = () => {
  const data = Array.from({ length: 20 }, (_, i) => ({
    name: i,
    value: Math.floor(Math.random() * 50) + 50,
    cost: Math.floor(Math.random() * 30) + 20,
  }));

  return (
    <div className="glass p-6 rounded-3xl mb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Database size={100} />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Workflow className="w-5 h-5 text-brand-cyan" />
            Live Insights Simulation
          </h3>
          <p className="text-sm text-slate-400">Mocking real-time analytical pipeline latency & throughput</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs font-mono text-slate-300">SYSTEM: ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-mono text-slate-300">LATENCY: 12ms</span>
          </div>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-brand-cyan)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-brand-cyan)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            <XAxis dataKey="name" hide />
            <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '8px' }}
              itemStyle={{ color: '#00f2ff' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#00f2ff" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorVal)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const categories = ['Visualization', 'Engineering', 'Cloud', 'AI'] as const;
  
  return (
    <section className="py-24" id="skills">
      <SectionHeader 
        title="Technical Ecosystem" 
        subtitle="A full-stack data toolkit designed for enterprise scale and business adaptability."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            <h4 className="text-sm font-mono tracking-widest text-brand-cyan uppercase">{cat}</h4>
            <div className="space-y-6">
              {SKILLS.filter(s => s.category === cat).map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-linear-to-r from-brand-cyan to-brand-blue"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const DashboardShowcase = () => {
  const dashboards = [
    { title: 'Executive Fin-Ops', src: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070', tag: 'Finance' },
    { title: 'Supply Chain Twin', src: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070', tag: 'Logistics' },
    { title: 'User Behavior AI', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015', tag: 'SaaS' },
    { title: 'Global Sales Map', src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070', tag: 'Retail' },
  ];

  const [selected, setSelected] = useState<null | typeof dashboards[0]>(null);

  return (
    <section className="py-24" id="insights">
      <SectionHeader 
        title="Dashboard Architecture" 
        subtitle="Exploring the intersection of UI design and raw analytical power."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboards.map((dash, i) => (
          <motion.div
            key={dash.title}
            layoutId={`dash-${dash.title}`}
            onClick={() => setSelected(dash)}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer glass border-white/5"
          >
            <img src={dash.src} alt={dash.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-surface-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest">{dash.tag}</span>
              <h4 className="text-lg font-bold">{dash.title}</h4>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-cyan text-surface-dark p-2 rounded-lg">
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
            className="fixed inset-0 z-[60] glass flex items-center justify-center p-6"
          >
            <motion.div 
              layoutId={`dash-${selected.title}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface-lighter p-4 rounded-[2rem] border border-white/10 max-w-5xl w-full"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <img src={selected.src} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-mono text-brand-cyan uppercase">{selected.tag}</span>
                  <h3 className="text-3xl font-bold">{selected.title}</h3>
                  <p className="text-slate-400 mt-2">Full-stack Power BI solution featuring real-time DirectQuery and advanced RLS.</p>
                </div>
                <button className="btn-primary" onClick={() => setSelected(null)}>Close View</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-24" id="works">
      <SectionHeader 
        title="Impact Case Studies" 
        subtitle="Strategic data products that solved complex multi-million dollar business hurdles."
      />
      <div className="space-y-24">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={cn(
              "flex flex-col lg:flex-row gap-12 items-center",
              i % 2 !== 0 && "lg:flex-row-reverse"
            )}
          >
            <div className="lg:w-1/2 group relative">
              <div className="absolute -inset-4 bg-brand-cyan/20 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-video">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-surface-dark/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-xs font-mono text-brand-cyan mb-4 block tracking-tighter">CASE STUDY 0{i+1}</span>
              <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
              
              <div className="space-y-6 mb-8 text-slate-300">
                <div className="flex gap-4">
                  <div className="mt-1"><Target className="w-5 h-5 text-brand-cyan" /></div>
                  <div>
                    <span className="font-bold text-white">The Problem: </span>
                    {project.problem}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Workflow className="w-5 h-5 text-brand-cyan" /></div>
                  <div>
                    <span className="font-bold text-white">Solution Architecture: </span>
                    {project.approach}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Zap className="w-5 h-5 text-yellow-400" /></div>
                  <div>
                    <span className="font-bold text-white">Business Impact: </span>
                    <span className="text-brand-cyan font-semibold">{project.impact}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map(tool => (
                  <span key={tool} className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full uppercase">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="btn-primary group flex items-center gap-2">
                  View Full Architecture <MoveUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExperienceTimeline = () => {
  return (
    <section className="py-24" id="experience">
      <SectionHeader 
        title="Professional Journey" 
        subtitle="Bridging the gap between raw datasets and executive decision-making."
      />
      <div className="space-y-12">
        {EXPERIENCES.map((exp, i) => (
          <motion.div 
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row gap-8 pb-12 border-b border-white/5 last:border-0"
          >
            <div className="md:w-1/3">
              <div className="text-xl font-bold">{exp.role}</div>
              <div className="text-brand-cyan font-medium">{exp.company}</div>
              <div className="text-sm font-mono text-slate-500 mt-2">{exp.period}</div>
            </div>
            <div className="md:w-2/3">
              <ul className="space-y-4">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-slate-400">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-24" id="contact">
      <div className="glass p-12 rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/20 blur-[120px] rounded-full pointer-events-none" />
        
        <SectionHeader 
          title="Start a Conversation" 
          subtitle="Looking for an architect to drive your next data transformation? Let's connect."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <a href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:border-brand-cyan transition-colors">
              <Mail className="w-8 h-8 text-brand-cyan" />
            </div>
            <span className="font-medium">contact@data-arch.com</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:border-brand-cyan transition-colors text-slate-300">
              <Linkedin className="w-8 h-8 group-hover:text-brand-cyan transition-colors" />
            </div>
            <span className="font-medium">LinkedIn Profile</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-4 group">
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:border-brand-cyan transition-colors text-slate-300">
              <Github className="w-8 h-8 group-hover:text-brand-cyan transition-colors" />
            </div>
            <span className="font-medium">GitHub Repository</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen glow-mesh">
      <Navbar />
      
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
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
                  Turning <span className="text-gradient">Data</span> into <br /> Business Decisions.
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                  I architect scalable analytical ecosystems that transform fragmented numbers into 
                  strategic clarity. 6+ years of expertise in Power BI storytelling, 
                  Cloud Engineering, and AI-driven automation.
                </p>

                <div className="flex flex-wrap gap-6">
                  <button className="btn-primary flex items-center gap-2 group">
                    Explore My Architecture <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="btn-outline">Download Methodology</button>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/3">
              {/* Abstract Visual Representing Data Nodes */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-square w-full max-w-[400px]"
              >
                <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative glass h-full w-full rounded-[3rem] flex items-center justify-center p-8 border-brand-cyan/20 overflow-hidden">
                   <div className="grid grid-cols-2 gap-4 w-full h-full opacity-40">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="border border-brand-cyan/20 rounded-2xl flex flex-col items-center justify-center gap-2">
                           <Database className="w-8 h-8 text-brand-cyan" />
                           <div className="w-12 h-1 bg-brand-cyan/20 rounded-full overflow-hidden">
                              <div className="h-full bg-brand-cyan animate-[shimmer_2s_infinite]" style={{ width: '60%' }} />
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-8 h-8 bg-brand-cyan rounded-full animate-ping opacity-20" />
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5">
             <KPISection />
          </div>
        </div>
      </section>

      {/* ABOUT & LIVE SIM */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <SectionHeader 
              title="Decisions, Not Just Data" 
              subtitle="Data is meaningless unless it moves the needle."
            />
            <div className="space-y-6 text-slate-400 text-lg">
              <p>
                My approach starts with the <span className="text-white font-bold">Business Goal</span>, 
                not the technology. Throughout my 6-year career, I've realized that the best technical 
                architecture is one that stakeholders can trust and act upon.
              </p>
              <p>
                Specializing in the Microsoft Stack (Power BI, Fabric, Azure), I build bridges 
                between complex engineering pipelines and the executive office. By integrating 
                LLMs (Claude/Gemini) into analytical workflows, I am currently pioneering 
                autonomous insight generation for enterprise environments.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                  <Layout size={16} className="text-brand-cyan" /> Power BI Mastery
                </div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                  <Cloud size={16} className="text-brand-blue" /> Cloud Native
                </div>
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                  <Cpu size={16} className="text-purple-400" /> AI-Driven
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <LiveSimulation />
          </div>
        </div>
        
        <SkillsSection />
        <DashboardShowcase />
        <ProjectsSection />
        <ExperienceTimeline />
        <ContactForm />
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="mb-4 flex justify-center gap-2 items-center">
           <div className="w-6 h-6 bg-brand-cyan/20 rounded flex items-center justify-center">
              <Database size={12} className="text-brand-cyan" />
           </div>
           <span className="font-bold text-white">Keshav Jha Portfolio</span>
        </div>
        &copy; 2026 Senior Power BI Developer & Data Architect. Empowering Fortune 20+ clients.
      </footer>
    </div>
  );
}
