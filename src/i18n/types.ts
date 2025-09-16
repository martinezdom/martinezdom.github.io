export interface Translation {
  prefix?: 'es' | 'en' | 'va';
  nav: {
    home: { title: string; href: string; };
    experience: { title: string; href: string; };
    projects: { title: string; href: string; };
    about: { title: string; href: string; };
    contact: { title: string; href: string; };
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
  downloadCurriculum: string;
}
