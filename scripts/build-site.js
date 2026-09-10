const fs = require('fs');
const path = require('path');

const languages = ['en', 'es', 'de', 'pt', 'fr', 'it'];

// High Contrast B&W Images representing athletic poses, muscle definition, tactical strength & equipment texture
const images = {
    hero1: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80', // Athletic force & muscle strength
    hero2: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1600&q=80', // High contrast athletic stance
    hero3: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1600&q=80', // Tactical fitness & CCTV monitoring
    about: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80', // Muscle definition & workout sweat
    cctv1: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80', // Security camera lens texture
    cctv2: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80', // Monitoring center screen
    team1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', // Security Director
    team2: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', // CCTV Systems Lead
    team3: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', // Tactical Operations Officer
    blog1: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', // High tech security analysis
    blog2: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80', // Cyber & Physical Defense
    blog3: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', // Industrial CCTV Mesh
    testimonial1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    testimonial2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    testimonial3: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
};

const translations = {
    en: {
        code: 'en',
        name: 'English',
        siteTitle: 'VIGILANCE DEFENSE | Tactical Security & CCTV Solutions',
        brand: 'VIGILANCE',
        brandSub: 'DEFENSE',
        tagline: 'HIGH-INTENSITY TACTICAL PROTECTION & ADVANCED CCTV SURVEILLANCE',
        phone: '+1 (800) 555-8228',
        email: 'tactical@vigilance-defense.com',
        location: '750 Tactical Command Way, New York, NY 10001',
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            pricing: 'Pricing Plan',
            blog: 'Blog Grid',
            blogDetail: 'Blog Detail',
            team: 'Team Member',
            testimonials: 'Testimonial',
            contact: 'Contact',
            pages: 'Pages'
        },
        hero: [
            {
                title: 'MAXIMUM PHYSICAL FORCE & CCTV SURVEILLANCE',
                subtitle: 'ELITE ATHLETIC TACTICAL UNITS & REAL-TIME MONITORING',
                desc: 'Combining peak human athletic endurance, muscle strength, and military-grade 4K AI CCTV surveillance networks for uncompromising site protection.'
            },
            {
                title: 'HIGH-DEFINITION CCTV & CLOUD INTEGRATION',
                subtitle: 'INSTANT THREAT DETECTION & AI ANALYTICS',
                desc: 'Next-generation thermal, night-vision, and facial recognition camera systems linked directly to high-intensity rapid response teams.'
            },
            {
                title: 'UNSTOPPABLE PHYSICAL & CYBER DEFENSE',
                subtitle: 'PROVEN STRENGTH. ZERO TOLERANCE.',
                desc: 'From industrial perimeter security to commercial headquarters, our athletic defenders and intelligent sensors stop intrusions before they occur.'
            }
        ],
        featuresHead: 'TACTICAL CCTV & DEFENSE SYSTEM FEATURES',
        featuresList: [
            'Valid HTML5 & CSS3 Responsive Architecture',
            'Bootstrap v5 Framework & Sass Custom Variables',
            'High-Contrast B&W Athletic Visual Aesthetics',
            'Multi-Language Support (ES, EN, DE, PT, FR, IT)',
            '24/7 AI-Powered Thermal & Optical CCTV Feeds',
            'Tactical Physical Rapid Response Force',
            'Developer-Friendly, SEO Optimized Markup',
            'Encrypted Cloud Video Management & Storage'
        ],
        services: [
            { title: '4K AI CCTV SURVEILLANCE', desc: 'Continuous ultra-HD video feeds equipped with automated threat identification, license plate recognition, and perimeter intrusion alerts.' },
            { title: 'ATHLETIC TACTICAL GUARDS', desc: 'Highly skilled athletic defense personnel trained in physical force, tactical restraint, and immediate crisis management.' },
            { title: 'CLOUD VIDEO MANAGEMENT', desc: 'Encrypted offsite storage with instant remote access via encrypted mobile application and low-latency live streaming.' },
            { title: 'BIOMETRIC ACCESS CONTROL', desc: 'Multi-factor authentication, biometric fingerprint, and facial scan turnstiles for restricted military and corporate zones.' },
            { title: 'REAL-TIME MONITORING CENTER', desc: 'Centralized high-intensity command dashboard manned 24/7/365 by veteran surveillance analysts and dispatchers.' },
            { title: 'PERIMETER LASER DEFENSE', desc: 'Infrared invisible laser barriers synchronized with outdoor strobe spotlights and automated high-decibel acoustic deterrents.' }
        ],
        pricing: [
            { name: 'STANDARD DEFENSE', price: '$299', period: '/month', features: ['4x 4K Outdoor CCTV Cameras', '1080p Cloud Backup (14 Days)', '24/7 Motion Sensor Alerts', 'Mobile App Remote Control', 'Standard Maintenance Support'] },
            { name: 'TACTICAL PRO', price: '$599', period: '/month', featured: true, features: ['10x Thermal & Night CCTV Cameras', '4K Cloud Backup (30 Days)', 'AI Facial Recognition Module', 'On-Demand Athletic Guard Patrols', 'Priority Command Response'] },
            { name: 'ENTERPRISE FORTRESS', price: '$1299', priceVal: '$1,299', period: '/month', features: ['Custom Unlimited Camera Array', 'Continuous Local & Cloud Redundancy', 'Dedicated 24/7 Tactical Security Detail', 'Biometric Gate Access Control', 'Dedicated Tactical Account Command'] }
        ],
        team: [
            { name: 'Commander Victor Vance', role: 'Chief Security Officer', bio: 'Former Special Forces operative with 18 years in high-stakes physical security and tactical command.' },
            { name: 'Elena Rostova', role: 'CCTV & AI Systems Director', bio: 'Expert in neural vision networks, thermal imaging infrastructure, and real-time biometric analytics.' },
            { name: 'Marcus Steel', role: 'Tactical Response Lead', bio: 'Elite physical training specialist directing high-intensity close protection and emergency intervention.' }
        ],
        testimonials: [
            { quote: 'Vigilance Defense installed a flawless 4K CCTV grid across our industrial park. Their athletic guards respond in under two minutes.', author: 'Arthur Pendelton', title: 'CEO, Nexus Logistics' },
            { quote: 'The dark aesthetic, high contrast interface, and relentless tactical focus set them miles apart from standard security firms.', author: 'Seraphina Vance', title: 'Operations Director, Apex Holdings' },
            { quote: 'Their AI CCTV detection stopped an attempted breach on night one. The thermal camera clarity is unbelievable.', author: 'Dmitri Kozlov', title: 'Security Manager, Steelworks Corp' }
        ],
        blog: [
            { id: 1, title: 'How 4K Thermal CCTV Prevents Night-time Industrial Infiltration', date: 'SEP 10, 2025', author: 'Tactical Analyst', snippet: 'Thermal imaging combined with athletic force readiness eliminates blind spots in total darkness.', content: 'Full tactical report on thermal imagery, night vision sensor deployment, and muscle memory response drills.' },
            { id: 2, title: 'Physical Force vs. Smart Sensors: Building the Dual Defense Layer', date: 'SEP 04, 2025', author: 'Cmdr. Victor Vance', snippet: 'Why smart CCTV cameras must be paired with high-endurance physical responders for 100% breach protection.', content: 'Comprehensive analysis comparing automated alarm triggers with physical restraint readiness.' },
            { id: 3, title: 'Encrypted Cloud Video Storage Architecture for High-Risk Sites', date: 'AUG 28, 2025', author: 'Elena Rostova', snippet: 'Securing video evidence against physical tampering, EMP interference, and cyber interception.', content: 'Technical breakdown of AES-256 cloud video streaming and off-grid redundant recording.' }
        ],
        contactMsg: 'Initiate direct communication with our Tactical Security Command.',
        form: {
            name: 'Your Full Name',
            email: 'Your Email Address',
            subject: 'Subject / Threat Level',
            message: 'Detail your security requirements...',
            send: 'SEND TACTICAL REQUEST',
            subscribe: 'SUBSCRIBE TO DEFENSE ALERTS'
        },
        footer: {
            aboutDesc: 'Vigilance Defense delivers high-intensity athletic security personnel and military-grade CCTV surveillance systems. Peak physical force combined with cutting-edge optical technology.',
            quickLinks: 'QUICK NAVIGATION',
            contactInfo: 'COMMAND HEADQUARTERS',
            newsletter: 'TACTICAL INTELLIGENCE NEWSLETTER',
            rights: 'All Rights Reserved. Vigilance Defense Tactical Security.'
        }
    },
    es: {
        code: 'es',
        name: 'Español',
        siteTitle: 'VIGILANCE DEFENSE | Soluciones Tácticas de Seguridad y CCTV',
        brand: 'VIGILANCE',
        brandSub: 'DEFENSE',
        tagline: 'PROTECCIÓN TÁCTICA DE ALTA INTENSIDAD Y VIGILANCIA CCTV AVANZADA',
        phone: '+1 (800) 555-8228',
        email: 'tactico@vigilance-defense.com',
        location: '750 Tactical Command Way, Nueva York, NY 10001',
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            pricing: 'Planes y Precios',
            blog: 'Blog',
            blogDetail: 'Detalle del Blog',
            team: 'Equipo',
            testimonials: 'Testimonios',
            contact: 'Contacto',
            pages: 'Páginas'
        },
        hero: [
            {
                title: 'MÁXIMA FUERZA FÍSICA Y VIGILANCIA CCTV',
                subtitle: 'UNIDADES TÁCTICAS ATLÉTICAS Y MONITOREO EN TIEMPO REAL',
                desc: 'Combinación de resistencia atlética de élite, fuerza muscular y redes de videovigilancia CCTV 4K con IA de nivel militar para una protección inquebrantable.'
            },
            {
                title: 'CCTV DE ALTA DEFINICIÓN E INTEGRACIÓN EN LA NUBE',
                subtitle: 'DETECCIÓN INSTANTÁNEA DE AMENAZAS Y ANÁLISIS DE IA',
                desc: 'Sistemas de cámaras térmicas, visión nocturna y reconocimiento facial conectados a equipos de respuesta rápida de alta intensidad.'
            },
            {
                title: 'DEFENSA FÍSICA Y CIBERNÉTICA IMPARABLE',
                subtitle: 'FUERZA DEMOSTRADA. CERO TOLERANCIA.',
                desc: 'Desde perímetros industriales hasta sedes corporativas, nuestros defensores atléticos y sensores inteligentes detienen las intrusiones antes de que ocurran.'
            }
        ],
        featuresHead: 'CARACTERÍSTICAS DEL SISTEMA TÁCTICO DE CCTV Y DEFENSA',
        featuresList: [
            'Arquitectura adaptable con HTML5 y CSS3 válidos',
            'Framework Bootstrap v5 y variables personalizadas Sass',
            'Estética visual atlética en blanco y negro de alto contraste',
            'Soporte multi-idioma completo (ES, EN, DE, PT, FR, IT)',
            'Transmisión CCTV térmica y óptica con IA 24/7',
            'Fuerza de respuesta rápida física y táctica',
            'Código optimizado para desarrolladores y SEO',
            'Gestión y almacenamiento de video en la nube encriptado'
        ],
        services: [
            { title: 'VIGILANCIA CCTV 4K CON IA', desc: 'Canales de video ultra-HD continuos equipados con identificación de amenazas, reconocimiento de matrículas y alertas de intrusión.' },
            { title: 'GUARDIA TÁCTICO ATLÉTICO', desc: 'Personal de defensa atlético altamente capacitado en fuerza física, contención táctica y gestión inmediata de crisis.' },
            { title: 'GESTIÓN DE VIDEO EN LA NUBE', desc: 'Almacenamiento seguro fuera de las instalaciones con acceso remoto instantáneo mediante aplicación móvil encriptada.' },
            { title: 'CONTROL DE ACCESO BIOMÉTRICO', desc: 'Autenticación multifactor, huella dactilar biométrica y torniquetes de escaneo facial para zonas restringidas.' },
            { title: 'CENTRO DE MONITOREO EN TIEMPO REAL', desc: 'Panel de control centralizado operado las 24 horas del día por analistas de vigilancia veteranos.' },
            { title: 'DEFENSA LÁSER PERIMETRAL', desc: 'Barreras láser infrarrojos invisibles sincronizadas con focos estroboscópicos y disuasores acústicos.' }
        ],
        pricing: [
            { name: 'DEFENSA ESTÁNDAR', price: '$299', period: '/mes', features: ['4x Cámaras CCTV 4K para exteriores', 'Copia de seguridad en la nube 1080p (14 días)', 'Alertas de sensor de movimiento 24/7', 'Control remoto por App Móvil', 'Soporte de mantenimiento estándar'] },
            { name: 'TÁCTICO PRO', price: '$599', period: '/mes', featured: true, features: ['10x Cámaras CCTV Térmicas y Nocturnas', 'Copia de seguridad en la nube 4K (30 días)', 'Módulo de reconocimiento facial IA', 'Patrullajes tácticos atléticos a demanda', 'Respuesta de mando prioritaria'] },
            { name: 'FORTALEZA EMPRESARIAL', price: '$1299', priceVal: '$1,299', period: '/mes', features: ['Matriz de cámaras ilimitada a medida', 'Redundancia continua local y en la nube', 'Equipo de seguridad táctico dedicado 24/7', 'Control de acceso biométrico a puertas', 'Comando de cuenta táctica dedicado'] }
        ],
        team: [
            { name: 'Comandante Victor Vance', role: 'Director de Seguridad', bio: 'Ex operador de Fuerzas Especiales con 18 años de experiencia en seguridad física táctica de alto nivel.' },
            { name: 'Elena Rostova', role: 'Directora de Sistemas CCTV e IA', bio: 'Especialista en redes de visión neuronal, infraestructura de imágenes térmicas y analítica biométrica.' },
            { name: 'Marcus Steel', role: 'Jefe de Respuesta Táctica', bio: 'Especialista en entrenamiento físico de élite dirigiendo la protección cercana e intervención de emergencia.' }
        ],
        testimonials: [
            { quote: 'Vigilance Defense instaló una red CCTV 4K impecable en nuestro parque industrial. Sus guardias atléticos responden en menos de dos minutos.', author: 'Arthur Pendelton', title: 'CEO, Nexus Logistics' },
            { quote: 'La estética oscura, la interfaz de alto contraste y el enfoque táctico implacable los diferencian por completo del resto.', author: 'Seraphina Vance', title: 'Directora de Operaciones, Apex Holdings' },
            { quote: 'Su detección por CCTV con IA detuvo un intento de intrusión en la primera noche. La claridad de las cámaras térmicas es increíble.', author: 'Dmitri Kozlov', title: 'Gerente de Seguridad, Steelworks Corp' }
        ],
        blog: [
            { id: 1, title: 'Cómo el CCTV Térmico 4K Evita Intrusiones Nocturnas Industriales', date: '10 SEP, 2025', author: 'Analista Táctico', snippet: 'Las imágenes térmicas combinadas con la preparación física eliminan los puntos ciegos en oscuridad total.', content: 'Informe táctico completo sobre imágenes térmicas, sensores nocturnos y respuesta física.' },
            { id: 2, title: 'Fuerza Física vs. Sensores Inteligentes: Capa Doble de Defensa', date: '04 SEP, 2025', author: 'Cmdte. Victor Vance', snippet: 'Por qué las cámaras inteligentes deben combinarse con agentes atléticos para una protección del 100%.', content: 'Análisis exhaustivo que compara las alarmas automatizadas con la contención física inmediata.' },
            { id: 3, title: 'Arquitectura de Almacenamiento Encriptado en la Nube para Sitios de Alto Riesgo', date: '28 AGO, 2025', author: 'Elena Rostova', snippet: 'Protección de evidencia en video contra manipulaciones físicas, interferencias EMP y ciberataques.', content: 'Desglose técnico del streaming de video en nube AES-256 y grabación redundante fuera de red.' }
        ],
        contactMsg: 'Inicie comunicación directa con nuestro Mando de Seguridad Táctica.',
        form: {
            name: 'Nombre Completo',
            email: 'Correo Electrónico',
            subject: 'Asunto / Nivel de Amenaza',
            message: 'Detalle sus requerimientos de seguridad...',
            send: 'ENVIAR SOLICITUD TÁCTICA',
            subscribe: 'SUSCRIBIRSE A ALERTAS DE DEFENSA'
        },
        footer: {
            aboutDesc: 'Vigilance Defense proporciona personal de seguridad atlético de alta intensidad y sistemas de videovigilancia CCTV de nivel militar. Máxima fuerza física unida a la más avanzada tecnología óptica.',
            quickLinks: 'NAVEGACIÓN RÁPIDA',
            contactInfo: 'CUARTEL GENERAL DE MANDO',
            newsletter: 'BOLETÍN DE INTELIGENCIA TÁCTICA',
            rights: 'Todos los derechos reservados. Vigilance Defense Tactical Security.'
        }
    },
    de: {
        code: 'de',
        name: 'Deutsch',
        siteTitle: 'VIGILANCE DEFENSE | Taktische Sicherheits- & CCTV-Lösungen',
        brand: 'VIGILANCE',
        brandSub: 'DEFENSE',
        tagline: 'HOCHINTENSIVE TAKTISCHE SICHERHEIT & ERWEITERTE CCTV-ÜBERWACHUNG',
        phone: '+1 (800) 555-8228',
        email: 'taktik@vigilance-defense.com',
        location: '750 Tactical Command Way, New York, NY 10001',
        nav: {
            home: 'Startseite',
            about: 'Über Uns',
            services: 'Dienstleistungen',
            pricing: 'Preise & Tarife',
            blog: 'Blog Grid',
            blogDetail: 'Blog Detail',
            team: 'Unser Team',
            testimonials: 'Kundenstimmen',
            contact: 'Kontakt',
            pages: 'Seiten'
        },
        hero: [
            {
                title: 'MAXIMALE PHYSISCHE KRAFT & CCTV-ÜBERWACHUNG',
                subtitle: 'ATHLETISCHE TAKTIKEINHEITEN & ECHTZEIT-MONITORING',
                desc: 'Kombination aus sportlicher Höchstleistung, Muskelkraft und militärischen 4K-KI-CCTV-Kameranetzen für kompromisslosen Objektschutz.'
            },
            {
                title: 'HIGH-DEFINITION CCTV & CLOUD-INTEGRATION',
                subtitle: 'SOFORTIGE BEDROHUNGSERKENNUNG & KI-ANALYSEN',
                desc: 'Wärmebild-, Nachtsicht- und Gesichtserkennungssysteme der nächsten Generation direkt mit taktischen Eingreiftrupps verbunden.'
            },
            {
                title: 'UNAUFHALTSAME PHYSISCHE & CYBER-ABWEHR',
                subtitle: 'BEWIESENE STÄRKE. NULL TOLERANZ.',
                desc: 'Von Industrieperimetern bis zu Unternehmenszentralen stoppen unsere athletischen Beschützer und intelligenten Sensoren Eindringlinge sofort.'
            }
        ],
        featuresHead: 'FUNKTIONEN DES TAKTISCHEN CCTV- & SICHERHEITSSYSTEMS',
        featuresList: [
            'Valide HTML5 & CSS3 Responsive Architektur',
            'Bootstrap v5 Framework & Sass Custom-Variablen',
            'Hochkontrast-B&W-Athletik-Ästhetik',
            'Volle Mehrsprachigkeit (ES, EN, DE, PT, FR, IT)',
            '24/7 KI-gestützte Thermal- & Optik-CCTV-Feeds',
            'Taktische physische Schnelleingreiftruppe',
            'Entwicklerfreundlicher & SEO-optimierter Code',
            'Verschlüsselte Cloud-Videoverwaltung & Speicherung'
        ],
        services: [
            { title: '4K KI CCTV-ÜBERWACHUNG', desc: 'Kontinuierliche Ultra-HD-Videofeeds mit automatischer Bedrohungserkennung, Kennzeichenerkennung und Perimeter-Alarmen.' },
            { title: 'ATHLETISCHE TAKTIKWAGEN', desc: 'Hochtrainiertes athletisches Sicherheitspersonal für physischen Einsatz, taktische Überwältigung und Krisenmanagement.' },
            { title: 'CLOUD VIDEO MANAGEMENT', desc: 'Verschlüsselte externe Speicherung mit sofortigem Fernzugriff über eine gesicherte mobile App.' },
            { title: 'BIOMETRISCHE ZUTRITTSKONTROLLE', desc: 'Multi-Faktor-Authentifizierung, Fingerabdruck- und Gesichtsscan-Drehkreuze für hochsensible Zonen.' },
            { title: 'ECHTZEIT-ÜBERWACHUNGSZENTRUM', desc: 'Zentrales Leitstand-Dashboard, das rund um die Uhr von erfahrenen Überwachungsanalysten besetzt ist.' },
            { title: 'PERIMETER-LASERABWEHR', desc: 'Unsichtbare Infrarot-Laserbarrieren, synchronisiert mit Stroboskop-Scheinwerfern und akustischen Abschreckern.' }
        ],
        pricing: [
            { name: 'STANDARD ABWEHR', price: '$299', period: '/Monat', features: ['4x 4K CCTV-Außenkameras', '1080p Cloud-Backup (14 Tage)', '24/7 Bewegungssensor-Alarme', 'Fernsteuerung per Mobiler App', 'Standard-Wartungssupport'] },
            { name: 'TAKTISCH PRO', price: '$599', period: '/Monat', featured: true, features: ['10x Thermal- & Nachtsicht-CCTV', '4K Cloud-Backup (30 Tage)', 'KI-Gesichtserkennungsmodul', 'Athletische Patrouillen auf Abruf', 'Priorisierte Einsatzreaktion'] },
            { name: 'ENTERPRISE FESTUNG', price: '$1299', priceVal: '$1.299', period: '/Monat', features: ['Maßgeschneidertes unbegrenztes Kamerasystem', 'Kontinuierliche lokale & Cloud-Redundanz', 'Dediziertes 24/7 Taktik-Sicherheitsteam', 'Biometrische Torkontrolle', 'Dedizierter taktischer Kontoverwalter'] }
        ],
        team: [
            { name: 'Kommandant Victor Vance', role: 'Chief Security Officer', bio: 'Ehemaliger Spezialkräfte-Einsatzleiter mit 18 Jahren Erfahrung im physischen Hochsicherheitsschutz.' },
            { name: 'Elena Rostova', role: 'Leiterin CCTV & KI-Systeme', bio: 'Expertin für neuronale Bildnetzwerke, Wärmebildinfrastruktur und biometrische Echtzeitanalytik.' },
            { name: 'Marcus Steel', role: 'Leiter Taktische Reaktion', bio: 'Elite-Fitnesstrainer und Spezialist für Nahschutz sowie Notfalleinsätze.' }
        ],
        testimonials: [
            { quote: 'Vigilance Defense hat ein makelloses 4K-CCTV-Netz in unserem Industriepark installiert. Die athletischen Wachen reagieren in unter zwei Minuten.', author: 'Arthur Pendelton', title: 'CEO, Nexus Logistics' },
            { quote: 'Die dunkle Ästhetik, die hochkontrastreiche Oberfläche und der konsequente taktische Fokus heben sie deutlich ab.', author: 'Seraphina Vance', title: 'Operations Director, Apex Holdings' },
            { quote: 'Ihre KI-CCTV-Erkennung verhinderte bereits in der ersten Nacht einen Einbruch. Die Schärfe der Wärmebildkameras ist unübertroffen.', author: 'Dmitri Kozlov', title: 'Sicherheitsleiter, Steelworks Corp' }
        ],
        blog: [
            { id: 1, title: 'Wie 4K-Thermal-CCTV nächtliche Industrieeinbrüche verhindert', date: '10. SEP 2025', author: 'Taktischer Analyst', snippet: 'Wärmebildtechnik kombiniert mit Physis eliminiert blinde Flecken bei absoluter Dunkelheit.', content: 'Vollständiger taktischer Bericht über Wärmebildaufnahmen, Nachtsichtsensoren und Reaktionsübungen.' },
            { id: 2, title: 'Physische Kraft vs. Smarte Sensoren: Die doppelte Abwehrschicht', date: '04. SEP 2025', author: 'Kdt. Victor Vance', snippet: 'Warum smarte CCTV-Kameras mit athletischem Sicherheitspersonal kombiniert werden müssen.', content: 'Umfassende Analyse des Zusammenspiels von automatisierten Alarmen und physischem Eingreifen.' },
            { id: 3, title: 'Verschlüsselte Cloud-Videospeicherung für Hochrisikostandorte', date: '28. AUG 2025', author: 'Elena Rostova', snippet: 'Schutz von Videobeweisen vor physischer Manipulation, EMP-Störungen und Cyber-Angriffen.', content: 'Technische Aufschlüsselung von AES-256-Cloud-Streaming und netzunabhängiger Aufzeichnung.' }
        ],
        contactMsg: 'Starten Sie die direkte Kommunikation mit unserem Taktik-Kommando.',
        form: {
            name: 'Vollständiger Name',
            email: 'E-Mail-Adresse',
            subject: 'Betreff / Gefahrenstufe',
            message: 'Beschreiben Sie Ihre Sicherheitsanforderungen...',
            send: 'TAKTISCHE ANFRAGE SENDEN',
            subscribe: 'SICHERHEITS-ALERTE ABONNIEREN'
        },
        footer: {
            aboutDesc: 'Vigilance Defense bietet hochintensives athletisches Sicherheitspersonal und militärische CCTV-Überwachungssysteme. Maximale physische Kraft vereint mit modernster Optik.',
            quickLinks: 'SCHNELLNAVIGATION',
            contactInfo: 'KOMMANDO-HAUPTQUARTIER',
            newsletter: 'TAKTISCHER INTELLIGENZ-NEWSLETTER',
            rights: 'Alle Rechte vorbehalten. Vigilance Defense Tactical Security.'
        }
    },
    pt: {
        code: 'pt',
        name: 'Português',
        siteTitle: 'VIGILANCE DEFENSE | Soluções Táticas de Segurança e CFTV',
        brand: 'VIGILANCE',
        brandSub: 'DEFENSE',
        tagline: 'PROTEÇÃO TÁTICA DE ALTA INTENSIDADE E VIGILÂNCIA CFTV AVANÇADA',
        phone: '+1 (800) 555-8228',
        email: 'tatico@vigilance-defense.com',
        location: '750 Tactical Command Way, Nova York, NY 10001',
        nav: {
            home: 'Início',
            about: 'Sobre Nós',
            services: 'Serviços',
            pricing: 'Planos e Preços',
            blog: 'Blog Grid',
            blogDetail: 'Detalhe do Blog',
            team: 'Nossa Equipe',
            testimonials: 'Depoimentos',
            contact: 'Contato',
            pages: 'Páginas'
        },
        hero: [
            {
                title: 'MÁXIMA FORÇA FÍSICA E VIGILÂNCIA CFTV',
                subtitle: 'UNIDADES TÁTICAS ATLÉTICAS E MONITORAMENTO EM TEMPO REAL',
                desc: 'Combinando resistência atlética de elite, força muscular e redes de CFTV 4K com IA de nível militar para proteção total.'
            },
            {
                title: 'CFTV DE ALTA DEFINIÇÃO E INTEGRAÇÃO EM NUVEM',
                subtitle: 'DETECÇÃO INSTANTÂNEA DE AMEAÇAS E ANÁLISE COM IA',
                desc: 'Sistemas de câmeras térmicas, visão noturna e reconhecimento facial conectados diretamente a equipes de resposta tática rápida.'
            },
            {
                title: 'DEFESA FÍSICA E CIBERNÉTICA IMPARÁVEL',
                subtitle: 'FORÇA COMPROVADA. TOLERÂNCIA ZERO.',
                desc: 'De perímetros industriais a sedes corporativas, nossos defensores atléticos e sensores inteligentes contêm intrusões imediatamente.'
            }
        ],
        featuresHead: 'RECURSOS DO SISTEMA TÁTICO DE CFTV E DEFESA',
        featuresList: [
            'Arquitetura responsiva com HTML5 e CSS3 válidos',
            'Framework Bootstrap v5 e variáveis customizadas em Sass',
            'Estética visual atlética em preto e branco de alto contraste',
            'Suporte multi-idioma completo (ES, EN, DE, PT, FR, IT)',
            'Transmissão CFTV térmica e óptica com IA 24 horas por dia',
            'Força física e tática de resposta rápida',
            'Código otimizado para desenvolvedores e SEO',
            'Gerenciamento e armazenamento de vídeo em nuvem criptografado'
        ],
        services: [
            { title: 'VIGILÂNCIA CFTV 4K COM IA', desc: 'Canais de vídeo ultra-HD contínuos com identificação automática de ameaças, placas de veículos e alertas de perímetro.' },
            { title: 'GUARDAS TÁTICOS ATLÉTICOS', desc: 'Profissionais de defesa atlética altamente treinados em força física, imobilização tática e gestão de crises.' },
            { title: 'GESTÃO DE VÍDEO EM NUVEM', desc: 'Armazenamento seguro fora do local com acesso remoto instantâneo por aplicativo móvel criptografado.' },
            { title: 'CONTROLE DE ACESSO BIOMÉTRICO', desc: 'Autenticação multifator, impressão digital e catracas com reconhecimento facial para áreas restritas.' },
            { title: 'CENTRO DE MONITORAMENTO EM TEMPO REAL', desc: 'Painel de comando centralizado operado 24/7/365 por analistas de vigilância experientes.' },
            { title: 'DEFESA PERIMETRAL COM LÁSER', desc: 'Barreiras a laser infravermelho invisíveis sincronizadas com holofotes estroboscópicos e alarmes acústicos.' }
        ],
        pricing: [
            { name: 'DEFESA PADRÃO', price: '$299', period: '/mês', features: ['4x Câmeras CFTV 4K Externas', 'Backup na nuvem 1080p (14 Dias)', 'Alertas de sensor de movimento 24/7', 'Controle remoto por App Móvel', 'Suporte de manutenção padrão'] },
            { name: 'TÁTICO PRO', price: '$599', period: '/mês', featured: true, features: ['10x Câmeras CFTV Térmicas e Noturnas', 'Backup na nuvem 4K (30 Dias)', 'Módulo de Reconhecimento Facial IA', 'Patrulhas atléticas sob demanda', 'Resposta de comando prioritária'] },
            { name: 'FORTALEZA EMPRESARIAL', price: '$1299', priceVal: '$1.299', period: '/mês', features: ['Conjunto ilimitado de câmeras sob medida', 'Redundância contínua local e em nuvem', 'Equipe dedicada de segurança tática 24/7', 'Controle biométrico de portões', 'Gerente de conta tática dedicado'] }
        ],
        team: [
            { name: 'Comandante Victor Vance', role: 'Diretor de Segurança', bio: 'Ex-operador de Forças Especiais com 18 anos de experiência em segurança física tática de alto risco.' },
            { name: 'Elena Rostova', role: 'Diretora de Sistemas CFTV e IA', bio: 'Especialista em redes de visão neural, infraestrutura térmica e análise biométrica em tempo real.' },
            { name: 'Marcus Steel', role: 'Líder de Resposta Tática', bio: 'Especialista em treinamento físico de elite comandando proteção próxima e intervenção de emergência.' }
        ],
        testimonials: [
            { quote: 'A Vigilance Defense instalou um sistema CFTV 4K impecável em nosso parque industrial. Seus guardas atléticos chegam em menos de dois minutos.', author: 'Arthur Pendelton', title: 'CEO, Nexus Logistics' },
            { quote: 'A estética escura, o alto contraste e o foco tático implacável são incomparáveis no mercado.', author: 'Seraphina Vance', title: 'Diretora de Operações, Apex Holdings' },
            { quote: 'A detecção de CFTV por IA evitou uma invasão na primeira noite. A nitidez das câmeras térmicas é fantástica.', author: 'Dmitri Kozlov', title: 'Gerente de Segurança, Steelworks Corp' }
        ],
        blog: [
            { id: 1, title: 'Como o CFTV Térmico 4K Evita Invasões Noturnas Industriais', date: '10 SET, 2025', author: 'Analista Tático', snippet: 'Imagens térmicas e preparo físico eliminam pontos cegos na escuridão total.', content: 'Relatório tático completo sobre câmeras térmicas, visão noturna e exercícios de resposta física.' },
            { id: 2, title: 'Força Física vs. Sensores Inteligentes: Camada Dupla de Defesa', date: '04 SET, 2025', author: 'Cmdte. Victor Vance', snippet: 'Por que câmeras inteligentes devem ser combinadas com agentes atléticos para proteção total.', content: 'Análise detalhada comparando alarmes automatizados e contenção física imediata.' },
            { id: 3, title: 'Arquitetura de Armazenamento de Vídeo Criptografado em Nuvem', date: '28 AGO, 2025', author: 'Elena Rostova', snippet: 'Protegendo evidências em vídeo contra adulteração física, PEM e ciberataques.', content: 'Detalhamento técnico do streaming AES-256 e gravação redundante fora da rede.' }
        ],
        contactMsg: 'Inicie comunicação direta com o nosso Comando de Segurança Tática.',
        form: {
            name: 'Nome Completo',
            email: 'E-mail',
            subject: 'Assunto / Nível de Ameaça',
            message: 'Descreva suas necessidades de segurança...',
            send: 'ENVIAR SOLICITAÇÃO TÁTICA',
            subscribe: 'INSCREVER-SE EM ALERTAS DE DEFESA'
        },
        footer: {
            aboutDesc: 'A Vigilance Defense fornece agentes de segurança atléticos de alta intensidade e sistemas de vigilância CFTV de padrão militar. Força física extrema aliada à tecnologia óptica avançada.',
            quickLinks: 'NAVEGAÇÃO RÁPIDA',
            contactInfo: 'QUARTEL GENERAL DE COMANDO',
            newsletter: 'BOLETIM DE INTELIGÊNCIA TÁTICA',
            rights: 'Todos os direitos reservados. Vigilance Defense Tactical Security.'
        }
    },
    fr: {
        code: 'fr',
        name: 'Français',
        siteTitle: 'VIGILANCE DEFENSE | Solutions Tactiques de Sécurité et CCTV',
        brand: 'VIGILANCE',
        brandSub: 'DEFENSE',
        tagline: 'PROTECTION TACTIQUE HAUTE INTENSITÉ ET SURVEILLANCE CCTV AVANCÉE',
        phone: '+1 (800) 555-8228',
        email: 'tactique@vigilance-defense.com',
        location: '750 Tactical Command Way, New York, NY 10001',
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            services: 'Services',
            pricing: 'Tarifs & Plans',
            blog: 'Blog Grid',
            blogDetail: 'Détail du Blog',
            team: 'Notre Équipe',
            testimonials: 'Témoignages',
            contact: 'Contact',
            pages: 'Pages'
        },
        hero: [
            {
                title: 'FORCE PHYSIQUE MAXIMALE ET SURVEILLANCE CCTV',
                subtitle: 'UNITÉS TACTIQUES ATHLÉTIQUES ET SURVEILLANCE EN TEMPS RÉEL',
                desc: 'Alliance d une endurance athlétique d élite, d une force musculaire et de réseaux de caméras CCTV 4K IA de niveau militaire.'
            },
            {
                title: 'CCTV HAUTE DÉFINITION ET INTÉGRATION CLOUD',
                subtitle: 'DÉTECTION D IMMINENCE ET ANALYSE PAR IA',
                desc: 'Caméras thermiques, vision nocturne et reconnaissance faciale de dernière génération reliées aux équipes d intervention rapide.'
            },
            {
                title: 'DÉFENSE PHYSIQUE ET CYBERNETIQUE IMBATTABLE',
                subtitle: 'FORCE PROUVÉE. TOLÉRANCE ZÉRO.',
                desc: 'Des périmètres industriels aux sièges sociaux, nos défenseurs athlétiques et capteurs intelligents stoppent les intrusions immédiatement.'
            }
        ],
        featuresHead: 'CARACTÉRISTIQUES DU SYSTÈME TACTIQUE CCTV ET DÉFENSE',
        featuresList: [
            'Architecture responsive HTML5 et CSS3 valide',
            'Framework Bootstrap v5 et variables personnalisées Sass',
            'Esthétique visuelle athlétique noir et blanc haut contraste',
            'Support multi-langue complet (ES, EN, DE, PT, FR, IT)',
            'Flux CCTV thermique et optique IA 24h/24 et 7j/7',
            'Force d intervention physique et tactique rapide',
            'Code optimisé pour les développeurs et le référencement SEO',
            'Gestion et stockage vidéo dans le cloud entièrement cryptés'
        ],
        services: [
            { title: 'SURVEILLANCE CCTV 4K IA', desc: 'Flux vidéo ultra-HD continus équipés de détection automatique des menaces, lecture de plaques et alertes d intrusion.' },
            { title: 'AGENTS TACTIQUES ATHLÉTIQUES', desc: 'Personnel de défense athlétique hautement entraîné à la maîtrise physique, à la neutralisation et à la gestion de crise.' },
            { title: 'GESTION VIDÉO EN CLOUD', desc: 'Stockage sécurisé hors site avec accès distant instantané via une application mobile hautement cryptée.' },
            { title: 'CONTRÔLE D ACCÈS BIOMÉTRIQUE', desc: 'Authentification multifacteur, empreintes digitales et tourniquets à balayage facial pour zones restreintes.' },
            { title: 'CENTRE DE CONTRÔLE EN TEMPS RÉEL', desc: 'Tableau de bord centralisé géré 24/7 par des analystes de surveillance chevronnés.' },
            { title: 'DÉFENSE PÉRIMÉTRIQUE LASER', desc: 'Barrières laser infrarouges invisibles synchronisées avec projecteurs stroboscopiques et répulsifs acoustiques.' }
        ],
        pricing: [
            { name: 'DÉFENSE STANDARD', price: '$299', period: '/mois', features: ['4x Caméras CCTV 4K Extérieures', 'Sauvegarde Cloud 1080p (14 Jours)', 'Alertes détecteur de mouvement 24/7', 'Contrôle à distance via App Mobile', 'Support de maintenance standard'] },
            { name: 'TACTIQUE PRO', price: '$599', period: '/mois', featured: true, features: ['10x Caméras CCTV Thermiques & Nocturnes', 'Sauvegarde Cloud 4K (30 Jours)', 'Module de reconnaissance faciale IA', 'Patrouilles athlétiques sur demande', 'Réponse de commandement prioritaire'] },
            { name: 'FORTERESSE ENTREPRISE', price: '$1299', priceVal: '$1 299', period: '/mois', features: ['Matrice de caméras sur mesure illimitée', 'Redondance continue locale et cloud', 'Équipe dédiée de sécurité tactique 24/7', 'Contrôle biométrique des accès portail', 'Gestionnaire de compte tactique dédié'] }
        ],
        team: [
            { name: 'Commandant Victor Vance', role: 'Directeur de la Sécurité', bio: 'Ancien opérateur des Forces Spéciales avec 18 ans d expérience en sécurité physique tactique à haut risque.' },
            { name: 'Elena Rostova', role: 'Directrice Systèmes CCTV & IA', bio: 'Experte en réseaux de vision neuronale, imagerie thermique et analyse biométrique en temps réel.' },
            { name: 'Marcus Steel', role: 'Chef de la Réponse Tactique', bio: 'Spécialiste de la préparation physique d élite dirigeant la protection rapprochée et l intervention d urgence.' }
        ],
        testimonials: [
            { quote: 'Vigilance Defense a installé un réseau CCTV 4K parfait sur notre site industriel. Leurs agents athlétiques interviennent en moins de 2 minutes.', author: 'Arthur Pendelton', title: 'PDG, Nexus Logistics' },
            { quote: 'L esthétique sombre, l interface contrastée et la rigueur tactique les distinguent totalement des agences classiques.', author: 'Seraphina Vance', title: 'Directrice des Opérations, Apex Holdings' },
            { quote: 'Leur détection CCTV IA a stoppé une tentative d intrusion dès la première nuit. La clarté thermique est phénoménale.', author: 'Dmitri Kozlov', title: 'Responsable Sécurité, Steelworks Corp' }
        ],
        blog: [
            { id: 1, title: 'Comment le CCTV Thermique 4K Empêche les Intrusions Nocturnes', date: '10 SEP, 2025', author: 'Analyste Tactique', snippet: 'L imagerie thermique alliée à la préparation physique élimine les zones d ombre dans l obscurité totale.', content: 'Rapport tactique complet sur l imagerie thermique, les capteurs nocturnes et les exercices d intervention.' },
            { id: 2, title: 'Force Physique vs. Capteurs Intelligents: La Double Protection', date: '04 SEP, 2025', author: 'Cdt. Victor Vance', snippet: 'Pourquoi les caméras IA doivent être associées à des agents athlétiques pour une sécurité optimale.', content: 'Analyse approfondie comparant alerte automatisée et neutralisation physique sur le terrain.' },
            { id: 3, title: 'Architecture de Stockage Vidéo Cloud Crypté pour Sites Sensibles', date: '28 AOÛ, 2025', author: 'Elena Rostova', snippet: 'Protection des preuves vidéo contre les altérations physiques, les EMP et les cyberattaques.', content: 'Explication technique du streaming vidéo AES-256 et de l enregistrement redondant hors réseau.' }
        ],
        contactMsg: 'Initiate direct communication with our Tactical Security Command.',
        form: {
            name: 'Nom Complet',
            email: 'Adresse Email',
            subject: 'Sujet / Niveau de Menace',
            message: 'Détaillez vos besoins de sécurité...',
            send: 'ENVOYER LA DEMANDE TACTIQUE',
            subscribe: 'S ABONNER AUX ALERTES DÉFENSE'
        },
        footer: {
            aboutDesc: 'Vigilance Defense fournit du personnel de sécurité athlétique à haute intensité et des systèmes de vidéo-surveillance CCTV de niveau militaire. Force physique ultime et technologie optique de pointe.',
            quickLinks: 'NAVIGATION RAPIDE',
            contactInfo: 'QUARTIER GÉNÉRAL DE COMMANDEMENT',
            newsletter: 'BULLETIN D INTELLIGENCE TACTIQUE',
            rights: 'Tous droits réservés. Vigilance Defense Tactical Security.'
        }
    },
    it: {
        code: 'it',
        name: 'Italiano',
        siteTitle: 'VIGILANCE DEFENSE | Soluzioni Tattiche di Sicurezza e CCTV',
        brand: 'VIGILANCE',
        brandSub: 'DEFENSE',
        tagline: 'PROTEZIONE TATTICA AD ALTA INTENSITÀ E VIDEOSORVEGLIANZA CCTV AVANZATA',
        phone: '+1 (800) 555-8228',
        email: 'tattico@vigilance-defense.com',
        location: '750 Tactical Command Way, New York, NY 10001',
        nav: {
            home: 'Home',
            about: 'Chi Siamo',
            services: 'Servizi',
            pricing: 'Piani e Prezzi',
            blog: 'Blog Grid',
            blogDetail: 'Dettaglio Blog',
            team: 'Il Nostro Team',
            testimonials: 'Testimonianze',
            contact: 'Contatti',
            pages: 'Pagine'
        },
        hero: [
            {
                title: 'MASSIMA FORZA FISICA E SORVEGLIANZA CCTV',
                subtitle: 'UNITÀ TATTICHE ATLETICHE E MONITORAGGIO IN TEMPO REALE',
                desc: 'Unione di resistenza atletica di livello superiore, forza muscolare e reti di videosorveglianza CCTV 4K IA di livello militare.'
            },
            {
                title: 'CCTV AD ALTA DEFINIZIONE E INTEGRAZIONE CLOUD',
                subtitle: 'RILEVAMENTO MINACCE ISTANTANEO E ANALISI IA',
                desc: 'Sistemi di telecamere termiche, visione notturna e riconoscimento facciale collegati direttamente a squadre di intervento rapido.'
            },
            {
                title: 'DIFESA FISICA E INFORMATICA IMPERMEABILE',
                subtitle: 'FORZA DIMOSTRATA. TOLLERANZA ZERO.',
                desc: 'Dai perimetri industriali ai quartieri generali aziendali, i nostri difensori atletici e sensori intelligenti bloccano le intrusioni.'
            }
        ],
        featuresHead: 'CARATTERISTICHE DEL SISTEMA TATTICO CCTV E DIFESA',
        featuresList: [
            'Architettura responsive HTML5 e CSS3 valida',
            'Framework Bootstrap v5 e variabili personalizzate Sass',
            'Estetica visiva atletica in bianco e nero ad alto contrasto',
            'Supporto multi-lingua completo (ES, EN, DE, PT, FR, IT)',
            'Flussi CCTV termici e ottici con IA operativi 24/7',
            'Forza di risposta rapida fisica e tattica',
            'Codice ottimizzato per sviluppatori e SEO',
            'Gestione e archiviazione video in cloud crittografata'
        ],
        services: [
            { title: 'VIDEOSORVEGLIANZA CCTV 4K CON IA', desc: 'Flussi video ultra-HD continui dotati di identificazione automatica delle minacce, targa veicoli e allarmi perimetrali.' },
            { title: 'GUARDIE TATTICHE ATLETICHE', desc: 'Personale di difesa atletico altamente addestrato alla forza fisica, al contenimento tattico e alla gestione delle crisi.' },
            { title: 'GESTIONE VIDEO IN CLOUD', desc: 'Archiviazione sicura off-site con accesso remoto istantaneo tramite applicazione mobile crittografata.' },
            { title: 'CONTROLLO ACCESSI BIOMETRICO', desc: 'Autenticazione a più fattori, impronta digitale e tornelli con scansione facciale per aree riservate.' },
            { title: 'CENTRO DI MONITORAGGIO IN TEMPO REALE', desc: 'Dashboard di comando centralizzata presidiata 24/7/365 da esperti analisti della sorveglianza.' },
            { title: 'DIFESA PERIMETRALE LASER', desc: 'Barriere laser a infrarossi invisibili sincronizzate con proiettori stroboscopici e dissuasori acustici.' }
        ],
        pricing: [
            { name: 'DIFESA STANDARD', price: '$299', period: '/mese', features: ['4x Telecamere CCTV 4K da Esterno', 'Backup in cloud 1080p (14 Giorni)', 'Allarmi sensore di movimento 24/7', 'Controllo remoto da App Mobile', 'Supporto manutenzione standard'] },
            { name: 'TATTICO PRO', price: '$599', period: '/mese', featured: true, features: ['10x Telecamere CCTV Termiche e Notturne', 'Backup in cloud 4K (30 Giorni)', 'Modulo di riconoscimento facciale IA', 'Pattugliamenti atletici su richiesta', 'Risposta di comando prioritaria'] },
            { name: 'FORTEZZA AZIENDALE', price: '$1299', priceVal: '$1.299', period: '/mese', features: ['Matrice di telecamere su misura illimitata', 'Ridondanza continua locale e in cloud', 'Team dedicato di sicurezza tattica 24/7', 'Controllo biometrico varchi', 'Account manager tattico dedicato'] }
        ],
        team: [
            { name: 'Comandante Victor Vance', role: 'Chief Security Officer', bio: 'Ex operatore delle Forze Speciali con 18 anni di esperienza nella sicurezza fisica e tattica ad alto rischio.' },
            { name: 'Elena Rostova', role: 'Direttrice Sistemi CCTV & IA', bio: 'Esperta in reti di visione neurale, infrastrutture termiche e analisi biometrica in tempo reale.' },
            { name: 'Marcus Steel', role: 'Capo della Risposta Tattica', bio: 'Specialista in addestramento fisico di élite alla guida della protezione ravvicinata e interventi di emergenza.' }
        ],
        testimonials: [
            { quote: 'Vigilance Defense ha installato una rete CCTV 4K perfetta nel nostro parco industriale. Le loro guardie atletiche intervengono in meno di due minuti.', author: 'Arthur Pendelton', title: 'CEO, Nexus Logistics' },
            { quote: 'L estetica scura, l interfaccia ad alto contrasto e il rigore tattico li distinguono nettamente dalle solite agenzie.', author: 'Seraphina Vance', title: 'Direttrice Operativa, Apex Holdings' },
            { quote: 'Il loro rilevamento CCTV con IA ha bloccato un tentativo di intrusione fin dalla prima notte. La nitidezza termica è incredibile.', author: 'Dmitri Kozlov', title: 'Responsabile Sicurezza, Steelworks Corp' }
        ],
        blog: [
            { id: 1, title: 'Come il CCTV Termico 4K Previene le Intrusioni Notturne', date: '10 SET, 2025', author: 'Analista Tattico', snippet: 'L intelligenza termica unita alla prontezza fisica elimina i punti ciechi nell oscurità totale.', content: 'Rapporto tattico completo su termografia, sensori notturni e addestramento atletico.' },
            { id: 2, title: 'Forza Fisica vs. Sensori Intelligenti: Il Doppio Livello di Difesa', date: '04 SET, 2025', author: 'Cdr. Victor Vance', snippet: 'Perché le telecamere IA devono essere affiancate da operatori atletici per la massima sicurezza.', content: 'Analisi dettagliata che confronta allarmi automatici e contenimento fisico immediato.' },
            { id: 3, title: 'Architettura di Archiviazione Video Cloud Crittografata', date: '28 AGO, 2025', author: 'Elena Rostova', snippet: 'Protezione delle prove video da manomissioni fisiche, impulsi EMP e attacchi informatici.', content: 'Dettagli tecnici dello streaming video AES-256 e registrazione ridondante fuori rete.' }
        ],
        contactMsg: 'Inizia una comunicazione diretta con il nostro Comando di Sicurezza Tattica.',
        form: {
            name: 'Nome Completo',
            email: 'Indirizzo Email',
            subject: 'Oggetto / Livello di Minaccia',
            message: 'Descrivi le tue esigenze di sicurezza...',
            send: 'INVIA RICHIESTA TATTICA',
            subscribe: 'ISCRIVITI AGLI ALLERTI DI DIFESA'
        },
        footer: {
            aboutDesc: 'Vigilance Defense fornisce personale di sicurezza atletico ad alta intensità e sistemi di videosorveglianza CCTV di livello militare. Massima forza fisica e tecnologia ottica avanzata.',
            quickLinks: 'NAVIGAZIONE RAPIDA',
            contactInfo: 'QUARTIER GENERALE DI COMANDO',
            newsletter: 'BOLLETTINO DI INTELLIGENCE TATTICA',
            rights: 'Tutti i diritti riservati. Vigilance Defense Tactical Security.'
        }
    }
};

