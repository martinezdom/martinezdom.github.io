import type { Translation } from "../types.ts";

const en: Translation = {
  prefix: "en",
  nav: {
    experience: { title: "Experience", href: "#experience" },
    projects: { title: "Projects", href: "#projects" },
    skills: { title: "Skills", href: "#skills" },
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
  curriculumDev: "CV Web Development",
  curriculumCyber: "CV Cybersecurity",
  contactMe: "Contact me",
  developedBy: "Developed by",
  heroBadge: "Available for work",
  heroDescription:
    "From Alcoy, Spain. <span class='text-indigo-500 dark:text-yellow-200/90'>Web Developer</span> and <span class='text-indigo-500 dark:text-yellow-200/90'>cybersecurity specialist</span>. I love taking care of every detail to the maximum, creating the best experiences and that everything is <span class='text-indigo-500 dark:text-yellow-200/90'>secure</span>.",
  aboutMe: [
    "My name is Miguel Ángel, although in the technical community I'm also known as <strong><a href='https://github.com/martinezdom' target='_blank'>martinezdom</a></strong>. My passion for computing started at a young age tinkering with computers, which led me to build a solid foundation through <strong>Microcomputer Systems and Networks (SMR)</strong>, <strong>Web Application Development (DAW)</strong>, and a postgraduate <strong>Specialization in Cybersecurity</strong>.",
    "I have a versatile profile combining <strong>software development</strong> with <strong>technical security</strong> and <strong>systems administration</strong>. This comprehensive perspective enables me to approach projects prioritizing best practices, secure-by-design principles, and information protection.",
    "Something that defines me is my <strong>meticulous attention to detail</strong>. I am an analytical, <strong>self-taught</strong> professional driven to deeply understand how systems work from the inside out, constantly learning to tackle new technological challenges.",
  ],
  code: "Code",
  demo: "Demo",
  liveSite: "Visit Website",
  skillsTitle: "Technical Skills",
  skillsSubtitle:
    "Technical specialization in full-stack software development, systems infrastructure, and offensive/defensive security.",
  skillsFilters: {
    cybersecurity: "Cybersecurity",
    development: "Web Development",
  },
  skillsCategories: [
    {
      title: "Offensive Security & Pentesting",
      iconName: "offensive",
      type: "cybersecurity",
      description:
        "Technical security audits on web applications and networks following the OWASP methodology.",
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
      title: "Defensive Security, NGFW & SIEM",
      iconName: "defensive",
      type: "cybersecurity",
      description:
        "Real-time monitoring, Next-Generation Firewalls, intrusion detection, and system hardening.",
      skills: [
        "OPNsense (NGFW)",
        "Wazuh (SIEM)",
        "Snort (IDS/IPS)",
        "ModSecurity (WAF)",
        "iptables / nftables / UFW",
        "Linux & Web Hardening",
        "Syslog & Logs",
        "Incident Response",
      ],
    },
    {
      title: "Digital Forensics & Cryptography",
      iconName: "forensics",
      type: "cybersecurity",
      description:
        "Digital forensics acquisition and analysis (DFIR), RAM dump inspection, and applied cryptography.",
      skills: [
        "Autopsy (Forensics)",
        "Volatility (RAM)",
        "FTK Imager",
        "OpenSSL",
        "GnuPG (GPG)",
        "Cryptography (SHA-256 / RSA)",
        "X.509 Certificates",
      ],
    },
    {
      title: "Systems & Networks",
      iconName: "systems",
      type: "cybersecurity",
      description:
        "Linux environment administration, container virtualization, and secure network connectivity.",
      skills: [
        "Linux (Ubuntu, Arch, Debian, Mint)",
        "Docker",
        "Nginx & Apache",
        "TCP/IP, DNS & Subnetting",
        "SSH & VPN (WireGuard / OpenVPN)",
        "RBAC & JWT Controls",
      ],
    },
    {
      title: "Frontend & Web Design",
      iconName: "frontend",
      type: "development",
      description:
        "Building reactive, modern, accessible user interfaces with detailed responsive design.",
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
      title: "Backend & Architecture",
      iconName: "backend",
      type: "development",
      description:
        "Developing secure REST APIs, scalable MVC architectures, and robust server-side business logic.",
      skills: [
        "PHP",
        "Java / Spring Boot",
        "Spring Security",
        "Laravel",
        "REST APIs",
        "Supabase",
        "MVC Architecture",
        "Parameterized Queries",
      ],
    },
    {
      title: "Databases & Persistence",
      iconName: "databases",
      type: "development",
      description:
        "Relational data modeling, query optimization, structured persistence, and anti-SQLi measures.",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MariaDB",
        "Spring Data JPA / Hibernate",
        "MySQLi",
        "Secure SQL",
        "Normalization",
      ],
    },
    {
      title: "DevOps & Tools",
      iconName: "devops",
      type: "development",
      description:
        "Environment containerization, web servers, version control workflows, and developer tooling.",
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
      title: "EcoNane",
      description:
        "Production web platform with an AppSec (secure development) focus for a 5D ultrasound clinic. Features IDOR mitigation via 4-digit PIN verification on download links, strict sanitization against XSS and spam (honeypot), SHA-256 hashing, and Cloudflare OWASP security headers.",
      image: "/projects/econane.webp",
      imageAlt: "Screenshot of the EcoNane application",
      languages: ["Vue", "TypeScript", "TailwindCSS", "Supabase", "Cloudflare"],
      url: "https://econane.es",
    },
    {
      title: "Repair Shop",
      description:
        "Full Stack SPA with Vue, Spring Boot, and MySQL, containerized with Docker. Features complete CRUD operations, stateless security architecture with Spring Security & JWT, Role-Based Access Control (RBAC), BCrypt password hashing, and typed JPA queries against SQLi.",
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
      imageAlt: "Screenshot of the Repair Shop application",
      languages: ["Spring Boot", "Vue", "TypeScript", "TailwindCSS", "MySQL"],
      url: "http://localhost:5173/repairs",
    },
    {
      title: "Download Stats Panel",
      description:
        "Full Stack platform (PHP/MySQL) containerized with Docker. Features an analytical dashboard with interactive charts, custom MVC architecture, user session authentication, input sanitization, and strict SQL Injection (SQLi) prevention using MySQLi prepared statements.",
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/martinezdom/DownloadStatsPanel",
        },
      ],
      image: "/projects/dsp.webp",
      imageAlt: "Screenshot of the Download Stats Panel application",
      languages: ["PHP", "MySQL", "JavaScript", "CSS", "Docker"],
      url: "http://localhost/layout/backend/index.php?sec=home",
    },
    {
      title: "Dom Books",
      description:
        "Reactive SPA built with Vue 3 and TailwindCSS. Features global state management via Pinia, complex form validation (VeeValidate/Yup), and LocalStorage persistence.",
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/martinezdom/Dom-Books",
        },
      ],
      image: "/projects/dom_books.webp",
      imageAlt: "Screenshot of the Dom Books application",
      languages: ["Vue", "TailwindCSS"],
      url: "https://dom-books.vercel.app",
    },
  ],
  studies: [
    {
      date: "2025 - 2026",
      title: "Cybersecurity Specialization Course",
      institution: "CIP FP Batoi",
      description:
        "Advanced training in information security, web audits, digital forensics (DFIR), and systems hardening. Includes multi-site corporate infrastructure capstone project: Proxmox VE cluster deployment with OPNsense NGFW, Active Directory, and automated defensive SOC pipeline (Wazuh SIEM + n8n SOAR + TheHive 5).",
      link: {
        label: "View project on GitHub",
        url: "https://github.com/martinezdom/infraestructura-segura-soc",
      },
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
