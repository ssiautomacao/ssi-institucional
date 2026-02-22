import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-stop-time",
    hero: {
        id: "hero-mtp",
        headline: "Machine Stop-Time Measurement (ISO 13855)",
        subtext: "Inertia tests with calibrated instrumentation (HHB Safetyman DT3) for geometric validation of safety distances. Technical report with professional certification.",
        cta: "Request Stop-Time Measurement",
        image: "/ssi-institucional/assets/services/mtp-hero.jpg"
    },
    seo: {
        title: "Machine Stop-Time Measurement & ISO 13855 Validation | SSI Automacao",
        description: "Certified machine stop-time testing and safety distance validation using HHB Safetyman. Full ISO 13855 compliance for industrial machinery."
    },
    painPoints: {
        title: "Security Distance Risks",
        items: [
            {
                id: "pp-brake",
                title: "Braking Degradation",
                description: "Machine inertia increases over time, making existing safety light curtains insufficient."
            },
            {
                id: "pp-audit",
                title: "Audit Non-Compliance",
                description: "Failure to present evidence of safety distance validation during inspections."
            }
        ]
    },
    methodology: {
        title: "Testing Methodology",
        steps: [
            {
                id: "m-hhb",
                title: "HHB Safetyman Analysis",
                description: "Precise measurement of time between trigger and total stop of dangerous movements."
            },
            {
                id: "m-math",
                title: "Distance Calculation",
                description: "Mathematical application of ISO 13855 formulas to determine the correct S (Safety Distance)."
            }
        ]
    },
    deliverables: {
        title: "Validation Evidence",
        items: [
            {
                id: "d-laudo",
                title: "Technical Validation Report",
                description: "Detailed report with stop curves and ART (Technical Responsibility Note)."
            },
            {
                id: "d-sticker",
                title: "Safety Compliance Seal",
                description: "On-machine labeling indicating the last test date and calculated safety distance."
            }
        ]
    },
    leadForm: {
        id: "form-mtp",
        title: "Validate Your Safety Distances",
        subtitle: "Don't guess security. Measure it.",
        fields: [
            { id: "company", label: "Company", type: "text", placeholder: "Enterprise Name", required: true },
            { id: "machines", label: "Number of Machines", type: "text", placeholder: "e.g. 5 machines", required: false }
        ],
        submitLabel: "Send Request"
    }
};
