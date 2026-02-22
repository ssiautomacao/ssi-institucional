import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-training",
    hero: {
        id: "hero-training",
        headline: "Technical Training & Capacity Building",
        subtext: "In-company NR-12 training for operators, advanced safety engineering programs, and preparatory tracks. Official certification and expert tutoring.",
        cta: "Request Training Quote",
        image: "/ssi-institucional/assets/services/training-hero.jpg"
    },
    seo: {
        title: "Technical NR-12 Training & Safety Engineering Education | SSI Automacao",
        description: "Specialized training in machine safety engineering, NR-12 operator capacity building, and advanced technical tracks. Certified industrial safety education."
    },
    painPoints: {
        title: "The Human Factor",
        items: [
            {
                id: "pp-behavior",
                title: "Unsafe Behaviors",
                description: "Lack of understanding of safety systems leads to bypassing protections and increased risk."
            },
            {
                id: "pp-skills",
                title: "Technical Skill Gap",
                description: "Maintenance and engineering teams struggling with the latest safety technologies and standards."
            }
        ]
    },
    methodology: {
        title: "Learning Tracks",
        steps: [
            {
                id: "m-theory",
                title: "Theoretical Foundation",
                description: "In-depth study of national and international safety standards (NR, ISO, IEC)."
            },
            {
                id: "m-hands-on",
                title: "Hands-on Practice",
                description: "Practical exercises using safety components and real-world industrial scenarios."
            }
        ]
    },
    deliverables: {
        title: "Qualified Talent",
        items: [
            {
                id: "d-cert",
                title: "Official Certification",
                description: "Compliance documents valid for legal purposes and skills verification."
            },
            {
                id: "d-manuals",
                title: "Technical Materials",
                description: "Comprehensive guides and manuals for ongoing reference and improvement."
            }
        ]
    },
    leadForm: {
        id: "form-training",
        title: "Schedule Your Team's Training",
        subtitle: "Empower your workforce with expert knowledge.",
        fields: [
            { id: "company", label: "Company", type: "text", placeholder: "Enterprise Name", required: true },
            { id: "staff", label: "Number of Participants", type: "text", placeholder: "e.g. 15 people", required: false }
        ],
        submitLabel: "Send Request"
    }
};
