// src/data/pages/assessoria-maquinas-importadas.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const maquinasImportadasPage: ServicePagePayload = {
    id: "svc-importadas",
    hero: {
        id: "hero-importadas",
        headline: "Assessoria para Máquinas Importadas",
        subtext: "Inspeções de pré-embarque, validação de lógicas e conformidade normativa com suporte técnico trilíngue (EN, IT, ES).",
        ctaPrimary: { label: "Consultar Assessoria Internacional", href: "#contact" },
        ctaSecondary: { label: "Ver Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-robotic-cell.webp",
        imageAlt: "Linha de produção importada em processo de nacionalização"
    },
    painPoint: {
        id: "pain-importadas",
        title: "O Problema que Resolvemos",
        body: "Retenção alfandegária, interdição no start-up da planta e ociosidade de capital gerados pela incompatibilidade de maquinário estrangeiro (europeu/asiático) com o rigor da legislação brasileira. Falhas em traduções de IHM e diagramas elétricos bloqueiam a operação imediata."
    },
    methodology: {
        id: "met-importadas",
        title: "Engenharia Transfronteiriça (Joint Venture)",
        body: "Atuamos em conexão direta com o fabricante na origem, suportados por nossa Joint Venture europeia. Realizamos inspeções técnicas antes do embarque do ativo, validamos a assinatura de softwares de segurança (ex: Siemens TIA Portal) e coordenamos a adequação estrutural e documental para o padrão nacional.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-siemens-s7-1200-failsafe.webp",
            alt: "Validação de lógicas Fail-safe em maquinário europeu",
            caption: "Auditoria de arquitetura de segurança na origem"
        }
    },
    deliverables: {
        id: "deliv-importadas",
        title: "Entregáveis Rastreáveis",
        items: [
            { title: "Inspeções Técnicas de Pré-Embarque", codeRef: "INSP_ORIGEM" },
            { title: "Laudos de Conformidade Multilíngues (EN, IT, ES)", codeRef: "LAUDO_MULTI" },
            { title: "Validação documentada de Software/CLP de segurança", codeRef: "VAL_SOFT" },
            { title: "Adequação normativa de Manuais e Telas (IHM)", codeRef: "ADEQ_DOC" }
        ]
    },
    leadForm: {
        formId: "lead-importadas",
        title: "Nacionalize seus Ativos com Segurança",
        submitLabel: "Solicitar Assessoria",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_GESTAO_IMPORTADAS",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Origem do Equipamento (País / Fabricante)", type: "textarea", required: false }
        ]
    }
};
