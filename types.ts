export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    link: string;
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
