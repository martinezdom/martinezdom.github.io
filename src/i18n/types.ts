export interface Translation {
  prefix?: "es" | "en" | "va";
  nav: {
    experience: { title: string; href: string };
    projects: { title: string; href: string };
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
}
