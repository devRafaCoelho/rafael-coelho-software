# Setup técnico e design system — (branch `s1-setup-tecnico`)

**Projeto:** LP Rafael Coelho — Arquitetura de Software  
**Fonte:** `LP_SoftwareHouse_Documentacao.md` (Sprint 1)  
**Ambiente de teste:** `http://localhost:3000` (app em `web/`). URL de preview da Vercel entra no card 4 na execução.  
**Status geral:** em execução

## Índice

- [Setup técnico](#setup-técnico)

---

## Setup técnico

Âncora: `web/` (ainda inexistente). Documentos da raiz permanecem fora do app.

- [x] **1. App Next.js no ar em local**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a pasta do projeto só tem documentos e imagens. Não existe git nem aplicação.
  - **Onde:** raiz do repositório e `web/` (ainda inexistente).
  - **Fix:** `git init` na raiz, branch `main`, em seguida a principal do lote `s1-setup-tecnico`. Scaffold com `create-next-app` em `web/` (`--typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`). `.gitignore` na raiz só para arquivos de sistema, sem substituir o `.gitignore` do app. Branch desta task: `s1-01-scaffold`, criada a partir de `s1-setup-tecnico`.
  - **Precedente:** seção 3.1 de `LP_SoftwareHouse_Documentacao.md` (Next.js, App Router, TypeScript).
  - **Aceite:** `npm run build` em `web/` termina sem erro e `http://localhost:3000` abre a página gerada pelo scaffold.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Em `web/`, instalar dependências e rodar `npm run build`.
    2. Subir o dev server e abrir `http://localhost:3000`.
    3. Confirmar que a página do Next responde no browser.
  - **Done:** Git na raiz (`main` → `s1-setup-tecnico` → `s1-01-scaffold`). Next.js 16.4.1 em `web/` com App Router, TypeScript, Tailwind, ESLint, `src/` e alias `@/*`. `create-next-app` rodou com `--disable-git` para não criar um repositório dentro de `web/`.
  - **Resultado:** pass. `npm run build` concluiu sem erro. No browser, `http://localhost:3000/` abriu com título "Create Next App" e o texto "To get started, edit the page.tsx file."
  - **Achados:** o dev server avisa que o Turbopack ignorou um `package-lock.json` em `c:\Users\rafac` (fora deste repo) e sugere `turbopack.root`. O build e a página passaram mesmo assim.

- [x] **2. shadcn, Prettier e Framer Motion**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** o scaffold não traz o kit de UI, o formatador nem a biblioteca de movimento previstos para a LP.
  - **Onde:** `web/package.json`, `web/components.json`, `web/src/components/ui/`, `web/.prettierrc`.
  - **Fix:** `shadcn init` no app já criado; adicionar os componentes `button` e `card`; Prettier com script `format`; instalar `framer-motion`. Na home, renderizar um botão shadcn e um bloco com `motion`. Branch desta task: `s1-02-tooling`, a partir de `s1-setup-tecnico` atualizada.
  - **Precedente:** seção 3.2 de `LP_SoftwareHouse_Documentacao.md` (Tailwind, shadcn/ui, Framer Motion). Não copiar o TanStack Start do Pet Sampas.
  - **Aceite:** `npm run lint` em `web/` termina sem erro novo; o browser mostra o botão shadcn e o bloco animado na home.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Rodar `npm run lint` em `web/`.
    2. Abrir `http://localhost:3000`.
    3. Confirmar o botão shadcn e o bloco com `motion` visíveis.
  - **Done:** shadcn init com base Radix (`radix-nova`), componentes `button` e `card`, Prettier (`format` + `.prettierrc`) e `framer-motion`. A home mostra um `Button` e um bloco `motion`.
  - **Resultado:** pass. `npm run lint` terminou sem erro. No browser, `http://localhost:3000/` mostra o botão "Botão" e o bloco "Bloco com motion".
  - **Achados:** a primeira chamada do `shadcn init` parou num prompt interativo e não gravou arquivos. A segunda, com `--defaults` e `--base radix`, concluiu.

- [ ] **3. Tokens e página-espécime**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** cores e fontes ainda são as do template, não as da marca.
  - **Onde:** `web/src/app/globals.css`, `web/src/app/layout.tsx`, `web/src/app/page.tsx`.
  - **Fix:** definir os tokens no `@theme` de `globals.css` (Tailwind v4 não usa `tailwind.config`). Papel `#F4F1EA`, tinta `#14181F`, primária `#163A45`, CTA `#E35D2F`. Fontes via `next/font`: Newsreader nos títulos, Source Sans 3 no texto. A home vira página-espécime: quatro amostras, uma escala de título e texto, um botão na cor de CTA e um card neutro. Rótulos técnicos apenas ("Primária", "CTA"). Sem dark mode. Branch desta task: `s1-03-tokens`, a partir de `s1-setup-tecnico` atualizada.
  - **Precedente:** seção 3.4 de `LP_SoftwareHouse_Documentacao.md` (uma primária, um neutro escuro, um neutro claro, uma cor de CTA, duas fontes via `next/font`).
  - **Aceite:** em 375px e no desktop, as quatro cores e as duas fontes aparecem, e o botão de ação usa `#E35D2F`.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` no desktop e conferir as quatro amostras, o título, o texto e o botão CTA.
    2. Repetir a leitura com largura de 375px.
    3. Confirmar que o botão de ação está na cor `#E35D2F`.
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

- [ ] **4. Preview na Vercel**
  - **Jira:** n/a
  - **Camada:** full-stack
  - **Problema:** o app só existe na máquina local.
  - **Onde:** projeto Vercel com root directory `web/`.
  - **Fix:** deploy pelo Vercel CLI a partir de `web/`, sem domínio customizado. Registrar a URL `*.vercel.app` neste card. Branch desta task: `s1-04-preview`, a partir de `s1-setup-tecnico` atualizada.
  - **Precedente:** entregável da Sprint 1 em `LP_SoftwareHouse_Documentacao.md` (projeto em URL de preview). O apontamento do domínio fica para quando `rafaelcoelhosoftware.com.br` existir.
  - **Aceite:** a URL `*.vercel.app` abre a mesma página-espécime (amostras, botão CTA, card).
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Publicar com o Vercel CLI a partir de `web/`.
    2. Abrir a URL de preview no browser.
    3. Confirmar amostras, botão CTA e card. Se o CLI não estiver autenticado, marcar `[!]` e registrar o que falta.
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

---

## Decisões tomadas

1. **App em `web/`** — a raiz já tem documentos e imagens; o `create-next-app` recusa pasta não vazia. Os arquivos da raiz permanecem onde estão.
2. **Stack** — Next.js atual com App Router, TypeScript, Tailwind v4, ESLint, diretório `src/` e alias `@/*`. Gerenciador: npm.
3. **Tokens em CSS** — cores e fontes ficam em `web/src/app/globals.css` via `@theme`. O documento de produto cita `tailwind.config`; o Tailwind v4 não usa mais esse arquivo.
4. **Paleta provisória** — papel `#F4F1EA`, tinta `#14181F`, primária `#163A45`, CTA `#E35D2F`. A CTA é a única cor de botão de ação. A Sprint 2 pode trocar os valores sem refazer a estrutura.
5. **Fontes** — Newsreader nos títulos e Source Sans 3 no texto, as duas via `next/font`.
6. **Sem dark mode** — a seção 3.4 do documento de produto deixa o dark mode fora da prioridade de uma LP de conversão.
7. **Home desta sprint** — página-espécime do design system, não a landing. Sem texto comercial e sem citar fornecedor de modelo de IA.
8. **Domínio fora** — `rafaelcoelhosoftware.com.br`, e-mail, DNS e anúncios não bloqueiam esta sprint. O deploy é a URL `*.vercel.app`.
9. **Validação browser nos quatro cards** — o aceite é a página no ar (local ou preview). Não há lógica isolável que um teste unitário prove.
10. **Git sem Jira** — não há key de issue. Branches de task: `s1-01-scaffold`, `s1-02-tooling`, `s1-03-tokens`, `s1-04-preview`, cada uma a partir de `s1-setup-tecnico` atualizada.

## Fora de escopo

- Registro de `rafaelcoelhosoftware.com.br`, DNS, e-mail, WhatsApp, logos de clientes e política de privacidade — Sprint 0.
- Copy, wireframe, foto e favicon — Sprint 2. As imagens já na raiz (`avatar.png`, `rafael-coelho-logo.png`, `rafael-coelho-sobre.png`) não entram na página-espécime.
- Seções da LP, formulário, analytics e anúncios — Sprints 3 a 8.
- Preview automático por pull request no GitHub — o deploy desta sprint é pelo Vercel CLI.
- Dark mode — decisão 6.

## Follow-ups

- [>] **Apontar `rafaelcoelhosoftware.com.br` na Vercel** — quando o domínio existir (card 4).
- [>] **Conectar o repositório ao GitHub para preview por PR** — se a conta estiver disponível (card 4).
- [>] **Revisar a paleta provisória** — Sprint 2 (card 3).
