import { Project, Skill, SocialLink } from './types';

export const HERO_TEXT = {
    greeting: "Hola, soy Toval.",
    role: "Full Stack Developer",
    tagline: "Backend, bases de datos y sistemas que funcionan bajo presión.",
    cta: "Ver proyectos"
};

export const ABOUT_TEXT = `
Desarrollador Full Stack con foco en backend y arquitectura de datos. 
Trabajo construyendo sistemas empresariales que manejan millones de registros 
con tiempos de respuesta estrictos. Mi día a día incluye optimización SQL, 
integraciones entre sistemas, y modernizar código legacy sin romper lo que funciona.
Actualmente expandiendo mi stack hacia TypeScript y Node.js.
`;

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Motor de Transacciones Distribuido",
        description: "Sistema core para ERP Multi-Tenant capaz de gestionar escritura simultánea en 5+ bases de datos con Rollback atómico personalizado para garantizar integridad total.",
        tags: ["PHP 8.x", "SQL Optimization", "Architecture", "Legacy Refactoring"],
        imageUrl: "/images/project-erp.jpg",
        link: "#"
    },
    {
        id: 2,
        title: "API de Integración Internacional",
        description: "Desarrollo de API RESTful segura con implementación de JWT (Stateless) para sincronización de facturación en tiempo real entre sistemas de Chile y España.",
        tags: ["REST API", "JWT Auth", "JSON", "Data Integration"],
        imageUrl: "/images/project-api.jpg",
        link: "#"
    },
    {
        id: 3,
        title: "Arquitectura Microservicios Escolar",
        description: "Sistema de gestión académica fundado sobre una arquitectura de 8 microservicios, manejando lógica de evaluaciones y asistencia interna.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
        imageUrl: "/images/project-java.jpg",
        link: "#"
    }
];

export const SKILLS: Skill[] = [
    { name: 'PHP', level: 90, category: 'Backend' },
    { name: 'MySQL', level: 90, category: 'Database' },
    { name: 'SQL Optimization', level: 85, category: 'Database' },
    { name: 'JavaScript', level: 80, category: 'Language' },
    { name: 'REST APIs', level: 85, category: 'Backend' },
    { name: 'Java', level: 70, category: 'Backend' },
    { name: 'Spring Boot', level: 65, category: 'Backend' },
    { name: 'PostgreSQL', level: 60, category: 'Database' },
    { name: 'TypeScript', level: 40, category: 'Language' },
    { name: 'Laravel', level: 50, category: 'Backend' },
];

export const SOCIALS: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com/tovalh", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/cristobal-valladares", icon: "linkedin" },
    { platform: "Email", url: "crisvalladares98@gmail.com", icon: "mail" },
];