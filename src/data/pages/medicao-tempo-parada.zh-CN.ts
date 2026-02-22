import type { ServicePagePayload } from '../../types/payloads';

export const page: ServicePagePayload = {
    id: "svc-stop-time-zh",
    hero: {
        id: "hero-mtp",
        headline: "机器停机时间测量 (ISO 13855)",
        subtext: "使用经校准的仪器（HHB Safetyman DT3）进行惯性测试，以对安全距离进行几何验证。带有专业认证的技术报告。",
        cta: "请求停机时间测量",
        image: "/ssi-institucional/assets/services/mtp-hero.jpg"
    },
    seo: {
        title: "机器停机时间测量与 ISO 13855 验证 | SSI Automação",
        description: "使用 HHB Safetyman 进行认证的机器停机时间测试和安全距离验证。完全符合工业机械的 ISO 13855 标准。"
    },
    painPoints: {
        title: "安全距离风险",
        items: [
            {
                id: "pp-brake",
                title: "制动性能下降",
                description: "机器惯性随时间增加，使现有的安全光幕不足以提供保护。"
            },
            {
                id: "pp-audit",
                title: "审计不合规",
                description: "在检查期间无法提供安全距离验证的证据。"
            }
        ]
    },
    methodology: {
        title: "测试方法",
        steps: [
            {
                id: "m-hhb",
                title: "HHB Safetyman 分析",
                description: "精确测量触发与危险运动完全停止之间的时间。"
            },
            {
                id: "m-math",
                title: "距离计算",
                description: "数学应用 ISO 13855 公式来确定正确的 S（安全距离）。"
            }
        ]
    },
    deliverables: {
        title: "验证证据",
        items: [
            {
                id: "d-laudo",
                title: "技术验证报告",
                description: "包含停止曲线和 ART（技术责任说明）的详细报告。"
            },
            {
                id: "d-sticker",
                title: "安全合规标志",
                description: "机器上的标签，注明最后测试日期和计算出的安全距离。"
            }
        ]
    },
    leadForm: {
        id: "form-mtp",
        title: "验证您的安全距离",
        subtitle: "不要猜测安全。去测量它。",
        fields: [
            { id: "company", label: "公司", type: "text", placeholder: "企业名称", required: true },
            { id: "machines", label: "机器数量", type: "text", placeholder: "例如 5 台机器", required: false }
        ],
        submitLabel: "发送请求"
    }
};
