export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIALS = {
  github: "https://github.com/av1k12",
  linkedin: "https://www.linkedin.com/in/avaneeshkonda",
  email: "avaneesh.konda@gmail.com",
} as const;

export type ExperienceRole = {
  id: string;
  role: string;
  company: string;
  location?: string;
  dates: string;
  dateNote?: string;
  current: boolean;
  bullets: string[];
};

export const EXPERIENCE: ExperienceRole[] = [
  {
    id: "cincinnati",
    role: "Software Engineer Intern (AI & Automation)",
    company: "Cincinnati Insurance Companies",
    dates: "May 2026 – Present",
    dateNote: "(Full-Time Summer, Part-Time Fall)",
    current: true,
    bullets: [
      "Engineered an automated NLP ingestion pipeline to extract key risk metrics from unstructured inspection reports, inserting validated records into PostgreSQL, cutting underwriting turnaround cycles by 70%, and saving 5+ hours weekly per underwriter.",
      "Migrated legacy record ingestion from synchronous Selenium browser automation to an asynchronous, event-driven REST architecture, reducing server compute consumption by 60% and eliminating polling latency.",
      "Spearheaded enterprise automation initiatives across Commercial Lines, building internal verification microservices to automate cross-system validation checks, eliminating operational bottlenecks and saving 50+ business hours monthly.",
    ],
  },
  {
    id: "datta",
    role: "Undergraduate Research Assistant (AI & Systems)",
    company: "Prof. Supriyo Datta's Lab",
    dates: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Architected a custom recursive GraphRAG platform in Python with LangChain and ChromaDB, constructing conceptual knowledge graphs across 200+ Neural Quantum State (NQS) publications.",
      "Designed an automated multi-depth graph traversal algorithm that recursively evaluates concept dependencies to surface unmapped research intersections, driving active theoretical explorations across the lab.",
      "Scaled the retrieval engine into a shared internal research service adopted lab-wide by 15+ doctoral and postdoctoral researchers, reducing initial literature review and gap discovery cycles by over 70%.",
      "Engineered an automated data ingestion and serialization pipeline using Python and Marker to extract, normalize, and vectorize dense mathematical LaTeX notations and benchmark tables into high-dimensional vector embedding spaces.",
    ],
  },
  {
    id: "datamine",
    role: "Software Engineer — Systems & Data Architecture",
    company: "The Data Mine × Feenix Group",
    dates: "Aug 2026 – Present",
    current: true,
    bullets: [
      "Architected the relational data plane in PostgreSQL for a containerized game server hosting platform, designing schemas for multi-tenant accounts, container registries, and node quotas.",
      "Implemented an asynchronous job queue and cache-aside layer using Redis to orchestrate server provisioning requests, tracking dynamic queue positions and node-health telemetry.",
      "Developed automated server provisioning workflows using Docker and Linux system daemons, enforcing kernel-level cgroups isolation for CPU, memory, and disk across distributed hosting nodes.",
      "Designed real-time event streaming interfaces over WebSockets, piping live console logs, diagnostics, and server metrics directly to client dashboards.",
    ],
  },
  {
    id: "fifth-third",
    role: "Software Engineer Intern",
    company: "Fifth Third Bank",
    location: "Cincinnati, OH",
    dates: "June 2025 – Aug 2025",
    current: false,
    bullets: [
      "Engineered an LLM-powered developer productivity platform in Python, integrating enterprise Copilot endpoints to automate Agile story decomposition, deployed company-wide across 200+ engineering teams.",
      "Designed structured prompt templates and response-validation schemas, standardizing technical acceptance criteria and saving 500+ engineering and administrative hours monthly.",
      "Automated SQL query refactoring pipelines during a bank-wide database migration, refactoring legacy transactional queries to ensure 100% schema alignment with zero data loss.",
      "Built automated validation and syntax-checking scripts to verify query execution plans across target staging databases prior to production deployment.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  stack: string[];
  description: string;
};

export const PROJECTS: Project[] = [
  {
    id: "gnn-options",
    title: "Graph Neural Network European Options Pricing Engine",
    stack: ["Python", "PyTorch Geometric", "Pandas", "CUDA"],
    description:
      "Models S&P 500 (SPX) option chains as dynamic graphs, with strikes as nodes and dependencies as edges, to capture non-linear cross-strike volatility and maturity correlations. A GPU-accelerated tensor pipeline (CUDA, PyTorch Geometric, Pandas) achieves a 20%+ reduction in pricing error versus Black-Scholes baselines on deep out-of-the-money options.",
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
      "Mobile delivery application with live courier tracking, transactional dispatch state machines, and connection pooling. Enforces multi-tenant authorization through PostgreSQL Row-Level Security (RLS). Integrated Redis geospatial indexing and radius caching for real-time courier coordinates, cutting primary database read IOPS by over 50% during peak ordering windows.",
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
      "SQLite",
      "Redis",
      "ChromaDB",
      "Docker",
      "Linux (POSIX)",
      "Linux System Daemons",
      "CUDA",
      "GitHub Actions",
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
    title: "Tools & Cloud",
    items: [
      "Git",
      "WebSockets",
      "REST APIs",
      "CI/CD",
      "Docker Compose",
      "Supabase",
      "Vercel",
    ],
    span: "normal",
  },
  {
    id: "coursework",
    title: "Purdue Coursework",
    items: [
      "Computer Architecture",
      "Systems Programming in C",
      "Data Structures & Algorithms",
      "Linear Algebra",
      "Multivariable Calculus",
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
