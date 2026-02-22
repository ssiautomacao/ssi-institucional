// src/data/pages/sobre-a-empresa.pt.ts
import type { InstitutionalPayload } from "../../types/content";

export const sobreEmpresaPage: InstitutionalPayload = {
    id: "page-sobre-nos",
    hero: {
        id: "hero-inst",
        headline: "Engenharia de Segurança Sustentável e Integrada",
        subtext: "Especialistas em conformidade normativa, unindo o rigor metodológico europeu à realidade operacional da indústria brasileira.",
        ctaPrimary: { label: "Falar com a Diretoria", href: "#contact" },
        ctaSecondary: { label: "Nossa Estrutura", href: "#manifesto" },
        imageSrc: "/assets/images/institucional/institucional-equipe-tecnica-industrial.webp",
        imageAlt: "Equipe técnica de engenharia da SSI",
        videoSrc: "/assets/videos/industrial-engineer-machine-safety-inspection.mp4"
    },
    manifesto: {
        title: "Nosso Posicionamento Técnico",
        body: "A segurança industrial não deve ser um gargalo produtivo ou um mero cumprimento burocrático (Check-list). A SSI Automação nasceu para transformar a conformidade legal em um ativo de governança. Entregamos engenharia consultiva que protege vidas, blinda a diretoria juridicamente e destrava a eficiência operacional do parque fabril.",
        mission: "Garantir a operação ininterrupta e segura através de rastreabilidade técnica absoluta."
    },
    jointVenture: {
        title: "Capacidade Transfronteiriça (Joint Venture)",
        body: "Através de nossa Joint Venture estratégica com parceiros europeus de ponta, dominamos o ciclo global de segurança de máquinas. Essa aliança permite a execução de inspeções pré-embarque na origem e a tropicalização segura de tecnologias estrangeiras para o Brasil, garantindo aprovação imediata no start-up da planta.",
        capabilities: [
            "Inspeções de pré-embarque na Europa e Ásia",
            "Suporte de engenharia trilíngue (EN, IT, ES)",
            "Adequação de lógicas Fail-safe sob normas internacionais (ISO/IEC)"
        ],
        evidenceImage: {
            src: "/assets/images/institucional/industrial-engineer-control-room.webp",
            alt: "Engenharia atuando em sala de controle global",
            caption: "Governança técnica além das fronteiras"
        }
    },
    credentials: {
        id: "credenciais-inst",
        title: "Nossa Base de Autoridade",
        items: [
            { title: "Membros oficiais da ABIMAQ", codeRef: "ASSOC_ABIMAQ" },
            { title: "Projetos chancelados por Engenheiros (CREA)", codeRef: "ART_CREA" },
            { title: "Especialistas em Segurança de Máquinas", codeRef: "ENG_SAFETY" }
        ]
    }
};
