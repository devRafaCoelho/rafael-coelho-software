# 00 — Fundação

- [ ] **Limpar landing antiga e aplicar tokens Lime / Graphite**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a LP atual usa a paleta papel/primária/CTA e seções que não batem com a estrutura do Gerson.
  - **Onde:** `web/src/components/landing/*`, `web/src/app/globals.css`, `web/src/app/page.tsx`, `web/src/app/layout.tsx`, `docs/s2/copy.md`.
  - **Fix:** remover componentes de landing obsoletos. Em `globals.css`, definir `--color-background` claro, `--color-foreground` / `--color-primary` = Graphite `#23262F`, `--color-cta` = Lime `#B6FF2E`, `--color-cta-foreground` = Graphite. Fonte default Space Grotesk. `page.tsx` só monta as seções novas na ordem do README.
  - **Aceite:** build sem referência a Trust / Pain / Products antigos; tokens Lime e Graphite ativos; body com Space Grotesk.
  - **Validação:** mock
  - **Teste:**
    1. Grep em `landing/` não encontra Trust nem “empresas que já confiaram”.
    2. `globals.css` contém `#B6FF2E` e `#23262F`.
    3. `npm run build` em `web/` passa (ou o typecheck equivalente).
  - **Done:** *(execução)*
  - **Resultado:** *(…)*
  - **Achados:** *(—)*
