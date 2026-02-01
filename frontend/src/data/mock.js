// Mock data for Mayank Shukla's AI/ML Portfolio

export const personalInfo = {
  name: "Mayank Shukla",
  role: "AI/ML Engineer",
  company: "Ayul IT Solutions",
  tagline: "Building NLP systems and deploying models into real products",
  bio: "AI/ML Enthusiast specializing in natural language processing, computer vision, and deploying production-ready AI systems. Experienced in scaling legal document analysis, building enterprise chatbots, and integrating AI into real-world applications.",
  email: "mayankshukla270903@gmail.com",
  phone: "+91 62666 01638",
  location: "India",
  github: "https://github.com/mayankshukla270903",
  linkedin: "https://linkedin.com/in/mayankshukla",
  resume: "https://drive.google.com/file/d/1Xh7VUqgr7o9ohvUdJoSH_xc4P-CEHvSN/view?usp=sharing",
  logo: "/ayullogo.jpeg"
};

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "AI Models Deployed", value: "5" },
  { label: "Research Papers", value: "1" }
];

export const experience = [
  {
    id: 1,
    role: "AI Engineer",
    company: "Whaome AI",
    type: "Freelance Project",
    period: "2026",
    location: "India (Remote)",
    description: "Built production backend services enabling AI-powered beauty and skincare analysis platform.",
    achievements: [
      "Integrated pretrained computer vision models for facial attribute and skin-condition analysis",
      "Developed FastAPI inference microservices and REST APIs",
      "Integrated with React frontend and Dockerized deployments",
      "Implemented vendor API integrations for enhanced analysis capabilities"
    ],
    technologies: ["FastAPI", "Computer Vision", "Docker", "React", "REST APIs"]
  },
  {
    id: 2,
    role: "Research Intern - AI & Analytics",
    company: "University of Burdwan (UIT)",
    type: "Research",
    period: "Aug 2025 - Oct 2025",
    location: "India",
    description: "Conducted research on legal document summarization and domain adaptation of transformer models.",
    achievements: [
      "Improved ROUGE-1 by 27% on Indian legal judgments",
      "Domain-adapted Pegasus and T5 with hierarchical context modeling",
      "Built scalable preprocessing and evaluation pipelines over 2.3M+ legal records",
      "Co-authored research paper on AI-driven legal analytics"
    ],
    technologies: ["Transformers", "Pegasus", "T5", "NLP", "Python"]
  }
];

