import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-electrical-safety-zh",
    hero: {
        id: "hero-nr10",
        headline: "电气工程与安全 (NR-10)",
        subtext: "根据 NR-10 标准进行结构化检查、编制 PIE（电气安装手册）以及入射能量研究（电弧闪络分析）。",
        cta: "咨询电气工程师",
        image: "/ssi-institucional/assets/services/nr10-hero.jpg"
    },
    seo: {
        title: "电气安全工程与电弧闪络研究 | SSI Automação",
        description: "遵循 NR-10 标准的技术检查、PIE 开发和电弧闪络入射能量研究。专家级电气工程报告。"
    },
    painPoints: {
        title: "电气风险管理",
        items: [
            {
                id: "pp-risk-high",
                title: "电弧闪络风险",
                description: "缺乏对入射能量水平和安全接近边界的研究。"
            },
            {
                id: "pp-legacy",
                title: "陈旧的基础设施",
                description: "电气面板和单线图无法反映当前的实际情况。"
            }
        ]
    },
    methodology: {
        title: "我们的工程方法",
        steps: [
            {
                id: "m-diagnosis",
                title: "诊断审核",
                description: "现场映射所有电气资产和面板状况。"
            },
            {
                id: "m-studies",
                title: "计算研究",
                description: "使用专业工程软件进行选择性和协调性分析。"
            }
        ]
    },
    deliverables: {
        title: "技术成果",
        items: [
            {
                id: "d-pie",
                title: "PIE（安装手册）",
                description: "法律合规所需的完整文档。"
            },
            {
                id: "d-labels",
                title: "电弧闪络标签",
                description: "标明个人防护装备 (PPE) 要求和风险等级的耐用警告标签。"
            }
        ]
    },
    leadForm: {
        id: "form-nr10",
        title: "申请电气安全审核",
        subtitle: "与我们的专家预约技术访问。",
        fields: [
            { id: "company", label: "公司", type: "text", placeholder: "企业名称", required: true },
            { id: "panels", label: "预计面板数量", type: "text", placeholder: "例如 50", required: false }
        ],
        submitLabel: "发送请求"
    }
};
