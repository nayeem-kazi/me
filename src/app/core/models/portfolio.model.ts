export interface Personal {
  name: string;
  firstName: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  availability: string;
  badges: string[];
}

export interface Highlight {
  icon: string;
  label: string;
  description: string;
}

export interface About {
  bio: string;
  bio2: string;
  highlights: Highlight[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  items: SkillItem[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  location: string;
  period: string;
  color: string;
  type: string;
  current: boolean;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  color: string;
  featured: boolean;
  category: string;
  status: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  grade: string;
  color: string;
  description: string;
  activities: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  color: string;
  badge: string;
  url: string;
}

export interface Contact {
  heading: string;
  subheading: string;
  availability: string;
  responseTime: string;
}

export interface PortfolioData {
  personal: Personal;
  about: About;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  contact: Contact;
}
