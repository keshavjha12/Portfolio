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
  { name: 'Power BI / DAX', level: 98, category: 'Visualization' },
  { name: 'Data Storytelling', level: 95, category: 'Visualization' },
  { name: 'Azure Data Factory', level: 90, category: 'Engineering' },
  { name: 'Databricks / Spark', level: 85, category: 'Engineering' },
  { name: 'Microsoft Fabric', level: 88, category: 'Cloud' },
  { name: 'Azure Cloud', level: 92, category: 'Cloud' },
  { name: 'LLM Prompting (Claude/Gemini)', level: 94, category: 'AI' },
  { name: 'Agentic Workflows / MCP', level: 80, category: 'AI' },
];

export const PROJECTS: Project[] = [
  {
    id: 'retail-bi',
    title: 'Enterprise Multi-Region Retail Engine',
    problem: 'Siloed data across 12 regions leading to 15% inventory wastage.',
    challenge: 'Latency in data sync from on-prem legacy systems to cloud.',
    approach: 'Built a Medallion architecture in Databricks with ADF orchestration.',
    tools: ['Power BI', 'Azure Databricks', 'ADF', 'SQL Server'],
    impact: '$2.4M saved annually through predictive stock replenishment.',
    architectureUrl: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070',
  },
  {
    id: 'supply-chain-ai',
    title: 'AI-Driven Supply Chain Intelligence',
    problem: 'Manual forecasting was off by 30%, causing frequent stockouts.',
    challenge: 'Integrating unstructured vendor reports into a structured pipeline.',
    approach: 'Leveraged Claude AI for data extraction and Python for trend analysis.',
    tools: ['Python', 'Azure OpenAI', 'Power BI', 'Databricks'],
    impact: 'Forecast accuracy improved to 94%; 20% reduction in lead times.',
    architectureUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Global FinTech Corp',
    role: 'Senior Data Architect',
    period: '2021 - Present',
    highlights: [
      'Led the transition from legacy Hadoop to Microsoft Fabric for 500+ users.',
      'Reduced report development time by 60% through custom DAX pattern libraries.',
      'Architected end-to-end data governance framework for PII compliance.',
    ],
  },
  {
    company: 'Innovate Solutions Ltd',
    role: 'Data Analyst / Power BI Lead',
    period: '2018 - 2021',
    highlights: [
      'Deployed 100+ dashboards for C-suite executives across 5 sectors.',
      'Automated monthly financial reporting using Power Automate and SQL.',
      'Upskilled a team of 15 junior analysts in modern BI best practices.',
    ],
  },
];
