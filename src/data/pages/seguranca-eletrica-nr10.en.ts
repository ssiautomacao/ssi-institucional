import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-electrical-safety",
    hero: {
        id: "hero-nr10",
        headline: "Electrical Engineering & Safety (NR-10)",
        subtext: "Structured inspections, PIE (Electrical Installation Diary) development, and Incident Energy Studies (Arc Flash) according to NR-10 standards.",
        cta: "Consult an Electrical Engineer",
        image: "/ssi-institucional/assets/services/nr10-hero.jpg"
    },
    seo: {
        title: "Electrical Safety Engineering & Arc Flash Studies | SSI Automacao",
        description: "Technical inspections, PIE development, and Arc Flash incident energy studies following NR-10 standards. Expert electrical engineering reports."
    },
    painPoints: {
        title: "Electrical Risk Management",
        items: [
            {
                id: "pp-risk-high",
                title: "Arc Flash Risk",
                description: "Lack of studies on incident energy levels and safe approach boundaries."
            },
            {
                id: "pp-legacy",
                title: "Outdated Infrastructure",
                description: "Electrical panels and single-line diagrams that do not reflect current reality."
            }
        ]
    },
    methodology: {
        title: "Our Engineering Approach",
        steps: [
            {
                id: "m-diagnosis",
                title: "Diagnostic Audit",
                description: "On-site mapping of all electrical assets and panel conditions."
            },
            {
                id: "m-studies",
                title: "Computational Studies",
                description: "Selectivity and coordination using specialized engineering software."
            }
        ]
    },
    deliverables: {
        title: "Technical Assets",
        items: [
            {
                id: "d-pie",
                title: "PIE (Installation Diary)",
                description: "Complete documentation required by NR-10 for legal compliance."
            },
            {
                id: "d-labels",
                title: "Arc Flash Labeling",
                description: "Durable warning labels indicating PPE requirements and risk levels."
            }
        ]
    },
    leadForm: {
        id: "form-nr10",
        title: "Request an Electrical Safety Audit",
        subtitle: "Schedule a technical visit with our specialists.",
        fields: [
            { id: "company", label: "Company", type: "text", placeholder: "Enterprise Name", required: true },
            { id: "panels", label: "Estimated Number of Panels", type: "text", placeholder: "e.g. 50", required: false }
        ],
        submitLabel: "Send Request"
    }
};
