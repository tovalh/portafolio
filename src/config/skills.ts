// Datos estructurales de los skills (locale-agnóstico).
// Los strings visibles viven en messages/{locale}.json bajo Skills.core.{id} y Skills.secondary.{id}

export type SkillType = 'backend' | 'database' | 'frontend' | 'learning';

export interface CoreSkillConfig {
    id: 'php' | 'laravel' | 'go' | 'mysql' | 'java' | 'javascript';
    type: SkillType;
    // La experiencia se calcula desde estas fechas (formato YYYY-MM, igual que
    // el timeline). Sin `end` = hasta hoy (se actualiza solo).
    start: string;
    end?: string;
}

export const CORE_SKILLS: CoreSkillConfig[] = [
    { id: 'php', type: 'backend', start: '2024-11' },        // desde Kudos → hoy
    { id: 'laravel', type: 'backend', start: '2025-07' },    // desde jul 2025 → hoy
    { id: 'go', type: 'backend', start: '2026-01' },         // desde ene 2026 → hoy
    { id: 'mysql', type: 'database', start: '2024-11' },     // desde Kudos → hoy
    { id: 'java', type: 'backend', start: '2024-07', end: '2024-11' }, // Marcela Paz
    { id: 'javascript', type: 'frontend', start: '2024-11' } // desde Kudos → hoy
];

export const SECONDARY_SKILL_IDS = [
    'git',
    'mariadb',
    'postgresql',
    'linux',
    'postman',
    'tailwind',
    'bootstrap'
] as const;

export type SecondarySkillId = (typeof SECONDARY_SKILL_IDS)[number];
