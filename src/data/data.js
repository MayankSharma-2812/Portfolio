export const projects = [
  {
    name: "AI Dataset Quality Inspector",
    category: "AI",
    problem: "Data scientists spent 30%+ of their time manually looking for bias and drift in large ML datasets.",
    solution: "Built a Python/FastAPI pipeline to automatically scan datasets against defined quality rules and flag anomalies in a React dashboard.",
    impact: "Reduced data QA time by 80% for a team of 4 data scientists, analyzing over 5GB of data per run.",
    techHighlight: "Optimized Pandas processing with Dask for out-of-core computation.",
    lessonsLearned: "Memory management in Python is crucial when scaling data tools.",
    tech: ["FastAPI", "React", "Python", "Pandas", "Dask"],
    github: "#",
  },
  {
    name: "LifeLink",
    category: "Full Stack",
    problem: "Fund distribution in relief platforms lacked transparency and tracking.",
    solution: "Developed a secure blockchain platform with smart contracts to automatically route funds.",
    impact: "Successfully handled 1000+ transactions during pilot testing with zero discrepancy.",
    techHighlight: "Integrated Web3.js with a Node backend to reliably sync on-chain events.",
    lessonsLearned: "Handling blockchain finality cleanly requires robust asynchronous retry logic.",
    tech: ["Solidity", "Node.js", "MongoDB", "Web3"],
    github: "#",
  },
  {
    name: "GitHub Repo Analyzer",
    category: "Backend",
    problem: "Engineering managers had no easy way to track code quality and activity trends across many repositories.",
    solution: "Created an aggregate analyzer fetching and parsing repository data.",
    impact: "Analyzed 10,000+ repositories, giving real-time insights on PR velocity.",
    techHighlight: "Implemented intelligent rate limiting and caching with Redis to stay within GitHub API limits.",
    lessonsLearned: "Aggressive third-party API usage requires a robust fallback and cache strategy.",
    tech: ["React", "Node.js", "GitHub API", "Redis"],
    github: "#",
  },
  {
    name: "AI Finance Tracker",
    category: "AI",
    problem: "Manual expense categorization was tedious and often inaccurate.",
    solution: "Integrated a lightweight ML classification model to auto-categorize transactions.",
    impact: "Categorized 50,000+ mocked transactions with 94% accuracy.",
    techHighlight: "Deployed the ML model via serverless functions for cost-efficiency.",
    lessonsLearned: "Cold starts for ML serverless functions are a significant UX hurdle to manage.",
    tech: ["Flask", "Python", "ML", "Serverless"],
    github: "#",
  },
  {
    name: "AI Profile Roaster",
    category: "AI",
    problem: "Resume feedback tools are often too generic and boring.",
    solution: "Built a witty AI roaster using prompt engineering with LLMs.",
    impact: "Processed 500+ resumes during an initial launch weekend.",
    techHighlight: "Achieved sub-3-second responses by streaming LLM outputs.",
    lessonsLearned: "Prompt vulnerability and injection attacks are a real threat in user-facing LLM apps.",
    tech: ["Flask", "Groq API", "LLM", "React"],
    github: "#",
  },
];

export const developerSignals = {
  workedOn: [
    "Scaled a Node.js microservice from 10 to 500 req/s with load balancing.",
    "Optimized a React web app bundle size by 40% using code splitting.",
    "Migrated a 50GB monolithic DB to a sharded PostgreSQL architecture.",
    "Built CI/CD pipelines reducing deployment time from 20 mins to 3 mins."
  ],
  careAbout: [
    "Clean, intuitive API design",
    "Systems thinking & architecture",
    "Performance under load",
    "Exceptional Developer Experience (DX)"
  ]
};

export const now = {
  learning: "Distributed consensus algorithms (Raft/Paxos) and Rust.",
  building: "A local, privacy-first vector database for personal knowledge management.",
  listening: "Syntax FM, Corecursive, and lo-fi beats."
};

export const failures = [
  {
    name: "Over-engineered Microservices",
    description: "Built a tiny side project using 6 microservices when a monolith would have been fine.",
    lesson: "Start simple. Extract services only when there's an actual scaling or organizational need."
  },
  {
    name: "Ignoring Cache Invalidation",
    description: "Implemented a complex Redis cache but didn't handle invalidations properly, leading to stale user data for hours.",
    lesson: "There are two hard things in CS: Cache invalidation and naming things. Always design invalidation first."
  }
];

export const openSource = [
  {
    title: "Fixed memory leak in data-processor",
    problem: "High memory usage during batch processing caused OOM errors.",
    impact: "Reduced memory consumption by 60%, preventing server crashes on large payloads.",
    link: "https://github.com/example/repo/pull/1"
  },
  {
    title: "Implemented async hooks for better tracking",
    problem: "Lack of context propagation in the logging system.",
    impact: "Enabled tracing across async boundaries, vastly improving debuggability.",
    link: "https://github.com/example/repo/pull/2"
  },
  {
    title: "Optimized regex in markdown parser",
    problem: "Catastrophic backtracking vulnerability in core parser.",
    impact: "Improved parsing speed by 100x for edge cases and secured against ReDoS.",
    link: "https://github.com/example/repo/pull/3"
  }
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "HTML5", "CSS3", "JavaScript", "Vite", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Flask", "Go"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "Python", "C++", "TypeScript", "Rust"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "Linux", "AWS", "CI/CD"],
  },
  {
    category: "Core CS",
    items: ["DSA", "System Design", "OOP", "DBMS"],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/MayankSharma-2812",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:msharma.dev.in@gmail.com",
    icon: "email",
  },
];