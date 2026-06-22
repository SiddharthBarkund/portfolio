export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  screenshots?: string[];
}

export type ProjectCategory = 'AI/ML' | 'Web' | 'Automation' | 'All';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  icon?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  category: string;
}

export interface CareerGoal {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars?: number;
  url: string;
}

export interface GitHubProfile {
  username: string;
  profileUrl: string;
  repos: GitHubRepo[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
