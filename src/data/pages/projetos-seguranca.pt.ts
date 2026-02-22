// src/data/pages/projetos-seguranca.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const projetosSegurancaPage: ServicePagePayload = {
    id: "svc-projetos-seguranca",
    hero: {
        id: "hero-projetos",
        headline: "Projetos de Engenharia de Segurança (PCS e PES)",
        subtext: "Desenvolvimento estruturado de diagramas elétricos, adequações mecânicas e topologia de redes seguras.",
        ctaPrimary: { label: "Solicitar Escopo Técnico", href: "#contact" },
        ctaSecondary: { label: "Ver Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-guardlogix-plc.webp",
        imageAlt: "CLP de segurança GuardLogix em painel industrial"
    },
    painPoint: {
        id: "pain-projetos",
        title: "O Problema que Resolvemos",
        body: "Adequações executadas diretamente no chão de fábrica sem documentação prévia (As-Built). Isso resulta em painéis fora de norma, falhas na integração de sistemas e custos ocultos imprevisíveis. Sem um projeto formal, a manutenção e a validação técnica tornam-se insustentáveis."
    },
    methodology: {
        id: "met-projetos",
        title: "Engenharia Multidisciplinar Integrada",
        body: "Atuamos em duas fases. O Projeto Conceitual de Segurança (PCS) define a matriz de segurança e a arquitetura macro. O Projeto Executivo de Segurança (PES) detalha a disciplina elétrica (via EPLAN Electric P8), os enclausuramentos mecânicos em 3D e a lógica pneumática/hidráulica.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-guardlogix-architecture.webp",
            alt: "Topologia de rede GuardLogix CIP Safety",
            caption: "Exemplo de Topologia de Rede Segura (EtherNet/IP)"
        }
    },
    deliverables: {
        id: "deliv-projetos",
        title: "Entregáveis da Disciplina de Projetos",
        items: [
            { title: "Diagramas elétricos de segurança em EPLAN", codeRef: "EPLAN_DIAG" },
            { title: "Projetos mecânicos 3D (SolidWorks/Inventor) de proteções", codeRef: "MECH_3D" },
            { title: "Arquitetura e topologia de redes de segurança", codeRef: "NET_TOPO" },
            { title: "Memorial descritivo e Lista de Materiais (BOM)", codeRef: "BOM_DOC" }
        ],
        evidenceImage: {
            src: "/ssi-institucional/assets/images/projetos/projetos-electrical-panel-industrial.webp",
            alt: "Painel elétrico montado conforme projeto executivo",
            caption: "Execução física espelhando o projeto executivo"
        }
    },
    leadForm: {
        formId: "lead-projetos",
        title: "Estruture o Projeto da sua Planta",
        submitLabel: "Solicitar Engenharia",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_PROJETOS_PCS_PES",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Escopo (Ex: Retrofit de Painéis, Adequação Mecânica)", type: "textarea", required: false }
        ]
    }
};
