// src/data/pages/medicao-tempo-parada.pt.ts
import type { ServicePagePayload } from "../../types/content";

export const medicaoTempoParadaPage: ServicePagePayload = {
    id: "svc-medicao-tempo-parada",
    hero: {
        id: "hero-mtp",
        headline: "Medição de Tempo de Parada (ISO 13855)",
        subtext: "Ensaios de inércia com instrumentação calibrada para validação exata de distâncias de segurança.",
        ctaPrimary: { label: "Solicitar Escopo de Ensaio", href: "#contact" },
        ctaSecondary: { label: "Ver Metodologia", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/ensaios/stop-time-test-hhb-press.webp",
        imageAlt: "Medição de tempo de parada em prensa industrial"
    },
    painPoint: {
        id: "pain-mtp",
        title: "O Problema que Resolvemos",
        body: "Instalação empírica de barreiras óticas (cortinas de luz) e proteções físicas, permitindo que o operador alcance a zona de perigo antes da parada total da máquina. Isso gera risco iminente de amputações e passivo jurídico severo em auditorias."
    },
    methodology: {
        id: "met-mtp",
        title: "Instrumentação de Alta Precisão",
        body: "Ensaios baseados na norma ISO 13855 utilizando instrumentação calibrada. Realizamos múltiplas medições em campo com tratamento estatístico para determinar o tempo exato de frenagem. A distância segura é validada de forma estruturada baseada em parâmetros de inércia e alcance.",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/ensaios/stop-time-meter-hhb-dt3.webp",
            alt: "Equipamento HHB DT3 Safetyman",
            caption: "Instrumentação HHB (Calibração rastreável)"
        }
    },
    technicalSpecs: {
        id: "specs-mtp",
        title: "Parâmetros do Ensaio (Regra de Instrumentação)",
        rows: [
            { label: "Equipamento Base", value: "Safetyman DT2 / DT3 (HHB Electronic)" },
            { label: "Precisão de Leitura", value: "Milissegundos (Tratamento estatístico)" },
            { label: "Atuador", value: "Simulador de interrupção ótica/mecânica" }
        ]
    },
    deliverables: {
        id: "deliv-mtp",
        title: "Entregáveis Rastreáveis",
        items: [
            { title: "Laudo técnico de conformidade geométrica", codeRef: "LAUDO_MTP" },
            { title: "Curvas e gráficos de frenagem da máquina", codeRef: "GRAF_FREN" },
            { title: "Cálculo técnico da distância segura", codeRef: "CALC_DIST" },
            { title: "Anotação de Responsabilidade Técnica", codeRef: "ART_MTP" }
        ],
        evidenceImage: {
            src: "/ssi-institucional/assets/images/ensaios/stop-time-measurement-industrial-machine.webp",
            alt: "Medição em campo",
            caption: "Validação da distância geométrica"
        }
    },
    leadForm: {
        formId: "lead-mtp",
        title: "Solicite um Ensaio de Tempo de Parada",
        submitLabel: "Enviar Solicitação",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_ENSAIOS_MTP",
        fields: [
            { name: "name", label: "Nome", type: "text", required: true },
            { name: "company", label: "Empresa", type: "text", required: true },
            { name: "email", label: "E-mail Corporativo", type: "email", required: true },
            { name: "phone", label: "Telefone", type: "tel", required: true },
            { name: "context", label: "Quantidade e Tipo de Máquinas", type: "textarea", required: false }
        ]
    }
};
