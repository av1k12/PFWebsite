export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIALS = {
  github: "https://github.com/avlk12",
  linkedin: "https://www.linkedin.com/in/avaneeshkonda",
  email: "avaneesh.konda@gmail.com",
} as const;

export type ExperienceRole = {
  id: string;
  role: string;
  company: string;
  dates: string;
  current: boolean;
  bullets: string[];
};

export const EXPERIENCE: ExperienceRole[] = [
  {
    id: "cincinnati",
    role: "Software Engineer Intern (AI & Automation)",
    company: "Cincinnati Insurance Companies",
    dates: "May 2026 – Present",
    current: true,
    bullets: [
      "Engineered an automated NLP ingestion pipeline to extract key policy metrics from unstructured inspection documents, inserting validated records into PostgreSQL and cutting underwriter processing time by 5+ hours weekly.",
      "Redesigned motor vehicle record data pipelines by replacing synchronous Selenium web scraping with an asynchronous event-driven REST architecture, reducing compute consumption by 60% and eliminating idle server runtime.",
      "Spearheaded enterprise automation initiatives across Commercial Lines, building internal tooling that eliminated operational bottlenecks and saved 50+ business hours monthly.",
    ],
  },
  {
    id: "datamine",
    role: "Software Engineer — Data & Systems Architecture",
    company: "The Data Mine × Feenix Group",
    dates: "Aug 2026 – Present",
    current: true,
    bullets: [
      "Architected the core data layer for a containerized game server hosting platform, designing relational schemas in PostgreSQL for multi-tenant accounts, server records, and resource allocation registries.",
      "Implemented an asynchronous queue and caching architecture using Redis to orchestrate server provisioning requests, tracking dynamic queue positions and ephemeral node-health metrics.",
      "Developed automated server provisioning workflows using Docker and Linux system daemons to enforce strict per-container CPU, RAM, and disk isolation across distributed hosting nodes.",
      "Designed real-time event streaming interfaces over WebSockets to transmit live console outputs, server metrics, and error logs directly to client dashboards.",
    ],
  },
  {
    id: "datta",
    role: "Undergraduate Research Assistant (AI & Systems)",
    company: "Prof. Supriyo Datta's Lab",
    dates: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Built a recursive GraphRAG retrieval pipeline leveraging LangChain and ChromaDB to parse, embed, and map latent research topologies across 200+ neural quantum state (NQS) academic publications.",
      "Engineered automated data ingestion pipelines using Python and Marker to extract, normalize, and serialize complex mathematical literature into vector stores for low-latency similarity queries.",
      "Benchmarked matrix transformation workflows interfacing high-level Python models with low-level simulation hardware targeting probabilistic computing solvers (p-bits).",
    ],
  },
  {
    id: "fifth-third",
    role: "Software Engineer Intern",
    company: "Fifth Third Bank",
    dates: "June 2025 – Aug 2025",
    current: false,
    bullets: [
      "Developed an LLM-driven developer workflow automation tool adopted across 200+ enterprise Agile teams, saving 500+ engineering and administrative hours monthly.",
      "Automated SQL query refactoring pipelines during a multi-database enterprise migration, ensuring 100% schema alignment across legacy transactional databases without data loss.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  stack: string[];
  description: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    id: "gnn-options",
    title: "Graph Neural Network European Options Pricing Engine",
    stack: ["Python", "PyTorch Geometric", "Pandas", "CUDA"],
    description:
      "Modeled European Index option chains (SPX) as dynamic spatial graphs to capture cross-strike volatility and asset maturity correlations. Built a GPU-accelerated tensor pipeline to evaluate non-linear volatility surfaces, outperforming baseline analytical pricing methods on out-of-the-money strikes.",
    href: "https://github.com/avlk12",
  },
  {
    id: "campus-delivery",
    title: "Real-Time Campus Delivery Platform",
    stack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Redis",
    ],
    description:
      "Mobile delivery application with live driver tracking, transactional state machines, and connection pooling. Utilized PostgreSQL Row-Level Security (RLS) for multi-tenant isolation and Redis geospatial radius caching to reduce database read pressure.",
    href: "https://github.com/avlk12",
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
  span: "wide" | "normal";
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    items: ["Python", "C", "Java", "TypeScript", "JavaScript", "SQL", "Bash"],
    span: "wide",
  },
  {
    id: "systems",
    title: "Distributed Systems & DBs",
    items: [
      "PostgreSQL",
      "Redis",
      "ChromaDB",
      "SQLite",
      "Docker",
      "Linux (POSIX)",
    ],
    span: "normal",
  },
  {
    id: "frameworks",
    title: "Frameworks & AI",
    items: [
      "PyTorch",
      "PyTorch Geometric",
      "LangChain",
      "React",
      "React Native",
      "Node.js",
      "FastAPI",
    ],
    span: "wide",
  },
  {
    id: "tools",
    title: "Tools & Protocols",
    items: ["Git", "WebSockets", "REST APIs", "CI/CD", "Docker Compose"],
    span: "normal",
  },
  {
    id: "coursework",
    title: "Purdue Coursework",
    items: [
      "Computer Architecture",
      "Systems Programming in C",
      "Linear Algebra",
      "Discrete Mathematics",
    ],
    span: "wide",
  },
];

export type Interest = {
  id: string;
  title: string;
  details: string;
  tags: string[];
  icon: "wrench" | "trophy" | "target" | "cpu";
  span: "wide" | "normal";
};

export const INTERESTS: Interest[] = [
  {
    id: "automotive",
    title: "Automotive & Track",
    details:
      "I love going to car meets, talking to people, and looking at their cars. I also work on and drive my E90 BMW 328i whenever I can.",
    tags: ["Car meets", "E90", "Driving"],
    icon: "wrench",
    span: "wide",
  },
  {
    id: "tennis",
    title: "Tennis & Pickleball",
    details:
      "I play club tennis and club pickleball at Purdue, and I played varsity tennis in high school. I also play pickleball a lot, and I used to ball boy at the Cincinnati Open.",
    tags: ["Club tennis", "Pickleball", "Cincy Open"],
    icon: "trophy",
    span: "normal",
  },
  {
    id: "golf",
    title: "Golf",
    details:
      "I like hitting the range and getting out for weekend rounds when I have time.",
    tags: ["Range", "Weekend rounds"],
    icon: "target",
    span: "normal",
  },
  {
    id: "hardware",
    title: "Hardware & Custom Setups",
    details:
      "I like building custom PCs, messing with electronics, and tinkering with random hardware like POS terminals.",
    tags: ["PCs", "Electronics", "POS"],
    icon: "cpu",
    span: "wide",
  },
];
