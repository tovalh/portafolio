import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import TechTag from '../../../../components/TechTag';

// Esqueleto de página de caso. El contenido vive acá (bilingüe) para que lo
// edites libremente; si más adelante querés, migralo a messages/{locale}.json.

type Locale = 'es' | 'en';

interface Decision {
    title: string;
    detail: string;
}

interface CaseContent {
    title: string;
    codename: string;
    tagline: string;
    tags: string[];
    github?: string;
    demo?: string;
    thumb: string;
    problemTitle: string;
    problem: string;
    solutionTitle: string;
    solution: string | string[]; // string = prosa; string[] = bullets
    decisionsTitle: string;
    decisions: Decision[];
    proofTitle: string;
    proofCaption: string;
    media?: { src: string; caption: string }[]; // videos con su pie; vacío = placeholder
    backLabel: string;
}

const CASE_STUDIES: Record<string, Record<Locale, CaseContent>> = {
    'laraventas': {
        es: {
            title: 'Plataforma ERP SaaS',
            codename: 'LaraVentas',
            tagline: 'Un ERP multi-empresa completo, con sus propios microservicios alrededor.',
            tags: ['Laravel', 'Inertia', 'Vue', 'MySQL', 'PHP', 'Docker'],
            github: 'https://github.com/tovalh/LaraVentas',
            demo: 'https://laraventas-production.up.railway.app',
            thumb: '/thumbnails/laraventas_arch.svg',
            problemTitle: 'El problema',
            problem: 'Trabajaba a diario en sistemas reales, en producción, resolviendo cosas de verdad. Pero cuando llegaban las entrevistas y me preguntaban por mi trabajo, me quedaba con las manos vacías: no podía mostrar el sistema ni el código, todo era propietario. Estaba atrapado —construyendo cosas serias todos los días y, para afuera, sin absolutamente nada que enseñar—. Todo mi trabajo era invisible.',
            solutionTitle: 'La solución',
            solution: 'Se me ocurrió construir un demo para dar una muestra de mi sistema —dejando las interacciones reales y más importantes, pero con datos ficticios—, algo que sí pudiera enseñar en una entrevista. Y ya que estaba, aproveché para mejorar y hacer algo interesante: en vez de replicar el original en PHP nativo, lo refactoricé a Laravel, lo volví un poco más complejo y aprendí a usar bien el framework en el proceso. Elegí Inertia + Vue para tener una sola app que mantener, y resolví lo multi-empresa con un global scope para que el aislamiento sea automático. Terminó siendo fiel a lo que construyo a diario, pero algo que cualquiera puede abrir y ver funcionando.',
            decisionsTitle: 'Decisiones técnicas',
            decisions: [
                { title: 'Inertia en vez de API REST separada', detail: 'Una sola app: servidor + Vue en el cliente, sin mantener dos capas ni versionar endpoints.' },
                { title: 'Multi-empresa por global scope', detail: 'El aislamiento por empresa es automático; imposible olvidarse de filtrar y mostrar datos ajenos.' },
                { title: 'Reescritura completa a Laravel', detail: 'El original es PHP nativo; acá se aplicaron buenas prácticas desde cero: capas, validación y convenciones claras.' },
                { title: 'Docker + una sola base por el .env', detail: 'Una imagen reproducible en Railway y una única conexión en el .env, sin las conexiones cruzadas del original. Levantar el demo es un push.' },
            ],
            proofTitle: 'En vivo',
            proofCaption: 'Dashboard del ERP con datos en vivo y notificaciones en tiempo real.',
            backLabel: 'Volver a proyectos',
        },
        en: {
            title: 'SaaS ERP Platform',
            codename: 'LaraVentas',
            tagline: 'A full multi-tenant ERP, with its own microservices around it.',
            tags: ['Laravel', 'Inertia', 'Vue', 'MySQL', 'PHP', 'Docker'],
            github: 'https://github.com/tovalh/LaraVentas',
            demo: 'https://laraventas-production.up.railway.app',
            thumb: '/thumbnails/laraventas_arch.svg',
            problemTitle: 'The problem',
            problem: 'I worked daily on real systems, in production, solving actual problems. But when interviews came and they asked about my work, I was left empty-handed: I couldn\'t show the system or the code, it was all proprietary. I was trapped —building serious things every day and, on the outside, with nothing at all to show. All my work was invisible.',
            solutionTitle: 'The solution',
            solution: 'I decided to build a demo to give a taste of my system —keeping the real, most important interactions but with fake data—, something I could actually show in an interview. And while I was at it, I used it to improve and make something interesting: instead of replicating the original in plain PHP, I refactored it to Laravel, made it a bit more complex and learned to use the framework properly along the way. I chose Inertia + Vue to keep a single app to maintain, and solved multi-tenancy with a global scope so isolation is automatic. It ended up faithful to what I build every day, but something anyone can open and see running.',
            decisionsTitle: 'Technical decisions',
            decisions: [
                { title: 'Inertia instead of a separate REST API', detail: 'One app: server + Vue on the client, no two layers to maintain and no endpoints to version.' },
                { title: 'Multi-tenant via a global scope', detail: 'Per-company isolation is automatic; impossible to forget to filter and leak another company\'s data.' },
                { title: 'Full rewrite to Laravel', detail: 'The original is plain PHP; here good practices were applied from scratch: layers, validation and clear conventions.' },
                { title: 'Docker + a single database via .env', detail: 'A reproducible image on Railway and one connection in the .env, without the original\'s cross-database wiring. Spinning up the demo is a push.' },
            ],
            proofTitle: 'Live',
            proofCaption: 'The ERP dashboard with live data and realtime notifications.',
            backLabel: 'Back to projects',
        },
    },
    'notif-service': {
        es: {
            title: 'Notificaciones en Tiempo Real',
            codename: 'notif_service',
            tagline: 'Que el usuario se entere en el momento, sin recargar la página.',
            tags: ['Go', 'WebSocket', 'HMAC', 'MySQL', 'Docker'],
            github: 'https://github.com/tovalh/notif_service',
            demo: 'https://laraventas-production.up.railway.app',
            thumb: '/thumbnails/notif_service.svg',
            problemTitle: 'El problema',
            problem: 'El ERP no avisaba nada en el momento. Si alguien registraba un pago o una venta, el resto del equipo se enteraba recién cuando recargaba la página, y muchos ni sabían que tenían que recargar. Eso se traducía en gente trabajando con datos viejos: preguntaban "¿ya se pagó esto?" cuando ya estaba pagado, repetían acciones que otro ya había hecho, o pensaban que el sistema se había quedado pegado. El clásico era el usuario apretando F5 cada dos minutos por las dudas. Un sistema que se siente muerto genera desconfianza, y esa desconfianza cuesta revertirla.',
            solutionTitle: 'La solución',
            solution: 'El punto de partida era claro: no quería que el usuario tuviera que recargar para enterarse. Descarté el polling puro del navegador —caro y con latencia— y me fui a WebSocket, que mantiene la conexión abierta y empuja el evento apenas ocurre. La duda real vino después: ¿y si el servicio que empuja se cae justo cuando pasa algo importante? Ahí decidí no confiar todo al push, y sumé un poller que cada pocos segundos revisa lo que pudo perderse. Con eso el push da la velocidad y el polling da la garantía. Para no acoplarlo a Laravel, en vez de compartir la sesión hice que el backend firme un token HMAC que el servicio en Go valida por su cuenta: dos servicios independientes que igual confían entre sí. Y el aislamiento por empresa lo puse en el hub, no en cada mensaje, para que un usuario nunca reciba lo que no es suyo.',
            decisionsTitle: 'Decisiones técnicas',
            decisions: [
                { title: 'WebSocket + polling, no solo push', detail: 'El push da latencia baja; el polling de respaldo garantiza entrega si el push falla. Robustez sin sacrificar velocidad.' },
                { title: 'Token HMAC en vez de compartir sesión', detail: 'El Go valida al cliente sin acceso a la sesión de Laravel: dos servicios desacoplados que igual confían entre sí.' },
                { title: 'Un canal por empresa', detail: 'Cada usuario recibe solo lo suyo; el aislamiento vive en el hub, no en cada mensaje.' },
            ],
            proofTitle: 'En vivo',
            proofCaption: 'El realtime en acción: conexiones por empresa, un envío de prueba y un caso real.',
            media: [
                { src: '/videos/notif_service_gif1.mp4', caption: 'Un cliente se conecta como Empresa A, se desconecta y se reconecta como Empresa B — en los logs se ven las distintas conexiones abriéndose.' },
                { src: '/videos/notif_service_gif2.mp4', caption: 'Notificación de prueba enviada en vivo, con los logs del servicio mostrando el push.' },
                { src: '/videos/notif_service_gif3.mp4', caption: 'Caso real: al crear una venta, la notificación llega al instante al usuario.' },
            ],
            backLabel: 'Volver a proyectos',
        },
        en: {
            title: 'Real-Time Notifications',
            codename: 'notif_service',
            tagline: 'Users find out the moment it happens, without reloading.',
            tags: ['Go', 'WebSocket', 'HMAC', 'MySQL', 'Docker'],
            github: 'https://github.com/tovalh/notif_service',
            demo: 'https://laraventas-production.up.railway.app',
            thumb: '/thumbnails/notif_service.svg',
            problemTitle: 'The problem',
            problem: 'The ERP announced nothing in the moment. If someone registered a payment or a sale, the rest of the team only found out when they reloaded the page, and many didn\'t even know they had to reload. That meant people working with stale data: asking "has this been paid yet?" when it already had, repeating actions someone else had already done, or assuming the system had frozen. The classic was users hitting F5 every couple of minutes just in case. A system that feels dead breeds distrust, and that distrust is hard to reverse.',
            solutionTitle: 'The solution',
            solution: 'The starting point was clear: I didn\'t want the user to reload to find out. I ruled out pure browser polling —costly and laggy— and went with WebSocket, which keeps the connection open and pushes the event the moment it happens. The real doubt came next: what if the pushing service is down exactly when something important happens? So I decided not to trust everything to the push, and added a poller that every few seconds checks for anything that might have been missed. That way the push gives the speed and the polling gives the guarantee. To avoid coupling it to Laravel, instead of sharing the session I had the backend sign an HMAC token that the Go service validates on its own: two independent services that still trust each other. And per-company isolation lives in the hub, not in each message, so a user never receives what isn\'t theirs.',
            decisionsTitle: 'Technical decisions',
            decisions: [
                { title: 'WebSocket + polling, not just push', detail: 'Push gives low latency; the polling fallback guarantees delivery if the push fails. Robustness without giving up speed.' },
                { title: 'HMAC token instead of a shared session', detail: 'Go validates the client with no access to Laravel\'s session: two decoupled services that still trust each other.' },
                { title: 'One channel per company', detail: 'Each user only receives its own events; isolation lives in the hub, not in every message.' },
            ],
            proofTitle: 'Live',
            proofCaption: 'Realtime in action: per-company connections, a test push and a real case.',
            media: [
                { src: '/videos/notif_service_gif1.mp4', caption: 'A client connects as Company A, disconnects and reconnects as Company B — the logs show the different connections opening.' },
                { src: '/videos/notif_service_gif2.mp4', caption: 'A live test notification sent, with the service logs showing the push.' },
                { src: '/videos/notif_service_gif3.mp4', caption: 'Real case: creating a sale delivers the notification to the user instantly.' },
            ],
            backLabel: 'Back to projects',
        },
    },
    'finmail': {
        es: {
            title: 'Finanzas leídas del correo',
            codename: 'FinMail',
            tagline: 'Los bancos no tienen API abierta. Este servicio lee el correo que igual te mandan.',
            tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Gmail API', 'Gemini', 'JWT'],
            github: 'https://github.com/tovalh/finmail',
            thumb: '/thumbnails/finmail.svg',
            problemTitle: 'El problema',
            problem: 'Nunca lograba tener mis finanzas ordenadas. Lo intenté con varias apps y todas terminaban igual: o anotaba cada gasto a mano, o lo ingresaba dos veces —una en el banco y otra en la app—. Esa fricción hacía que durara motivado tres días y después abandonara. Lo que necesitaba era tener mis gastos ordenados solos, con la menor intervención humana posible; si el sistema me obliga a cargar algo, ya perdió.',
            solutionTitle: 'La solución',
            solution: 'Me di cuenta de algo obvio que tenía delante: el banco me manda un correo por cada transacción. Si eso ya llega solo, ¿por qué lo estaba cargando a mano? La idea inicial fue parsear esos correos y que cada uno se convirtiera en una fila —monto, comercio, fecha— sin que yo tocara nada. Después, con el boom de la IA, se me ocurrió dar un paso más: usar un modelo para predecir a qué categoría pertenece cada comercio. No tiene 100% de asertividad, pero la gracia está en cómo aprende: una vez que el sistema sabe a qué categoría pertenece un comercio, no vuelve a preguntarle a la IA. Eso me da dos ganancias: dejo de estar aceptando categorías una y otra vez, y no gasto tokens al pedo. Básicamente, se vuelve más eficiente y más barato con el uso.',
            decisionsTitle: 'Decisiones técnicas',
            decisions: [
                { title: 'Leer el correo, no esperar una API', detail: 'Los bancos no exponen API, pero sí mandan un correo por cada transacción. Trabajar con lo que hay, no con lo ideal.' },
                { title: 'Parsers enchufables por banco', detail: 'Sumar un banco es implementar un parser; auth, IA y endpoints ya están construidos.' },
                { title: 'Aprender la categoría y dejar de preguntar', detail: 'Cuando el sistema ya sabe a qué categoría pertenece un comercio, no vuelve a consultar a la IA: menos confirmaciones manuales y menos tokens gastados. Eficiencia y ahorro con el uso.' },
                { title: 'Auth con JWT + frontend PWA', detail: 'El backend expone una API con auth JWT (sin estado) y el frontend es una PWA: se usa como app desde el teléfono, que es donde uno mira sus gastos.' },
            ],
            proofTitle: 'En vivo',
            proofCaption: 'La PWA muestra las transacciones parseadas con la categoría sugerida por IA.',
            backLabel: 'Volver a proyectos',
        },
        en: {
            title: 'Finances read from your inbox',
            codename: 'FinMail',
            tagline: 'Banks have no open API. This service reads the emails they send anyway.',
            tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Gmail API', 'Gemini', 'JWT'],
            github: 'https://github.com/tovalh/finmail',
            thumb: '/thumbnails/finmail.svg',
            problemTitle: 'The problem',
            problem: 'I could never keep my finances organized. I tried several apps and they all ended the same way: either I logged every expense by hand, or I entered it twice —once in the bank, once in the app. That friction meant I\'d stay motivated for three days and then quit. What I needed was to have my spending organized on its own, with the least human intervention possible; if the system forces me to enter something, it already lost.',
            solutionTitle: 'The solution',
            solution: 'I realized something obvious that was right in front of me: my bank emails me for every transaction. If that already arrives on its own, why was I typing it in by hand? The initial idea was to parse those emails so each one became a row —amount, merchant, date— without me touching anything. Then, with the AI boom, it occurred to me to go one step further: use a model to predict which category each merchant belongs to. It\'s not 100% accurate, but the trick is how it learns: once the system knows a merchant\'s category, it never asks the AI again. That gives me two wins: I stop accepting categories over and over, and I don\'t waste tokens for nothing. Basically, it gets more efficient and cheaper the more you use it.',
            decisionsTitle: 'Technical decisions',
            decisions: [
                { title: 'Read the email, don\'t wait for an API', detail: 'Banks expose no API, but they do send an email for every transaction. Work with what exists, not with the ideal.' },
                { title: 'Pluggable per-bank parsers', detail: 'Adding a bank is implementing a parser; auth, AI and endpoints are already built.' },
                { title: 'Learn the category and stop asking', detail: 'Once the system knows a merchant\'s category, it never queries the AI again: fewer manual confirmations and fewer tokens spent. Efficiency and savings that grow with use.' },
                { title: 'JWT auth + PWA frontend', detail: 'The backend exposes a stateless JWT API and the frontend is a PWA: you use it like an app from your phone, which is where you actually check your spending.' },
            ],
            proofTitle: 'Live',
            proofCaption: 'The PWA shows parsed transactions with their AI-suggested category.',
            backLabel: 'Back to projects',
        },
    },
    'health-status': {
        es: {
            title: 'Monitor de Salud de Servicios',
            codename: 'health_status',
            tagline: 'Enterarme yo antes que el cliente.',
            tags: ['Go', 'Telegram', 'SMTP', 'Docker', 'Concurrency'],
            github: 'https://github.com/tovalh/health_status',
            thumb: '/thumbnails/health_status.svg',
            problemTitle: 'El problema',
            problem: 'El servidor de producción empezó a fallar y a caerse sin aviso: no sabíamos cuándo pasaba porque no nos llegaba ninguna notificación. Nos enterábamos por los clientes, que empezaron a llamarnos constantemente por las caídas. Estar siempre un paso atrás, apagando incendios que ya habían escalado, era insostenible.',
            solutionTitle: 'La solución',
            solution: 'Lo primero era dejar de enterarme por el cliente: puse un monitor que chequea cada servicio por su cuenta y me avisa al instante por Telegram apenas algo cambia de estado. Pero enseguida apareció el problema real: muchas caídas eran blips de segundos, y si alertaba por cada una el canal se volvía puro ruido y dejaba de mirarlo. Así que antes de gritar agregué un re-chequeo: si la caída no se sostiene, la ignora. Y lo dejé extensible —consola, Telegram, email, webhook— detrás de una interfaz de un método, para sumar un canal sin tocar el monitor. La idea de fondo: que avise de lo real, rápido, y en el canal donde sí lo voy a ver.',
            decisionsTitle: 'Decisiones técnicas',
            decisions: [
                { title: 'Una goroutine por servicio', detail: 'Cada servicio se chequea en su propio goroutine, con su ticker e intervalo; uno lento o caído nunca frena al resto del monitoreo.' },
                { title: 'Alertar solo en cambio de estado', detail: 'Nada de ruido mientras está sano; avisa cuando cae y cuando se recupera, no en cada chequeo.' },
                { title: 'Flap-filter antes de alertar', detail: 'Re-chequea N veces antes de gritar; un blip de segundos no despierta a nadie a las 3am.' },
                { title: 'Notifiers detrás de una interfaz de un método', detail: 'Agregar Telegram, email o webhook nunca toca el monitor: cada canal es un archivo aparte.' },
            ],
            proofTitle: 'En vivo',
            proofCaption: 'El monitor en acción: arranque, caída forzada y recuperación, con sus alertas a Telegram.',
            media: [
                { src: '/videos/micro_status_gif1.mp4', caption: 'El servicio arranca y envía el mensaje de "up".' },
                { src: '/videos/micro_status_gif2.mp4', caption: 'Tiro abajo un servicio a propósito y llega la alerta de caída a Telegram.' },
                { src: '/videos/micro_status_gif3.mp4', caption: 'El servicio se recupera y llega la alerta de recuperación.' },
            ],
            backLabel: 'Volver a proyectos',
        },
        en: {
            title: 'Service Health Monitor',
            codename: 'health_status',
            tagline: 'So I find out before the client does.',
            tags: ['Go', 'Telegram', 'SMTP', 'Docker', 'Concurrency'],
            github: 'https://github.com/tovalh/health_status',
            thumb: '/thumbnails/health_status.svg',
            problemTitle: 'The problem',
            problem: 'The production server started failing and going down with no warning: we had no idea when it happened because no notification ever reached us. We found out from the clients, who started calling us constantly about the outages. Always being a step behind, putting out fires that had already escalated, was unsustainable.',
            solutionTitle: 'The solution',
            solution: 'First I needed to stop finding out from the client: I set up a monitor that checks each service on its own and pings me instantly over Telegram the moment something changes state. But the real problem showed up right away: many outages were blips of a few seconds, and alerting on each one turned the channel into pure noise that I\'d stop watching. So before shouting I added a re-check: if the outage doesn\'t hold, it ignores it. And I kept it extensible —console, Telegram, email, webhook— behind a one-method interface, so I can add a channel without touching the monitor. The underlying idea: report what\'s real, fast, and on the channel where I\'ll actually see it.',
            decisionsTitle: 'Technical decisions',
            decisions: [
                { title: 'One goroutine per service', detail: 'Each service is checked in its own goroutine, with its own ticker and interval; a slow or down one never blocks the rest of the monitoring.' },
                { title: 'Alert only on state change', detail: 'No noise while healthy; it pings when it goes down and when it recovers, not on every check.' },
                { title: 'Flap-filter before alerting', detail: 'Re-checks N times before shouting; a few-second blip never pages anyone at 3am.' },
                { title: 'Notifiers behind a one-method interface', detail: 'Adding Telegram, email or webhook never touches the monitor: each channel is its own file.' },
            ],
            proofTitle: 'Live',
            proofCaption: 'The monitor in action: startup, a forced outage and recovery, with its Telegram alerts.',
            media: [
                { src: '/videos/micro_status_gif1.mp4', caption: 'The service starts up and sends the "up" message.' },
                { src: '/videos/micro_status_gif2.mp4', caption: 'I take a service down on purpose and the outage alert arrives on Telegram.' },
                { src: '/videos/micro_status_gif3.mp4', caption: 'The service recovers and the recovery alert arrives.' },
            ],
            backLabel: 'Back to projects',
        },
    },
};