// Component Generator Helpers
function generateHeader(langCode, activePage) {
    const t = translations[langCode];

    // Language options for selector
    const langOptions = languages.map(l => {
        const selected = l === langCode ? 'selected' : '';
        return `<option value="${l}" ${selected}>${l.toUpperCase()}</option>`;
    }).join('');

    return `
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <span class="me-3"><i class="fas fa-phone-alt"></i> ${t.phone}</span>
                <span class="d-none d-md-inline"><i class="fas fa-envelope"></i> ${t.email}</span>
            </div>
            <div class="d-flex align-items-center gap-3">
                <span class="d-none d-lg-inline"><i class="fas fa-map-marker-alt"></i> ${t.location}</span>
                <select class="lang-selector form-select form-select-sm" aria-label="Language Selector">
                    ${langOptions}
                </select>
            </div>
        </div>
    </div>

    <!-- Main Tactical Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark navbar-tactical">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <i class="fas fa-shield-alt text-warning me-2"></i>${t.brand} <span>${t.brandSub}</span>
            </a>
            <button class="navbar-toggler border-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTacticalNav" aria-controls="navbarTacticalNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTacticalNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link ${activePage === 'index.html' ? 'active' : ''}" href="index.html">${t.nav.home}</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'about.html' ? 'active' : ''}" href="about.html">${t.nav.about}</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'service.html' ? 'active' : ''}" href="service.html">${t.nav.services}</a></li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'pricing.html' ? 'active' : ''}" href="pricing.html">${t.nav.pricing}</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${['blog.html', 'blog-detail.html'].includes(activePage) ? 'active' : ''}" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${t.nav.blog}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="blogDropdown">
                            <li><a class="dropdown-item" href="blog.html">${t.nav.blog}</a></li>
                            <li><a class="dropdown-item" href="blog-detail.html">${t.nav.blogDetail}</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${['team.html', 'testimonial.html'].includes(activePage) ? 'active' : ''}" href="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${t.nav.pages}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="pagesDropdown">
                            <li><a class="dropdown-item" href="team.html">${t.nav.team}</a></li>
                            <li><a class="dropdown-item" href="testimonial.html">${t.nav.testimonials}</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link ${activePage === 'contact.html' ? 'active' : ''}" href="contact.html">${t.nav.contact}</a></li>
                </ul>
                <a href="contact.html" class="btn btn-neon ms-lg-3 d-none d-xl-inline-block">${t.form.send}</a>
            </div>
        </div>
    </nav>
    `;
}

