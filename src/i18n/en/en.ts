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
  experienceSection: {
    date: "Date",
    title: "Title",
    company: "Company",
    description: "Description",
  },
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
};

export default en;
