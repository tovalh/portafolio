// Datos estructurales de proyectos (locale-agnóstico).
// Los strings visibles viven en messages/{locale}.json bajo Projects.items.{key}

export interface ProjectConfig {
    id: number;
    key: 'laraVentas' | 'notifService' | 'finMail' | 'healthMonitor';
    tags: string[];
    isPrivate: boolean;
    color: 'blue' | 'green' | 'orange' | 'red';
    icon?: 'database' | 'cpu' | 'code' | 'wallet' | 'radio' | 'activity';
    slug?: string;    // ruta del case study: /proyectos/{slug}
    github?: string;
    demo?: string;
    thumb?: string;   // /thumbnails/x.svg
}

export const PROJECTS_CONFIG: ProjectConfig[] = [
    {
        id: 1,
        key: 'laraVentas',
        tags: ['Laravel', 'Inertia', 'Vue', 'MySQL', 'PHP'],
        isPrivate: false,
        color: 'orange',
        icon: 'database',
        slug: 'laraventas',
        github: 'https://github.com/tovalh/LaraVentas',
        demo: 'https://laraventas-production.up.railway.app',
        thumb: '/thumbnails/laraventas.svg'
    },
    {
        id: 2,
        key: 'notifService',
        tags: ['Go', 'WebSocket', 'HMAC', 'MySQL', 'Docker'],
        isPrivate: false,
        color: 'green',
        icon: 'radio',
        slug: 'notif-service',
        github: 'https://github.com/tovalh/notif_service',
        demo: 'https://laraventas-production.up.railway.app',
        thumb: '/thumbnails/notif_service.svg'
    },
    {
        id: 3,
        key: 'finMail',
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Gmail API', 'Gemini'],
        isPrivate: false,
        color: 'blue',
        icon: 'code',
        slug: 'finmail',
        github: 'https://github.com/tovalh/finmail',
        thumb: '/thumbnails/finmail.svg'
    },
    {
        id: 4,
        key: 'healthMonitor',
        tags: ['Go', 'Telegram', 'SMTP', 'Docker', 'Concurrency'],
        isPrivate: false,
        color: 'red',
        icon: 'activity',
        slug: 'health-status',
        github: 'https://github.com/tovalh/micro-status',
        thumb: '/thumbnails/health_status.svg'
    }
];
