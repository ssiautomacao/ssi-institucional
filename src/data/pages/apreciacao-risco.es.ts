// src/data/pages/apreciacao-risco.es.ts
import type { ServicePagePayload } from "../../types/content";

export const apreciacaoRiscoPageES: ServicePagePayload = {
    id: "svc-apreciacao-risco-es",
    hero: {
        id: "hero-lar-es",
        headline: "Apreciación de Riesgos (LAR) – ISO 12100",
        subtext: "Diagnóstico normativo y mapeo de peligros mecánicos y eléctricos, proporcionando una base sólida para todo el ciclo de vida de seguridad.",
        ctaPrimary: { label: "Solicitar Evaluación", href: "#contact" },
        ctaSecondary: { label: "Nuestra Metodología", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-robotic-cell.webp",
        imageAlt: "Célula robótica industrial en apreciación de riesgos"
    },
    painPoint: {
        id: "pain-lar-es",
        title: "El Problema que Resolvemos",
        body: "Máquinas operando con peligros ocultos, sin mapeo de zonas de riesgo ni priorización técnica. Sin este diagnóstico preliminar, cualquier adecuación física de resguardos tiende a ser incompleta, fuera de norma y sin trazabilidad técnica."
    },
    methodology: {
        id: "met-lar-es",
        title: "Matriz HRN y Gráfico de Riesgo",
        body: "Aplicamos la metodología HRN (Hazard Rating Number) y el Gráfico de Riesgo de la norma ISO 13849-1 directamente a través de nuestro software propietario ZEUS Analytics. Esto garantiza auditabilidad absoluta y estandariza los parámetros en toda su planta.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/zeus/zeus-1.webp",
            alt: "Interfaz del software de apreciación de riesgos ZEUS",
            caption: "Software propietario para trazabilidad técnica"
        }
    },
    deliverables: {
        id: "deliv-lar-es",
        title: "Entregables Trazables",
        items: [
            { title: "Informe Técnico con mapeo del Índice HRN", codeRef: "REP_HRN_ES" },
            { title: "Mapeo fotográfico de zonas de peligro", codeRef: "MAP_ZONES_ES" },
            { title: "Especificación del Nivel de Rendimiento Requerido (PLr)", codeRef: "SPEC_PLR_ES" },
            { title: "Plan de Acción Correctiva (Estimación CAPEX)", codeRef: "CAPEX_PLAN_ES" }
        ]
    },
    leadForm: {
        formId: "lead-lar-es", title: "Agendar Reunión Técnica", submitLabel: "Enviar Solicitud", endpoint: "/api/v1/public/leads", hiddenIntentKey: "LEAD_LAR_ES",
        fields: [{ name: "name", label: "Nombre Completo", type: "text", required: true }, { name: "company", label: "Empresa", type: "text", required: true }, { name: "email", label: "Correo Corporativo", type: "email", required: true }]
    }
};
