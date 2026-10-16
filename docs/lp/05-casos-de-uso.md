# 05 — Casos de uso

- [ ] **Cenários práticos em fluxo**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** o Gerson mostra aplicações por área; a LP precisa do mesmo formato, sem case técnico de cliente.
  - **Onde:** `web/src/components/landing/use-cases.tsx` (`#casos`).
  - **Fix:** quatro cards (Operação, Produto, Lançamento, Confirmação com IA). Cada um: área, título, fluxo em 4 etapas com setas. Sem Neoenergia/Brivia/Auren como case.
  - **Aceite:** quatro cenários; fluxo visual; sem “decisão de arquitetura” longa.
  - **Validação:** browser
  - **Teste:**
    1. Abrir `#casos`.
    2. Contar quatro cards de cenário.
    3. Em um card, ver a sequência de etapas.
  - **Done:** *(execução)*
  - **Resultado:** *(…)*
  - **Achados:** *(—)*
