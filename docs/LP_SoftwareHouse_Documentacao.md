# Documentação de Produto — Landing Page da Software House

> Baseado no posicionamento definido em `CV_Rafael_Coelho_v2.md`, com um ajuste de mensagem para a LP: **arquitetura de software orientada a IA** (o conceito de IA fica aberto; nenhum fornecedor de modelo entra na copy) e experiência em energia, educação e fintech. Os produtos próprios entram como prova de entrega, não como a oferta da página.

## Índice

0. [Contexto e Objetivo](#0-contexto-e-objetivo)
1. [Decisões que só você pode tomar](#1-decisões-que-só-você-pode-tomar)
2. [Posicionamento & Proposta de Valor](#2-posicionamento--proposta-de-valor)
3. [Especificação Técnica da Página](#3-especificação-técnica-da-página)
4. [Conversão, Analytics & Growth](#4-conversão-analytics--growth)
5. [Infraestrutura de Negócio Necessária](#5-infraestrutura-de-negócio-necessária)
6. [Estrutura em Sprints](#6-estrutura-em-sprints)

---

## 0. Contexto e Objetivo

Transformar a experiência descrita no currículo em uma oferta de serviço formal, com uma landing page (LP) **de propósito único** — não um site institucional — voltada para captar leads via **tráfego pago** (Google Ads e/ou Meta Ads) e converter em conversas comerciais (WhatsApp/formulário).

Princípio norteador: **uma LP de tráfego pago converte quando é rápida, focada em uma única ação e sem distrações.** Todo o documento é escrito em função disso — não é um site "vitrine".

---

## 1. Decisões que só você pode tomar

| Decisão | Definição | Status |
|---|---|---|
| Nome da marca/software house | **Rafael Coelho — Arquitetura de Software** (marca pessoal) | ✅ |
| Domínio | `rafaelcoelho.com.br` está ocupado. Escolher e registrar um domínio disponível antes de e-mail, produção e contas de anúncio. Preferência: `.com.br`. | ⏳ |
| Oferta de serviço | 3 camadas: Diagnóstico de arquitetura (entrada) · Desenvolvimento sob demanda/squad dedicado (principal) · Retainer mensal de evolução contínua (recorrência) | ✅ |
| Modelo de precificação | Sem tabela pública — "sob consulta" via formulário, com pergunta de qualificação de orçamento no form | ✅ |
| Público-alvo prioritário | Não restringir no anúncio/segmentação; prova social ancorada nos setores reais já atendidos (energia, educação, fintech) | ✅ |
| Regime jurídico | CNPJ ME em processo de abertura | ✅ (aguardando formalização) |
| Modelo de atuação | Só você — usar como diferencial ("fala direto com quem entende o problema e constrói a solução", sem repasse, sem gerente de conta). Não usar as palavras júnior, sênior ou senioridade. | ✅ |
| Uso de nomes de clientes | Sem cláusula de confidencialidade — **Neoenergia, Brivia e Auren podem ser citados com nome/logo real** nos cases. | ✅ |

> Como a marca é pessoal (não um nome de estúdio genérico), o CNPJ ME pode operar com nome fantasia "Rafael Coelho — Arquitetura de Software" ou equivalente; não há necessidade de registrar uma segunda marca comercial separada.

---

## 2. Posicionamento & Proposta de Valor

**Pilares de mensagem** (os mesmos do currículo, para consistência de marca):

1. **Arquitetura de Software** — não entrega só interface, entrega estrutura que escala e não vira dívida técnica.
2. **Arquitetura orientada a IA** — a IA entra no desenho do sistema e no jeito de construir, para acelerar a entrega sem abrir mão de controle, revisão e qualidade. A copy não cita fornecedor nem modelo: o cliente compra a arquitetura, e a ferramenta de IA pode mudar.
3. **Experiência** — já resolveu problemas reais em setores regulados e de alta exigência (energia, educação, fintech), e também tira produto próprio do zero até produção. Na copy, o nome do pilar é Experiência.

**Diferencial de modelo de atuação (atuação solo):** transformar "é só uma pessoa" em vantagem, não desvantagem — "você fala direto com quem entende o problema e constrói a solução, sem repasse no meio e sem gerente de conta traduzindo o que você pediu." Esse é um argumento forte contra o principal receio do público de software houses tradicionais (equipe trocada, comunicação em camadas).

**Oferta de serviço (estrutura de 3 camadas, sem preço público):**

| Camada | O que é | Papel no funil |
|---|---|---|
| Diagnóstico de arquitetura | Análise pontual de um sistema/decisão técnica existente | Oferta de entrada, baixo atrito, gera a primeira conversa |
| Desenvolvimento sob demanda / squad dedicado | Construção de produto, MVP ou feature | Oferta principal, maior ticket |
| Retainer mensal de evolução contínua | Alocação recorrente para evoluir um produto já em produção | Receita recorrente, mesmo modelo já validado com Neoenergia/Brivia via RI Tecnologia |

Preço não aparece na LP — a CTA leva a uma conversa, e o formulário inclui uma pergunta de qualificação de orçamento (ver seção 3.7) para filtrar sem espantar lead.

**Sugestões de headline para o Hero** (validar tom com a marca escolhida):

- "Transforme o que trava na sua operação com inteligência artificial."

**Regra de ouro de copy para tráfego pago:** a headline da LP precisa **espelhar o texto do anúncio** (message match) — decida a headline só depois de esboçar os anúncios do Sprint 8.

### 2.1 Prova em produtos próprios

Estes dois produtos entram na LP como case de arquitetura. O status publicado tem de ser o real. Nenhum dos dois substitui os cases enterprise.

| Produto | O que prova | Status para a copy | Onde vive |
|---|---|---|---|
| **Pet Sampas** | SaaS de prontuário e carteira digital do pet (saúde, rotina, gastos, memórias) com assistente de IA sobre o histórico do animal. Arquitetura com acesso do cliente ao banco sob regras de segurança e operações sensíveis (pagamento, e-mail) só no servidor. Mesma base web estendida para iOS e Android. | No ar em `petsampas.com.br`. Apps **aguardando aprovação** da Apple e do Google. Não dizer que já está nas lojas. | `C:\Users\rafac\Documents\pet-sampas` |
| **Estoque Inteligente** | PWA de estoque doméstico: entrada por texto, voz, foto ou nota fiscal, com IA. A escrita no estoque passa por rascunho → revisão → confirmação, para uma resposta errada da IA não corromper o dado. API em camadas. | **Já hospedado**, ainda utilizável, e **entrando em reimplementação**. Na LP, apresentar como produto no ar em evolução de arquitetura — não como lançamento fechado. | `C:\Users\rafac\Documents\estoque-inteligente` |

---

## 3. Especificação Técnica da Página

### 3.1 Stack recomendada: **Next.js** (não React puro/CRA/Vite)

| Critério | Next.js | React puro (Vite/CRA) |
|---|---|---|
| SEO (indexação por Google Ads Quality Score e orgânico) | Nativo via SSR/SSG | Exige configuração extra (pré-render, meta tags client-side ficam invisíveis para alguns crawlers) |
| Performance/Core Web Vitals | `next/image`, `next/font`, code-splitting automático | Precisa configurar manualmente |
| API Route para o formulário de contato | Nativa (`app/api/contact/route.ts`) | Precisa de backend separado |
| Deploy | 1-click na Vercel, com preview por PR | Precisa de config extra para SSR |
| Curva de aprendizado adicional | Baixa (você já domina React) | — |

**Decisão: Next.js 14+ (App Router) + TypeScript.** É a escolha correta para uma LP que depende de SEO, velocidade de carregamento e captação de lead via formulário/API — exatamente os pontos fracos de um SPA React puro.

### 3.2 Stack de UI complementar

- **Tailwind CSS** — velocidade de estilização e consistência de design tokens.
- **shadcn/ui** (Radix por baixo) — componentes acessíveis prontos (botão, dialog, input, accordion para o FAQ).
- **Framer Motion** — para a "fluidez" pedida (transições de entrada por scroll, micro-interações no CTA).
- **lucide-react** — ícones.
- **React Hook Form + Zod** — mesma dupla já usada nos seus projetos (Neoenergia/Brivia), consistência de stack pessoal.

### 3.3 Estrutura de seções da página

Ordem pensada para tráfego pago (funil de convicção, não navegação livre):

1. **Header minimalista** — logo + 1 CTA (ex: "Falar no WhatsApp"). Sem menu extenso: **cada link de saída é uma fuga de conversão.**
2. **Hero** — headline + subheadline + CTA principal + faixa de logos dos clientes reais (Neoenergia, Brivia, Auren) logo abaixo, como prova social imediata.
3. **Dor/Problema** — o que dói no cliente hoje (retrabalho, dívida técnica, prazos, dependência de freelancer sem arquitetura).
4. **Solução / 3 Pilares** — Arquitetura, IA, Experiência (cards com 1 frase de prova cada).
5. **Como funciona** — 3-4 passos do processo comercial (diagnóstico → proposta → build → entrega), reduz objeção de "como funciona a contratação".
6. **Cases/Portfolio** — duas faixas, na mesma estrutura problema → decisão de arquitetura → resultado:
   - **Clientes:** Neoenergia, Brivia e Auren, com nome e logo reais. A faixa de logos fica logo abaixo do Hero.
   - **Produtos próprios:** Pet Sampas e Estoque Inteligente. Servem de prova de que a arquitetura sai do papel e chega em produção. Não são a oferta da LP e não competem com o CTA (falar / pedir diagnóstico). Link externo, se existir, fica contido no card do case.
7. **Diferencial de IA** — explicação simples (sem jargão e sem nome de fornecedor) de como uma arquitetura orientada a IA acelera a entrega sem perder qualidade: a IA propõe, a arquitetura limita o que pode ser gravado, e uma pessoa revisa antes de confirmar.
8. **Sobre** — **foto profissional real** (não o avatar ilustrado — ver seção 3.4) + bio curta em 1ª pessoa, reforçando o diferencial de atuação solo ("fala direto com quem arquiteta e constrói") e os 3 pilares. É a seção que fecha a confiança de "quem é essa pessoa" antes do FAQ/CTA final — importante justamente por ser uma marca pessoal, não uma equipe anônima.
9. **Depoimentos/prova social** (se existirem; senão, deixar seção pronta para inserir depois — não inventar depoimento).
10. **FAQ** — objeções reais: preço, prazo, contrato PJ, propriedade do código, suporte pós-entrega.
11. **CTA final** — formulário + WhatsApp, repetido do Hero.
12. **Footer** — contato, redes sociais, link para política de privacidade.

### 3.4 Diretrizes de design

- **Mobile-first**: mais de 70% do clique de anúncio (Google/Meta) chega via celular. Desenhar primeiro para 375px de largura.
- Paleta: 1 cor primária de marca + 1 neutra escura + 1 neutra clara + 1 cor de destaque para CTA (alto contraste, sempre a mesma cor em todos os botões de ação).
- Tipografia: 1 fonte de destaque (headlines) + 1 fonte de texto corrido, via `next/font` (Google Fonts self-hosted, sem impacto de terceiros na performance).
- Dark mode: opcional, não é prioridade para uma LP de conversão — só implementar se não atrasar o cronograma.

**Foto vs. avatar — dois ativos, dois usos:**

| Ativo | Onde usar | Por quê |
|---|---|---|
| **Foto profissional real** | Seção "Sobre" da LP (item 8 da seção 3.3) | Para venda B2B/enterprise com marca pessoal, o rosto real é o que mais gera confiança — especialmente casado com o argumento "fala direto com quem constrói". Um avatar ilustrado ali enfraqueceria esse sinal. |
| **Avatar ilustrado/animado (tom profissional)**, derivado da foto real | Foto de perfil do WhatsApp Business, favicon, assinatura de e-mail, redes sociais (miniatura) | Nesses formatos pequenos/quadrados, um avatar estilizado funciona melhor visualmente que um recorte de foto, e ainda reforça a identidade visual da marca (pode usar a cor primária como fundo). |

Produzir a foto profissional é pré-requisito do Sprint 2 (conteúdo); o avatar pode ser gerado a partir dela na mesma etapa, já que é uma derivação.

### 3.5 Performance (Core Web Vitals)

Metas mínimas antes de ligar tráfego pago (Google penaliza Quality Score de páginas lentas, encarecendo o CPC):

- **LCP** (Largest Contentful Paint) < 2.5s
- **CLS** (Cumulative Layout Shift) < 0.1
- **INP** (Interaction to Next Paint) < 200ms

Práticas: imagens via `next/image` (formatos AVIF/WebP), fontes via `next/font`, lazy loading de seções abaixo da dobra, sem bibliotecas de animação pesadas carregadas de forma síncrona.

### 3.6 SEO técnico (mesmo sendo LP de tráfego pago, importa para custo de anúncio e tráfego orgânico futuro)

- Meta title/description únicos e alinhados à headline.
- Open Graph + Twitter Card (para quando o link for compartilhado).
- `schema.org` `ProfessionalService` (JSON-LD) com nome, área de atuação, contato.
- `sitemap.xml` e `robots.txt`.
- URL canônica única (evita conteúdo duplicado se houver UTM de campanha).

### 3.7 Formulário de contato / captura de lead

- Campos mínimos: nome, empresa, e-mail, WhatsApp, tipo de projeto/mensagem, **faixa de orçamento estimada** (campo de qualificação, já que não há preço público na página — ver seção 2).
- Validação: React Hook Form + Zod (client) espelhada no schema da API route (server).
- Fluxo de envio sugerido (MVP, sem depender de CRM pago no início):
  1. API route recebe o lead.
  2. Envia e-mail transacional (Resend ou SendGrid) para o e-mail corporativo.
  3. Grava o lead em uma planilha (Google Sheets API) ou Notion, como base simples de CRM.
  4. Redireciona para uma tela de agradecimento com o link direto do WhatsApp já preenchido.
- **LGPD**: checkbox de consentimento obrigatório + link para a política de privacidade antes de habilitar o botão de enviar.

---

## 4. Conversão, Analytics & Growth

### 4.1 Ferramentas

- **Google Tag Manager (GTM)** — camada única de tags, evita hardcode de pixels no código.
- **GA4** — funil de navegação e origem de tráfego.
- **Meta Pixel** — obrigatório se for rodar Meta Ads (Instagram/Facebook).
- **Microsoft Clarity** (gratuito) — heatmap e gravação de sessão para identificar pontos de abandono.

### 4.2 Eventos de conversão a rastrear

- Clique no botão de WhatsApp (Hero e CTA final).
- Envio do formulário de contato (sucesso).
- Scroll depth (50% / 75% / 100%).
- Clique nos cases (indica interesse qualificado).

### 4.3 Checklist de CRO para tráfego pago

- [ ] Página com **um único objetivo de conversão** (sem links para redes sociais no meio da página — isso é fuga de funil).
- [ ] CTA visível acima da dobra e repetido a cada 1-2 seções.
- [ ] Mensagem da LP **igual** à mensagem do anúncio (message match) — evita alto CPC por baixo Quality Score/Relevance Score.
- [ ] Velocidade validada no PageSpeed Insights **antes** de ligar qualquer campanha.
- [ ] Pixel/GTM testados em produção (não só em ambiente de preview) antes do primeiro real de investimento.
- [ ] Prova social visível nos primeiros 2 scrolls.

---

## 5. Infraestrutura de Negócio Necessária

Itens que existem **fora do código**, mas são pré-requisitos para a LP funcionar como motor comercial:

| Item | Necessário? | Observação |
|---|---|---|
| Domínio próprio | Sim | `.com.br` passa mais confiança para cliente nacional; `.dev`/`.com` se mirar cliente internacional |
| E-mail corporativo (Google Workspace ou similar) | Sim | `contato@suamarca.com.br` — nunca gmail pessoal em uma LP profissional |
| WhatsApp Business | Sim | App gratuito é suficiente para o MVP; API oficial (via Meta/BSP) só vale a pena com alto volume de leads |
| CNPJ / regime tributário | Recomendado | Necessário para emitir nota fiscal e formalizar contratos — validar com contador |
| Conta Google Ads Manager | Sim (para Sprint 8) | Criar com antecedência, período de "aquecimento" da conta ajuda |
| Meta Business Manager | Se for usar Instagram/Facebook Ads | Precisa verificação de domínio para o Pixel funcionar corretamente |
| Política de privacidade / termos | Sim | Obrigatório por LGPD por causa do formulário; gerar com ferramenta ou revisão jurídica |
| Ferramenta de agendamento (Cal.com/Calendly) | Recomendado | Reduz fricção de "vamos marcar uma call" |
| LinkedIn (perfil ou página da empresa) | Recomendado | Principal canal de prova social B2B para o seu público (empresas enterprise) |
| CRM leve (Notion/planilha no início, Pipedrive depois) | Recomendado | Não é bloqueante para o lançamento, mas evita perder lead |

---

## 6. Estrutura em Sprints

Cada sprint tem objetivo, tarefas e entregável — pensado para execução sequencial, mas Sprint 0 pode rodar em paralelo ao Sprint 1.

### Sprint 0 — Fundação de Negócio (não-técnico) · ~3-5 dias
**Objetivo:** abrir as contas essenciais sobre a marca já definida (Rafael Coelho — Arquitetura de Software), começando por um domínio `.com.br` disponível.
- Escolher um domínio `.com.br` disponível (o `rafaelcoelho.com.br` está ocupado) e registrá-lo no registro.br, usando o CNPJ ME assim que sair. E-mail, DNS de produção e verificação das contas de anúncio esperam esse nome.
- Criar e-mail corporativo (Google Workspace) no domínio.
- Criar WhatsApp Business com número dedicado.
- Conseguir os logos em alta resolução de Neoenergia, Brivia e Auren para uso na LP.
- Redigir uma política de privacidade base (LGPD).
- Criar (sem publicar) contas no Google Ads Manager e Meta Business Manager.
- **Entregável:** domínio registrado + e-mail e WhatsApp Business ativos + logos dos clientes prontos para uso.

### Sprint 1 — Setup Técnico & Design System · ~1 semana
**Objetivo:** projeto rodando com fundação de design.
- `create-next-app` (App Router, TypeScript, Tailwind).
- Instalar shadcn/ui, Framer Motion, ESLint/Prettier.
- Definir tokens de design (cores, tipografia, espaçamento) em `tailwind.config`.
- Configurar deploy na Vercel (ambiente de preview por PR + produção) e apontar o domínio do Sprint 0.
- **Entregável:** projeto publicado em URL de preview, com design system base aplicado a componentes de exemplo.

### Sprint 2 — Conteúdo, Copywriting & Wireframe · ~1 semana
**Objetivo:** ter o texto e a estrutura visual validados antes de codar seção por seção.
- Escrever copy de cada seção (headline, dores, pilares, cases de cliente, Pet Sampas, Estoque Inteligente, FAQ) com base na seção 2 deste documento. IA descrita como arquitetura, sem citar fornecedor de modelo.
- Wireframe de baixa fidelidade (Figma ou até papel) validando a ordem do funil.
- Produzir a foto profissional real (seção "Sobre") e, a partir dela, gerar o avatar ilustrado em tom profissional (WhatsApp Business, favicon, assinatura de e-mail — ver seção 3.4).
- Selecionar/produzir demais assets visuais (logo, ícones).
- **Entregável:** documento de copy final + wireframe aprovado.

### Sprint 3 — Desenvolvimento das Seções Core · ~1-2 semanas
**Objetivo:** LP navegável com o conteúdo real.
- Implementar Header, Hero, Dor/Problema, Solução (3 pilares), Como Funciona.
- Responsividade mobile-first em todas as seções.
- Animações leves de entrada por scroll (Framer Motion), sem prejudicar performance.
- **Entregável:** LP navegável em preview, ainda sem formulário nem analytics.

### Sprint 4 — Cases, Prova Social & FAQ · ~3-5 dias
**Objetivo:** seções de credibilidade prontas.
- Seção de cases de cliente (Neoenergia, Brivia, Auren, com nome e logo) e seção de produtos próprios (Pet Sampas e Estoque Inteligente, com o status da seção 2.1).
- Estrutura de depoimentos (preenchida se houver, ou pronta para receber depois).
- FAQ com as objeções reais de contratação de dev/consultoria.
- **Entregável:** todas as seções de conteúdo completas.

### Sprint 5 — Formulário de Contato & Integrações · ~1 semana
**Objetivo:** captação de lead 100% funcional.
- Formulário com React Hook Form + Zod.
- API route no Next.js para receber o lead.
- Integração de envio: e-mail transacional (Resend) + gravação em planilha/Notion.
- Botão de WhatsApp com mensagem pré-preenchida (`wa.me/55...?text=...`).
- Tela de agradecimento pós-envio.
- **Entregável:** fluxo de captação de lead testado ponta a ponta.

### Sprint 6 — Analytics, Tracking & SEO Técnico · ~3-5 dias
**Objetivo:** instrumentação pronta para medir e otimizar.
- Instalar GTM; configurar GA4 e Meta Pixel via GTM (não hardcoded).
- Criar eventos de conversão (clique WhatsApp, envio de formulário, scroll depth).
- Meta tags, Open Graph, `schema.org`, `sitemap.xml`, `robots.txt`.
- Rodar Lighthouse/PageSpeed Insights e corrigir gaps de Core Web Vitals.
- **Entregável:** tracking validado em produção + relatório de performance/SEO.

### Sprint 7 — QA, Compliance & Soft Launch · ~3-5 dias
**Objetivo:** publicar em produção com segurança.
- Teste cross-browser e cross-device (iOS Safari, Android Chrome, desktop).
- Revisão de LGPD: consentimento no formulário, link de política de privacidade ativo.
- Revisão final de copy/design.
- Publicação em domínio final de produção.
- **Entregável:** LP no ar, pública, testada.

### Sprint 8 — Lançamento de Tráfego Pago & Monitoramento · contínuo
**Objetivo:** gerar os primeiros leads pagos e criar rotina de otimização.
- Criar anúncios (Google Ads e/ou Meta Ads) com mensagem espelhando a headline da LP.
- Validar que o Pixel/GTM disparam corretamente em produção **antes** de subir orçamento real.
- Definir orçamento de teste inicial e período de aprendizado da campanha.
- Montar rotina semanal: revisão de leads gerados, CPL (custo por lead), ajustes de copy/CTA com base no Clarity/GA4.
- **Entregável:** campanha ativa + processo de acompanhamento semanal definido.

---

## Próximos passos imediatos

Todas as decisões da seção 1 estão fechadas. Iniciar Sprint 0 e Sprint 1 em paralelo.
