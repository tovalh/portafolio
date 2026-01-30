import { Project, Skill, SocialLink } from './types';

export const HERO_TEXT = {
    greeting: "Hola, soy Toval.",
    role: "Backend Developer & Data Architect",
    tagline: "Especialista en integridad de datos, optimización SQL y modernización de sistemas críticos.",
    cta: "Ver Mis Soluciones"
};

export const ABOUT_TEXT = `
  Soy un Desarrollador Full Stack con un enfoque profundo en el Backend y la Arquitectura de Software. 
  Más allá de escribir código, diseño soluciones para problemas complejos: desde orquestar transacciones 
  distribuidas en múltiples servidores hasta optimizar consultas en bases de datos masivas bajo la regla 
  de los "2 segundos". Combino la disciplina de la arquitectura Microservicios (Java) con el pragmatismo 
  de entornos de alto tráfico (PHP), transformando código legacy en sistemas modernos, escalables y seguros.
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
    { name: 'Backend Logic & Architecture', level: 90, category: 'Backend' },
    { name: 'SQL & DB Optimization', level: 95, category: 'Database' },
    { name: 'PHP (Legacy to Modern)', level: 90, category: 'Language' },
    { name: 'Java / Spring Boot', level: 80, category: 'Backend' },
    { name: 'API REST & Security (JWT)', level: 85, category: 'Backend' },
    { name: 'JavaScript/TypeScript', level: 70, category: 'Language' },
];

export const SOCIALS: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com/tu-usuario", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/tu-usuario", icon: "linkedin" },
    { platform: "Email", url: "crisvalladares98@gmail.com", icon: "mail" },
];