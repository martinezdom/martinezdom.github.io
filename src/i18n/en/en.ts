import type { Translation } from "../types.ts";

const en: Translation = {
  prefix: "en",
  nav: {
    experience: { title: "Experience", href: "#experience" },
    projects: { title: "Projects", href: "#projects" },
    studies: { title: "Studies", href: "#studies" },
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
  aboutMe: [
    "My name is Miguel Ángel, although I'm also known as <em>Tartanas</em>.",
    "Since I was very young, I loved tinkering with computers, which led me to train in the world of computing.",
    "Currently, I continue my training, but this time as a cybersecurity specialist. It's different from what I was used to, but I actually like it a lot and it motivates me to keep learning every day.",
    "Something that characterizes me is that I like to take care of every small detail of what I do; I don't like to see small flaws that disrupt the user experience, even minimally.",
    "My goal will always be to keep learning as much as possible, to be able to help others and, above all, to work as a team.",
  ],
  code: "Code",
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
        "Reactive SPA built with Vue 3 and TailwindCSS. Features global state management via Pinia, complex form validation (VeeValidate/Yup), and LocalStorage persistence.",
      github: "https://github.com/martinezdom/Dom-Books",
      image: "/projects/dom_books.webp",
      imageAlt: "Screenshot of the Dom Books application",
      languages: ["Vue", "TailwindCSS"],
      url: "http://localhost:5173",
    },
    {
      title: "Download Stats Panel",
      description:
        "Full Stack platform (PHP/MySQL) containerized with Docker. Includes an analytical dashboard with interactive charts, secure authentication, and custom MVC architecture.",
      github: "https://github.com/martinezdom/DownloadStatsPanel",
      image: "/projects/dsp.webp",
      imageAlt: "Screenshot of the Download Stats Panel application",
      languages: ["PHP", "MySQL", "JavaScript", "CSS", "Docker"],
      url: "http://localhost/layout/backend/index.php?sec=home",
    },
  ],
  studies: [
    {
      date: "2025 - now",
      title: "Cybersecurity Specialization Course",
      institution: "CIP FP Batoi",
      description:
        "Cybersecurity specialization course. Advanced training in information security, including vulnerability analysis, incident management, data protection, and infrastructure.",
    },
    {
      date: "2023 - 2025",
      title: "Web Application Development",
      institution: "CIP FP Batoi",
      description:
        "Higher Vocational Training in Web Application Development. Learning technologies such as HTML, CSS, JavaScript, PHP, MySQL, and frameworks like Vue.js, Laravel, or Springboot.",
    },
    {
      date: "2021 - 2023",
      title: "Microcomputer Systems and Networks",
      institution: "CIP FP Batoi",
      description:
        "Intermediate Vocational Training in Microcomputer Systems and Networks. Training in installation, configuration, and maintenance of computer systems, networks, and associated services, as well as use in Linux and Windows Server environments.",
    },
    {
      date: "2017 - 2021",
      title: "Compulsory Secondary Education",
      institution: "IES Andreu Sempere",
      description:
        "Compulsory Secondary Education (ESO) at IES Andreu Sempere in Alcoy. General training in various subjects.",
    },
  ],
};

export default en;
