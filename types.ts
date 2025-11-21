export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  achievements: string[];
}

export interface ProjectItem {
  name: string;
  tech?: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  objective: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  softSkills: string[];
  languages: string[];
  training: string[];
  projects: ProjectItem[];
}