function generateFooter(langCode) {
    const t = translations[langCode];
    return `
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <a class="navbar-brand text-white h2" href="index.html">
                        <i class="fas fa-shield-alt text-warning me-2"></i>${t.brand} <span class="text-warning">${t.brandSub}</span>
                    </a>
                    <p class="mt-3 text-secondary">${t.footer.aboutDesc}</p>
                    <div class="social-links-tactical mt-3">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h4>${t.footer.quickLinks}</h4>
                    <ul class="footer-links">
                        <li><a href="index.html"><i class="fas fa-angle-right me-1 text-warning"></i> ${t.nav.home}</a></li>
                        <li><a href="about.html"><i class="fas fa-angle-right me-1 text-warning"></i> ${t.nav.about}</a></li>
                        <li><a href="service.html"><i class="fas fa-angle-right me-1 text-warning"></i> ${t.nav.services}</a></li>
                        <li><a href="pricing.html"><i class="fas fa-angle-right me-1 text-warning"></i> ${t.nav.pricing}</a></li>
                        <li><a href="blog.html"><i class="fas fa-angle-right me-1 text-warning"></i> ${t.nav.blog}</a></li>
                        <li><a href="contact.html"><i class="fas fa-angle-right me-1 text-warning"></i> ${t.nav.contact}</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4>${t.footer.contactInfo}</h4>
                    <ul class="list-unstyled text-secondary">
                        <li class="mb-2"><i class="fas fa-map-marker-alt text-warning me-2"></i> ${t.location}</li>
                        <li class="mb-2"><i class="fas fa-phone-alt text-warning me-2"></i> ${t.phone}</li>
                        <li class="mb-2"><i class="fas fa-envelope text-warning me-2"></i> ${t.email}</li>
                        <li class="mb-2"><i class="fas fa-clock text-warning me-2"></i> 24/7/365 Tactical Readiness</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4>${t.footer.newsletter}</h4>
                    <p class="text-secondary small">Receive encrypted security advisories, system updates, and threat level briefings.</p>
                    <form class="newsletter-form" data-success-msg="${t.form.subscribe}">
                        <div class="mb-2">
                            <input type="email" class="form-control form-control-tactical" placeholder="${t.form.email}" required>
                        </div>
                        <button type="submit" class="btn btn-neon w-100">${t.form.subscribe}</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="footer-bottom text-center text-secondary">
            <div class="container">
                <p class="mb-0">&copy; 2025 ${t.brand} ${t.brandSub}. ${t.footer.rights}</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button id="backToTop" title="Go to top"><i class="fas fa-chevron-up"></i></button>

    <!-- Bootstrap 5 JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom Main JS -->
    <script src="../js/main.js"></script>
    `;
}

