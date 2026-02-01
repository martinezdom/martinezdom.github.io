import type { Translation } from "../types.ts";

const es: Translation = {
  prefix: "es",
  nav: {
    experience: { title: "Experiencia", href: "#experiencia" },
    projects: { title: "Proyectos", href: "#proyectos" },
    studies: { title: "Estudios", href: "#estudios" },
    about: { title: "Sobre mí", href: "#sobre-mi" },
    contact: { title: "Contacto", href: "#contacto" },
  },
  castilian: "Castellano",
  english: "Inglés",
  valencian: "Valenciano",
  themes: {
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
    selectorText: "Seleccionar tema",
  },
  curriculum: "Currículum",
  contactMe: "Contáctame",
  developedBy: "Desarrollado por",
  heroBadge: "Disponible para trabajar",
  heroDescription:
    "De Alcoy, España. <span class='text-indigo-500 dark:text-yellow-200/90'>Desarrollador Web</span>. Me gusta cuidar cada detalle al máximo y crear experiencias únicas.",
  experience: [
    {
      date: "Marzo 2025 - Junio 2025",
      title: "Desarrollador Web",
      company: "Sollutia",
      description:
        "Realización de prácticas del Ciclo Formativo de Grado Superior (DAW) en Sollutia. Creación de la página web desde 0 para el proyecto final de ciclo y mantenimiento correctivo de proyectos existentes, empleando tecnologías clave como PHP, JavaScript y MySQL.",
    },
    {
      date: "Marzo 2023 - Junio 2023",
      title: "Desarrollador Web",
      company: "Coratge",
      description:
        "Prácticas correspondientes al Ciclo Formativo de Grado Medio (SMR) en Coratge. Desarrollo desde cero de un sitio web corporativo utilizando WordPress, abarcando desde la configuración inicial del hosting y dominio hasta la personalización y despliegue final.",
    },
  ],
  projects: [
    {
      title: "Dom Books",
      description:
        "SPA reactiva desarrollada con Vue 3 y TailwindCSS. Implementa gestión de estado global con Pinia, validación de formularios complejos (VeeValidate/Yup) y persistencia en LocalStorage. Arquitectura orientada a componentes reutilizables.",
      github: "https://github.com/martinezdom/Dom-Books",
      image: "/projects/dom_books.webp",
      imageAlt: "Captura de pantalla de la aplicación Dom Books",
      languages: ["Vue", "TailwindCSS"],
    },
    {
      title: "Download Stats Panel",
      description:
        "Plataforma Full Stack (PHP/MySQL) contenerizada con Docker. Dashboard analítico con gráficos interactivos, autenticación segura y arquitectura MVC manual. Desplegable en entornos Apache/Nginx con configuración de Virtual Hosts.",
      github: "https://github.com/martinezdom/DownloadStatsPanel",
      image: "/projects/downloadstatspanel.webp",
      imageAlt: "Captura de pantalla de la aplicación Download Stats Panel",
      languages: ["PHP", "MySQL", "JavaScript", "CSS"],
    },
  ],
};

export default es;
