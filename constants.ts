import { Project, Skill, SocialLink, TechCard, TimelineItem } from './types';

// ==================== HERO ====================
export const HERO_TEXT = {
    availableBadge: "Disponible para nuevos proyectos",
    statusBadge: "1M+ Registros · <2s latencia",
    tooltip: "Tranquilo, todo bajo control.",
    headline: "Hago que las bases de datos",
    headlineHighlight: "no exploten.",
    headlineNote: "(todavía)",
    subtitle: "Full Stack Developer · Backend · Sistemas que aguantan presión",
    ctaPrimary: "Ver qué he construido",
    ctaSecondary: "Hablemos"
};

// ==================== ABOUT ====================
export const ABOUT_TEXT = {
    sectionLabel: "Sobre Mí",
    badgeText: "SYSADMIN MODE",
    title: "Soy Cristóbal, pero todos me dicen",
    titleHighlight: "Toval",
    paragraphs: [
        "Desarrollador Full Stack con un foco en backend y bases de datos. Llevo más de un año y medio construyendo sistemas empresariales que manejan millones de registros sin pestañear, en una startup donde si algo se rompe, soy yo quien lo arregla.",
        "Me especializo en hacer que sistemas complejos funcionen bajo presión real: páginas respondiendo en menos de 2 segundos, arquitecturas multi-database, construcción de API entre países, y ese código legacy que nadie quiere tocar. Tengo la costumbre de dejar el código mejor de como lo encontré.",
        "Actualmente profundizando mis raíces en backend con Java y Spring Boot, consolidando buenas prácticas en PHP, y explorando sistemas embebidos como nuevo territorio técnico."
    ]
};

// ==================== HEADER ====================
export const NAV_LINKS = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
];

export const HEADER_TEXT = {
    logo: "Toval",
    contactButton: "Contáctame"
};

// ==================== CONTACT ====================
export const CONTACT_TEXT = {
    title: "¿Tienes algo que",
    titleHighlight: "no debería explotar?",
    description: "Escríbeme. Respondo rápido (a menos que esté apagando otro incendio o tomando café).",
    email: {
        title: "Email",
        subtitle: "Para contacto directo",
        href: "mailto:crisvalladares98@gmail.com"
    },
    linkedin: {
        title: "LinkedIn",
        badge: "PROFESSIONAL MODE",
        href: "https://linkedin.com/in/cristobal-valladares"
    },
    github: {
        title: "GitHub",
        subtitle: "Mis experimentos",
        href: "https://github.com/tovalh"
    },
    footer: {
        copyright: "Cristóbal Valladares.",
        madeWith: "Hecho con React, Tailwind y mucho café."
    }
};

// ==================== PROJECTS ====================
export const PROJECTS_TEXT = {
    title: "Lo que he construido",
    subtitle: "Spoiler: Sigue funcionando",
    privateLabel: "Proyecto Privado",
    viewCode: "Ver Código",
    systemStatus: "SYSTEM STATUS"
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Sistema Multi-Database",
        description: "5 bases de datos que necesitaban hablar entre sí sin destruirse mutuamente. Ahora se llevan bien y comparten datos en tiempo real.",
        tags: ["Java", "Spring Boot", "MySQL", "PostgreSQL"],
        status: "5 DBs Sincronizadas",
        isPrivate: true,
        color: 'blue',
        stats: "99.9% Uptime"
    },
    {
        id: 2,
        title: "API Internacional",
        description: "Orquestación de envíos y logística entre dos continentes. Gestiona aduanas, inventarios y dolores de cabeza automáticamente.",
        tags: ["Node.js", "Express", "MongoDB", "Redis"],
        status: "Chile ↔ España",
        isPrivate: false,
        color: 'green',
        stats: "200ms Latencia"
    },
    {
        id: 3,
        title: "Módulo Contable",
        description: "Un sistema que procesa millones de registros financieros. Si esto falla, los contadores lloran. Nadie ha llorado en 6 meses.",
        tags: ["PHP", "Laravel", "Oracle"],
        status: "1M+ Registros",
        isPrivate: true,
        color: 'orange',
        stats: "Zero Errors"
    },
    {
        id: 4,
        title: "Conciliación Bancaria",
        description: "Algoritmos que encuentran el centavo perdido entre miles de transacciones bancarias. Magia negra, básicamente.",
        tags: ["Python", "Pandas", "React"],
        status: "Matching Activo",
        isPrivate: true,
        color: 'red',
        stats: "Auto-Match"
    }
];


