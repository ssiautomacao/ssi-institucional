// src/data/pages/sobre-a-empresa.de.ts
import type { InstitutionalPayload } from "../../types/content";

export const sobreEmpresaPageDE: InstitutionalPayload = {
    id: "page-sobre-nos-de",
    hero: {
        id: "hero-sobre-nos-de",
        headline: "Nachhaltige und Integrierte Sicherheitsarchitektur",
        subtext: "Experten für normkonforme Maschinensicherheit (NR-12, ISO 12100). Wir vereinen europäische methodische Strenge mit der betrieblichen Realität der Industrie.",
        ctaPrimary: { label: "Vorstand kontaktieren", href: "#contact" },
        ctaSecondary: { label: "Unsere Struktur", href: "#manifesto" },
        imageSrc: "/ssi-institucional/assets/images/institucional/institucional-equipe-tecnica-industrial.webp",
        imageAlt: "Technisches Engineering-Team von SSI"
    },
    manifesto: {
        title: "Unsere Technische Positionierung",
        body: "Industrielle Sicherheit darf kein Produktionsengpass oder eine bloße bürokratische Checkliste sein. SSI Automação wurde gegründet, um rechtliche Compliance in einen Governance-Vorteil zu verwandeln. Wir liefern Consulting-Engineering, das Leben schützt, den Vorstand rechtlich absichert und die betriebliche Effizienz der Anlage freisetzt.",
        mission: "Gewährleistung eines unterbrechungsfreien und sicheren Betriebs durch absolute technische Rückverfolgbarkeit."
    },
    jointVenture: {
        title: "Grenzüberschreitende Kapazität (Joint Venture)",
        body: "Durch unser strategisches Joint Venture mit führenden europäischen Partnern beherrschen wir den globalen Lebenszyklus der Maschinensicherheit. Diese Allianz ermöglicht es uns, Vorversandkontrollen (Pre-Shipment Inspections) am Ursprungsort durchzuführen und ausländische Technologien sicher für Brasilien anzupassen (Tropikalisierung).",
        capabilities: [
            "Vorversandkontrollen in Europa und Asien",
            "Dreisprachiger technischer Support (EN, IT, ES)",
            "Anpassung fehlersicherer Logik unter internationalen Normen (ISO/IEC)"
        ],
        evidenceImage: {
            src: "/ssi-institucional/assets/images/institucional/industrial-engineer-control-room.webp",
            alt: "Engineering in einem globalen Kontrollraum",
            caption: "Technische Governance über Grenzen hinweg"
        }
    },
    credentials: {
        id: "cred-sobre-nos-de",
        title: "Unsere Autoritätsbasis",
        items: [
            { title: "Offizielle Mitglieder der ABIMAQ", codeRef: "ASSOC_ABIMAQ" },
            { title: "Von registrierten Ingenieuren (CREA) zertifizierte Projekte", codeRef: "ART_CREA" },
            { title: "Experten für Maschinensicherheit (CMSE/TÜV-Niveau)", codeRef: "ENG_SAFETY" }
        ]
    }
};
