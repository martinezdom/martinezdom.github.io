import type { Translation } from "../types.ts";

const va: Translation = {
  prefix: "va",
  nav: {
    experience: { title: "Experiència", href: "#experiencia" },
    projects: { title: "Projectes", href: "#projectes" },
    about: { title: "Sobre mi", href: "#sobre-mi" },
    contact: { title: "Contacte", href: "#contacte" },
  },
  castilian: "Castellà",
  english: "Anglès",
  valencian: "Valencià",
  themes: {
    light: "Clar",
    dark: "Fosc",
    system: "Sistema",
    selectorText: "Seleccionar tema",
  },
  curriculum: "Currículum",
  contactMe: "Contacta'm",
  developedBy: "Desenvolupat per",
  heroBadge: "Disponible per a treballar",
  heroDescription:
    "D'Alcoi, Espanya. <span class='text-indigo-500 dark:text-yellow-200/90'>Desenvolupador Web</span>. M'agrada cuidar cada detall al màxim i crear experiències úniques.",
  experience: [
    {
      date: "Març 2025 - Juny 2025",
      title: "Desenvolupador Web",
      company: "Sollutia",
      description:
        "Realització de pràctiques del Cicle Formatiu de Grau Superior (DAW) a Sollutia. Creació de la pàgina web des de 0 per al projecte final de cicle i manteniment correctiu de projectes existents, emprant tecnologies clau com PHP, JavaScript i MySQL.",
    },
    {
      date: "Març 2023 - Juny 2023",
      title: "Desenvolupador Web",
      company: "Coratge",
      description:
        "Pràctiques corresponents al Cicle Formatiu de Grau Mitjà (SMR) a Coratge. Desenvolupament des de zero d'un lloc web corporatiu utilitzant WordPress, abastant des de la configuració inicial del hosting i domini fins a la personalització i desplegament final.",
    },
  ],
  projects: [
    {
      title: "Dom Books",
      description:
        "SPA reactiva desenvolupada amb Vue 3 i TailwindCSS. Implementa gestió d'estat global amb Pinia, validació de formularis complexos (VeeValidate/Yup) i persistència en LocalStorage. Arquitectura orientada a components reutilitzables.",
      github: "https://github.com/martinezdom/Dom-Books",
      image: "/projects/dombooks.webp",
    },
    {
      title: "Download Stats Panel",
      description:
        "Plataforma Full Stack (PHP/MySQL) contenidoritzada amb Docker. Dashboard analític amb gràfics interactius, autenticació segura i arquitectura MVC manual. Desplegable en entorns Apache/Nginx amb configuració de Virtual Hosts.",
      github: "https://github.com/martinezdom/DownloadStatsPanel",
      image: "/projects/downloadstatspanel.webp",
    },
  ],
};

export default va;
