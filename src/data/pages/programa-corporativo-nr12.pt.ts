// src/data/pages/programa-corporativo-nr12.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const programaCorporativoPage: ServicePagePayload = {
    id: "svc-gestao-nr12",
    hero: {
        id: "hero-gestao",
        headline: "Gestão Corporativa do Programa NR-12",
        subtext: "Padronização técnica, estudos de viabilidade e governança de segurança para parques industriais complexos.",
        ctaPrimary: { label: "Falar com Consultor B2B", href: "#contact" },
        ctaSecondary: { label: "Ver Entregáveis", href: "#deliverables" },
        imageSrc: "/ssi-institucional/assets/images/institucional/institucional-equipe-tecnica-industrial.webp",
        imageAlt: "Equipe de engenharia em planejamento corporativo"
    },
    painPoint: {
        id: "pain-gestao",
        title: "O Problema que Resolvemos",
        body: "Parques industriais com maquinário heterogêneo operando com diferentes padrões de segurança. A ausência de uma diretriz corporativa unificada pulveriza o orçamento de adequação, gera retrabalho estrutural e impede a governança centralizada sobre o nível de risco da operação."
    },
    methodology: {
        id: "met-gestao",
        title: "Padronização e Viabilidade Operacional",
        body: "Atuamos de forma estratégica junto às diretorias de EHS e Engenharia. Formamos comitês multidisciplinares, elaboramos manuais de padronização ('Books' corporativos) para aquisição e adequação de máquinas, e realizamos estudos de viabilidade técnica e financeira (CAPEX) para priorização de investimentos.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/institucional/industrial-engineer-control-room.webp",
            alt: "Engenheiro em sala de controle",
            caption: "Governança e monitoramento centralizado"
        }
    },
    deliverables: {
        id: "deliv-gestao",
        title: "Entregáveis Executivos",
        items: [
            { title: "Book Corporativo de Padronização de Segurança", codeRef: "BOOK_NR12" },
            { title: "Matriz de Priorização de Risco Global", codeRef: "MATRIZ_GLOBAL" },
            { title: "Estudos de viabilidade financeira para adequações", codeRef: "EST_VIAB" },
            { title: "Políticas internas para aquisição de novas máquinas", codeRef: "POL_AQUISICAO" }
        ]
    },
    leadForm: {
        formId: "lead-gestao",
        title: "Agende uma Reunião Estratégica",
        submitLabel: "Solicitar Contato Executivo",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_GESTAO_CORPORATIVA",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Tamanho do Parque Industrial (Plantas/Máquinas)", type: "textarea", required: false }
        ]
    }
};
