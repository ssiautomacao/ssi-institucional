// src/data/pages/maquinas-importadas.zh-CN.ts
import type { ServicePagePayload } from "../../types/content";

export const page: ServicePagePayload = {
    id: "svc-import-machinery-zh",
    hero: {
        id: "hero-import-machinery-zh",
        headline: "进口机械合规性评估与咨询",
        subtext: "装运前检验、逻辑验证及符合巴西法律要求的规范性咨询，提供全球化技术支持。",
        ctaPrimary: { label: "咨询国际顾问服务", href: "#contact" },
        ctaSecondary: { label: "查看方法论", href: "#methodology" },
        imageSrc: "/ssi-institucional/assets/images/machine-safety/machine-safety-robotic-cell.webp",
        imageAlt: "正在进行巴西标准本土化合规评估的进口生产线"
    },
    painPoint: {
        id: "pain-import-machinery-zh",
        title: "我们解决的问题",
        body: "由于外国设备（欧洲/亚洲）与巴西严格的法律 (NR-12) 不相符，导致海关扣留、工厂启动被禁以及资本闲置。人机界面 (HMI) 和电气图纸的翻译错误也会阻碍调试。"
    },
    methodology: {
        id: "met-import-machinery-zh",
        title: "跨国工程协作",
        body: "我们直接联系设备原产商。在设备装运前进行技术检验，验证安全软件（如西门子 TIA Portal），并协调结构与文档的合规化调整。",
        evidenceImage: {
            src: "/ssi-institucional/assets/images/machine-safety/machine-safety-siemens-s7-1200-failsafe.webp",
            alt: "原产地安全架构审计",
            caption: "在供应商处进行的安全系统验证"
        }
    },
    deliverables: {
        id: "deliv-import-machinery-zh",
        title: "可追溯的交付成果",
        items: [
            { title: "装运前技术检验报告", codeRef: "INSP_ORIGEM" },
            { title: "多语种合规报告 (EN, IT, ES, PT)", codeRef: "LAUDO_MULTI" },
            { title: "安全软件/PLC 逻辑验证文档", codeRef: "VAL_SOFT" },
            { title: "针对巴西标准的 HMI 和手册调整", codeRef: "ADEQ_DOC" }
        ]
    },
    leadForm: {
        formId: "lead-import-machinery-zh",
        title: "确保您的海外资产顺利国产化",
        submitLabel: "申请专业咨询",
        endpoint: "/api/v1/public/leads",
        hiddenIntentKey: "LEAD_GESTAO_IMPORTADAS",
        fields: [
            { name: "name", label: "姓名", type: "text", required: true },
            { name: "company", label: "公司", type: "text", required: true },
            { name: "email", label: "企业邮箱", type: "email", required: true },
            { name: "phone", label: "电话", type: "tel", required: true },
            { name: "context", label: "设备原产地（国家 / 制造商）", type: "textarea", required: false }
        ]
    }
};
