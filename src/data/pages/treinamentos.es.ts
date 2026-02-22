import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-capacitacion",
    hero: {
        id: "hero-training",
        headline: "Capacitación Técnica y Entrenamiento",
        subtext: "Entrenamientos In-Company de NR-12 para operadores, programas avanzados de ingeniería de seguridad y trayectorias preparatorias.",
        cta: "Solicitar Presupuesto de Capacitación",
        image: "/ssi-institucional/assets/services/training-hero.jpg"
    },
    seo: {
        title: "Capacitación Técnica NR-12 y Educación en Ingeniería | SSI Automacao",
        description: "Entrenamientos especializados en ingeniería de seguridad de máquinas, capacitación de operadores NR-12 y trayectorias técnicas avanzadas."
    },
    painPoints: {
        title: "El Factor Humano",
        items: [
            {
                id: "pp-behavior",
                title: "Comportamientos Inseguros",
                description: "La falta de comprensión de los sistemas de seguridad lleva a anular protecciones e incrementa el riesgo."
            },
            {
                id: "pp-skills",
                title: "Brecha de Habilidades Técnicas",
                description: "Equipos de mantenimiento e ingeniería con dificultades para aplicar las últimas tecnologías y normas."
            }
        ]
    },
    methodology: {
        title: "Trayectorias de Aprendizaje",
        steps: [
            {
                id: "m-theory",
                title: "Fundamentación Teórica",
                description: "Estudio profundo de las normas de seguridad nacionales e internacionales."
            },
            {
                id: "m-hands-on",
                title: "Práctica Aplicada",
                description: "Ejercicios prácticos utilizando componentes de seguridad y escenarios industriales reales."
            }
        ]
    },
    deliverables: {
        title: "Talento Calificado",
        items: [
            {
                id: "d-cert",
                title: "Certificación Oficial",
                description: "Documentos de cumplimiento válidos para fines legales y verificación de habilidades."
            },
            {
                id: "d-manuals",
                title: "Materiales Técnicos",
                description: "Guías y manuales completos para referencia continua y mejora."
            }
        ]
    },
    leadForm: {
        id: "form-training",
        title: "Programe la Capacitación de su Equipo",
        subtitle: "Empodere a su fuerza laboral con conocimiento experto.",
        fields: [
            { id: "company", label: "Empresa", type: "text", placeholder: "Nombre de la empresa", required: true },
            { id: "staff", label: "Cantidad de participantes", type: "text", placeholder: "ej. 15 personas", required: false }
        ],
        submitLabel: "Enviar Solicitud"
    }
};