function generateHead(langCode, pageTitle) {
    const t = translations[langCode];
    return `<!DOCTYPE html>
<html lang="${langCode}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${t.tagline}">
    <title>${pageTitle} | ${t.siteTitle}</title>
    <!-- Bootstrap v5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome v5/v6 Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts Oswald & Montserrat -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Oswald:wght@500;600;700;900&display=swap" rel="stylesheet">
    <!-- Custom Tactical Stylesheet -->
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
`;
}

// Pages HTML Builders

function buildHomePage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.home);
    html += generateHeader(langCode, 'index.html');

    // Hero Animated Carousel
    html += `
    <div id="heroCarousel" class="carousel slide hero-carousel carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" style="background-image: url('${images.hero1}');">
                <div class="container hero-caption">
                    <span class="hero-badge"><i class="fas fa-shield-alt"></i> ${t.hero[0].subtitle}</span>
                    <h1 class="text-white fw-bold mb-3">${t.hero[0].title}</h1>
                    <p class="lead text-light mb-4 col-lg-8">${t.hero[0].desc}</p>
                    <div class="d-flex gap-3">
                        <a href="service.html" class="btn btn-neon">${t.nav.services}</a>
                        <a href="contact.html" class="btn btn-silver">${t.nav.contact}</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item" style="background-image: url('${images.hero2}');">
                <div class="container hero-caption">
                    <span class="hero-badge"><i class="fas fa-video"></i> ${t.hero[1].subtitle}</span>
                    <h1 class="text-white fw-bold mb-3">${t.hero[1].title}</h1>
                    <p class="lead text-light mb-4 col-lg-8">${t.hero[1].desc}</p>
                    <div class="d-flex gap-3">
                        <a href="pricing.html" class="btn btn-neon">${t.nav.pricing}</a>
                        <a href="about.html" class="btn btn-silver">${t.nav.about}</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item" style="background-image: url('${images.hero3}');">
                <div class="container hero-caption">
                    <span class="hero-badge"><i class="fas fa-user-shield"></i> ${t.hero[2].subtitle}</span>
                    <h1 class="text-white fw-bold mb-3">${t.hero[2].title}</h1>
                    <p class="lead text-light mb-4 col-lg-8">${t.hero[2].desc}</p>
                    <div class="d-flex gap-3">
                        <a href="contact.html" class="btn btn-neon">${t.form.send}</a>
                        <a href="team.html" class="btn btn-silver">${t.nav.team}</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- About Brief & Features Section -->
    <section class="section-padding bg-dark">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-lg-6">
                    <div class="img-container">
                        <img src="${images.about}" alt="Athletic Force & Tactical Strength" class="img-fluid bw-img w-100" style="max-height: 480px;">
                    </div>
                </div>
                <div class="col-lg-6 animate-on-scroll">
                    <div class="section-title">
                        <span class="subtitle">${t.tagline}</span>
                        <h2>ATHLETIC POWER & HIGH-PRECISION SURVEILLANCE</h2>
                    </div>
                    <p class="text-secondary">${t.footer.aboutDesc}</p>
                    <ul class="feature-list-tight mb-4">
                        ${t.featuresList.map(item => `<li><i class="fas fa-check-square"></i> ${item}</li>`).join('')}
                    </ul>
                    <a href="about.html" class="btn btn-neon">${t.nav.about}</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Overview Section -->
    <section class="section-padding">
        <div class="container">
            <div class="section-title text-center">
                <span class="subtitle">TACTICAL CAPABILITIES</span>
                <h2>OUR CORE SECURITY SERVICES</h2>
            </div>
            <div class="row g-4">
                ${t.services.slice(0, 3).map((s, idx) => `
                <div class="col-lg-4 col-md-6 animate-on-scroll">
                    <div class="card-tactical">
                        <div class="icon-box-tactical"><i class="fas ${idx === 0 ? 'fa-video' : idx === 1 ? 'fa-user-ninja' : 'fa-cloud-upload-alt'}"></i></div>
                        <h4 class="text-white">${s.title}</h4>
                        <p class="text-secondary mb-3">${s.desc}</p>
                        <a href="service.html" class="text-warning fw-bold text-uppercase small">${t.nav.services} <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Pricing Section Preview -->
    <section class="section-padding bg-dark">
        <div class="container">
            <div class="section-title text-center">
                <span class="subtitle">TRANSPARENT TACTICAL PRICING</span>
                <h2>CHOOSE YOUR DEFENSE TIER</h2>
            </div>
            <div class="row g-4">
                ${t.pricing.map(p => `
                <div class="col-lg-4 col-md-6">
                    <div class="pricing-card ${p.featured ? 'featured' : ''}">
                        ${p.featured ? '<span class="badge bg-warning text-dark position-absolute top-0 end-0 m-3 px-3 py-2 fw-bold">MOST POPULAR</span>' : ''}
                        <h3 class="text-white mb-0">${p.name}</h3>
                        <div class="price">${p.priceVal || p.price}<span>${p.period}</span></div>
                        <ul class="feature-list-tight text-start mb-4">
                            ${p.features.map(f => `<li><i class="fas fa-shield-alt"></i> ${f}</li>`).join('')}
                        </ul>
                        <a href="pricing.html" class="btn ${p.featured ? 'btn-neon' : 'btn-outline-neon'} w-100">${t.nav.pricing}</a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- Testimonials Preview Carousel -->
    <section class="section-padding">
        <div class="container">
            <div class="section-title text-center">
                <span class="subtitle">VERIFIED FIELD TESTIMONIALS</span>
                <h2>CLIENT SATISFACTION & DEFENSE FEEDBACK</h2>
            </div>
            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${t.testimonials.map((test, i) => `
                    <div class="carousel-item ${i === 0 ? 'active' : ''}">
                        <div class="col-lg-8 mx-auto">
                            <div class="testimonial-card text-center">
                                <img src="${images[`testimonial${i+1}`]}" alt="${test.author}" class="rounded-circle mb-3 bw-img border border-warning" style="width: 80px; height: 80px;">
                                <p class="lead text-light fst-italic mb-3">"${test.quote}"</p>
                                <h5 class="text-warning mb-0">${test.author}</h5>
                                <small class="text-secondary">${test.title}</small>
                            </div>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

function buildAboutPage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.about);
    html += generateHeader(langCode, 'about.html');

    html += `
    <div class="page-header">
        <div class="container">
            <h1>${t.nav.about}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">${t.nav.home}</a></li>
                    <li class="breadcrumb-item active text-warning" aria-current="page">${t.nav.about}</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section-padding">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-lg-6">
                    <div class="img-container">
                        <img src="${images.about}" alt="Strength & Muscle Definition" class="img-fluid bw-img w-100">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="section-title">
                        <span class="subtitle">OUR TACTICAL PHILOSOPHY</span>
                        <h2>UNCOMPROMISING ATHLETIC STRENGTH & OPTICAL PRECISION</h2>
                    </div>
                    <p class="text-light">${t.footer.aboutDesc}</p>
                    <p class="text-secondary">We believe technology without force is toothless, and force without real-time intelligence is blind. By unifying physical peak performance with military-grade 4K CCTV camera grids and encrypted cloud storage, Vigilance Defense forms an unbreakable shield around high-risk assets.</p>
                    <div class="row g-3 mt-3">
                        <div class="col-6">
                            <div class="p-3 bg-dark border border-secondary">
                                <h3 class="text-warning mb-1">100%</h3>
                                <small class="text-light text-uppercase">Breach Prevention Rate</small>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 bg-dark border border-secondary">
                                <h3 class="text-warning mb-1">&lt; 2 MIN</h3>
                                <small class="text-light text-uppercase">Average Rapid Response</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding bg-dark">
        <div class="container">
            <div class="section-title text-center">
                <span class="subtitle">${t.featuresHead}</span>
                <h2>TEMPLATE TECHNICAL ADVANTAGES</h2>
            </div>
            <div class="row g-4">
                ${t.featuresList.map((f, i) => `
                <div class="col-lg-3 col-md-6">
                    <div class="card-tactical text-center">
                        <div class="icon-box-tactical mx-auto"><i class="fas fa-check-circle"></i></div>
                        <h5 class="text-white">${f}</h5>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

function buildServicePage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.services);
    html += generateHeader(langCode, 'service.html');

    html += `
    <div class="page-header">
        <div class="container">
            <h1>${t.nav.services}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">${t.nav.home}</a></li>
                    <li class="breadcrumb-item active text-warning" aria-current="page">${t.nav.services}</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section-padding">
        <div class="container">
            <div class="section-title text-center">
                <span class="subtitle">TACTICAL PROTECTION CAPABILITIES</span>
                <h2>COMPLETE SECURITY & CCTV PORTFOLIO</h2>
            </div>
            <div class="row g-4">
                ${t.services.map((s, idx) => `
                <div class="col-lg-4 col-md-6">
                    <div class="card-tactical">
                        <div class="icon-box-tactical">
                            <i class="fas ${idx % 3 === 0 ? 'fa-video' : idx % 3 === 1 ? 'fa-user-shield' : 'fa-fingerprint'}"></i>
                        </div>
                        <h4 class="text-white">${s.title}</h4>
                        <p class="text-secondary">${s.desc}</p>
                        <ul class="feature-list-tight mt-3 mb-4">
                            <li><i class="fas fa-angle-right"></i> 24/7 Encrypted Live Feed</li>
                            <li><i class="fas fa-angle-right"></i> Instant Automated Alerts</li>
                        </ul>
                        <a href="contact.html" class="btn btn-outline-neon btn-sm w-100">${t.form.send}</a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

