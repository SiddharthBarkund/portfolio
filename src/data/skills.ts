import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 60 },
      { name: "C++", level: 65 },
      { name: "C", level: 70 },
      { name: "JavaScript", level: 55 },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Deep Learning", level: 70 },
      { name: "Data Science", level: 70 },
      { name: "Data Analytics", level: 70 },
      { name: "Data Visualization", level: 65 },
      { name: "Computer Vision", level: 50 },
      { name: "XGBoost", level: 80 },
    ],
  },
  {
    id: "gen-ai",
    name: "AI Automation",
    icon: "Sparkles",
    skills: [
      { name: "LLM Fundamentals (Gemini, GPT)", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Agentic AI", level: 85 },
      { name: "RAG", level: 80 },
      { name: "Ollama", level: 75 },
      { name: "AI Workflow Automation (n8n)", level: 80 },
      { name: "AI Agents Concepts", level: 80 },
      { name: "Exploring RAG Systems", level: 80 },
      { name: "AI Integration & APIs", level: 75 },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    icon: "Layers",
    skills: [
      { name: "Flask", level: 70 },
      { name: "FastAPI", level: 60 },
      { name: "Streamlit", level: 65 },
    ],
  },
  {
    id: "libraries",
    name: "Libraries",
    icon: "Library",
    skills: [
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 75 },
      { name: "Scikit-Learn", level: 75 },
      { name: "Matplotlib", level: 70 },
      { name: "FAISS", level: 75 },
      { name: "Leaflet", level: 70 },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "SQLite", level: 65 },
      { name: "MySQL", level: 55 },
    ],
  },
  {
    id: "dev-tools",
    name: "Dev Tools",
    icon: "Wrench",
    skills: [
      { name: "VS Code", level: 85 },
      { name: "Git", level: 70 },
      { name: "GitHub", level: 75 },
      { name: "Docker", level: 75 },
      { name: "n8n", level: 80 },
      { name: "Playwright", level: 50 },
    ],
  },
];
