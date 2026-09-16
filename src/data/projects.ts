import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "safeyatra",
    title: "SafeYatra",
    description:
      "An AI-powered tourist safety platform that combines real-time risk prediction, geofencing, weather intelligence, and incident monitoring to detect and respond to tourist safety risks.",
    longDescription:
      "An AI-powered tourist safety platform that combines real-time risk prediction, geofencing, weather intelligence, and incident monitoring to detect and respond to tourist safety risks.",
    techStack: [
      "Python",
      "XGBoost",
      "FastAPI",
      "Leaflet",
    ],
    features: [
      "AI-based tourist risk prediction",
      "Real-time geofencing and route monitoring",
      "Weather and incident risk analysis",
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/HIMANSHUd-17/SIH-Project",
    featured: true,
  },
  {
    id: "sovereign-ai",
    title: "Sovereign AI",
    description:
      "A sovereign on-premise Agentic AI workbench designed to run AI models locally, orchestrate multi-step tasks, and process enterprise data without relying on external AI services.",
    longDescription:
      "A sovereign on-premise Agentic AI workbench designed to run AI models locally, orchestrate multi-step tasks, and process enterprise data without relying on external AI services.",
    techStack: [
      "Python",
      "FastAPI",
      "Ollama",
      "RAG",
      "FAISS",
      "Qwen",
      "Docker",
    ],
    features: [
      "Multi-agent AI task orchestration",
      "Local LLM inference and intelligent model routing",
      "Offline document analysis and RAG",
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/SiddharthBarkund/SIH-SLM",
    featured: true,
  },
  {
    id: "pipewise-ai",
    title: "PipeWise-AI",
    description:
      "AI-powered data analysis assistant that enables users to query CSV datasets using natural language.",
    longDescription:
      "A sophisticated data analysis platform that bridges the gap between complex data operations and everyday language. Users can upload CSV files and ask questions in plain English to receive automated statistical analysis, data visualizations, and AI-generated insights.",
    techStack: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
    features: [
      "Natural language data querying",
      "Automated statistical analysis",
      "Interactive data visualizations",
      "AI-generated insights and recommendations",
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/SiddharthBarkund/PipeWise-AI",
    screenshots: [
      "/img/Screenshot 2026-06-21 101324.png",
      "/img/Screenshot 2026-06-21 101428.png",
      "/img/Screenshot 2026-06-21 101504.png",
      "/img/Screenshot 2026-06-21 101606.png",
      "/img/Screenshot 2026-06-21 105942.png"
    ],
  },
  {
    id: "govt-scheme-assistant",
    title: "AI Government Scheme Assistant",
    description:
      "Multilingual AI chatbot helping users discover and understand government schemes in English, Hindi, and Marathi.",
    longDescription:
      "An intelligent multilingual chatbot that helps citizens navigate government welfare schemes. With a database of 4,600+ schemes, it provides personalized recommendations based on user profiles and eligibility criteria.",
    techStack: ["Flask", "FastAPI", "Gemini API", "Supabase"],
    features: [
      "Multilingual support (English, Hindi, Marathi)",
      "Intelligent scheme recommendations",
      "4,600+ government schemes database",
      "Smart user profiling and eligibility matching",
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/SiddharthBarkund/Gov_schema",
    screenshots: [
      "/img/Screenshot 2026-06-22 110310.png",
      "/img/Screenshot 2026-06-22 110326.png",
      "/img/Screenshot 2026-06-22 110348.png",
      "/img/Screenshot 2026-06-22 110421.png",
      "/img/Screenshot 2026-06-22 110455.png"
    ],
  },
  {
    id: "habiflow",
    title: "HabiFlow",
    description:
      "Professional habit tracking and productivity platform with comprehensive analytics and progress visualization.",
    longDescription:
      "A full-featured productivity platform designed to help users build and maintain positive habits. Features include detailed monthly reports, analytics dashboards, and intuitive progress visualization tools.",
    techStack: ["Python", "Flask", "JavaScript", "SQLite"],
    features: [
      "Habit tracking and management",
      "Monthly performance reports",
      "Analytics dashboard",
      "Progress visualization and streaks",
    ],
    category: "Web",
    githubUrl: "https://github.com/SiddharthBarkund",
    screenshots: [
      "/img/Screenshot 2026-06-22 105024.png",
      "/img/Screenshot 2026-06-22 104853.png",
      "/img/Screenshot 2026-06-22 104912.png",
      "/img/Screenshot 2026-06-22 104924.png",
      "/img/Screenshot 2026-06-22 104957.png"
    ],
  },
  {
    id: "lawguide-ai",
    title: "LawGuideAI",
    description:
      "AI-powered legal assistance platform helping users understand laws and navigate legal processes.",
    longDescription:
      "A legal technology platform that leverages AI to make legal information accessible to everyone. Users can ask questions about laws, rights, and legal procedures to receive clear, understandable guidance.",
    techStack: ["Python", "Flask", "Gemini API", "NLP"],
    features: [
      "AI-powered legal Q&A",
      "Law and rights explanations",
      "Legal process navigation",
      "User-friendly legal guidance",
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/SiddharthBarkund/-LawGuideAI",
    screenshots: [
      "/img/Screenshot 2026-06-22 112654.png",
      "/img/Screenshot 2026-06-22 112455.png",
      "/img/Screenshot 2026-06-22 112506.png",
      "/img/Screenshot 2026-06-22 112523.png",
      "/img/Screenshot 2026-06-22 112536.png"
    ],
  },
  {
    id: "website-testing-agent",
    title: "Website Testing AI Agent",
    description:
      "Autonomous AI agent that performs comprehensive website testing and UI/UX analysis.",
    longDescription:
      "An intelligent testing agent that autonomously navigates websites, identifies UI/UX issues, performs accessibility checks, and generates detailed QA reports with actionable improvement recommendations.",
    techStack: ["Python", "Playwright", "AI/ML", "FastAPI"],
    features: [
      "Automated website testing",
      "UI/UX analysis and scoring",
      "QA report generation",
      "Intelligent improvement recommendations",
    ],
    category: "Automation",
    githubUrl: "https://github.com/SiddharthBarkund",
  },
  {
    id: "aiml-collection",
    title: "AIML Project Collection",
    description:
      "Comprehensive collection of ML and Data Science projects covering core algorithms and techniques.",
    longDescription:
      "A curated portfolio of machine learning and data science projects demonstrating proficiency across regression, classification, clustering, feature engineering, and model evaluation techniques.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    features: [
      "Regression & classification models",
      "Clustering analysis",
      "Feature engineering pipelines",
      "Model evaluation and comparison",
    ],
    category: "AI/ML",
    githubUrl: "https://github.com/SiddharthBarkund/AIML-project-",
  },
];
