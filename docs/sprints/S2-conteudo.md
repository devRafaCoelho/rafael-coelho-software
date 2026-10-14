# Conteúdo, copy e wireframe — (branch `s2-conteudo`)

**Projeto:** LP Rafael Coelho — Arquitetura de Software  
**Fonte:** `docs/LP_SoftwareHouse_Documentacao.md` (Sprint 2, seções 2, 2.1, 3.3, 3.4 e 3.7) e `docs/CV_Rafael_Coelho_v2.md`  
**Ambiente de teste:** `http://localhost:3000/wireframe` (app em `web/`). O teste da copy roda com `node --test` em `docs/s2/`.  
**Status geral:** concluído

## Índice

- [Conteúdo](#conteúdo)

---

## Conteúdo

Âncora: `docs/s2/copy.md` (ainda inexistente) e `web/src/app/wireframe/page.tsx` (ainda inexistente). A home da Sprint 1 permanece a página-espécime.

- [x] **1. Copy final das seções**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a landing ainda não tem texto fechado. Sem esse documento, a Sprint 3 codaria seção por seção no escuro.
  - **Onde:** `docs/s2/copy.md` e `docs/s2/copy.test.mjs` (ambos ainda inexistentes).
  - **Fix:** escrever a copy das 12 seções da seção 3.3, nesta ordem: Header, Hero, Dor, 3 pilares, Como funciona, Cases (Neoenergia, Brivia, Auren e, em faixa separada, Pet Sampas e Estoque Inteligente), Diferencial de IA, Sobre, Depoimentos, FAQ, CTA final, Footer. Headline provisória do Hero: "Arquitetura de software sênior, entregue na velocidade da IA." CTA de ação: "Falar no WhatsApp". Sem preço. Cases no formato problema → decisão de arquitetura → resultado, só com fatos de `docs/CV_Rafael_Coelho_v2.md` e da seção 2.1. Pet Sampas no ar em `petsampas.com.br`, apps aguardando aprovação da Apple e do Google. Estoque Inteligente hospedado e em reimplementação. Depoimentos: seção presente e vazia, sem frase atribuída a cliente. FAQ: preço, prazo, contrato PJ, propriedade do código, suporte pós-entrega. Formulário do CTA final só como lista de campos (nome, empresa, e-mail, WhatsApp, mensagem, faixa de orçamento, consentimento LGPD), sem implementação. Criar `docs/s2/copy.test.mjs` com `node:test` garantindo as 12 seções, a headline exata, os dois status de produto e a ausência de fornecedor de modelo. Branch desta task: `s2-01-copy`, a partir de `s2-conteudo`.
  - **Precedente:** seções 2, 2.1 e 3.3 de `docs/LP_SoftwareHouse_Documentacao.md`.
  - **Aceite:** `node --test docs/s2/copy.test.mjs` passa, e o arquivo não cita Claude, ChatGPT, OpenAI, Anthropic nem Cursor.
  - **Validação:** mock
  - **Suite / spec:** `docs/s2/copy.test.mjs` (criar)
  - **Figma / ref:** n/a
  - **Teste:**
    1. Rodar `node --test docs/s2/copy.test.mjs` na raiz do repositório.
    2. Confirmar que o comando termina sem falha.
    3. Confirmar no resultado que a headline e os status de Pet Sampas e Estoque Inteligente foram verificados.
  - **Done:** `docs/s2/copy.md` com as 12 seções e `docs/s2/copy.test.mjs`.
  - **Resultado:** pass. `node --test docs/s2/copy.test.mjs` — 4 testes, 4 pass. A headline e os status de Pet Sampas e Estoque Inteligente foram verificados. Nenhuma ocorrência de fornecedor de modelo.
  - **Achados:** —

- [x] **2. Wireframe do funil**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a ordem das seções só existe no documento de produto. Falta uma página baixa fidelidade para ver o funil em 375px antes de construir a landing.
  - **Onde:** `web/src/app/wireframe/page.tsx` (ainda inexistente). A home `web/src/app/page.tsx` não muda.
  - **Fix:** uma rota `/wireframe` com as 12 seções empilhadas, na ordem da copy, usando o texto de `docs/s2/copy.md`. Visual baixo: blocos, rótulos de seção e um único botão de ação na cor CTA `#E35D2F`. Logos de Neoenergia, Brivia e Auren como retângulos com o nome, sem arquivo de logo. Formulário desenhado, sem envio. Sem menu, sem link de rede social no meio da página. Link de produto, se aparecer, só dentro do card do case. Branch desta task: `s2-02-wireframe`, a partir de `s2-conteudo` atualizada.
  - **Precedente:** ordem da seção 3.3 e paleta da Sprint 1 em `web/src/app/globals.css`.
  - **Aceite:** em 375px e no desktop, `/wireframe` mostra a headline provisória, as 12 seções nessa ordem, e o botão "Falar no WhatsApp" na cor `#E35D2F`.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Subir o dev server em `web/` e abrir `http://localhost:3000/wireframe`.
    2. No desktop, conferir a headline, a ordem das seções e o botão CTA.
    3. Repetir a leitura em 375px.
  - **Done:** Rota `/wireframe` lê `docs/s2/copy.md` e empilha as 12 seções. Botões de ação, retângulos dos clientes e campos do formulário sem envio.
  - **Resultado:** pass. No desktop (1347px) e em 375px há 12 seções na ordem da copy, a headline provisória e o botão "Falar no WhatsApp" em `rgb(227, 93, 47)`.
  - **Achados:** a copy gravada com CRLF não separava os blocos; o wireframe passou a aceitar as duas quebras de linha.

- [x] **3. Foto, logo e favicon no wireframe**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** o wireframe ainda não mostra quem é a pessoa nem a marca. A foto e o logo já existem na raiz e não entraram na página.
  - **Onde:** `docs/rafael-coelho-sobre.png`, `docs/rafael-coelho-logo.png`, `web/public/` e a seção Sobre de `web/src/app/wireframe/page.tsx`. Favicon em `web/src/app/`.
  - **Fix:** usar `docs/rafael-coelho-sobre.png` como foto da seção Sobre (não gerar outra). Usar `docs/rafael-coelho-logo.png` no header. Gerar um avatar quadrado simplificado a partir dessa foto e usá-lo como favicon do app. Não publicar o avatar no WhatsApp. Branch desta task: `s2-03-assets`, a partir de `s2-conteudo` atualizada.
  - **Precedente:** seção 3.4 de `docs/LP_SoftwareHouse_Documentacao.md` (foto real na seção Sobre; avatar derivado para favicon).
  - **Aceite:** em `/wireframe`, o header mostra o logo, a seção Sobre mostra a foto, e a aba do browser deixa de usar o ícone padrão do Next.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000/wireframe`.
    2. Confirmar o logo no header e a foto na seção Sobre.
    3. Confirmar que o favicon da aba não é o ícone padrão do Next.
  - **Done:** `web/public/logo.png` no header, `web/public/sobre.png` na seção Sobre e `web/src/app/icon.png` no lugar do favicon padrão.
  - **Resultado:** pass. Em 375px o header mostra o logo, a seção Sobre mostra a foto e o link do ícone da aba aponta para `icon.png`.
  - **Achados:** `rafael-coelho-logo.png` é um retrato recortado, não um wordmark. O favicon é um recorte quadrado de 64px da foto de Sobre.

---

## Decisões tomadas

1. **Headline provisória** — "Arquitetura de software sênior, entregue na velocidade da IA." A regra de message match com o anúncio continua valendo na Sprint 8; esta frase destrava a copy agora.
2. **CTA** — o texto de todo botão de ação é "Falar no WhatsApp". A cor continua `#E35D2F`.
3. **IA sem fornecedor** — a copy não cita Claude, ChatGPT, OpenAI, Anthropic nem Cursor.
4. **Depoimentos** — a seção existe e fica vazia. Nenhuma frase é inventada.
5. **Logos de cliente** — Neoenergia, Brivia e Auren aparecem como nome em um retângulo. Os arquivos de logo não estão no repositório e não bloqueiam esta sprint.
6. **Foto** — `docs/rafael-coelho-sobre.png` é a foto da seção Sobre. Não há sessão fotográfica nova nesta sprint.
7. **Wireframe no app, não no Figma** — a rota `/wireframe` é a baixa fidelidade que dá para validar em 375px. A home da Sprint 1 não vira a landing.
8. **Paleta** — permanecem papel `#F4F1EA`, tinta `#14181F`, primária `#163A45` e CTA `#E35D2F`.
9. **Formulário** — só os campos desenhados. Envio, API e WhatsApp com mensagem pronta ficam na Sprint 5.
10. **Git sem Jira** — branches de task: `s2-01-copy`, `s2-02-wireframe`, `s2-03-assets`, cada uma a partir de `s2-conteudo` atualizada. `s2-conteudo` nasce de `main`.

## Fora de escopo

- Seções finais da landing, animação e troca da home — Sprint 3.
- Formulário funcional, e-mail e planilha — Sprint 5.
- GTM, GA4, Meta Pixel, meta tags e Core Web Vitals — Sprint 6.
- Domínio, e-mail corporativo, WhatsApp Business e política de privacidade — Sprint 0.
- Arquivos oficiais de logo de Neoenergia, Brivia e Auren — não estão no repositório.
- Anúncios e a headline definitiva alinhada a eles — Sprint 8.
- Dark mode.

## Follow-ups

- [>] **Trocar a headline provisória quando os anúncios existirem** — Sprint 8 (card 1).
- [>] **Substituir os retângulos pelos logos reais** — quando os arquivos existirem (card 2).
- [>] **Levar o avatar ao WhatsApp Business** — Sprint 0 (card 3).