function buildPricingPage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.pricing);
    html += generateHeader(langCode, 'pricing.html');

    html += `
    <div class="page-header">
        <div class="container">
            <h1>${t.nav.pricing}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">${t.nav.home}</a></li>
                    <li class="breadcrumb-item active text-warning" aria-current="page">${t.nav.pricing}</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section-padding">
        <div class="container">
            <div class="section-title text-center">
                <span class="subtitle">TRANSPARENT COVERAGE TIERS</span>
                <h2>SECURITY & CCTV SUBSCRIPTION PLANS</h2>
            </div>
            <div class="row g-4">
                ${t.pricing.map(p => `
                <div class="col-lg-4 col-md-6">
                    <div class="pricing-card ${p.featured ? 'featured' : ''}">
                        ${p.featured ? '<span class="badge bg-warning text-dark position-absolute top-0 end-0 m-3 px-3 py-2 fw-bold">RECOMMENDED</span>' : ''}
                        <h3 class="text-white mb-0">${p.name}</h3>
                        <div class="price">${p.priceVal || p.price}<span>${p.period}</span></div>
                        <ul class="feature-list-tight text-start mb-4">
                            ${p.features.map(f => `<li><i class="fas fa-shield-alt"></i> ${f}</li>`).join('')}
                        </ul>
                        <a href="contact.html" class="btn ${p.featured ? 'btn-neon' : 'btn-outline-neon'} w-100">${t.form.send}</a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

