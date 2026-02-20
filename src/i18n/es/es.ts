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
    "De Alcoy, España. <span class='text-indigo-500 dark:text-yellow-200/90'>Desarrollador Web</span> y <span class='text-indigo-500 dark:text-yellow-200/90'>estudiante de ciberseguridad</span>. Me gusta cuidar cada detalle al máximo, crear las mejores experiencias y que todo sea <span class='text-indigo-500 dark:text-yellow-200/90'>seguro</span>.",
  aboutMe: [
    "Me llamo Miguel Ángel aunque también me conocen como Tartanas.",
    "Desde bien pequeño, me gustaba estar trasteando con el ordenador, lo que me ha llevado a formarme en el <strong>mundo de la informática</strong>.",
    "Actualmente, sigo formándome pero esta vez como <strong>especialista en ciberseguridad</strong>. Es distinto a lo que estaba acostumbrado pero la verdad me gusta bastante y me motiva a seguir aprendiendo cada día.",
    "Algo que me caracteriza es que me gusta <strong>cuidar cada pequeño detalle de lo que hago</strong>; no me gusta ver pequeños fallos que molesten la experiencia del usuario aunque sea mínimamente.",
    "Mi objetivo siempre será <strong>seguir aprendiendo lo máximo posible</strong>, poder ayudar a los demás y sobre todo, <strong>trabajar en equipo</strong>.",
  ],
  code: "Código",
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
        "SPA reactiva desarrollada con Vue 3 y TailwindCSS. Implementa gestión de estado global con Pinia, validación de formularios complejos (VeeValidate/Yup) y persistencia en LocalStorage.",
      github: "https://github.com/martinezdom/Dom-Books",
      image: "/projects/dom_books.webp",
      imageAlt: "Captura de pantalla de la aplicación Dom Books",
      languages: ["Vue", "TailwindCSS"],
      url: "http://localhost:5173",
    },
    {
      title: "Download Stats Panel",
      description:
        "Plataforma Full Stack (PHP/MySQL) contenerizada con Docker. Dashboard analítico con gráficos interactivos, autenticación segura y arquitectura MVC manual.",
      github: "https://github.com/martinezdom/DownloadStatsPanel",
      image: "/projects/dsp.webp",
      imageAlt: "Captura de pantalla de la aplicación Download Stats Panel",
      languages: ["PHP", "MySQL", "JavaScript", "CSS", "Docker"],
      url: "http://localhost/layout/backend/index.php?sec=home",
    },
  ],
  studies: [
    {
      date: "2025 - ahora",
      title: "Curso de especialización en Ciberseguridad",
      institution: "CIP FP Batoi",
      description:
        "Curso de especialización en Ciberseguridad. Formación avanzada en seguridad informática, incluyendo análisis de vulnerabilidades, gestión de incidentes, protección de datos e infraestructura.",
    },
    {
      date: "2023 - 2025",
      title: "Desarrollo de Aplicaciones Web",
      institution: "CIP FP Batoi",
      description:
        "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web. Aprendizaje de tecnologías como HTML, CSS, JavaScript, PHP, MySQL y frameworks como Vue.js, Laravel o Springboot.",
    },
    {
      date: "2021 - 2023",
      title: "Sistemas Microinformáticos y Redes",
      institution: "CIP FP Batoi",
      description:
        "Ciclo Formativo de Grado Medio en Sistemas Microinformáticos y Redes. Formación en instalación, configuración y mantenimiento de sistemas informáticos, redes y servicios asociados. Así como uso en entornos Linux y Windows Server.",
    },
    {
      date: "2017 - 2021",
      title: "Educación Secundaria Obligatoria",
      institution: "IES Andreu Sempere",
      description:
        "Educación Secundaria Obligatoria (ESO) en el IES Andreu Sempere de Alcoy. Formación general en diversas materias.",
    },
  ],
};

export default es;
