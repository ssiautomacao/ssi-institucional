// src/pages/api/v1/public/leads.ts
import type { APIRoute } from 'astro';
import { z } from 'zod';

export const prerender = false;

// ─────────────────────────────────────────────────────────────
// 1. Schema de Validação Estrita (Zod)
// ─────────────────────────────────────────────────────────────
const leadSchema = z.object({
    formId: z.string(),
    hiddenIntentKey: z.string(),
    locale: z.string().optional().default("pt"), // Crucial para i18n routing
    name: z.string().min(2, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    company: z.string().min(2, "Empresa é obrigatória"),
    phone: z.string().optional().default("Não informado"),
    // Campos dinâmicos opcionais (dependem do form)
    context: z.string().optional(),
    interest: z.string().optional(),
    modality: z.string().optional(),
    participants: z.string().optional(),
    // Honeypot (Segurança Anti-Bot: Se preenchido, é spam)
    website_trap: z.string().optional(),
});

export const POST: APIRoute = async ({ request, clientAddress }) => {
    try {
        const body = await request.json();

        // ─────────────────────────────────────────────────────────
        // 2. Validação de Segurança
        // ─────────────────────────────────────────────────────────
        const parsedData = leadSchema.parse(body);

        // Honeypot check: Se preenchido, tratamos como spam
        if (parsedData.website_trap && parsedData.website_trap.trim() !== "") {
            console.warn(`[SECURITY] Spam Bot bloqueado via Honeypot. IP: ${clientAddress}`);
            return new Response(JSON.stringify({ success: true, message: "Recebido." }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // ─────────────────────────────────────────────────────────
        // 3. Payload Enterprise estruturado para Webhook Universal
        // ─────────────────────────────────────────────────────────
        const crmPayload = {
            source: "SSI_GLOBAL_WEBSITE",
            intent: parsedData.hiddenIntentKey || "LEAD_GERAL",
            form_id: parsedData.formId,
            customer: {
                name: parsedData.name,
                email: parsedData.email,
                phone: parsedData.phone,
                company: parsedData.company
            },
            technical_context: {
                message: parsedData.context || "Não informado",
                interest_area: parsedData.interest || "Geral",
                modality: parsedData.modality || "N/A",
                participants: parsedData.participants || "N/A"
            },
            metadata: {
                locale: parsedData.locale, // Crucial para roteamento de vendas por idioma
                captured_at: new Date().toISOString(),
                ip_address: clientAddress
            }
        };

        // ─────────────────────────────────────────────────────────
        // 4. Disparo Seguro para o Webhook (Make.com, n8n, Zapier)
        // ─────────────────────────────────────────────────────────
        const webhookUrl = import.meta.env.PUBLIC_LEAD_WEBHOOK_URL;

        if (webhookUrl) {
            const webhookResponse = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(crmPayload)
            });

            if (!webhookResponse.ok) {
                throw new Error(`Falha no Webhook. Status: ${webhookResponse.status}`);
            }
            console.log(`🟢 [BACKEND] Lead enviado com sucesso para o Webhook (${parsedData.locale}).`);
        } else {
            // Fallback local — log visível no terminal do dev server
            console.warn("🟡 [BACKEND] WEBHOOK NÃO CONFIGURADO (PUBLIC_LEAD_WEBHOOK_URL). Logando localmente:");
            console.dir(crmPayload, { depth: null });
        }

        // ─────────────────────────────────────────────────────────
        // 5. Resposta de Sucesso para o Frontend
        // ─────────────────────────────────────────────────────────
        return new Response(JSON.stringify({
            success: true,
            message: "Recebemos sua solicitação com sucesso. Um especialista entrará em contato."
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            console.warn("[VALIDATION] Payload rejeitado:", error.errors);
            return new Response(JSON.stringify({ success: false, message: "Dados do formulário inválidos.", errors: error.errors }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        console.error("[API ERROR] Falha Crítica no Disparo de Leads:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "Erro interno. Tente novamente ou use o WhatsApp."
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
