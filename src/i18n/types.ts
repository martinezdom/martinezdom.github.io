export interface Translation {
  prefix?: "es" | "en" | "va";
  nav: {
    experience: { title: string; href: string };
    projects: { title: string; href: string };
    skills: { title: string; href: string };
    studies: { title: string; href: string };
    about: { title: string; href: string };
    contact: { title: string; href: string };
  };
  castilian: string;
  english: string;
  valencian: string;
  themes: {
    light: string;
    dark: string;
    system: string;
    selectorText: string;
  };
  curriculum: string;
  curriculumDev: string;
  curriculumCyber: string;
  contactMe: string;
  developedBy: string;
  heroBadge: string;
  heroDescription: string;
  aboutMe: string[];
  code: string;
  demo: string;
  liveSite: string;
  skillsTitle: string;
  skillsSubtitle: string;
  skillsFilters: {
    all: string;
    cybersecurity: string;
    development: string;
  };
  skillsCategories: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  studies: StudiesItem[];
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  repositories?: { label: string; url: string }[];
  image: string;
  imageAlt: string;
  languages: string[];
  url: string;
}

export interface StudiesItem {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  iconName:
    | "offensive"
    | "defensive"
    | "forensics"
    | "systems"
    | "frontend"
    | "backend"
    | "databases"
    | "devops";
  type: "cybersecurity" | "development";
  description: string;
  skills: string[];
}
