import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-medicion-parada",
    hero: {
        id: "hero-mtp",
        headline: "Medición de Tiempo de Parada (ISO 13855)",
        subtext: "Ensayos de inercia con instrumentación calibrada (HHB Safetyman DT3) para validación geométrica de distancias de seguridad.",
        cta: "Solicitar Medición de Parada",
        image: "/ssi-institucional/assets/services/mtp-hero.jpg"
    },
    seo: {
        title: "Medición de Tiempo de Parada y Validación ISO 13855 | SSI Automacao",
        description: "Pruebas certificadas de tiempo de parada de máquinas y validación de distancias de seguridad con HHB Safetyman. Cumplimiento ISO 13855."
    },
    painPoints: {
        title: "Riesgos en Distancia de Seguridad",
        items: [
            {
                id: "pp-brake",
                title: "Degradación del Frenado",
                description: "La inercia de la máquina aumenta con el tiempo, haciendo que las cortinas de luz existentes sean insuficientes."
            },
            {
                id: "pp-audit",
                title: "No Conformidad en Auditorías",
                description: "Falla al presentar evidencia de validación de distancia de seguridad durante las inspecciones."
            }
        ]
    },
    methodology: {
        title: "Metodología de Pruebas",
        steps: [
            {
                id: "m-hhb",
                title: "Análisis HHB Safetyman",
                description: "Medición precisa del tiempo entre el disparo y la parada total de los movimientos peligrosos."
            },
            {
                id: "m-math",
                title: "Cálculo de Distancia",
                description: "Aplicación matemática de las fórmulas ISO 13855 para determinar la S (Distancia de Seguridad) correcta."
            }
        ]
    },
    deliverables: {
        title: "Evidencia de Validación",
        items: [
            {
                id: "d-laudo",
                title: "Informe de Validación Técnica",
                description: "Informe detallado con curvas de parada y ART (Responsabilidad Técnica)."
            },
            {
                id: "d-sticker",
                title: "Sello de Conformidad",
                description: "Etiquetado en la máquina indicando la última fecha de prueba y la distancia de seguridad calculada."
            }
        ]
    },
    leadForm: {
        id: "form-mtp",
        title: "Valide sus Distancias de Seguridad",
        subtitle: "No adivine la seguridad. Mídala.",
        fields: [
            { id: "company", label: "Empresa", type: "text", placeholder: "Nombre de la empresa", required: true },
            { id: "machines", label: "Cantidad de máquinas", type: "text", placeholder: "ej. 5 máquinas", required: false }
        ],
        submitLabel: "Enviar Solicitud"
    }
};