// ==================== SKILLS/STACK ====================
export const SKILLS_TEXT = {
    title: "Arsenal Técnico",
    subtitle: "Las herramientas que utilizo para construir soluciones robustas.",
    badge: "CORE STACK",
    secondaryTitle: "También trabajo con",
    experienceLabel: "Experiencia"
};

export const CORE_STACK: TechCard[] = [
    {
        id: "php",
        name: "PHP",
        role: "Backend Core",
        type: "backend",
        description: "Robusto, tipado y moderno. La base de la mayoría de mis sistemas de producción.",
        experience: "1.5 Años Prod."
    },
    {
        id: "mysql",
        name: "MySQL",
        role: "Persistence",
        type: "database",
        description: "Gestión eficiente de millones de registros. Optimización de índices y queries complejas.",
        experience: "1.5 Años Prod."
    },
    {
        id: "java",
        name: "Java / Spring",
        role: "Enterprise",
        type: "backend",
        description: "Para arquitecturas estrictas. Inyección de dependencias y seguridad de tipos.",
        experience: "6 meses"
    },
    {
        id: "javascript",
        name: "JavaScript",
        role: "Interaction",
        type: "frontend",
        description: "La goma que une todo. DOM manipulation, validaciones y lógica asíncrona.",
        experience: "1.5 Años"
    },
    {
        id: "git",
        name: "Git",
        role: "Version Control",
        type: "backend",
        description: "Control de versiones, flujos de trabajo en equipo y resolución de conflictos.",
        experience: "Diario"
    }
];

export const SECONDARY_STACK = [
    { id: "mariadb", name: "MariaDB" },
    { id: "postgresql", name: "PostgreSQL" },
    { id: "linux", name: "Linux" },
    { id: "postman", name: "Postman" },
    { id: "laravel", name: "Laravel (Basic)" },
    { id: "tailwind", name: "Tailwind CSS" },
    { id: "bootstrap", name: "Bootstrap" }
];

export const SOCIALS: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com/tovalh", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/cristobal-valladares", icon: "linkedin" },
    { platform: "Email", url: "crisvalladares98@gmail.com", icon: "mail" },
];

// ==================== EXPERIENCE ====================
export const EXPERIENCE_TEXT = {
    title: "Historial de",
    titleHighlight: "Batalla",
    legendEducation: "Estudios",
    legendWork: "Trabajo",
    endLabel: "START"
};

export const TIMELINE_DATA: TimelineItem[] = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Kudos · Startup ERP",
        period: "Nov 2024 - Presente",
        startDate: "2024-11",
        description: "Construyendo un ERP desde adentro en una startup donde 'no funciona' no es una opción. Desarrollo de módulos críticos con PHP y JavaScript, manejo de bases de datos relacionales bajo presión real y versionado con Git en equipo. El tipo que también toca el frontend cuando hace falta.",
        type: 'work',
        tech: ["PHP", "JavaScript", "JQuery", "Git", "Bootstrap", "MySQL", "MariaDB"],
        highlight: true
    },
    {
        id: 2,
        role: "Ingeniería en Informática",
        company: "Universidad Andrés Bello",
        period: "2025 - Presente",
        description: "Profundizando en arquitectura de software, algoritmos y teoría que me permite entender cómo construir sistemas más sólidos y escalables. El viaje largo, pero con destino claro.",
        type: 'education'
    },
    {
        id: 3,
        role: "Developer",
        company: "Colegio Marcela Paz",
        period: "Jul 2024 - Nov 2024",
        startDate: "2024-07",
        endDate: "2024-11",
        description: "Primera experiencia laboral real: sistemas para un colegio con Java y Spring Boot conectado a PostgreSQL. Aprendí que los datos de alumnos no pueden explotar y que los profesores no toleran bugs en viernes.",
        type: 'work',
        tech: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
        id: 4,
        role: "Técnico en Informática",
        company: "Universidad Técnica Federico Santa María",
        period: "2023 - 2024",
        description: "Donde todo empezó. Bases sólidas en programación, redes y sistemas. El lugar que convirtió la curiosidad en una carrera.",
        type: 'education',
        tech: ["Laravel"]
    }
];