function buildBlogGridPage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.blog);
    html += generateHeader(langCode, 'blog.html');

    html += `
    <div class="page-header">
        <div class="container">
            <h1>${t.nav.blog}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">${t.nav.home}</a></li>
                    <li class="breadcrumb-item active text-warning" aria-current="page">${t.nav.blog}</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section-padding">
        <div class="container">
            <div class="row g-4">
                ${t.blog.map((b, idx) => `
                <div class="col-lg-4 col-md-6">
                    <div class="card-tactical p-0 overflow-hidden">
                        <div class="img-container">
                            <img src="${images[`blog${idx+1}`]}" alt="${b.title}" class="img-fluid bw-img w-100" style="height: 220px;">
                        </div>
                        <div class="p-4">
                            <div class="d-flex justify-content-between text-warning small mb-2">
                                <span><i class="far fa-calendar-alt"></i> ${b.date}</span>
                                <span><i class="far fa-user"></i> ${b.author}</span>
                            </div>
                            <h4 class="text-white h5 mb-3">${b.title}</h4>
                            <p class="text-secondary small mb-3">${b.snippet}</p>
                            <a href="blog-detail.html" class="btn btn-outline-neon btn-sm w-100">${t.nav.blogDetail}</a>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

function buildBlogDetailPage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.blogDetail);
    html += generateHeader(langCode, 'blog-detail.html');

    const article = t.blog[0];

    html += `
    <div class="page-header">
        <div class="container">
            <h1>${t.nav.blogDetail}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">${t.nav.home}</a></li>
                    <li class="breadcrumb-item"><a href="blog.html">${t.nav.blog}</a></li>
                    <li class="breadcrumb-item active text-warning" aria-current="page">${t.nav.blogDetail}</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section-padding">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="card-tactical p-4 mb-4">
                        <div class="img-container mb-4">
                            <img src="${images.blog1}" alt="${article.title}" class="img-fluid bw-img w-100">
                        </div>
                        <div class="d-flex gap-3 text-warning mb-3">
                            <span><i class="far fa-calendar-alt"></i> ${article.date}</span>
                            <span><i class="far fa-user"></i> ${article.author}</span>
                            <span><i class="far fa-comments"></i> 2 Comments</span>
                        </div>
                        <h2 class="text-white mb-3">${article.title}</h2>
                        <p class="lead text-light">${article.snippet}</p>
                        <p class="text-secondary">${article.content}</p>
                        <p class="text-secondary">High contrast optical CCTV sensors utilize long-wave infrared spectrums to convert heat gradients into high-resolution black and white tactical video. When combined with close proximity athletic personnel, reaction latency is minimized to seconds.</p>
                    </div>

                    <!-- Comment List -->
                    <div class="card-tactical p-4 mb-4">
                        <h3 class="text-white mb-4"><i class="fas fa-comments text-warning"></i> COMMENTS</h3>
                        <ul id="commentList" class="comment-list mb-0">
                            <li class="comment-item">
                                <img src="${images.testimonial1}" alt="User" class="comment-avatar bw-img">
                                <div>
                                    <h5 class="text-white mb-1">Captain James Miller</h5>
                                    <small class="text-warning d-block mb-2"><i class="far fa-clock"></i> SEP 11, 2025</small>
                                    <p class="text-light mb-0">Crucial technical insights on thermal calibration. Implementing this in our perimeter defense grid immediately.</p>
                                </div>
                            </li>
                            <li class="comment-item">
                                <img src="${images.testimonial2}" alt="User" class="comment-avatar bw-img">
                                <div>
                                    <h5 class="text-white mb-1">Sarah Jenkins</h5>
                                    <small class="text-warning d-block mb-2"><i class="far fa-clock"></i> SEP 10, 2025</small>
                                    <p class="text-light mb-0">The athletic response team integration with 4K CCTV feed has completely revolutionized our asset security.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Comment Form -->
                    <div class="card-tactical p-4">
                        <h3 class="text-white mb-3"><i class="fas fa-pen text-warning"></i> LEAVE A TACTICAL COMMENT</h3>
                        <div id="commentAlert" class="alert alert-success d-none mb-3">Comment posted successfully!</div>
                        <form id="commentForm">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" id="commentName" class="form-control form-control-tactical" placeholder="${t.form.name}" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control form-control-tactical" placeholder="${t.form.email}" required>
                                </div>
                                <div class="col-12">
                                    <textarea id="commentMessage" class="form-control form-control-tactical" rows="4" placeholder="${t.form.message}" required></article></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-neon">POST COMMENT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="col-lg-4">
                    <div class="card-tactical mb-4">
                        <h4 class="text-white mb-3">SEARCH INTELLIGENCE</h4>
                        <div class="input-group">
                            <input type="text" class="form-control form-control-tactical" placeholder="Search briefing...">
                            <button class="btn btn-neon"><i class="fas fa-search"></i></button>
                        </div>
                    </div>

                    <div class="card-tactical">
                        <h4 class="text-white mb-3">RECENT BRIEFINGS</h4>
                        <ul class="list-unstyled">
                            ${t.blog.map(b => `
                            <li class="mb-3 pb-2 border-bottom border-secondary">
                                <a href="blog-detail.html" class="text-light fw-bold">${b.title}</a>
                                <div class="small text-warning"><i class="far fa-calendar-alt"></i> ${b.date}</div>
                            </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

