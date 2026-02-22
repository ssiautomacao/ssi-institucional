import type { ServicePagePayload } from "../../types/content";
export const maquinasImportadasEN: ServicePagePayload = {
    id: "svc-importadas-en",
    hero: {
        headline: "Tropicalization of Imported Machinery (NR-12)",
        subtext: "Technical and legal adaptation of foreign equipment to Brazilian standards, ensuring safety compliance without losing factory warranty or operational performance.",
        ctaPrimary: { label: "Consult Engineering", href: "#contact" },
        imageSrc: "/assets/images/machine-safety/machine-safety-robotic-cell.webp",
        imageAlt: "Imported machinery undergoing compliance check"
    },
    painPoint: {
        title: "The Compliance Bottleneck",
        body: "Machinery imported from Europe (CE) or Asia often gets blocked during plant start-up because it doesn't meet specific Brazilian regulations (NR-12). Modifying these machines without specialized engineering can void warranties and create unsafe operational deviations."
    },
    methodology: {
        title: "Fail-Safe Tropicalization",
        body: "We conduct preliminary conceptual reviews directly with the foreign manufacturer. Upon arrival, we execute non-invasive mechanical safeguarding and adapt the safety PLC logic to match local compliance standards, maintaining the original cycle time."
    },
    deliverables: {
        title: "Engineering Deliverables",
        items: [
            { title: "Pre-shipment Compliance Report (Origin)", codeRef: "REP_PRE_SHIP_EN" },
            { title: "NR-12 Adaptation Project (Mechanical/Electrical)", codeRef: "PROJ_TROP_EN" },
            { title: "Final ART (CREA) and Sign-off", codeRef: "ART_FINAL_EN" }
        ]
    },
    leadForm: {
        formId: "lead-import-en", title: "Talk to a Specialist", submitLabel: "Request Contact", endpoint: "/api/v1/public/leads", hiddenIntentKey: "LEAD_IMPORT_EN",
        fields: [{ name: "name", label: "Name", type: "text", required: true }, { name: "company", label: "Company", type: "text", required: true }, { name: "email", label: "Corporate Email", type: "email", required: true }]
    }
};
