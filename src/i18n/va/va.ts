import type { Translation } from "../types.ts";

const va: Translation = {
  prefix: "va",
  nav: {
    experience: { title: "Experiència", href: "#experiencia" },
    projects: { title: "Projectes", href: "#projectes" },
    studies: { title: "Estudis", href: "#estudis" },
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
    "D'Alcoi, Espanya. <span class='text-indigo-500 dark:text-yellow-200/90'>Desenvolupador Web</span> i <span class='text-indigo-500 dark:text-yellow-200/90'>estudiant de ciberseguretat</span>. M'agrada cuidar cada detall al màxim, crear les millors experiències i que tot siga <span class='text-indigo-500 dark:text-yellow-200/90'>segur</span>.",
  aboutMe: [
    "Em dic Miguel Ángel encara que també em coneixen com a <strong><a href='https://github.com/martinezdom' target='_blank'>martinezdom</a></strong>.",
    "Des de ben menut, m'agradava estar trastejant amb l'ordinador, la qual cosa m'ha portat a formar-me en el <strong>món de la informàtica</strong>.",
    "Actualment, continue formant-me però esta vegada com a <strong>especialista en ciberseguretat</strong>. És diferent del que estava acostumat però la veritat m'agrada prou i em motiva a seguir aprenent cada dia.",
    "Una cosa que em caracteritza és que m'agrada <strong>cuidar cada xicotet detall del que faig</strong>; no m'agrada veure xicotets errors que molesten l'experiència de l'usuari encara que siga mínimament.",
    "El meu objectiu sempre serà <strong>seguir aprenent el màxim possible</strong>, poder ajudar els altres i, sobretot, <strong>treballar en equip</strong>.",
  ],
  code: "Codi",
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
        "SPA reactiva desenvolupada amb Vue 3 i TailwindCSS. Implementa gestió d'estat global amb Pinia, validació de formularis complexos (VeeValidate/Yup) i persistència en LocalStorage.",
      github: "https://github.com/martinezdom/Dom-Books",
      image: "/projects/dom_books.webp",
      imageAlt: "Captura de pantalla de l'aplicació Dom Books",
      languages: ["Vue", "TailwindCSS"],
      url: "http://localhost:5173",
    },
    {
      title: "Download Stats Panel",
      description:
        "Plataforma Full Stack (PHP/MySQL) contenidoritzada amb Docker. Dashboard analític amb gràfics interactius, autenticació segura i arquitectura MVC manual.",
      github: "https://github.com/martinezdom/DownloadStatsPanel",
      image: "/projects/dsp.webp",
      imageAlt: "Captura de pantalla de l'aplicació Download Stats Panel",
      languages: ["PHP", "MySQL", "JavaScript", "CSS", "Docker"],
      url: "http://localhost/layout/backend/index.php?sec=home",
    },
  ],
  studies: [
    {
      date: "2025 - ara",
      title: "Curs d'especialitzacio en Ciberseguretat",
      institution: "CIP FP Batoi",
      description:
        "Curs d'especialitzacio en Ciberseguretat. Formacio avançada en seguretat informatica, incloent analisi de vulnerabilitats, gestio d'incidents, proteccio de dades i infraestructura.",
    },
    {
      date: "2023 - 2025",
      title: "Desenvolupament d'Aplicacions Web",
      institution: "CIP FP Batoi",
      description:
        "Cicle Formatiu de Grau Superior en Desenvolupament d'Aplicacions Web. Aprenentatge de tecnologies com HTML, CSS, JavaScript, PHP, MySQL i frameworks com Vue.js, Laravel o Springboot.",
    },
    {
      date: "2021 - 2023",
      title: "Sistemes Microinformatics i Xarxes",
      institution: "CIP FP Batoi",
      description:
        "Cicle Formatiu de Grau Mitja en Sistemes Microinformatics i Xarxes. Formacio en instal·lacio, configuracio i manteniment de sistemes informatics, xarxes i serveis associats, aixi com l'ús en entorns Linux i Windows Server.",
    },
    {
      date: "2017 - 2021",
      title: "Educacio Secundaria Obligatoria",
      institution: "IES Andreu Sempere",
      description:
        "Educacio Secundaria Obligatoria (ESO) a l'IES Andreu Sempere d'Alcoi. Formacio general en diverses materies.",
    },
  ],
};

export default va;
