import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-recipientes-presion",
    hero: {
        id: "hero-nr13",
        headline: "Integridad NR-13: Recipientes a Presión y Calderas",
        subtext: "Ensayos mecánicos no destructivos, reconstitución de Data Books y cálculos de PMTA para el cumplimiento legal total de la norma NR-13.",
        cta: "Consultar a un Ingeniero Mecánico",
        image: "/ssi-institucional/assets/services/nr13-hero.jpg"
    },
    seo: {
        title: "Inspección de Recipientes a Presión y Calderas NR-13 | SSI Automacao",
        description: "Inspecciones de cumplimiento para recipientes a presión y calderas. Pruebas hidrostáticas, medición de espesores y cálculo de PMTA."
    },
    painPoints: {
        title: "Riesgos de Integridad",
        items: [
            {
                id: "pp-explosion",
                title: "Falla Catastrófica",
                description: "Riesgo de explosiones debido a la falta de inspecciones periódicas o fatiga del material."
            },
            {
                id: "pp-legal",
                title: "Paro de Activos",
                description: "Responsabilidad legal y bloqueo operativo debido a certificados técnicos vencidos."
            }
        ]
    },
    methodology: {
        title: "Protocolo de Inspección",
        steps: [
            {
                id: "m-ultrasound",
                title: "Medición de Espesores",
                description: "Pruebas de ultrasonido para identificar corrosión y pérdida de espesor de pared."
            },
            {
                id: "m-calc",
                title: "Recálculo de PMTA",
                description: "Determinación de la Presión Máxima de Trabajo Admisible basada en datos actuales."
            }
        ]
    },
    deliverables: {
        title: "Informes de Cumplimiento",
        items: [
            {
                id: "d-book",
                title: "Data Book de la Unidad",
                description: "Historial técnico completo y registros para cada activo inspeccionado."
            },
            {
                id: "d-art",
                title: "Responsabilidad Técnica (ART)",
                description: "Certificado oficial de autenticidad de inspección y seguridad estructural."
            }
        ]
    },
    leadForm: {
        id: "form-nr13",
        title: "Solicite una Inspección NR-13",
        subtitle: "Mantenga su planta segura y en cumplimiento.",
        fields: [
            { id: "company", label: "Empresa", type: "text", placeholder: "Nombre de la empresa", required: true },
            { id: "vessels", label: "Cantidad de activos", type: "text", placeholder: "ej. 10 recipientes", required: false }
        ],
        submitLabel: "Programar Ahora"
    }
};
