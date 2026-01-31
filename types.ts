export interface Project {
    id: number;
    title: string;
    description: string;
    status: string;
    isPrivate: boolean;
    color: 'blue' | 'green' | 'orange' | 'red';
    stats: string;
    tags: string[];
}

export interface TechCard {
    id: string;
    name: string;
    role: string;
    type: 'backend' | 'database' | 'frontend' | 'learning';
    description: string;
    experience: string;
}

export interface Skill {
    name: string;
    level: number;
    category: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface TimelineItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    type: 'work' | 'education';
    tech?: string[];
    highlight?: boolean;
}
