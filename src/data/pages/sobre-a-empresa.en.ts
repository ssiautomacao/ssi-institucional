// src/data/pages/sobre-a-empresa.en.ts
import type { InstitutionalPayload } from "../../types/content";

export const sobreEmpresaPageEN: InstitutionalPayload = {
    id: "page-sobre-nos-en",
    hero: {
        id: "hero-inst-en",
        headline: "Sustainable and Integrated Safety Engineering",
        subtext: "Experts in regulatory compliance (NR-12, ISO 12100), uniting European methodological rigor with the operational reality of the industry.",
        ctaPrimary: { label: "Contact the Board", href: "#contact" },
        ctaSecondary: { label: "Our Structure", href: "#manifesto" },
        imageSrc: "/assets/images/institucional/institucional-equipe-tecnica-industrial.webp",
        imageAlt: "SSI technical engineering team",
        videoSrc: "/assets/videos/industrial-engineer-machine-safety-inspection.mp4"
    },
    manifesto: {
        title: "Our Technical Positioning",
        body: "Industrial safety should not be a production bottleneck or a mere bureaucratic checklist. SSI Automação was born to transform legal compliance into a governance asset. We deliver consulting engineering that protects lives, legally shields the board of directors, and unlocks the operational efficiency of the industrial plant.",
        mission: "To guarantee uninterrupted and safe operations through absolute technical traceability."
    },
    jointVenture: {
        title: "Cross-Border Capability (Joint Venture)",
        body: "Through our strategic Joint Venture with leading European partners, we master the global machinery safety cycle. This alliance allows us to execute pre-shipment inspections at the origin and safely tropicalize foreign technologies for Brazil, ensuring immediate approval during plant start-up.",
        capabilities: [
            "Pre-shipment inspections in Europe and Asia",
            "Trilingual engineering support (EN, IT, ES)",
            "Fail-safe logic adaptation under international standards (ISO/IEC)"
        ],
        evidenceImage: {
            src: "/assets/images/institucional/industrial-engineer-control-room.webp",
            alt: "Engineering operating in a global control room",
            caption: "Technical governance beyond borders"
        }
    },
    credentials: {
        id: "credenciais-inst-en",
        title: "Our Authority Base",
        items: [
            { title: "Official members of ABIMAQ", codeRef: "ASSOC_ABIMAQ" },
            { title: "Projects certified by Registered Engineers (CREA)", codeRef: "ART_CREA" },
            { title: "Machinery Safety Experts (CMSE/TÜV level)", codeRef: "ENG_SAFETY" }
        ]
    }
};
