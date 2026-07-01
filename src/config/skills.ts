// Datos estructurales de los skills (locale-agnóstico).
// Los strings visibles viven en messages/{locale}.json bajo Skills.core.{id} y Skills.secondary.{id}

export type SkillType = 'backend' | 'database' | 'frontend' | 'learning';

export interface CoreSkillConfig {
    id: 'php' | 'mysql' | 'java' | 'javascript' | 'git';
    type: SkillType;
}

export const CORE_SKILLS: CoreSkillConfig[] = [
    { id: 'php', type: 'backend' },
    { id: 'mysql', type: 'database' },
    { id: 'java', type: 'backend' },
    { id: 'javascript', type: 'frontend' },
    { id: 'git', type: 'backend' }
];

export const SECONDARY_SKILL_IDS = [
    'mariadb',
    'postgresql',
    'linux',
    'postman',
    'laravel',
    'tailwind',
    'bootstrap'
] as const;

export type SecondarySkillId = (typeof SECONDARY_SKILL_IDS)[number];
