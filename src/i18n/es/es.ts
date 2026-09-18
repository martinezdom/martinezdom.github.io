import type { Translation } from "../types.ts";

const es: Translation = {
  prefix: "es",
  nav: {
    experience: { title: "Experiencia", href: "#experiencia" },
    projects: { title: "Proyectos", href: "#proyectos" },
    skills: { title: "Habilidades", href: "#habilidades" },
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
  curriculumDev: "CV Desarrollo Web",
  curriculumCyber: "CV Ciberseguridad",
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
  demo: "Demo",
  liveSite: "Visitar Web",
  skillsTitle: "Habilidades Técnicas",
  skillsSubtitle:
    "Especialización técnica en desarrollo de software full-stack, infraestructura de sistemas y seguridad ofensiva/defensiva.",
  skillsFilters: {
    all: "Todas",
    cybersecurity: "Ciberseguridad",
    development: "Desarrollo Web",
  },
  skillsCategories: [
    {
      title: "Seguridad Ofensiva & Pentesting",
      iconName: "offensive",
      type: "cybersecurity",
      description:
        "Auditorías de seguridad técnica sobre aplicaciones web y redes siguiendo la metodología OWASP.",
      skills: [
        "Kali Linux",
        "Burp Suite",
        "OWASP ZAP",
        "Nmap",
        "Wireshark",
        "Metasploit",
        "Gobuster / ffuf",
        "Nikto",
        "Hydra",
        "John the Ripper",
        "Hashcat",
        "Ettercap",
        "Aircrack-ng",
        "OWASP Top 10",
      ],
    },
    {
      title: "Seguridad Defensiva, NGFW & SIEM",
      iconName: "defensive",
      type: "cybersecurity",
      description:
        "Monitorización en tiempo real, cortafuegos de nueva generación, detección de intrusiones y bastionado.",
      skills: [
        "OPNsense (NGFW)",
        "Wazuh (SIEM)",
        "Snort (IDS/IPS)",
        "ModSecurity (WAF)",
        "iptables / nftables / UFW",
        "Hardening Linux & Web",
        "Syslog & Logs",
        "Gestión de Incidentes",
      ],
    },
    {
      title: "Informática Forense & Criptografía",
      iconName: "forensics",
      type: "cybersecurity",
      description:
        "Adquisición y análisis forense digital (DFIR), análisis de memoria RAM y criptografía aplicada.",
      skills: [
        "Autopsy (Forense)",
        "Volatility (RAM)",
        "FTK Imager",
        "OpenSSL",
        "GnuPG (GPG)",
        "Criptografía (SHA-256 / RSA)",
        "Certificados X.509",
      ],
    },
    {
      title: "Sistemas & Redes",
      iconName: "systems",
      type: "cybersecurity",
      description:
        "Administración de entornos Linux, virtualización con contenedores y conectividad de redes segura.",
      skills: [
        "Linux (Ubuntu, Arch, Debian, Mint)",
        "Docker",
        "Nginx & Apache",
        "TCP/IP, DNS & Subnetting",
        "SSH & VPN (WireGuard / OpenVPN)",
        "Control RBAC & JWT",
      ],
    },
    {
      title: "Frontend & Diseño Web",
      iconName: "frontend",
      type: "development",
      description:
        "Desarrollo de interfaces reactivas, modernas y accesibles con diseño responsive cuidado al detalle.",
      skills: [
        "Vue.js (Vue 3 / Pinia)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Astro",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Backend & Arquitectura",
      iconName: "backend",
      type: "development",
      description:
        "Construcción de APIs REST seguras, arquitecturas MVC escalables y lógica de negocio en servidor.",
      skills: [
        "PHP",
        "Java / Spring Boot",
        "Spring Security",
        "Laravel",
        "REST APIs",
        "Supabase",
        "Arquitectura MVC",
        "Consultas Parametrizadas",
      ],
    },
    {
      title: "Bases de Datos & Persistencia",
      iconName: "databases",
      type: "development",
      description:
        "Modelado relacional, consultas optimizadas, persistencia de datos y prevención contra SQLi.",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MariaDB",
        "Spring Data JPA / Hibernate",
        "MySQLi",
        "SQL Seguro",
        "Normalización",
      ],
    },
    {
      title: "DevOps & Herramientas",
      iconName: "devops",
      type: "development",
      description:
        "Contenedorización de entornos, servidores web, control de versiones y utilidades de desarrollo.",
      skills: [
        "Docker & Docker Compose",
        "Cloudflare Pages",
        "Git",
        "GitHub & GitLab",
        "Postman",
        "NPM",
        "Figma",
      ],
    },
  ],
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
      title: "EcoNane",
      description:
        "Plataforma web en producción con enfoque AppSec (seguridad en el desarrollo) para clínica de ecografías 5D. Implementa mitigación de IDOR mediante validación PIN de 4 dígitos en enlaces de descarga, sanitización estricta contra XSS y spam (honeypot), cifrado SHA-256 y cabeceras OWASP en Cloudflare.",
      image: "/projects/econane.webp",
      imageAlt: "Captura de pantalla de la aplicación EcoNane",
      languages: ["Vue", "TypeScript", "TailwindCSS", "Supabase", "Cloudflare"],
      url: "https://econane.es",
    },
    {
      title: "Repair Shop",
      description:
        "SPA Full Stack con Vue, Spring Boot y MySQL, contenedorizada con Docker. Incorpora CRUD completo, arquitectura de seguridad stateless con Spring Security y JWT, control de acceso por roles (RBAC), hashing BCrypt y prevención de inyecciones SQL mediante Spring Data JPA.",
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
        "Plataforma Full Stack (PHP/MySQL) contenedorizada con Docker. Incluye dashboard analítico con gráficos interactivos, arquitectura MVC personalizada, control de sesiones y autenticación, sanitización de datos y protección estricta contra inyecciones SQL (SQLi) mediante sentencias preparadas con MySQLi.",
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
  ],
};

export default es;
