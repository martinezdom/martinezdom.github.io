import type { Translation } from "../types.ts";

const va: Translation = {
  prefix: "va",
  nav: {
    experience: { title: "Experiència", href: "#experiencia" },
    projects: { title: "Projectes", href: "#projectes" },
    skills: { title: "Habilitats", href: "#habilitats" },
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
  curriculumDev: "CV Desenvolupament Web",
  curriculumCyber: "CV Ciberseguretat",
  contactMe: "Contacta'm",
  developedBy: "Desenvolupat per",
  heroBadge: "Disponible per a treballar",
  heroDescription:
    "D'Alcoi, Espanya. <span class='text-indigo-500 dark:text-yellow-200/90'>Desenvolupador Web</span> i <span class='text-indigo-500 dark:text-yellow-200/90'>especialista en ciberseguretat</span>. M'agrada cuidar cada detall al màxim, crear les millors experiències i que tot siga <span class='text-indigo-500 dark:text-yellow-200/90'>segur</span>.",
  aboutMe: [
    "Em dic Miguel Ángel encara que també em coneixen com a <strong><a href='https://github.com/martinezdom' target='_blank'>martinezdom</a></strong>.",
    "Des de ben menut, m'agradava estar trastejant amb l'ordinador, la qual cosa m'ha portat a formar-me en el <strong>món de la informàtica</strong>.",
    "Compto amb formació especialitzada en <strong>ciberseguretat</strong>, la qual cosa em permet aportar un enfocament centrat en la seguretat, bones pràctiques i protecció en cada desenvolupament que realitze.",
    "Una cosa que em caracteritza és que m'agrada <strong>cuidar cada xicotet detall del que faig</strong>, no m'agrada veure xicolets falles que molesten l'experiència de l'usuari encara que siga mínimament.",
    "El meu objectiu sempre serà <strong>seguir aprenent lo màxim possible</strong> y poder ajudar als altres.",
    "Sóc molt <strong>autodidacte</strong>, m'agrada sempre aprendre coses noves i <strong>aprofundir més</strong> en lo que ja conec.",
    "En l'era de la <strong>IA</strong>, tot i que està en auge, procuro <strong>mantenir-me al dia</strong> i <strong>saber utilitzar-la</strong>, però realment l'use només quan realment m'<strong>estalvia temps</strong>. No sóc gaire partidari de <strong>abusar-ne</strong>, si no ho entenc, consulte la <strong>documentació oficial</strong> o cerque en fòrums per assegurar-me que entenc tot el que escric.",
  ],
  code: "Codi",
  demo: "Demo",
  liveSite: "Visitar Web",
  skillsTitle: "Habilitats Tècniques",
  skillsSubtitle:
    "Especialització tècnica en desenvolupament de programari full-stack, infraestructura de sistemes i seguretat ofensiva/defensiva.",
  skillsFilters: {
    all: "Totes",
    cybersecurity: "Ciberseguretat",
    development: "Desenvolupament Web",
  },
  skillsCategories: [
    {
      title: "Seguretat Ofensiva & Pentesting",
      iconName: "offensive",
      type: "cybersecurity",
      description:
        "Auditories de seguretat tècnica sobre aplicacions web i xarxes seguint la metodologia OWASP.",
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
      title: "Seguretat Defensiva, NGFW & SIEM",
      iconName: "defensive",
      type: "cybersecurity",
      description:
        "Monitoratge en temps real, tallafocs de nova generació, detecció d'intrusions i bastió de sistemes.",
      skills: [
        "OPNsense (NGFW)",
        "Wazuh (SIEM)",
        "Snort (IDS/IPS)",
        "ModSecurity (WAF)",
        "iptables / nftables / UFW",
        "Hardening Linux & Web",
        "Syslog & Registres",
        "Gestió d'Incidents",
      ],
    },
    {
      title: "Informàtica Forense & Criptografia",
      iconName: "forensics",
      type: "cybersecurity",
      description:
        "Adquisició i anàlisi forense digital (DFIR), anàlisi de memòria RAM i criptografia aplicada.",
      skills: [
        "Autopsy (Forense)",
        "Volatility (RAM)",
        "FTK Imager",
        "OpenSSL",
        "GnuPG (GPG)",
        "Criptografia (SHA-256 / RSA)",
        "Certificats X.509",
      ],
    },
    {
      title: "Sistemes & Xarxes",
      iconName: "systems",
      type: "cybersecurity",
      description:
        "Administració d'entorns Linux, virtualització amb contenidors i connectivitat de xarxes segura.",
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
      title: "Frontend & Disseny Web",
      iconName: "frontend",
      type: "development",
      description:
        "Desenvolupament d'interfícies reactives, modernes i accessibles amb disseny responsive cuidat al detall.",
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
        "Construcció d'APIs REST segures, arquitectures MVC escalables i lògica de negoci al servidor.",
      skills: [
        "PHP",
        "Java / Spring Boot",
        "Spring Security",
        "Laravel",
        "REST APIs",
        "Supabase",
        "Arquitectura MVC",
        "Consultes Parametritzades",
      ],
    },
    {
      title: "Bases de Dades & Persistència",
      iconName: "databases",
      type: "development",
      description:
        "Modelatge relacional, consultes optimitzades, persistència de dades i prevenció contra SQLi.",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MariaDB",
        "Spring Data JPA / Hibernate",
        "MySQLi",
        "SQL Segur",
        "Normalització",
      ],
    },
    {
      title: "DevOps & Eines",
      iconName: "devops",
      type: "development",
      description:
        "Contenidorització d'entorns, servidors web, control de versions i utilitats de desenvolupament.",
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
      title: "EcoNane",
      description:
        "Plataforma web en producció amb enfocament AppSec (seguretat en el desenvolupament) per a clínica d'ecografies 5D. Implementa mitigació d'IDOR mitjançant validació PIN de 4 dígits en enllaços de descàrrega, sanitització estricta contra XSS i spam (honeypot), xifratge SHA-256 i capçaleres OWASP en Cloudflare.",
      image: "/projects/econane.webp",
      imageAlt: "Captura de pantalla de l'aplicació EcoNane",
      languages: ["Vue", "TypeScript", "TailwindCSS", "Supabase", "Cloudflare"],
      url: "https://econane.es",
    },
    {
      title: "Repair Shop",
      description:
        "SPA Full Stack amb Vue, Spring Boot i MySQL, contenidoritzada amb Docker. Incorpora CRUD complet, arquitectura de seguretat stateless amb Spring Security i JWT, control d'accés basat en rols (RBAC), xifratge de contrasenyes amb BCrypt i consultes JPA tipades contra SQLi.",
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
      imageAlt: "Captura de pantalla de l'aplicació Repair Shop",
      languages: ["Spring Boot", "Vue", "TypeScript", "TailwindCSS", "MySQL"],
      url: "http://localhost:5173/repairs",
    },
    {
      title: "Download Stats Panel",
      description:
        "Plataforma Full Stack (PHP/MySQL) contenidoritzada amb Docker. Inclou dashboard analític amb gràfics interactius, arquitectura MVC pròpia, control de sessions i autenticació, sanitització de dades i protecció estricta contra injeccions SQL (SQLi) mitjançant sentències preparades amb MySQLi.",
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/martinezdom/DownloadStatsPanel",
        },
      ],
      image: "/projects/dsp.webp",
      imageAlt: "Captura de pantalla de l'aplicació Download Stats Panel",
      languages: ["PHP", "MySQL", "JavaScript", "CSS", "Docker"],
      url: "http://localhost/layout/backend/index.php?sec=home",
    },
    {
      title: "Dom Books",
      description:
        "SPA reactiva desenvolupada amb Vue 3 i TailwindCSS. Implementa gestió d'estat global amb Pinia, validació de formularis complexos (VeeValidate/Yup) i persistència en LocalStorage.",
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/martinezdom/Dom-Books",
        },
      ],
      image: "/projects/dom_books.webp",
      imageAlt: "Captura de pantalla de l'aplicació Dom Books",
      languages: ["Vue", "TailwindCSS"],
      url: "http://localhost:5173",
    },
  ],
  studies: [
    {
      date: "2025 - 2026",
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
  ],
};

export default va;
