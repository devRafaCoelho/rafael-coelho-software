# 01 — Header

- [ ] **Header fixo com navegação e CTA**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** o header precisa ancorar a página como no Gerson: marca, links das seções e ação.
  - **Onde:** `web/src/components/landing/header.tsx`, `web/src/components/landing/mark.tsx`.
  - **Fix:** marca (monograma Lime/Graphite) + nome. Links: Serviços, Como ajudo, Casos de uso, Sobre, Diferenciais. CTA Lime “Falar no WhatsApp”. Menu mobile. Sem foto no logo.
  - **Aceite:** header fixo; âncoras batem nos `id` das seções; WhatsApp abre `wa.me` com tracking.
  - **Validação:** browser
  - **Teste:**
    1. Abrir `/` e ver marca + nav + CTA.
    2. Clicar “Serviços” e a página rolar até `#servicos`.
    3. No mobile, Menu abre os links.
  - **Done:** *(execução)*
  - **Resultado:** *(…)*
  - **Achados:** *(—)*
