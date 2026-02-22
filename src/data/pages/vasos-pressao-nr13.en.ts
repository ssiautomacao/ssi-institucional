import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-pressure-vessels",
    hero: {
        id: "hero-nr13",
        headline: "NR-13 Integrity: Pressure Vessels & Boilers",
        subtext: "Non-destructive mechanical testing, Data Book reconstitution, and PMTA calculations for full legal compliance with NR-13 standards.",
        cta: "Consult a Mechanical Engineer",
        image: "/ssi-institucional/assets/services/nr13-hero.jpg"
    },
    seo: {
        title: "NR-13 Pressure Vessel & Boiler Inspection | SSI Automacao",
        description: "Full compliance inspections for pressure vessels and boilers. Hydrostatic testing, thickness measurement, and PMTA calculation following NR-13."
    },
    painPoints: {
        title: "Integrity Risks",
        items: [
            {
                id: "pp-explosion",
                title: "Catastrophic Failure",
                description: "Risk of explosions due to lack of periodic inspections or material fatigue."
            },
            {
                id: "pp-legal",
                title: "Asset Shutdown",
                description: "Legal liability and operational blockade due to expired technical certificates."
            }
        ]
    },
    methodology: {
        title: "Inspection Protocol",
        steps: [
            {
                id: "m-ultrasound",
                title: "Thickness Measurement",
                description: "Ultrasonic testing to identify corrosion and wall thickness loss."
            },
            {
                id: "m-calc",
                title: "PMTA Recalculation",
                description: "Determining Maximum Allowable Working Pressure based on current material data."
            }
        ]
    },
    deliverables: {
        title: "Compliance Reports",
        items: [
            {
                id: "d-book",
                title: "Unit Data Book",
                description: "Complete technical history and records for each inspected asset."
            },
            {
                id: "d-art",
                title: "Technical Responsibility (ART)",
                description: "Official certification of inspection authenticity and structural safety."
            }
        ]
    },
    leadForm: {
        id: "form-nr13",
        title: "Request an NR-13 Inspection",
        subtitle: "Keep your plant safe and compliant.",
        fields: [
            { id: "company", label: "Company", type: "text", placeholder: "Enterprise Name", required: true },
            { id: "vessels", label: "Number of Assets", type: "text", placeholder: "e.g. 10 vessels", required: false }
        ],
        submitLabel: "Schedule Now"
    }
};
