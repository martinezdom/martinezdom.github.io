import type { Translation } from "../types.ts";

const en: Translation = {
  prefix: "en",
  nav: {
    experience: { title: "Experience", href: "#experience" },
    projects: { title: "Projects", href: "#projects" },
    about: { title: "About me", href: "#about-me" },
    contact: { title: "Contact", href: "#contact" },
  },
  castilian: "Castilian",
  english: "English",
  valencian: "Valencian",
  themes: {
    light: "Light",
    dark: "Dark",
    system: "System",
    selectorText: "Select Theme",
  },
  curriculum: "Curriculum",
  contactMe: "Contact me",
  developedBy: "Developed by",
  heroBadge: "Available for work",
  heroDescription:
    "From Alcoy, Spain. <span class='text-indigo-500 dark:text-yellow-200/90'>Web Developer</span>. I love taking care of every detail to the maximum and creating unique experiences.",
  experience: [
    {
      date: "March 2025 - June 2025",
      title: "Web Developer",
      company: "Sollutia",
      description:
        "Completed internship for the Higher Technician in Web Application Development (DAW) at Sollutia. Built a website from scratch for the final degree project and performed corrective maintenance on existing projects, using key technologies such as PHP, JavaScript, and MySQL.",
    },
    {
      date: "March 2023 - June 2023",
      title: "Web Developer",
      company: "Coratge",
      description:
        "Completed internship for the Technician in Microcomputer Systems and Networks (SMR) at Coratge. Developed a corporate website from scratch using WordPress, covering everything from initial hosting and domain configuration to customization and final deployment.",
    },
  ],
  projects: [
    {
      title: "Dom Books",
      description:
        "Reactive SPA built with Vue 3 and TailwindCSS. Features global state management via Pinia, complex form validation (VeeValidate/Yup), and LocalStorage persistence. Designed with a reusable component-oriented architecture.",
      github: "https://github.com/martinezdom/Dom-Books",
      image: "/projects/dombooks.webp",
      imageAlt: "Screenshot of the Dom Books application",
    },
    {
      title: "Download Stats Panel",
      description:
        "Full Stack platform (PHP/MySQL) containerized with Docker. Includes an analytical dashboard with interactive charts, secure authentication, and custom MVC architecture. Deployable in Apache/Nginx environments with Virtual Host configuration.",
      github: "https://github.com/martinezdom/DownloadStatsPanel",
      image: "/projects/downloadstatspanel.webp",
      imageAlt: "Screenshot of the Download Stats Panel application",
    },
  ],
};

export default en;
