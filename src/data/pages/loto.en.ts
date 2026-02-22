import type { ServicePagePayload } from "../../types/content";
export const lotoPageEN: ServicePagePayload = {
    id: "svc-loto-en",
    hero: {
        headline: "Lockout/Tagout Engineering (LOTO)",
        subtext: "Development of corporate zero-energy procedures, visual mapping, and hardware specification to eliminate fatal risks during maintenance.",
        ctaPrimary: { label: "Request LOTO Mapping", href: "#contact" },
        imageSrc: "/assets/images/machine-safety/industrial-engineer-machine-safety-inspection.webp",
        imageAlt: "Engineer applying LOTO protocol"
    },
    painPoint: {
        title: "The Problem We Solve",
        body: "Relying solely on padlocks is not LOTO. Without clear visual procedures and mapped energy isolation points (electrical, pneumatic, hydraulic), maintenance teams remain exposed to unexpected energization, the leading cause of fatal industrial accidents."
    },
    methodology: {
        title: "Visual & Traceable LOTO",
        body: "We map 100% of the hazardous energy sources. We develop machine-specific graphic procedures (placards) and size the exact locking hardware required. Everything is integrated into your corporate safety policy."
    },
    deliverables: {
        title: "Deliverables",
        items: [
            { title: "Energy Control Procedures (ECP) Placards", codeRef: "LOTO_ECP_EN" },
            { title: "Isolation Point Map & Hardware List", codeRef: "LOTO_MAP_EN" },
            { title: "Corporate LOTO Policy Documentation", codeRef: "LOTO_POLICY_EN" }
        ]
    },
    leadForm: {
        formId: "lead-loto-en", title: "Schedule Mapping", submitLabel: "Send Request", endpoint: "/api/v1/public/leads", hiddenIntentKey: "LEAD_LOTO_EN",
        fields: [{ name: "name", label: "Name", type: "text", required: true }, { name: "company", label: "Company", type: "text", required: true }, { name: "email", label: "Corporate Email", type: "email", required: true }]
    }
};
