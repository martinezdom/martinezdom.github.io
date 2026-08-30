import type { Translation } from "../types.ts";

const es: Translation = {
  prefix: "es",
  nav: {
    experience: { title: "Experiencia", href: "#experiencia" },
    projects: { title: "Proyectos", href: "#proyectos" },
    studies: { title: "Estudios", href: "#estudios" },
    about: { title: "Sobre mí", href: "#sobre-mi" },
    contact: { title: "Contacto", href: "#contacto" },
    services: { title: "Servicios", href: "servicios" },
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
    "De Alcoy, España. <span class='text-indigo-500 dark:text-yellow-200/90'>Desarrollador Web</span> y <span class='text-indigo-500 dark:text-yellow-200/90'>especialista en ciberseguridad</span>. Me gusta cuidar cada detalle al máximo, crear las mejores experiencias y que todo sea <span class='text-indigo-500 dark:text-yellow-200/90'>seguro</span>.",
  aboutMe: [
    "Me llamo Miguel Ángel aunque también me conocen como <strong><a href='https://github.com/martinezdom' target='_blank'>martinezdom</a></strong>.",
    "Desde bien pequeño, me gustaba estar trasteando con el ordenador, lo que me ha llevado a formarme en el <strong>mundo de la informática</strong>.",
    "Cuento con formación especializada en <strong>ciberseguridad</strong>, lo que me permite aportar un enfoque centrado en la seguridad, buenas prácticas y protección en cada desarrollo que realizo.",
    "Algo que me caracteriza es que me gusta <strong>cuidar cada pequeño detalle de lo que hago</strong>, no me gusta ver pequeños fallos que molesten la experiencia del usuario aunque sea mínimamente.",
    "Mi objetivo siempre será <strong>seguir aprendiendo lo máximo posible</strong> y poder ayudar a los demás.",
    "Soy muy <strong>autodidacta</strong>, me gusta siempre aprender cosas nuevas y profundizar más en lo que <strong>ya conozco</strong>.",
    "En la era de la <strong>IA</strong>, aunque esté en auge, procuro <strong>mantenerme al día</strong> y <strong>saber utilizarla</strong>, pero realmente la empleo solo cuando realmente me <strong>ahorra tiempo</strong>. No me gusta <strong>abusar de ella</strong>, si algo no lo entiendo, prefiero consultar la <strong>documentación oficial</strong> o busco en foros para asegurarme de comprender lo que escribo.",
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
      title: "Repair Shop",
      description:
        "SPA full stack con Vue, Spring Boot y MySQL, contenedorizada con Docker. Incluye listas con CRUD completo, autenticación con Spring Security y gestión de roles basada en RBAC.",
      repositories: [
        {
          label: "Frontend",
          url: "https://github.com/martinezdom/Repair-Shop-Frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/martinezdom/Repair-Shop-Backend",
        },
      ],
      image: "/projects/repair_shop.webp",
      imageAlt: "Captura de pantalla de la aplicación Repair Shop",
      languages: ["Spring Boot", "Vue", "TypeScript", "TailwindCSS", "MySQL"],
      url: "http://localhost:5173/repairs",
    },
    {
      title: "Download Stats Panel",
      description:
        "Plataforma Full Stack (PHP/MySQL) contenerizada con Docker. Dashboard analítico con gráficos interactivos, autenticación segura y arquitectura MVC manual.",
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/martinezdom/DownloadStatsPanel",
        },
      ],
      image: "/projects/dsp.webp",
      imageAlt: "Captura de pantalla de la aplicación Download Stats Panel",
      languages: ["PHP", "MySQL", "JavaScript", "CSS", "Docker"],
      url: "http://localhost/layout/backend/index.php?sec=home",
    },
    {
      title: "Dom Car",
      description:
        "Plataforma responsive de viajes compartidos hecha con Spring Boot, Thymeleaf y Tailwind. Permite crear viajes, buscar rutas y reservar plazas de forma rápida e intuitiva.",
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/martinezdom/Dom-Car",
        },
      ],
      image: "/projects/dom_car.webp",
      imageAlt: "Captura de pantalla de la aplicación Dom Car",
      languages: ["Spring Boot", "Thymeleaf", "TailwindCSS"],
      url: "http://localhost:8080",
    },
    {
      title: "Dom Books",
      description:
        "SPA reactiva desarrollada con Vue 3 y TailwindCSS. Implementa gestión de estado global con Pinia, validación de formularios complejos (VeeValidate/Yup) y persistencia en LocalStorage.",
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/martinezdom/Dom-Books",
        },
      ],
      image: "/projects/dom_books.webp",
      imageAlt: "Captura de pantalla de la aplicación Dom Books",
      languages: ["Vue", "TailwindCSS"],
      url: "http://localhost:5173",
    },
  ],
  studies: [
    {
      date: "2025 - 2026",
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
  demo: "Demo",
  servicesPage: {
    hero: {
      title: "Tu negocio en internet, rápido y seguro",
      subtitle:
        "Creación de páginas web profesionales, modernas, adaptativas y completamente seguras, sin tecnicismos.",
      cta: "Quiero mi web segura",
    },
    featuredService: {
      title: "Web Profesional + Kit de Seguridad Básico",
      priceLabel: "Precio único",
      price: "500 €",
      features: [
        "Diseño moderno y adaptativo.",
        "Certificado SSL (HTTPS) y configuración segura.",
        "Protección de formularios de contacto.",
        "Informe final de seguridad en lenguaje comprensible.",
        "Entrega en 5 días laborables.",
        "Soporte técnico durante 15 días.",
      ],
    },
    additionalServices: {
      title: "Servicios Adicionales",
      audit: {
        title: "Auditoría de Seguridad Web",
        description:
          "Analizo tu web actual con herramientas profesionales y te entrego un informe con soluciones.",
        price: "Desde 200 €",
      },
      customDev: {
        title: "Desarrollo de Funcionalidades a Medida",
        description:
          "¿Necesitas un sistema de reservas, panel de clientes o algo más complejo? Te lo desarrollo con las mismas garantías de seguridad.",
        price: "Presupuesto personalizado",
      },
    },

    finalCta: {
      buttonText: "Habla conmigo sin compromiso",
      supportText:
        "¿Tienes una idea en mente?<br />Escríbeme y vemos cómo darle forma de manera segura.",
    },
  },
};

export default es;
