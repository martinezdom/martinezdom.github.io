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
    "My name is Miguel Ángel, although I'm also known as <strong><a href='https://github.com/martinezdom' target='_blank'>martinezdom</a></strong>.",
    "Since I was very young, I loved tinkering with computers, which led me to train in the <strong>world of computing</strong>.",
    "I have specialized training in <strong>cybersecurity</strong>, allowing me to bring a security-focused mindset, best practices, and protection to every project I build.",
    "Something that characterizes me is that I like to <strong>take care of every small detail of what I do</strong>, I don't like to see small flaws that disrupt the user experience, even minimally.",
    "My goal will always be to <strong>keep learning as much as possible</strong> and to be able to help others.",
    "I am very <strong>self-taught</strong>, I like to always learn new things and <strong>deepen my knowledge</strong> of what I already know.",
    "In the age of <strong>AI</strong>, even though it's booming, I make a point of <strong>staying updated</strong> and <strong>knowing how to use it</strong>, but actually I only use it when it truly <strong>saves me time</strong>. I'm not a fan of <strong>overusing it</strong>, when I don't understand something, I prefer to check the <strong>official documentation</strong> or search forums to make sure I fully understand what I write.",
  ],
  code: "Code",
  demo: "Demo",
  liveSite: "Visit Website",
  skillsTitle: "Technical Skills",
  skillsSubtitle:
    "Technical specialization in full-stack software development, systems infrastructure, and offensive/defensive security.",
  skillsFilters: {
    all: "All",
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
      url: "http://localhost:5173",
    },
  ],
  studies: [
    {
      date: "2025 - 2026",
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
