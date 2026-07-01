// Datos estructurales de proyectos (locale-agnóstico).
// Los strings visibles viven en messages/{locale}.json bajo Projects.items.{key}

export interface ProjectConfig {
    id: number;
    key: 'multiDb' | 'apiInternational' | 'accounting' | 'banking';
    tags: string[];
    isPrivate: boolean;
    color: 'blue' | 'green' | 'orange' | 'red';
}

export const PROJECTS_CONFIG: ProjectConfig[] = [
    {
        id: 1,
        key: 'multiDb',
        tags: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL'],
        isPrivate: true,
        color: 'blue'
    },
    {
        id: 2,
        key: 'apiInternational',
        tags: ['Node.js', 'Express', 'MongoDB', 'Redis'],
        isPrivate: false,
        color: 'green'
    },
    {
        id: 3,
        key: 'accounting',
        tags: ['PHP', 'Laravel', 'Oracle'],
        isPrivate: true,
        color: 'orange'
    },
    {
        id: 4,
        key: 'banking',
        tags: ['Python', 'Pandas', 'React'],
        isPrivate: true,
        color: 'red'
    }
];
