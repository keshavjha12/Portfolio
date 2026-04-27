export interface Skill {
  name: string;
  level: number;
  category: 'Visualization' | 'Engineering' | 'Cloud' | 'AI';
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  challenge: string;
  approach: string;
  tools: string[];
  impact: string;
  architectureUrl: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const SKILLS: Skill[] = [
  // Visualization
  { name: 'Power BI / DAX', level: 98, category: 'Visualization' },
  { name: 'Power Query / M', level: 95, category: 'Visualization' },
  { name: 'Storytelling & RLS', level: 96, category: 'Visualization' },
  { name: 'Template Apps', level: 90, category: 'Visualization' },
  
  // Engineering
  { name: 'SQL / BigQuery', level: 92, category: 'Engineering' },
  { name: 'Python (Pandas/NumPy)', level: 88, category: 'Engineering' },
  { name: 'ADF & Databricks', level: 85, category: 'Engineering' },
  { name: 'ETL Pipelines', level: 94, category: 'Engineering' },
  
  // Cloud
  { name: 'MS Fabric', level: 85, category: 'Cloud' },
  { name: 'Power BI Service', level: 95, category: 'Cloud' },
  { name: 'Azure Environment', level: 82, category: 'Cloud' },
  { name: 'CI/CD Pipelines', level: 80, category: 'Cloud' },
  
  // AI
  { name: 'MCP Server / Protocols', level: 92, category: 'AI' },
  { name: 'Gemini / Claude AI', level: 95, category: 'AI' },
  { name: 'Prompt Engineering', level: 94, category: 'AI' },
  { name: 'N8N / Zapier', level: 88, category: 'AI' },
];

export const PROJECTS: Project[] = [
  {
    id: 'epos-retail',
    title: 'EPOS Sales Performance Engine',
    problem: 'Fragmentation of promo data across SKUs and regions preventing ROI analysis.',
    challenge: 'Integrating competitor promo tracking with internal legacy sales data.',
    approach: 'Architected a hub-and-spoke model integrating BigQuery ETL flows and DAX logic.',
    tools: ['Power BI', 'BigQuery', 'MCP', 'DAX'],
    impact: 'Enabled $2M+ in optimized promotional spending decisions for major F&B clients.',
    architectureUrl: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070',
  },
  {
    id: 'voice-of-customer',
    title: 'Unified VoC Dashboard',
    problem: 'NPS, CSAT, and survey data siloes causing delayed brand health response.',
    challenge: 'High latency in processing unstructured survey feedback into structured metrics.',
    approach: 'Designed a unified intake pipeline reducing feedback response time by 40%.',
    tools: ['Python', 'SQL', 'Power BI'],
    impact: 'Real-time visibility into brand health across all digital touchpoints.',
    architectureUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Bodmas Technology (ClicFlyer Analytics)',
    role: 'Power BI Developer / Data Analyst II',
    period: '2024 - Present',
    highlights: [
      'Lead BI consultant for 18+ Fortune clients including Unilever, Kellogg\'s, and Marico.',
      'Architected 50+ production dashboards with 300+ DAX measures, reducing turnaround by 60%.',
      'Leveraged Model Context Protocol (MCP) to optimize data model design and DAX consistency.',
      'Engineered BigQuery ETL pipelines saving 15+ hours of manual data preparation weekly.',
    ],
  },
  {
    company: 'Novus Insights',
    role: 'Data Analyst',
    period: '2023 - 2024',
    highlights: [
      'Orchestrated end-to-end data pipelines using Python & SQL for executive-level visualization.',
      'Synthesized complex datasets into strategic findings driving $2M+ in decisions.',
      'Applied multivariate statistical analysis (Regression/Clustering) to unlock consumer insights.',
    ],
  },
  {
    company: 'Tech Blue Software',
    role: 'Data Analyst',
    period: '2021 - 2022',
    highlights: [
      'Deployed interactive dashboards in Apache Superset and Kibana for real-time monitoring.',
      'Automated repetitive data workflows using Python scripts and Excel Macros.',
      'Conducted trend analysis to translate raw data into actionable business recommendations.',
    ],
  },
  {
    company: 'BKTC-McKinsey & Company',
    role: 'Data Analyst (Contract)',
    period: '2020 - 2021',
    highlights: [
      'Supported senior consultants in preparing data-backed proposals for global client engagements.',
      'Synthesised market intelligence and operational data into structured McKinsey-grade reports.',
      'Applied problem-solving frameworks to tailor analytical solutions to complex client challenges.',
    ],
  },
];
