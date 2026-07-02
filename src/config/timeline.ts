// Datos estructurales del timeline (locale-agnóstico).
// Los strings visibles (role/company/period/description/achievements)
// viven en messages/{locale}.json bajo Experience.items.{key}
export interface TimelineConfigItem {
    id: number;
    key: 'kudos' | 'unab' | 'marcelaPaz' | 'utfsm';
    startDate?: string; // 'YYYY-MM'
    endDate?: string;   // 'YYYY-MM' | undefined => presente
    type: 'work' | 'education';
    tech?: string[];
    highlight?: boolean;
    hasAchievements?: boolean;
    achievementsCount?: number;
}

export const TIMELINE_CONFIG: TimelineConfigItem[] = [
    {
        id: 1,
        key: 'kudos',
        startDate: '2024-11',
        type: 'work',
        highlight: true,
        tech: ['PHP', 'Go', 'JavaScript', 'JQuery', 'Git', 'Bootstrap', 'MySQL', 'MariaDB'],
        hasAchievements: true,
        achievementsCount: 8
    },
    {
        id: 2,
        key: 'unab',
        type: 'education'
    },
    {
        id: 3,
        key: 'marcelaPaz',
        startDate: '2024-07',
        endDate: '2024-11',
        type: 'work',
        tech: ['Java', 'Spring Boot', 'PostgreSQL'],
        hasAchievements: true,
        achievementsCount: 3
    },
    {
        id: 4,
        key: 'utfsm',
        type: 'education',
        tech: ['Laravel']
    }
];