export function generateStaticParams() {
    return [
        { slug: 'laraventas' },
        { slug: 'notif-service' },
        { slug: 'finmail' },
        { slug: 'health-status' },
    ];
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const entry = CASE_STUDIES[slug];
    if (!entry) notFound();

    const c = entry[(locale as Locale)] ?? entry.es;

    return (
        <main className="min-h-screen px-4 py-20 md:py-28">
            <article className="max-w-3xl mx-auto">

                <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-dark/60 dark:text-white/60 hover:text-primary transition-colors mb-10">
                    <ArrowLeft size={16} /> {c.backLabel}
                </Link>

                {/* Hero */}
                <header className="mb-10">
                    <span className="inline-block text-xs font-mono text-dark/50 dark:text-white/50 mb-2">{c.codename}</span>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-dark dark:text-white mb-3">{c.title}</h1>
                    <p className="text-lg text-dark/70 dark:text-white/70 mb-6">{c.tagline}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {c.tags.map(tag => <TechTag key={tag} label={tag} />)}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {c.github && (
                            <a href={c.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/20 text-sm font-medium text-dark dark:text-white hover:bg-primary hover:text-white hover:border-primary transition-colors">
                                <Github size={16} /> GitHub
                            </a>
                        )}
                        {c.demo && (
                            <a href={c.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity">
                                <ExternalLink size={15} /> Demo
                            </a>
                        )}
                    </div>
                </header>

                {/* Hero image */}
                <div className="w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 mb-12 bg-dark">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.thumb} alt={c.title} className="w-full" />
                </div>

                {/* Problem */}
                <section className="mb-10">
                    <h2 className="font-display text-2xl font-bold text-dark dark:text-white mb-3">{c.problemTitle}</h2>
                    <p className="text-dark/70 dark:text-white/70 leading-relaxed">{c.problem}</p>
                </section>

                {/* Solution */}
                <section className="mb-10">
                    <h2 className="font-display text-2xl font-bold text-dark dark:text-white mb-3">{c.solutionTitle}</h2>
                    {Array.isArray(c.solution) ? (
                        <ul className="space-y-2">
                            {c.solution.map((item, i) => (
                                <li key={i} className="flex gap-3 text-dark/70 dark:text-white/70 leading-relaxed">
                                    <span className="text-primary font-bold mt-0.5">→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-dark/70 dark:text-white/70 leading-relaxed">{c.solution}</p>
                    )}
                </section>

                {/* Technical decisions */}
                <section className="mb-10">
                    <h2 className="font-display text-2xl font-bold text-dark dark:text-white mb-4">{c.decisionsTitle}</h2>
                    <div className="space-y-3">
                        {c.decisions.map((d, i) => (
                            <div key={i} className="rounded-xl border border-gray-100 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
                                <div className="flex gap-3">
                                    <span className="text-primary font-bold mt-0.5">◆</span>
                                    <div>
                                        <h3 className="font-display font-bold text-dark dark:text-white text-base mb-1">{d.title}</h3>
                                        <p className="text-sm text-dark/70 dark:text-white/70 leading-relaxed">{d.detail}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Proof */}
                <section className="mb-4">
                    <h2 className="font-display text-2xl font-bold text-dark dark:text-white mb-2">{c.proofTitle}</h2>
                    <p className="text-sm text-dark/60 dark:text-white/60 mb-5">{c.proofCaption}</p>
                    {c.media?.length ? (
                        <div className="space-y-6">
                            {c.media.map((m) => (
                                <figure key={m.src}>
                                    <video
                                        src={m.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full rounded-2xl border border-gray-100 dark:border-white/10 bg-dark"
                                    />
                                    <figcaption className="text-sm text-dark/70 dark:text-white/70 mt-2">{m.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full aspect-video rounded-2xl border-2 border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-400 text-sm font-mono">
                            TODO: GIF / screenshot
                        </div>
                    )}
                </section>

            </article>
        </main>
    );
}