function buildTeamPage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.team);
    html += generateHeader(langCode, 'team.html');

    html += `
    <div class="page-header">
        <div class="container">
            <h1>${t.nav.team}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">${t.nav.home}</a></li>
                    <li class="breadcrumb-item active text-warning" aria-current="page">${t.nav.team}</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section-padding">
        <div class="container">
            <div class="section-title text-center">
                <span class="subtitle">TACTICAL LEADERSHIP & FORCE COMMANDERS</span>
                <h2>OUR ELITE ATHLETIC SECURITY PERSONNEL</h2>
            </div>
            <div class="row g-4">
                ${t.team.map((m, idx) => `
                <div class="col-lg-4 col-md-6">
                    <div class="team-card">
                        <div class="team-img-wrap">
                            <img src="${images[`team${idx+1}`]}" alt="${m.name}" class="bw-img">
                        </div>
                        <div class="team-info">
                            <h4 class="text-white mb-1">${m.name}</h4>
                            <span class="text-warning small text-uppercase d-block mb-2">${m.role}</span>
                            <p class="text-secondary small mb-3">${m.bio}</p>
                            <div class="social-links-tactical">
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

function buildTestimonialPage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.testimonials);
    html += generateHeader(langCode, 'testimonial.html');

    html += `
    <div class="page-header">
        <div class="container">
            <h1>${t.nav.testimonials}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">${t.nav.home}</a></li>
                    <li class="breadcrumb-item active text-warning" aria-current="page">${t.nav.testimonials}</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section-padding">
        <div class="container">
            <div class="section-title text-center">
                <span class="subtitle">VERIFIED ASSURANCE</span>
                <h2>WHAT OUR DEFENSE CLIENTS SAY</h2>
            </div>
            <div class="row g-4">
                ${t.testimonials.map((test, i) => `
                <div class="col-lg-4 col-md-6">
                    <div class="testimonial-card">
                        <div class="d-flex align-items-center mb-3">
                            <img src="${images[`testimonial${i+1}`]}" alt="${test.author}" class="rounded-circle bw-img border border-warning me-3" style="width: 60px; height: 60px;">
                            <div>
                                <h5 class="text-warning mb-0">${test.author}</h5>
                                <small class="text-secondary">${test.title}</small>
                            </div>
                        </div>
                        <p class="text-light mb-0">"${test.quote}"</p>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