export const projects = [
  {
    id: 1,
    title: "NyayaLLM (Jurai Legal LLM)",
    category: "NLP • Legal Tech",
    description: "Long-document legal intelligence system scaling to 50K+ cases with hierarchical chunking and transformer reranking.",
    highlights: [
      "Scaled legal document summarization to 50K+ cases",
      "20%+ quality improvement on legal summaries",
      "Domain-adapted T5, BERT, and Pegasus models",
      "Hierarchical chunking with TF-IDF filtering"
    ],
    technologies: ["Transformers", "T5", "BERT", "Pegasus", "TF-IDF", "Python", "HuggingFace"],
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxsZWdhbHxlbnwwfHx8fDE3MDY1NTYwMjJ8MA&ixlib=rb-4.1.0&q=85",
    demoUrl: "https://huggingface.co/demo",
    githubUrl: "https://huggingface.co/spaces/Rak-shit/jurai-legal-llm"
  },
  {
    id: 2,
    title: "Whaome AI Beauty Platform",
    category: "Computer Vision • Production",
    description: "Production-grade AI backend for beauty and skincare analysis with facial attribute detection and skin condition assessment.",
    highlights: [
      "Built FastAPI microservices architecture",
      "Integrated pretrained CV models for facial analysis",
      "Dockerized deployment pipeline",
      "Real-time inference API endpoints"
    ],
    technologies: ["FastAPI", "Computer Vision", "Docker", "React", "OpenCV", "REST APIs"],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0ZWNofGVufDB8fHx8MTcwNjU1NjA1NXww&ixlib=rb-4.1.0&q=85",
    githubUrl: "https://github.com/whaome/whaome-backend"
  },
  {
    id: 3,
    title: "iPharm",
    category: "Healthcare • Web App",
    description: "Digital pharmacy platform streamlining medication access and delivery.",
    highlights: [
      "Modern web interface for medication browsing",
      "Seamless ordering system",
      "Healthcare compliance standards",
      "Intuitive user experience"
    ],
    technologies: ["React", "Node.js", "Web Development", "UI/UX"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxwaGFybWFjeXxlbnwwfHx8fDE3MDY1NTYwODh8MA&ixlib=rb-4.1.0&q=85",
    demoUrl: "https://ipharm.vercel.app/"
  },
  {
    id: 4,
    title: "Caltrain AI",
    category: "AI • Enterprise Solutions",
    description: "Advanced AI solutions for enterprise automation and efficiency.",
    highlights: [
      "Enterprise-grade AI integration",
      "Scalable automation workflows",
      "Custom AI model deployment",
      "Process optimization"
    ],
    technologies: ["AI/ML", "Enterprise Automation", "Cloud Integration"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTcwNjU1NjExNnww&ixlib=rb-4.1.0&q=85",
    demoUrl: "https://www.caltrainai.com/"
  },
  {
    id: 5,
    title: "Restaurant Calling Agent",
    category: "Voice AI • Automation",
    description: "AI-powered voice agent for automating restaurant reservations and inquiries in the US market.",
    highlights: [
      "Automated reservation management",
      "Natural language understanding for voice",
      "Handling US-specific restaurant inquiries",
      "Reducing staff workload"
    ],
    technologies: ["Voice AI", "NLP", "Telephony Integration", "Python"],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDB8fHx8MTcwNjU1NjE0MXww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 7,
    title: "Perk.finance",
    category: "Fintech • AI & Frontend",
    description: "Best money management app helping users track expenses and manage finances effectively.",
    highlights: [
      "AI-driven financial insights",
      "Frontend development with modern UI/UX",
      "Google Group community integration",
      "Available on Play Store"
    ],
    technologies: ["React Native", "AI", "Frontend Development", "Mobile App"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxtb25leSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzA2NTU2MTg4fDA&ixlib=rb-4.1.0&q=85",
    demoUrl: "https://play.google.com/store/apps/details?id=com.perk.finance",
    githubUrl: "https://groups.google.com/g/perk-finance/"
  },
  {
    id: 6,
    title: "BSP Sahayak",
    category: "NLP • Enterprise",
    description: "Enterprise AI chatbot improving internal query resolution by 40% using Flask-based conversational AI system.",
    highlights: [
      "40% improvement in query resolution",
      "Flask-based conversational AI system",
      "Natural language understanding pipeline",
      "Letter of Recommendation from AGM, Bhilai Steel Plant"
    ],
    technologies: ["Flask", "NLP", "Transformers", "Python", "SQL"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxjaGF0Ym90fGVufDB8fHx8MTcwNjU1NjE2N3ww&ixlib=rb-4.1.0&q=85",
    githubUrl: "https://github.com/mayankshukla/bsp-sahayak"
  }
];

export const services = [
  {
    id: 1,
    title: "AI Automation",
    description: "End-to-end automation of business processes using state-of-the-art AI agents and workflows.",
    icon: "Bot"
  },
  {
    id: 2,
    title: "GenAI Solutions",
    description: "Generative AI systems for content creation, code generation, and personalized customer experiences.",
    icon: "Sparkles"
  },
  {
    id: 3,
    title: "Agentic AI",
    description: "Autonomous AI agents capable of planning, reasoning, and executing complex tasks with minimal supervision.",
    icon: "Brain"
  },
  {
    id: 4,
    title: "Computer Vision",
    description: "Image and video analysis solutions for healthcare, security, and industrial applications.",
    icon: "Eye"
  }
];

export const skills = {
  "Advanced AI & Agents": [
    "Agentic AI Patterns",
    "RAG Systems",
    "LLM Fine-tuning",
    "LangChain / LangGraph",
    "Multi-Agent Systems",
    "Prompt Engineering"
  ],
  "App Development": [
    "Flutter",
    "React Native",
    "React.js",
    "FastAPI",
    "Mobile & Web Architecture"
  ],
  "Computer Vision": [
    "YOLO / Object Detection",
    "Image Segmentation",
    "OpenCV",
    "Face Analysis",
    "Video Processing"
  ],
  "AI Deployment & Cloud": [
    "Docker & Containerization",
    "HuggingFace Spaces",
    "Vector Databases (Pinecone/Chroma)",
    "Model Quantization",
    "GPU Optimization"
  ],
  "Voice AI & Audio": [
    "Whisper / Speech-to-Text",
    "TTS Systems",
    "Audio Classification",
    "Speaker Diarization",
    "Real-time Audio Streams"
  ],
  "Generative Models": [
    "Stable Diffusion",
    "ControlNet",
    "Midjourney API",
    "Video Generation",
    "3D Asset Gen"
  ]
};

export const certifications = [
  {
    id: 1,
    title: "Co-authored Research Paper",
    issuer: "AI-driven Legal Analytics",
    date: "In Progress",
    description: "Research on domain adaptation for legal document summarization"
  },
  {
    id: 2,
    title: "Letter of Recommendation",
    issuer: "AGM, Bhilai Steel Plant",
    date: "2025",
    description: "Recognition for BSP Sahayak chatbot development"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Prof. Sumit Kumar",
    role: "Professor",
    company: "University of Burdwan",
    text: "Mayank's work on legal document summarization showed exceptional understanding of NLP and domain adaptation. His 27% improvement on ROUGE-1 scores was remarkable.",
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=1e40af&color=fff&size=128"
  },
  {
    id: 2,
    name: "Subham Prasad",
    role: "Product Manager",
    company: "Whaome AI",
    text: "Mayank delivered a production-ready AI backend that exceeded our expectations. His technical expertise in computer vision and API development was invaluable.",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0f172a&color=fff&size=128"
  },
  {
    id: 3,
    name: "Tejkiran Singh Hans",
    role: "AGM",
    company: "Bhilai Steel Plant",
    text: "The BSP Sahayak chatbot improved our internal operations significantly. Mayank's solution was both technically sound and practically effective.",
    image: "https://ui-avatars.com/api/?name=Amit+Verma&background=1e40af&color=fff&size=128"
  }
];