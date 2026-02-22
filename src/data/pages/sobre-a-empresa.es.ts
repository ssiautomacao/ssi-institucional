// src/data/pages/sobre-a-empresa.es.ts
import type { InstitutionalPayload } from "../../types/content";

export const sobreEmpresaPageES: InstitutionalPayload = {
    id: "page-sobre-nos-es",
    hero: {
        id: "hero-sobre-nos-es",
        headline: "Ingeniería de Seguridad Sostenible e Integrada",
        subtext: "Expertos en adecuación normativa (NR-12, ISO 12100), uniendo el rigor metodológico europeo con la realidad operativa de la industria.",
        ctaPrimary: { label: "Contactar a la Directiva", href: "#contact" },
        ctaSecondary: { label: "Nuestra Estructura", href: "#manifesto" },
        imageSrc: "/ssi-institucional/assets/images/institucional/institucional-equipe-tecnica-industrial.webp",
        imageAlt: "Equipo técnico de ingeniería de SSI"
    },
    manifesto: {
        title: "Nuestro Posicionamiento Técnico",
        body: "La seguridad industrial no debe ser un cuello de botella productivo ni un mero checklist burocrático. SSI Automação nació para transformar el cumplimiento legal en un activo de gobernanza. Entregamos ingeniería consultiva que protege vidas, blinda legalmente a la directiva y desbloquea la eficiencia operativa de la planta.",
        mission: "Garantizar operaciones ininterrumpidas y seguras mediante trazabilidad técnica absoluta."
    },
    jointVenture: {
        title: "Capacidad Transfronteriza (Joint Venture)",
        body: "A través de nuestra Joint Venture estratégica con socios europeos líderes, dominamos el ciclo global de seguridad de máquinas. Esta alianza nos permite ejecutar inspecciones previas al embarque en origen y tropicalizar de manera segura tecnologías extranjeras para América Latina.",
        capabilities: [
            "Inspecciones previas al embarque (Pre-Shipment) en Europa y Asia",
            "Soporte de ingeniería trilingüe (EN, ES, IT)",
            "Adaptación de lógica de seguridad bajo normativas internacionales (ISO/IEC)"
        ],
        evidenceImage: {
            src: "/ssi-institucional/assets/images/institucional/industrial-engineer-control-room.webp",
            alt: "Ingeniería en sala de control global",
            caption: "Gobernanza técnica sin fronteras"
        }
    },
    credentials: {
        id: "cred-sobre-nos-es",
        title: "Nuestra Base de Autoridad",
        items: [
            { title: "Miembros oficiales de ABIMAQ", codeRef: "ASSOC_ABIMAQ" },
            { title: "Proyectos certificados por Ingenieros Colegiados (CREA)", codeRef: "ART_CREA" },
            { title: "Expertos en Seguridad de Máquinas (Nivel CMSE/TÜV)", codeRef: "ENG_SAFETY" }
        ]
    }
};