function buildContactPage(langCode) {
    const t = translations[langCode];
    let html = generateHead(langCode, t.nav.contact);
    html += generateHeader(langCode, 'contact.html');

    html += `
    <div class="page-header">
        <div class="container">
            <h1>${t.nav.contact}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><a href="index.html">${t.nav.home}</a></li>
                    <li class="breadcrumb-item active text-warning" aria-current="page">${t.nav.contact}</li>
                </ol>
            </nav>
        </div>
    </div>

    <section class="section-padding">
        <div class="container">
            <div class="row g-4 mb-5">
                <div class="col-lg-4">
                    <div class="card-tactical text-center">
                        <div class="icon-box-tactical mx-auto"><i class="fas fa-map-marker-alt"></i></div>
                        <h4 class="text-white">${t.footer.contactInfo}</h4>
                        <p class="text-secondary mb-0">${t.location}</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card-tactical text-center">
                        <div class="icon-box-tactical mx-auto"><i class="fas fa-phone-alt"></i></div>
                        <h4 class="text-white">COMMAND PHONE</h4>
                        <p class="text-secondary mb-0">${t.phone}</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card-tactical text-center">
                        <div class="icon-box-tactical mx-auto"><i class="fas fa-envelope"></i></div>
                        <h4 class="text-white">ENCRYPTED EMAIL</h4>
                        <p class="text-secondary mb-0">${t.email}</p>
                    </div>
                </div>
            </div>

            <div class="row g-4 align-items-stretch">
                <div class="col-lg-6">
                    <div class="card-tactical p-4 h-100">
                        <h3 class="text-white mb-2">${t.contactMsg}</h3>
                        <p class="text-secondary mb-4">Complete the form below to initiate rapid deployment analysis.</p>
                        <div id="contactAlert" class="alert d-none"></div>
                        <form id="contactForm" data-success-msg="Your request has been logged into our tactical dispatch queue. Expect response within 15 minutes.">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" class="form-control form-control-tactical" placeholder="${t.form.name}" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control form-control-tactical" placeholder="${t.form.email}" required>
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control form-control-tactical" placeholder="${t.form.subject}" required>
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control form-control-tactical" rows="5" placeholder="${t.form.message}" required></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-neon w-100">${t.form.send}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card-tactical p-2 h-100">
                        <iframe class="map-container" src="https://maps.google.com/maps?q=New%20York%20City&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" aria-label="Google Map Headquarters"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    html += generateFooter(langCode);
    return html;
}

// Map of page names to their generator functions
const pageBuilders = {
    'index.html': buildHomePage,
    'about.html': buildAboutPage,
    'service.html': buildServicePage,
    'pricing.html': buildPricingPage,
    'blog.html': buildBlogGridPage,
    'blog-detail.html': buildBlogDetailPage,
    'team.html': buildTeamPage,
    'testimonial.html': buildTestimonialPage,
    'contact.html': buildContactPage
};

// Execute build process
console.log('Starting Multi-Language Website Generation...');

languages.forEach(lang => {
    const dir = path.join(__dirname, '..', lang);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    Object.keys(pageBuilders).forEach(pageName => {
        const filePath = path.join(dir, pageName);
        const htmlContent = pageBuilders[pageName](lang);
        fs.writeFileSync(filePath, htmlContent, 'utf8');
        console.log(`Generated: /${lang}/${pageName}`);
    });
});

// Root index.html redirect to default language (en/index.html)
const rootIndexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=en/index.html">
    <title>VIGILANCE DEFENSE - Redirecting...</title>
</head>
<body style="background-color: #050505; color: #ffffff; font-family: sans-serif; text-align: center; padding-top: 20vh;">
    <h1>VIGILANCE DEFENSE</h1>
    <p>Redirecting to default language version...</p>
    <p><a href="en/index.html" style="color: #ff5500;">Click here if you are not redirected automatically.</a></p>
</body>
</html>
`;
fs.writeFileSync(path.join(__dirname, '..', 'index.html'), rootIndexContent, 'utf8');
console.log('Generated root landing redirect index.html');
console.log('Build process completed successfully!');
