// src/data/pages/validacao-seguranca.en.ts
import type { ServicePagePayload } from "../../types/content";

export const validacaoSegurancaPageEN: ServicePagePayload = {
    id: "svc-validacao-lvs-en",
    hero: {
        id: "hero-lvs-en",
        headline: "Safety Validation (LVS) – ISO 13849-2",
        subtext: "Mathematical proof and practical testing of safety functions, ensuring that the executed project strictly meets the Required Performance Level (PLr).",
        ctaPrimary: { label: "Schedule Validation", href: "#contact" },
        ctaSecondary: { label: "Our Approach", href: "#methodology" },
        imageSrc: "/assets/images/machine-safety/industrial-engineer-machine-safety-inspection.webp",
        imageAlt: "Engineer validating safety panel",
        videoSrc: "/assets/videos/industrial-engineer-machine-safety-inspection.mp4"
    },
    painPoint: {
        id: "pain-lvs-en",
        title: "The Problem We Solve",
        body: "Installing safety PLCs and light curtains is not enough. Without documented validation (ISO 13849-2), there is no legal proof that the safety loop will respond in time during a critical failure. This leaves the board legally exposed and the operation at risk."
    },
    methodology: {
        id: "met-lvs-en",
        title: "Fault Injection & SISTEMA",
        body: "We execute the Validation Plan using IFA's SISTEMA software to calculate the achieved Performance Level (PL). In the field, we perform fault injection tests and stop-time measurements to mathematically prove the safety functions' reliability.",
        evidenceImage: {
            src: "/assets/images/metodologia/validation-terminal.webp",
            alt: "Validation testing terminal",
            caption: "Practical validation and fault simulation"
        }
    },
    deliverables: {
        id: "deliv-lvs-en",
        title: "Traceable Deliverables",
        items: [
            { title: "Validation Plan and Report (ISO 13849-2)", codeRef: "VAL_REP_EN" },
            { title: "SISTEMA Calculation Report (MTTFd, DC, CCF)", codeRef: "SISTEMA_CALC_EN" },
            { title: "Stop-time measurement certificates", codeRef: "STOP_TIME_EN" }
        ]
    },
    leadForm: {
        formId: "lead-lvs-en",
        title: "Request a Validation Audit",
        submitLabel: "Send Request",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_LVS_EN",
        fields: [
            { name: "name", label: "Full Name", type: "text", required: true },
            { name: "company", label: "Company", type: "text", required: true },
            { name: "email", label: "Corporate Email", type: "email", required: true }
        ]
    }
};
