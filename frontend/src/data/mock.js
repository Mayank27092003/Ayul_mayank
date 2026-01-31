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
  github: "https://github.com/mayankshukla",
  linkedin: "https://linkedin.com/in/mayankshukla",
  resume: "/resume.pdf"
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "AI Models Deployed", value: "8+" },
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
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc2OTgzMTk0OXww&ixlib=rb-4.1.0&q=85",
    demoUrl: "https://huggingface.co/demo",
    githubUrl: "https://github.com/mayankshukla/nyayallm"
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
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc2OTgzMTk0NHww&ixlib=rb-4.1.0&q=85",
    githubUrl: "https://github.com/mayankshukla/whaome-ai"
  },
  {
    id: 3,
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
    image: "https://images.unsplash.com/photo-1655890006065-edefcd764af6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHw0fHxuZXVyYWwlMjBuZXR3b3JrfGVufDB8fHx8MTc2OTgzMTk0OXww&ixlib=rb-4.1.0&q=85",
    githubUrl: "https://github.com/mayankshukla/bsp-sahayak"
  },
  {
    id: 4,
    title: "IntelliScan",
    category: "Computer Vision • Healthcare",
    description: "Medical image analysis system with CNN-based inference pipeline and interactive Streamlit visualization.",
    highlights: [
      "CNN-based medical image classification",
      "Streamlit visualization dashboard",
      "Real-time inference pipeline",
      "Healthcare-grade accuracy standards"
    ],
    technologies: ["CNN", "TensorFlow", "Streamlit", "Python", "OpenCV"],
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc2OTgzMTk0NHww&ixlib=rb-4.1.0&q=85",
    githubUrl: "https://github.com/mayankshukla/intelliscan"
  }
];

export const skills = {
  "ML / NLP": [
    "Transformers",
    "Long-Document NLP",
    "Domain Adaptation",
    "CNNs",
    "BERT",
    "T5",
    "Pegasus"
  ],
  "Systems & APIs": [
    "FastAPI",
    "Flask",
    "Docker",
    "Django",
    "REST APIs",
    "Streamlit",
    "Microservices"
  ],
  "Programming": [
    "Python",
    "SQL",
    "C++",
    "JavaScript",
    "HTML/CSS"
  ],
  "Tools & Libraries": [
    "HuggingFace",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "OpenCV",
    "Git",
    "TensorFlow",
    "PyTorch"
  ],
  "Frontend": [
    "React",
    "JavaScript",
    "HTML",
    "CSS"
  ],
  "Database": [
    "SQL",
    "PostgreSQL",
    "SQLite",
    "MongoDB"
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
    name: "Dr. Rajesh Kumar",
    role: "Assistant Professor",
    company: "University of Burdwan",
    text: "Mayank's work on legal document summarization showed exceptional understanding of NLP and domain adaptation. His 27% improvement on ROUGE-1 scores was remarkable.",
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=1e40af&color=fff&size=128"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Whaome AI",
    text: "Mayank delivered a production-ready AI backend that exceeded our expectations. His technical expertise in computer vision and API development was invaluable.",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0f172a&color=fff&size=128"
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "AGM",
    company: "Bhilai Steel Plant",
    text: "The BSP Sahayak chatbot improved our internal operations significantly. Mayank's solution was both technically sound and practically effective.",
    image: "https://ui-avatars.com/api/?name=Amit+Verma&background=1e40af&color=fff&size=128"
  }
];