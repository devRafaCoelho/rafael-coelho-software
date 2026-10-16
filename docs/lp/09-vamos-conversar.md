# 09 — Vamos conversar

- [ ] **CTA final com formulário e WhatsApp**
  - **Jira:** n/a
  - **Camada:** full-stack
  - **Problema:** a conversão precisa ficar no fim, com o mesmo contrato de lead já existente.
  - **Onde:** `web/src/components/landing/closing.tsx` (`#vamos-conversar`), `lead-form.tsx`, `whatsapp-link.tsx`.
  - **Fix:** bloco Graphite ou fundo escuro suave + card do formulário. Headline de fechamento. CTAs WhatsApp + formulário (campos atuais, consentimento, link privacidade). Visual Lime no botão Enviar.
  - **Aceite:** `#vamos-conversar` com formulário; Enviar desabilitado sem consentimento; POST `/api/contact` intacto.
  - **Validação:** browser
  - **Teste:**
    1. Abrir `#vamos-conversar`.
    2. Ver formulário e WhatsApp.
    3. Enviar começa desabilitado sem checkbox.
  - **Done:** *(execução)*
  - **Resultado:** *(…)*
  - **Achados:** *(—)*
