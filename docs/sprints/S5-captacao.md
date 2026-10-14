# Captação de lead — (branch `s5-captacao`)

**Projeto:** LP Rafael Coelho — Arquitetura de Software  
**Fonte:** `docs/LP_SoftwareHouse_Documentacao.md` (Sprint 5 e seção 3.7) e `docs/s2/copy.md` (CTA final)  
**Ambiente de teste:** `http://localhost:3000` (app em `web/`). O teste do schema e da API roda com `node --experimental-strip-types --test` a partir de `web/`.  
**Status geral:** em execução

## Índice

- [Captação](#captação)

---

## Captação

Âncora: `web/src/components/landing/closing.tsx` (hoje só headline e botão sem destino) e os botões em `header.tsx` e `hero.tsx`. Não existem `react-hook-form`, `zod` nem `web/src/app/api/`.

- [x] **1. Schema do lead**
  - **Jira:** n/a
  - **Camada:** back
  - **Problema:** o formulário e a API ainda não têm um contrato único. Sem isso, o cliente e o servidor validam coisas diferentes.
  - **Onde:** `web/src/lib/lead.ts` e `web/src/lib/lead.test.ts` (ambos ainda inexistentes).
  - **Fix:** schema Zod com nome, empresa, e-mail, WhatsApp, mensagem, faixa de orçamento e consentimento. Faixas fixas, nesta ordem: "Ainda não sei", "Até R$ 15 mil", "De R$ 15 mil a R$ 40 mil", "Acima de R$ 40 mil". Consentimento só passa se for `true`. E-mail inválido e faixa fora da lista falham. Exportar também a URL `https://wa.me/5571984570082` com o texto "Olá, Rafael. Quero conversar sobre o que está travando na minha operação." O número vem de `docs/CV_Rafael_Coelho_v2.md`. Não gravar o gmail pessoal como destino.
  - **Precedente:** campos em `docs/s2/copy.md` (CTA final) e o telefone no CV.
  - **Aceite:** `node --experimental-strip-types --test src/lib/lead.test.ts`, rodado em `web/`, passa.
  - **Validação:** mock
  - **Suite / spec:** `web/src/lib/lead.test.ts` (criar)
  - **Figma / ref:** n/a
  - **Teste:**
    1. Rodar `node --experimental-strip-types --test src/lib/lead.test.ts` em `web/`.
    2. Confirmar que um lead completo passa e que e-mail inválido, faixa desconhecida e consentimento falso falham.
    3. Confirmar que a URL do WhatsApp contém `5571984570082` e o texto da mensagem.
  - **Done:** schema em `web/src/lib/lead.ts`, teste em `web/src/lib/lead.test.ts`
  - **Resultado:** pass mock — 3 testes, e-mail inválido, faixa fora da lista e consentimento falso falham; a URL contém `5571984570082` e a mensagem
  - **Achados:** —

- [x] **2. Formulário no fechamento**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** o fechamento repete a headline e o botão, mas não coleta o lead.
  - **Onde:** `web/src/components/landing/closing.tsx` e um componente cliente `web/src/components/landing/lead-form.tsx` (ainda inexistente). Instalar `react-hook-form`, `zod` e `@hookform/resolvers` em `web/`.
  - **Fix:** abaixo da headline, um formulário com os sete campos do schema. Faixa de orçamento é um `select` com as quatro opções e um placeholder "Faixa de orçamento". Mensagem é `textarea`. Consentimento é checkbox com o texto "Concordo em ser contatado sobre este pedido." O botão "Enviar" usa `bg-cta`, fica desabilitado enquanto o checkbox estiver desmarcado e não envia nesta task (o `onSubmit` só previne o default). O botão "Falar no WhatsApp" permanece nesta seção até a task 4. Erro de e-mail inválido aparece ao tentar enviar com o checkbox marcado.
  - **Precedente:** `Button` em `web/src/components/landing/header.tsx` e o schema de `web/src/lib/lead.ts`.
  - **Aceite:** em `/`, o fechamento mostra os campos, o envio não acontece com o checkbox desmarcado, e um e-mail inválido mostra erro.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e rolar até o fechamento.
    2. Confirmar os campos Nome, Empresa, E-mail, WhatsApp, Mensagem, Faixa de orçamento e o checkbox. O botão Enviar começa desabilitado.
    3. Marcar o checkbox, preencher o e-mail com "nao-e-email" e os outros campos com texto válido, escolher uma faixa e acionar Enviar. Confirmar a mensagem de e-mail inválido e que a URL continua `/`.
  - **Done:** formulário em `web/src/components/landing/lead-form.tsx`, montado no fechamento
  - **Resultado:** pass browser — Enviar começa desabilitado; com o checkbox marcado e e-mail "nao-e-email", a página mostra "E-mail inválido" e permanece em `/`
  - **Achados:** o overlay de hidratação do accordion continua o mesmo da sprint 4, só com `data-cursor-ref` do browser

- [x] **3. API que recebe o lead**
  - **Jira:** n/a
  - **Camada:** back
  - **Problema:** não existe para onde o formulário mandar o pedido. E-mail corporativo e planilha ainda não existem.
  - **Onde:** `web/src/lib/lead.ts` (função `receiveLead`) e `web/src/app/api/contact/route.ts` (ainda inexistente). Estender `web/src/lib/lead.test.ts`.
  - **Fix:** `POST /api/contact` lê JSON e chama `receiveLead`. Payload inválido responde 400. Payload válido responde 200 com `{ ok: true }`. Se `RESEND_API_KEY` e `LEAD_TO_EMAIL` existirem, a entrega chama a API do Resend (`https://api.resend.com/emails`) para esse destinatário. Se `LEAD_WEBHOOK_URL` existir, a entrega também faz POST do lead nesse endereço (planilha ou Notion entram por esse webhook, sem SDK). Sem essas variáveis, a entrega não chama rede e o 200 continua, para o fluxo local funcionar antes do domínio e do e-mail corporativo. O teste mocka `fetch` e prova as três situações: 400, 200 sem rede, 200 com Resend e webhook chamados.
  - **Precedente:** seção 3.7 de `docs/LP_SoftwareHouse_Documentacao.md`.
  - **Aceite:** `node --experimental-strip-types --test src/lib/lead.test.ts` em `web/` passa, incluindo o caso em que Resend e o webhook são chamados.
  - **Validação:** mock
  - **Suite / spec:** `web/src/lib/lead.test.ts` (estender)
  - **Figma / ref:** n/a
  - **Teste:**
    1. Rodar `node --experimental-strip-types --test src/lib/lead.test.ts` em `web/`.
    2. Confirmar falha em payload sem consentimento.
    3. Confirmar que, com as variáveis de ambiente simuladas no teste, `fetch` foi chamado para Resend e para o webhook.
  - **Done:** `receiveLead` e `deliverLead` em `web/src/lib/lead.ts`, rota `POST /api/contact`
  - **Resultado:** pass mock — 6 testes; sem consentimento responde 400; sem variáveis não chama a rede; com Resend e webhook, `fetch` vai para `api.resend.com/emails` e para a URL do webhook
  - **Achados:** o remetente usa `LEAD_FROM_EMAIL` e, sem essa variável, cai em `onboarding@resend.dev` até existir domínio

- [x] **4. WhatsApp com mensagem pronta**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** os botões "Falar no WhatsApp" não abrem conversa.
  - **Onde:** `web/src/components/landing/header.tsx`, `hero.tsx` e `closing.tsx`. A URL sai de `web/src/lib/lead.ts`.
  - **Fix:** cada botão "Falar no WhatsApp" vira um link para a URL exportada, abrindo em nova aba (`target="_blank"` e `rel="noopener noreferrer"`). O texto do botão não muda. A cor continua `bg-cta`. Não criar outros links no header.
  - **Precedente:** a URL definida na task 1.
  - **Aceite:** header, hero e fechamento apontam para `https://wa.me/5571984570082` com o texto da mensagem, e o header não ganha outro link.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000`.
    2. Confirmar que os três links "Falar no WhatsApp" têm o mesmo `href`, com `5571984570082` e o texto da mensagem, e `target="_blank"`.
    3. Confirmar que o header só tem esse link, além da marca que não é link.
  - **Done:** header, hero e fechamento apontam para a URL de `web/src/lib/lead.ts`
  - **Resultado:** pass browser — os três links têm o mesmo `href` com `5571984570082` e a mensagem, `target="_blank"`; o header só tem esse link
  - **Achados:** —

- [ ] **5. Agradecimento depois do envio**
  - **Jira:** n/a
  - **Camada:** full-stack
  - **Problema:** um envio válido não leva a lugar nenhum. A pessoa não sabe se o pedido foi recebido nem tem o atalho da conversa.
  - **Onde:** `web/src/components/landing/lead-form.tsx` e `web/src/app/obrigado/page.tsx` (ainda inexistente).
  - **Fix:** com o checkbox marcado e os campos válidos, o formulário faz POST em `/api/contact`. Resposta 200 navega para `/obrigado`. A página agradece e repete o link do WhatsApp com a mesma URL. Resposta de erro mostra "Não foi possível enviar. Tente de novo ou fale no WhatsApp." e permanece em `/`.
  - **Precedente:** `POST` de `web/src/app/api/contact/route.ts` e a URL de `web/src/lib/lead.ts`.
  - **Aceite:** preencher o formulário com dados válidos leva a `/obrigado`, com o link do WhatsApp. Não há preço na tela.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000`, rolar até o formulário e preencher nome, empresa, e-mail `rafael@example.com`, WhatsApp, mensagem e uma faixa.
    2. Marcar o consentimento e enviar.
    3. Confirmar a URL `/obrigado`, uma frase de agradecimento e o link `wa.me/5571984570082`.
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

---

## Decisões tomadas

1. **Faixas de qualificação** — "Ainda não sei", "Até R$ 15 mil", "De R$ 15 mil a R$ 40 mil", "Acima de R$ 40 mil". Não é tabela de preço. É o campo que a copy já prometia.
2. **WhatsApp** — `5571984570082`, o telefone de `docs/CV_Rafael_Coelho_v2.md`. Mensagem: "Olá, Rafael. Quero conversar sobre o que está travando na minha operação."
3. **E-mail e planilha sem conta ainda** — Resend só dispara com `RESEND_API_KEY` e `LEAD_TO_EMAIL`. Planilha ou Notion entram por `LEAD_WEBHOOK_URL`. Sem essas variáveis o POST válido responde 200 e não chama a rede. O gmail pessoal não é o destino.
4. **Política de privacidade** — o checkbox é o consentimento. O texto da política continua reservado, como no rodapé. Não inventar a página.
5. **Um schema só** — o formulário e a API importam `web/src/lib/lead.ts`.
6. **Git sem Jira** — branches `s5-01-schema`, `s5-02-formulario`, `s5-03-api`, `s5-04-whatsapp`, `s5-05-obrigado`, cada uma a partir de `s5-captacao` atualizada. `s5-captacao` nasce de `main`.

## Fora de escopo

- GTM, GA4, Meta Pixel e evento de conversão — Sprint 6.
- Página de política de privacidade — Sprint 0 / Sprint 7.
- Domínio e e-mail corporativo real — Sprint 0. Esta sprint só deixa o gancho do Resend.
- CRM pago.
- Dark mode.

## Follow-ups

- [>] **Ligar Resend e o webhook** — quando existirem `RESEND_API_KEY`, `LEAD_TO_EMAIL` e `LEAD_WEBHOOK_URL` (card 3).
- [>] **Publicar a política de privacidade** — Sprint 7, no lugar da frase reservada (card 2).
