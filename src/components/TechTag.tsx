import React from 'react';
import {
    Go, Docker, MySQL, React as ReactIcon, NodeJs, MongoDB, Redis, Python,
    TypeScript, Oracle, Spring, PHP, Laravel, Git, Telegram, PostgreSQL,
    MariaDB, TailwindCSS, Bootstrap5, Java, JavaScript, VueJs, Gmail
} from 'developer-icons';
import {
    Radio, Fingerprint, KeyRound, Send, GitFork, Sparkles, Layers,
    type LucideIcon
} from 'lucide-react';

type IconType = React.ComponentType<{ size?: number; className?: string }>;

// Íconos de marca (colores oficiales), mismo set que el Arsenal Técnico.
const BRAND_ICONS: Record<string, IconType> = {
    'go': Go,
    'docker': Docker,
    'mysql': MySQL,
    'react': ReactIcon,
    'vue': VueJs,
    'gmail api': Gmail,
    'gmail': Gmail,
    'node.js': NodeJs,
    'nodejs': NodeJs,
    'mongodb': MongoDB,
    'redis': Redis,
    'python': Python,
    'typescript': TypeScript,
    'oracle': Oracle,
    'spring boot': Spring,
    'spring': Spring,
    'php': PHP,
    'laravel': Laravel,
    'git': Git,
    'telegram': Telegram,
    'postgresql': PostgreSQL,
    'mariadb': MariaDB,
    'tailwind': TailwindCSS,
    'bootstrap': Bootstrap5,
    'java': Java,
    'javascript': JavaScript,
};

// Conceptos/protocolos sin logo de marca -> ícono genérico (lucide).
const CONCEPT_ICONS: Record<string, LucideIcon> = {
    'websocket': Radio,
    'hmac': Fingerprint,
    'jwt': KeyRound,
    'smtp': Send,
    'concurrency': GitFork,
    'gemini': Sparkles,
    'inertia': Layers,
};

export default function TechTag({ label }: { label: string }) {
    const key = label.toLowerCase();
    const Brand = BRAND_ICONS[key];
    const Concept = CONCEPT_ICONS[key];

    return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-xs font-medium text-dark/70 dark:text-white/70">
            {Brand ? <Brand size={15} /> : Concept ? <Concept size={14} /> : null}
            {label}
        </span>
    );
}
