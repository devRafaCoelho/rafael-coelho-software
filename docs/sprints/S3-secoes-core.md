# Seções core da landing — (branch `s3-secoes-core`)

**Projeto:** LP Rafael Coelho — Arquitetura de Software  
**Fonte:** `docs/LP_SoftwareHouse_Documentacao.md` (Sprint 3, seções 3.2, 3.3 e 3.4) e `docs/s2/copy.md`  
**Ambiente de teste:** `http://localhost:3000` (app em `web/`). A rota `/wireframe` permanece o rascunho da Sprint 2.  
**Status geral:** em execução

## Índice

- [Seções core](#seções-core)

---

## Seções core

Âncora: `web/src/app/page.tsx` (página-espécime, linhas 19–47) e `docs/s2/copy.md` (linhas 3–42). Componentes em `web/src/components/landing/` ainda inexistentes.

- [x] **1. A home passa a ser a landing**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** `http://localhost:3000` ainda mostra a página-espécime (amostras Papel, Tinta, Primária e CTA). A Sprint 3 precisa da landing no endereço principal.
  - **Onde:** `web/src/app/page.tsx`, `web/src/app/layout.tsx:15-18`. A página-espécime muda para `web/src/app/design-system/page.tsx` (ainda inexistente).
  - **Fix:** mover o conteúdo atual de `page.tsx` para `/design-system`, com `metadata.title` "Design system" só nessa rota. Em `layout.tsx`, title "Rafael Coelho — Arquitetura de Software" e description igual à subheadline da copy. `page.tsx` passa a renderizar, nesta ordem, os componentes Header, Hero, Dor, Pilares e ComoFunciona. Até as tasks seguintes, cada um pode ser um bloco vazio com o nome da seção num `h2` invisível para leitor de tela apenas se o texto visível ainda não existir — o aceite desta task é a troca de rota, não o miolo visual. Não alterar `/wireframe`.
  - **Precedente:** `web/src/app/page.tsx` e `web/src/app/layout.tsx`.
  - **Aceite:** `/` não mostra as amostras Papel/Tinta/Primária/CTA. `/design-system` mostra essas quatro amostras. O título da aba em `/` é "Rafael Coelho — Arquitetura de Software".
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000`.
    2. Confirmar que a aba diz "Rafael Coelho — Arquitetura de Software" e que a página não lista Papel, Tinta, Primária nem CTA como amostras.
    3. Abrir `http://localhost:3000/design-system` e confirmar as quatro amostras.
  - **Done:** A página-espécime foi para `/design-system`. `/` renderiza Header, Hero, Dor, Pilares e Como funciona, ainda sem o miolo visual.
  - **Resultado:** pass. A aba em `/` é "Rafael Coelho — Arquitetura de Software" e a página não lista as amostras. `/design-system` mostra Papel, Tinta, Primária e CTA, com a aba "Design system".
  - **Achados:** —

- [x] **2. Header com logo e um CTA**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a landing não tem o header mínimo da seção 3.3: marca e um único caminho de conversão, sem menu.
  - **Onde:** `web/src/components/landing/header.tsx` (ainda inexistente), usado por `web/src/app/page.tsx`. Copy em `docs/s2/copy.md:3-7`. Logo em `web/public/logo.png`.
  - **Fix:** header fixo no topo, fundo papel, com `next/image` em `/logo.png` (64×64, `object-contain`, alt "Rafael Coelho") e um único botão "Falar no WhatsApp". Usar `Button` de `web/src/components/ui/button.tsx` com `className` que aplique `bg-cta` e `text-cta-foreground`. O botão é `type="button"` e não navega. Sem links de menu, sem âncoras e sem `wa.me`. Em 375px, logo e botão ficam na mesma linha.
  - **Precedente:** botão `bg-cta` em `web/src/app/wireframe/page.tsx` e o uso de `/logo.png` nessa mesma rota.
  - **Aceite:** em `/`, o header mostra o logo e um botão "Falar no WhatsApp" com fundo `rgb(227, 93, 47)`. Não há outros links no header.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` em largura de desktop.
    2. Confirmar o logo, o texto do botão e o fundo `rgb(227, 93, 47)`.
    3. Repetir em 375px e confirmar que logo e botão cabem na mesma linha, sem scroll horizontal.
  - **Done:** Header fixo com `/logo.png` e um botão "Falar no WhatsApp" que não navega.
  - **Resultado:** pass. No desktop (1347px) o botão está em `rgb(227, 93, 47)`, o logo tem alt "Rafael Coelho" e o header não tem links. Em 375px logo e botão ficam na mesma linha, sem scroll horizontal.
  - **Achados:** —

- [x] **3. Hero com headline, CTA e faixa de clientes**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a primeira dobra ainda não comunica a oferta nem a prova social imediata.
  - **Onde:** `web/src/components/landing/hero.tsx` (ainda inexistente). Copy em `docs/s2/copy.md:9-17`.
  - **Fix:** `h1` com o texto exato "Arquitetura de software sênior, entregue na velocidade da IA." em `font-heading`. Parágrafo com a subheadline exata: "Você fala direto com quem arquiteta e constrói. Sem júnior no meio e sem gerente de conta traduzindo o pedido." Segundo botão "Falar no WhatsApp", mesmas classes e o mesmo `type="button"` do header. Abaixo, três retângulos com borda e os nomes Neoenergia, Brivia e Auren, sem imagem de logo. Sem animação neste bloco.
  - **Precedente:** faixa de clientes em `web/src/app/wireframe/page.tsx`.
  - **Aceite:** a `h1` é exatamente a headline provisória, há um segundo botão "Falar no WhatsApp" e os três nomes aparecem em retângulos.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000`.
    2. Confirmar a `h1`, a subheadline e os três nomes.
    3. Em 375px, confirmar que a headline quebra dentro da largura e que a página não ganha scroll horizontal.
  - **Done:** Hero com a headline provisória, a subheadline, o segundo CTA e os três nomes em retângulos.
  - **Resultado:** pass. A `h1`, a subheadline e Neoenergia, Brivia e Auren (borda de 1px) aparecem. Em 375px a headline termina em 359px e não há scroll horizontal.
  - **Achados:** —

- [x] **4. Seção Dor**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a página ainda não descreve o problema que o anúncio precisa encontrar na primeira rolagem.
  - **Onde:** `web/src/components/landing/pain.tsx` (ainda inexistente). Copy em `docs/s2/copy.md:19-27`.
  - **Fix:** seção com o parágrafo "O sistema cresce e a pressa vira dívida. Retrabalho, prazo que estoura e um freelancer que entrega tela sem estrutura." e uma lista com as três dores, texto exato: "Retrabalho quando cada mudança quebra o que já estava no ar.", "Dívida técnica que deixa o próximo passo mais caro do que o anterior." e "Prazo de software house, com fila, repasse e ninguém dono da decisão." Sem CTA novo nesta seção.
  - **Precedente:** lista da seção Dor em `docs/s2/copy.md`.
  - **Aceite:** as três dores aparecem como itens de lista, com o texto da copy, abaixo do hero.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até a Dor.
    2. Confirmar o parágrafo e os três itens.
    3. Em 375px, confirmar que a lista permanece dentro da largura.
  - **Done:** Seção Dor com o parágrafo da copy e as três dores em lista, abaixo do hero.
  - **Resultado:** pass. O parágrafo e os três itens aparecem depois da faixa de clientes. Em 375px a seção ocupa a largura da tela e não há scroll horizontal.
  - **Achados:** —

- [x] **5. Três pilares em cards**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** Arquitetura, IA e Senioridade ainda não aparecem como a oferta, só como frase no documento de copy.
  - **Onde:** `web/src/components/landing/pillars.tsx` (ainda inexistente). Copy em `docs/s2/copy.md:29-35`.
  - **Fix:** três `Card` de `web/src/components/ui/card.tsx`. Títulos "Arquitetura", "IA" e "Senioridade". Corpos, em ordem: "A entrega não é só a interface. É a estrutura que escala e não vira dívida técnica.", "A IA entra no desenho do sistema e no jeito de construir. Ela acelera a entrega com controle, revisão e qualidade." e "Problemas reais em energia, educação e fintech, e produto próprio tirado do zero até produção." Em 375px os cards empilham; a partir de `sm` ficam em três colunas. Sem nome de fornecedor de modelo.
  - **Precedente:** `Card` em `web/src/app/page.tsx` antes da troca de rota, e depois em `web/src/app/design-system/page.tsx`.
  - **Aceite:** a página mostra três cards com esses títulos e esses textos, empilhados em 375px.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e localizar os três títulos.
    2. Confirmar o texto de cada card.
    3. Em 375px, confirmar que um card não fica ao lado de outro.
  - **Done:** Três cards com Arquitetura, IA e Senioridade e o texto da copy.
  - **Resultado:** pass. Os três textos aparecem. No desktop os cards ficam lado a lado. Em 375px o segundo começa abaixo do primeiro.
  - **Achados:** —

- [x] **6. Como funciona em quatro passos**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** o visitante ainda não vê como a contratação anda, que é a objeção que esta seção existe para reduzir.
  - **Onde:** `web/src/components/landing/process.tsx` (ainda inexistente). Copy em `docs/s2/copy.md:37-42`.
  - **Fix:** lista ordenada com quatro passos, texto exato: "Diagnóstico. Uma análise pontual do sistema ou da decisão técnica que trava o produto.", "Proposta. O caminho de arquitetura, o escopo e o que fica de fora.", "Build. Construção do produto, do MVP ou da feature, com você falando com quem implementa." e "Entrega. Sistema no ar, código sob o seu controle e o próximo passo combinado." Números 1 a 4 visíveis. Sem formulário e sem botão extra.
  - **Precedente:** passos numerados em `docs/s2/copy.md:39-42`.
  - **Aceite:** a landing mostra os quatro passos, nessa ordem, depois dos pilares.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até o fim do que já existe.
    2. Confirmar os quatro passos na ordem Diagnóstico, Proposta, Build, Entrega.
    3. Em 375px, confirmar que não há scroll horizontal.
  - **Done:** Lista ordenada com Diagnóstico, Proposta, Build e Entrega depois dos pilares.
  - **Resultado:** pass. Os quatro textos aparecem nessa ordem, com numeração decimal. Em 375px não há scroll horizontal.
  - **Achados:** —

- [ ] **7. Entrada leve por scroll**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** as seções abaixo da dobra entram secas, e a Sprint 3 pede fluidez sem pesar a primeira pintura.
  - **Onde:** `web/src/components/landing/reveal.tsx` (ainda inexistente). Envolver só Dor, Pilares e Como funciona a partir de `web/src/app/page.tsx`.
  - **Fix:** componente cliente com `motion`, no padrão de `web/src/components/motion-sample.tsx`, usando `whileInView` uma vez (`viewport.once`), opacidade de 0 a 1 e deslocamento vertical de 12px a 0. Não envolver Header nem Hero. Não adicionar biblioteca nova. Depois da animação, as três seções ficam opacas e legíveis.
  - **Precedente:** `web/src/components/motion-sample.tsx`.
  - **Aceite:** ao abrir `/` e rolar, Dor, Pilares e Como funciona aparecem. Header e Hero não dependem de scroll para ficarem visíveis. Em 375px a página continua sem scroll horizontal e a ordem é Header, Hero, Dor, 3 pilares, Como funciona.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e confirmar headline e botão do header sem rolar.
    2. Rolar até o fim e confirmar que as três seções de baixo estão visíveis, com o texto da copy.
    3. Em 375px, confirmar a ordem das cinco seções e a ausência de scroll horizontal.
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

---

## Decisões tomadas

1. **A landing ocupa `/`** — a página-espécime sai da home e fica em `/design-system`. O wireframe continua em `/wireframe`.
2. **Só as cinco primeiras seções** — Header, Hero, Dor, 3 pilares e Como funciona. Cases, Sobre, depoimentos, FAQ, CTA final e footer ficam na Sprint 4.
3. **CTA sem destino** — os dois botões "Falar no WhatsApp" não abrem conversa. `wa.me`, mensagem pronta e formulário são a Sprint 5.
4. **Clientes por nome** — Neoenergia, Brivia e Auren seguem como retângulo com o nome. Os arquivos de logo não estão no repositório.
5. **Hero estático** — a animação de entrada não cobre o header nem o hero, para não atrasar a primeira pintura.
6. **Paleta e headline** — continuam as da Sprint 2. Headline provisória e CTA `#E35D2F`.
7. **Git sem Jira** — branches de task: `s3-01-home`, `s3-02-header`, `s3-03-hero`, `s3-04-dor`, `s3-05-pilares`, `s3-06-processo`, `s3-07-motion`, cada uma a partir de `s3-secoes-core` atualizada. `s3-secoes-core` nasce de `main`.

## Fora de escopo

- Cases, produtos próprios, depoimentos e FAQ — Sprint 4.
- Formulário, API, e-mail, planilha e `wa.me` — Sprint 5.
- GTM, GA4, Meta Pixel, Open Graph, schema.org, sitemap e Lighthouse — Sprint 6.
- Domínio, política de privacidade e logos oficiais de cliente — Sprint 0.
- Troca da headline provisória pelo texto do anúncio — Sprint 8.
- Dark mode.

## Follow-ups

- [>] **Ligar o botão ao WhatsApp** — Sprint 5.
- [>] **Completar a página com cases, FAQ e footer** — Sprint 4.
- [>] **Medir LCP, CLS e INP** — Sprint 6. Esta sprint só evita animar o hero.
