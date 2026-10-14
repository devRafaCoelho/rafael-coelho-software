# Cases, prova social e FAQ — (branch `s4-credibilidade`)

**Projeto:** LP Rafael Coelho — Arquitetura de Software  
**Fonte:** `docs/LP_SoftwareHouse_Documentacao.md` (Sprint 4 e seções 2.1, 3.3) e `docs/s2/copy.md`  
**Ambiente de teste:** `http://localhost:3000` (app em `web/`). A home já tem Header, Hero, Dor, 3 pilares e Como funciona.  
**Status geral:** em execução

## Índice

- [Credibilidade](#credibilidade)

---

## Credibilidade

Âncora: `web/src/app/page.tsx` (a landing termina em `Process`) e `docs/s2/copy.md` (a partir da seção Cases, linha 44). Componentes novos em `web/src/components/landing/`, ainda inexistentes. Cada seção nova entra depois de Como funciona, envolvida em `Reveal` (`web/src/components/landing/reveal.tsx`).

- [x] **1. Cases de clientes**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** Neoenergia, Brivia e Auren só aparecem como nomes na faixa do hero. Falta o case que explica o problema, a decisão e o resultado.
  - **Onde:** `web/src/components/landing/cases.tsx` (ainda inexistente), usado por `web/src/app/page.tsx` logo depois de `Process`. Copy em `docs/s2/copy.md:46-70`.
  - **Fix:** uma seção com o grupo "Clientes" e três cases, nesta ordem: Neoenergia, Brivia, Auren. Cada nome fica num retângulo com borda, sem imagem de logo. Abaixo do nome, três parágrafos com o rótulo e o texto exato da copy: Problema, Decisão de arquitetura, Resultado. Sem preço, sem depoimento e sem link externo neste grupo.
  - **Precedente:** retângulos de nome em `web/src/components/landing/hero.tsx` e os cases em `docs/s2/copy.md`.
  - **Aceite:** depois de Como funciona, a página mostra os três cases com problema, decisão e resultado, e os nomes em retângulos.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até depois de Como funciona.
    2. Confirmar Neoenergia, Brivia e Auren, cada um com Problema, Decisão de arquitetura e Resultado.
    3. Em 375px, confirmar que o texto do case fica dentro da largura, sem scroll horizontal.
  - **Done:** Seção Clientes depois de Como funciona, com Neoenergia, Brivia e Auren em retângulos e os três blocos de texto.
  - **Resultado:** pass. Os três cases aparecem com Problema, Decisão de arquitetura e Resultado, sem links. Em 375px a borda termina em 359px e não há scroll horizontal.
  - **Achados:** —

- [x] **2. Produtos próprios**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** Pet Sampas e Estoque Inteligente provam que o trabalho chega em produção, e a página ainda não conta isso.
  - **Onde:** o mesmo `web/src/components/landing/cases.tsx`, depois do grupo Clientes. Copy em `docs/s2/copy.md:72-88`. Foto e logo de cliente não entram aqui.
  - **Fix:** grupo "Produtos próprios" com Pet Sampas e Estoque Inteligente, no mesmo formato problema → decisão → resultado. No resultado de Pet Sampas, só `petsampas.com.br` vira link para `https://petsampas.com.br`, dentro do card. O texto deixa claro que os apps aguardam aprovação da Apple e do Google. Estoque Inteligente fica como produto hospedado e em reimplementação, sem URL inventada e sem tratar como lançamento encerrado.
  - **Precedente:** status da seção 2.1 de `docs/LP_SoftwareHouse_Documentacao.md` e `docs/s2/copy.md:80-88`.
  - **Aceite:** os dois produtos aparecem depois dos clientes, com o status real, e o único link novo é o de petsampas.com.br dentro do case.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até Produtos próprios.
    2. Confirmar o link `petsampas.com.br` e a frase de que os apps aguardam aprovação da Apple e do Google.
    3. Confirmar que Estoque Inteligente diz que está hospedado e em reimplementação.
  - **Done:** Grupo Produtos próprios depois dos clientes, com o link só em Pet Sampas.
  - **Resultado:** pass. O único link da página é `https://petsampas.com.br/`. O texto dos apps e o de reimplementação do Estoque Inteligente aparecem.
  - **Achados:** —

- [x] **3. Diferencial de IA**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a página fala de IA no card, mas não explica o limite: a IA propõe, a estrutura restringe o que pode ser gravado, e uma pessoa confirma.
  - **Onde:** `web/src/components/landing/ai.tsx` (ainda inexistente), depois dos cases. Copy em `docs/s2/copy.md:90-94`.
  - **Fix:** dois parágrafos, texto exato: "A IA propõe. A arquitetura limita o que pode ser gravado. Uma pessoa revisa antes de confirmar." e "Isso encurta a entrega sem abrir mão da estrutura. A ferramenta pode mudar. O que fica é o desenho do sistema." Sem nome de fornecedor de modelo.
  - **Precedente:** `docs/s2/copy.md:90-94`.
  - **Aceite:** os dois parágrafos aparecem depois dos produtos próprios.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até o diferencial de IA.
    2. Confirmar os dois parágrafos.
    3. Confirmar que a página não cita Claude, ChatGPT, OpenAI, Anthropic nem Cursor.
  - **Done:** Dois parágrafos do diferencial depois dos produtos próprios.
  - **Resultado:** pass. Os dois textos aparecem nessa posição. A página não cita fornecedor de modelo.
  - **Achados:** —

- [x] **4. Sobre com a foto real**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a landing ainda não mostra quem faz o trabalho. A foto já está no projeto e não está na página.
  - **Onde:** `web/src/components/landing/about.tsx` (ainda inexistente). Foto em `web/public/sobre.png`. Copy em `docs/s2/copy.md:96-102`.
  - **Fix:** `next/image` em `/sobre.png`, 192×192, `object-cover`, alt "Rafael Coelho". Dois parágrafos exatos: "Eu entendo o problema e construo a solução. Você fala comigo, sem repasse e sem gerente de conta." e "Energia, educação e fintech, e produto próprio do zero até produção. Arquitetura, IA e experiência no mesmo trabalho." Sem as palavras júnior, sênior e senioridade.
  - **Precedente:** a foto da seção Sobre em `web/src/app/wireframe/page.tsx`.
  - **Aceite:** a seção Sobre mostra a foto e os dois parágrafos, depois do diferencial de IA.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até Sobre.
    2. Confirmar a foto com alt "Rafael Coelho" e os dois parágrafos.
    3. Em 375px, confirmar que a foto não estoura a largura.
  - **Done:** Foto `/sobre.png` e os dois parágrafos depois do diferencial de IA.
  - **Resultado:** pass. A foto tem alt "Rafael Coelho" e carregou. Em 375px ela mede 192px e termina em 208px, sem scroll horizontal.
  - **Achados:** —

- [x] **5. Depoimentos vazios**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a prova social de fala de cliente não existe, e inventar uma frase quebraria a confiança da página.
  - **Onde:** `web/src/components/landing/testimonials.tsx` (ainda inexistente). Copy em `docs/s2/copy.md:104-106`.
  - **Fix:** uma seção com o texto exato "Nenhum depoimento publicado. A seção fica pronta para receber depois." Sem citação, sem nome de cliente e sem estrelas.
  - **Precedente:** `docs/s2/copy.md:106`.
  - **Aceite:** a seção existe, depois de Sobre, e só mostra essa frase.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até Depoimentos.
    2. Confirmar a frase de seção vazia.
    3. Confirmar que não há outra frase atribuída a uma pessoa.
  - **Done:** Seção depois de Sobre só com a frase de depoimento vazio.
  - **Resultado:** pass. A frase "Nenhum depoimento publicado. A seção fica pronta para receber depois." aparece depois da bio. Não há citação atribuída.
  - **Achados:** —

- [ ] **6. FAQ das objeções de contratação**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** preço, prazo, contrato, código e suporte ainda não respondem a objeção de quem chega pelo anúncio.
  - **Onde:** `web/src/components/landing/faq.tsx` (ainda inexistente). O projeto tem `button.tsx` e `card.tsx`, e não tem accordion. Copy em `docs/s2/copy.md:108-128`.
  - **Fix:** cinco itens, nesta ordem: Preço, Prazo, Contrato PJ, Propriedade do código, Suporte pós-entrega, com o texto exato de cada resposta. Cada item abre e fecha. Criar o accordion no padrão shadcn já usado em `web/src/components/ui/button.tsx` (`npx shadcn@latest add accordion -y --base radix`), em `web/src/components/ui/accordion.tsx`. Sem tabela de preço e sem formulário.
  - **Precedente:** `docs/s2/copy.md:110-128` e a menção a accordion na seção 3.2 de `docs/LP_SoftwareHouse_Documentacao.md`.
  - **Aceite:** as cinco perguntas aparecem e a de Preço abre a resposta de que não há tabela pública.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até o FAQ.
    2. Abrir Preço e confirmar "Não há tabela pública."
    3. Confirmar que Prazo, Contrato PJ, Propriedade do código e Suporte pós-entrega também estão na página.
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

- [ ] **7. Fechamento e rodapé**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a página de credibilidade termina no FAQ. Falta repetir o convite e o contato, ainda sem o formulário.
  - **Onde:** `web/src/components/landing/closing.tsx` e `web/src/components/landing/footer.tsx` (ainda inexistentes), no fim de `web/src/app/page.tsx`. Copy em `docs/s2/copy.md:130-152`.
  - **Fix:** um `h2` com "Transforme o que trava na sua operação com inteligência artificial." e um botão "Falar no WhatsApp", `type="button"`, classes `bg-cta` e `text-cta-foreground`, sem navegação. Não renderizar os campos do formulário. No rodapé: "Contato pelo WhatsApp.", o LinkedIn como link para `https://www.linkedin.com/in/rafael-coelho-63b75010b/`, e o texto "Política de privacidade: link reservado para quando o texto existir." sem transformar isso num link. Sem outras redes no meio da página.
  - **Precedente:** o botão de `web/src/components/landing/header.tsx` e o rodapé em `docs/s2/copy.md:146-152`.
  - **Aceite:** depois do FAQ há a headline de fechamento, o botão laranja e o rodapé com LinkedIn. Não há campos de formulário.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até o fim.
    2. Confirmar a headline, o botão "Falar no WhatsApp" em `rgb(227, 93, 47)` e a ausência de inputs.
    3. Em 375px, confirmar a ordem Cases, Diferencial de IA, Sobre, Depoimentos, FAQ, fechamento e rodapé, sem scroll horizontal.
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

---

## Decisões tomadas

1. **A página fica completa de conteúdo** — entram Cases, Diferencial de IA, Sobre, Depoimentos, FAQ, o convite final e o rodapé. O formulário em si fica na Sprint 5.
2. **Logos de cliente** — Neoenergia, Brivia e Auren continuam como nome num retângulo. Os arquivos de logo não estão no repositório.
3. **Um link de produto** — só `petsampas.com.br`, dentro do case. Estoque Inteligente não ganha URL.
4. **Depoimentos** — a seção existe e publica a frase de vazio. Nenhuma citação é inventada.
5. **FAQ abre e fecha** — accordion do shadcn, no mesmo base radix dos componentes que já existem. Não há tabela de preço.
6. **CTA ainda sem destino** — o botão novo também é `type="button"`. `wa.me` é a Sprint 5.
7. **LinkedIn só no rodapé** — é o contato da copy. Não entra menu no header.
8. **Palavras fora da copy** — a landing não usa júnior, sênior nem senioridade. O pilar segue como Experiência.
9. **Git sem Jira** — branches de task: `s4-01-cases`, `s4-02-produtos`, `s4-03-ia`, `s4-04-sobre`, `s4-05-depoimentos`, `s4-06-faq`, `s4-07-fechamento`, cada uma a partir de `s4-credibilidade` atualizada. `s4-credibilidade` nasce de `main`.

## Fora de escopo

- Formulário, validação, API, e-mail, planilha e `wa.me` — Sprint 5.
- GTM, GA4, Meta Pixel, Open Graph, schema.org, sitemap e Lighthouse — Sprint 6.
- Política de privacidade publicada e domínio — Sprint 0.
- Logos oficiais de Neoenergia, Brivia e Auren — os arquivos não estão no repositório.
- Headline alinhada ao texto do anúncio — Sprint 8.
- Dark mode.

## Follow-ups

- [>] **Trocar os retângulos pelos logos reais** — quando os arquivos existirem (card 1).
- [>] **Publicar depoimentos** — quando houver frase autorizada (card 5).
- [>] **Ligar o botão e o formulário** — Sprint 5 (card 7).
