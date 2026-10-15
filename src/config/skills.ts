// Datos estructurales de los skills (locale-agnóstico).
// Los strings visibles viven en messages/{locale}.json bajo Skills.core.{id} y Skills.secondary.{id}

export type SkillType = 'backend' | 'database' | 'frontend' | 'learning';

export interface CoreSkillConfig {
    id: 'php' | 'laravel' | 'go' | 'mysql' | 'java' | 'javascript';
    type: SkillType;
}

export const CORE_SKILLS: CoreSkillConfig[] = [
    { id: 'php', type: 'backend' },
    { id: 'laravel', type: 'backend' },
    { id: 'go', type: 'backend' },
    { id: 'mysql', type: 'database' },
    { id: 'java', type: 'backend' },
    { id: 'javascript', type: 'frontend' }
];

export const SECONDARY_SKILL_IDS = [
    'git',
    'mariadb',
    'postgresql',
    'linux',
    'postman',
    'tailwind',
    'bootstrap',
    'gemini',
    'claudecode'
] as const;

export type SecondarySkillId = (typeof SECONDARY_SKILL_IDS)[number];
