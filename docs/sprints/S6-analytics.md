# Analytics, tracking e SEO técnico — (branch `s6-analytics`)

**Projeto:** LP Rafael Coelho — Arquitetura de Software  
**Fonte:** `docs/LP_SoftwareHouse_Documentacao.md` (Sprint 6 e seção 4)  
**Ambiente de teste:** `http://localhost:3000` (app em `web/`). O teste do módulo de analytics roda com `node --experimental-strip-types --test` a partir de `web/`.  
**Status geral:** concluído

## Índice

- [Medição](#medição)

---

## Medição

Âncora: `web/src/app/layout.tsx` (metadata só com título e descrição) e os links "Falar no WhatsApp" em `header.tsx`, `hero.tsx`, `closing.tsx` e `obrigado/page.tsx`. Não existe `dataLayer`, sitemap nem `robots.txt`.

- [x] **1. Contrato do tracking**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** não há um lugar único para o ID do GTM nem para o formato dos eventos. Sem isso, cada botão inventa um nome.
  - **Onde:** `web/src/lib/analytics.ts` e `web/src/lib/analytics.test.ts` (ambos ainda inexistentes).
  - **Fix:** `readGtmId` aceita só o formato `GTM-` seguido de letras maiúsculas e números. Vazio, minúsculo ou com outro caractere devolve `null`. Três eventos, sem nome, e-mail ou telefone no payload: `whatsapp_click` com `local` em `header`, `hero`, `fechamento` ou `obrigado`; `generate_lead` sem campos extras; `scroll_depth` com `percent` 50, 75 ou 100. `scrollMarksToFire(ratio, already)` devolve as marcas ainda não disparadas quando a razão da página passa do limite. 0,5 devolve 50; 0,8 devolve 50 e 75; 1 devolve as três; razão inválida devolve lista vazia.
  - **Precedente:** o teste de `web/src/lib/lead.test.ts` com `node:test`.
  - **Aceite:** `node --experimental-strip-types --test src/lib/analytics.test.ts`, rodado em `web/`, passa.
  - **Validação:** mock
  - **Suite / spec:** `web/src/lib/analytics.test.ts` (criar)
  - **Figma / ref:** n/a
  - **Teste:**
    1. Rodar `node --experimental-strip-types --test src/lib/analytics.test.ts` em `web/`.
    2. Confirmar que `GTM-ABC123` passa e que vazio, `gtm-abc123` e `GTM-abc` falham.
    3. Confirmar as marcas de scroll e que nenhum evento de teste inclui e-mail ou telefone.
  - **Done:** contrato em `web/src/lib/analytics.ts`, teste em `web/src/lib/analytics.test.ts`
  - **Resultado:** pass mock — 3 testes; `GTM-ABC123` passa; vazio, minúsculo e `GTM-abc` falham; scroll 0,5 / 0,8 / 1 devolve as marcas certas
  - **Achados:** —

- [x] **2. GTM e eventos na página**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** o clique no WhatsApp, o envio do formulário e a profundidade da leitura não deixam rastro. GA4 e Pixel ainda não podem ser colados no código porque não existe container.
  - **Onde:** `web/src/components/analytics/google-tag-manager.tsx` e `scroll-depth.tsx` (ainda inexistentes), `web/src/components/landing/whatsapp-link.tsx` (ainda inexistente), `web/src/app/layout.tsx`, `web/src/app/page.tsx`, `web/src/components/landing/lead-form.tsx` e os quatro pontos que hoje montam o link do WhatsApp.
  - **Fix:** o layout monta o GTM só quando `readGtmId(process.env.NEXT_PUBLIC_GTM_ID)` devolve um ID. Sem variável, a página não pede `googletagmanager.com`. O snippet usa `next/script` e o `dataLayer` padrão. GA4 e Meta Pixel não entram no repositório: os dois são tags dentro do container, ouvindo os eventos abaixo. Um componente `WhatsAppLink` substitui os quatro botões e, no clique, envia `whatsapp_click` com o `local` daquele lugar. O formulário envia `generate_lead` só depois do `POST` 200, antes de ir para `/obrigado`. `ScrollDepth` fica só na home e envia cada marca uma vez. O `dataLayer` é criado no clique mesmo sem GTM, para a fila existir antes do container.
  - **Precedente:** `whatsappUrl` em `web/src/lib/lead.ts` e o `POST` de `web/src/components/landing/lead-form.tsx`.
  - **Aceite:** em `http://localhost:3000`, sem `NEXT_PUBLIC_GTM_ID`, não há script do GTM. O clique no WhatsApp do hero empilha `whatsapp_click`. O envio válido empilha `generate_lead` e chega em `/obrigado`. Rolar até o fim empilha `scroll_depth` 100.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e confirmar que o HTML não contém `googletagmanager.com`.
    2. Clicar em "Falar no WhatsApp" no hero e ler `window.dataLayer`: existe um item `whatsapp_click` com `local` `hero`.
    3. Preencher o formulário com dados válidos, marcar o consentimento, enviar e confirmar a URL `/obrigado` com um item `generate_lead` no `dataLayer`.
    4. Voltar à home, rolar até o fim e confirmar um item `scroll_depth` com `percent` 100.
  - **Done:** GTM condicional, `WhatsAppLink` nos quatro convites, `generate_lead` no POST 200 e `ScrollDepth` na home
  - **Resultado:** pass browser — sem `googletagmanager.com` no HTML; clique do hero gravou `whatsapp_click` com `local` `hero`; o fim da página gravou `scroll_depth` 100; o envio chegou em `/obrigado` com `generate_lead` sem campos extras
  - **Achados:** —

- [x] **3. SEO técnico**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a página não declara Open Graph, dado estruturado, sitemap nem robots. Um anúncio que compartilha o link não tem título nem descrição estáveis.
  - **Onde:** `web/src/app/layout.tsx`, `web/src/lib/site.ts`, `web/src/app/sitemap.ts` e `web/src/app/robots.ts` (os três últimos ainda inexistentes).
  - **Fix:** `siteUrl()` usa `NEXT_PUBLIC_SITE_URL` sem barra no fim. Sem essa variável, usa `https://` + `VERCEL_URL`. Sem as duas, usa `http://localhost:3000`. Metadata com `metadataBase` nessa URL, Open Graph `locale` `pt_BR`, `type` `website`, o mesmo título e a mesma descrição já publicados. JSON-LD `ProfessionalService` com o nome "Rafael Coelho — Arquitetura de Software", a descrição, a URL e `areaServed` `BR`. Sem nota, sem preço e sem telefone. `sitemap.xml` lista `/` e `/obrigado`. `robots.txt` libera `/`, bloqueia `/design-system`, `/wireframe` e `/api/`, e aponta o sitemap.
  - **Precedente:** título e descrição atuais de `web/src/app/layout.tsx`.
  - **Aceite:** o HTML de `/` tem `og:title`, `og:description` e o JSON-LD. `/sitemap.xml` cita as duas rotas. `/robots.txt` cita o sitemap e bloqueia `/wireframe`.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` e ler as meta `og:title` e `og:description`, mais o script `application/ld+json`.
    2. Abrir `http://localhost:3000/sitemap.xml` e confirmar `/` e `/obrigado`.
    3. Abrir `http://localhost:3000/robots.txt` e confirmar `Disallow: /wireframe` e a linha do sitemap.
  - **Done:** Open Graph e JSON-LD no layout, `sitemap.ts` e `robots.ts`
  - **Resultado:** pass browser — `og:title` e `og:description` iguais ao texto publicado; JSON-LD `ProfessionalService` sem telefone nem preço; sitemap lista `/` e `/obrigado`; robots bloqueia `/wireframe` e aponta o sitemap
  - **Achados:** —

- [x] **4. Core Web Vitals da home**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a sprint pede a medição de LCP e CLS antes de qualquer anúncio. A home ainda não tem esse número registrado.
  - **Onde:** a home em `http://localhost:3000`. Corrigir só o arquivo que o relatório apontar, se LCP passar de 2,5 s ou CLS passar de 0,1.
  - **Fix:** rodar Lighthouse na home, viewport mobile. Se LCP e CLS estiverem dentro do limite, não mudar layout. Se estourar, corrigir a causa no componente indicado e rodar de novo. Não remover o texto, a foto da seção Sobre nem o formulário para melhorar o número.
  - **Precedente:** hero sem animação, já decidido na sprint 3.
  - **Aceite:** LCP até 2,5 s e CLS até 0,1 na home, com o valor anotado no card.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Rodar Lighthouse em `http://localhost:3000` no viewport mobile.
    2. Anotar LCP e CLS.
    3. Se um dos dois estourar o limite, corrigir e repetir até os dois passarem.
  - **Done:** medição da home no viewport mobile, sem mudança de layout
  - **Resultado:** pass browser — LCP 1894 ms e CLS 0,00, com CPU 4× e Slow 4G. Os dois ficam dentro do limite, então o layout não mudou.
  - **Achados:** a maior parte do LCP é atraso de render (1729 ms), não o download. O relatório estima zero de ganho ao mexer nos pedidos que bloqueiam a renderização.

---

## Decisões tomadas

1. **GTM sem container ainda** — o loader só entra com `NEXT_PUBLIC_GTM_ID` no formato `GTM-XXXX`. Sem a variável, o HTML não chama o Google. GA4 e Meta Pixel são tags do container, não scripts no repositório.
2. **Eventos** — `whatsapp_click` (`local`: header, hero, fechamento, obrigado), `generate_lead` no POST 200, `scroll_depth` em 50, 75 e 100 só na home. Nenhum evento leva dado pessoal.
3. **URL canônica** — `NEXT_PUBLIC_SITE_URL`, senão `VERCEL_URL`, senão `http://localhost:3000`. Não gravar o domínio sugerido enquanto ele não existir.
4. **JSON-LD** — serviço profissional, sem avaliação, preço ou telefone.
5. **Rotas internas** — `/design-system`, `/wireframe` e `/api/` ficam fora do índice.
6. **Git sem Jira** — branches `s6-01-gtm`, `s6-02-eventos`, `s6-03-seo`, `s6-04-lighthouse`, cada uma a partir de `s6-analytics` atualizada. `s6-analytics` nasce de `main`.

## Fora de escopo

- Clique nos cases — a seção 4.2 cita, a sprint 6 não. Os cases não são link.
- Microsoft Clarity — entra na rotina da sprint 8.
- Validar o disparo em produção — sprint 8, quando o container e o domínio existirem.
- Página de política de privacidade — sprint 7.
- Campanha de anúncio e message match — sprint 8.

## Follow-ups

- [>] **Publicar o container** — criar as tags de GA4 e Meta Pixel no GTM ouvindo `whatsapp_click`, `generate_lead` e `scroll_depth`, e gravar `NEXT_PUBLIC_GTM_ID` na Vercel (card 2).
- [>] **Imagem de Open Graph em 1200×630** — o card 3 não usa a foto da seção Sobre porque ela é quadrada e pequena para compartilhamento.
- [>] **Medir de novo em produção** — repetir o Lighthouse na URL final antes do primeiro anúncio (card 4).
