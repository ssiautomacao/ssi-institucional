import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-seguridad-electrica",
    hero: {
        id: "hero-nr10",
        headline: "Ingeniería de Seguridad Eléctrica (NR-10)",
        subtext: "Inspecciones estructuradas, elaboración de PIE (Prontuario de Instalaciones Eléctricas) y estudios de Energía Incidente (Arc Flash).",
        cta: "Consultar con un Ingeniero Electricista",
        image: "/ssi-institucional/assets/services/nr10-hero.jpg"
    },
    seo: {
        title: "Ingeniería de Seguridad Eléctrica y Estudios Arc Flash | SSI Automacao",
        description: "Inspecciones técnicas, desarrollo de PIE y estudios de energía de incidente según normas internacionales. Informes de calidad."
    },
    painPoints: {
        title: "Gestión de Riesgos Eléctricos",
        items: [
            {
                id: "pp-risk-high",
                title: "Riesgo de Arco Eléctrico",
                description: "Falta de estudios sobre niveles de energía incidente y fronteras de aproximación segura."
            },
            {
                id: "pp-legacy",
                title: "Infraestructura Obsoleta",
                description: "Tableros eléctricos y diagramas unifilares que no reflejan la realidad actual."
            }
        ]
    },
    methodology: {
        title: "Nuestra Metodología de Ingeniería",
        steps: [
            {
                id: "m-diagnosis",
                title: "Auditoría de Diagnóstico",
                description: "Mapeo in situ de todos los activos eléctricos y estado de los tableros."
            },
            {
                id: "m-studies",
                title: "Estudios Computacionales",
                description: "Selectividad y coordinación utilizando software de ingeniería especializado."
            }
        ]
    },
    deliverables: {
        title: "Entregables Técnicos",
        items: [
            {
                id: "d-pie",
                title: "PIE (Prontuario)",
                description: "Documentación completa requerida para el cumplimiento legal y normativo."
            },
            {
                id: "d-labels",
                title: "Etiquetado Arc Flash",
                description: "Etiquetas de advertencia duraderas que indican requisitos de EPP y niveles de riesgo."
            }
        ]
    },
    leadForm: {
        id: "form-nr10",
        title: "Solicite una Auditoría Eléctrica",
        subtitle: "Programe una visita técnica con nuestros especialistas.",
        fields: [
            { id: "company", label: "Empresa", type: "text", placeholder: "Nombre de la empresa", required: true },
            { id: "panels", label: "Número estimado de tableros", type: "text", placeholder: "ej. 50", required: false }
        ],
        submitLabel: "Enviar Solicitud"
    }
};
