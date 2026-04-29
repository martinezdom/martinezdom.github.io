export interface Translation {
  prefix?: "es" | "en" | "va";
  nav: {
    experience: { title: string; href: string };
    projects: { title: string; href: string };
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
  contactMe: string;
  developedBy: string;
  heroBadge: string;
  heroDescription: string;
  aboutMe: string[];
  code: string;
  demo: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  studies: StudiesItem[];
  onDevelopment?: string;
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
  repositories: { label: string; url: string }[];
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
