# Rafael Coelho

**Arquiteto de Software | Full-stack (React, Vue.js, Node.js) | Engenharia assistida por IA (Claude/Cursor)**

Email: devrafaelcoelho@gmail.com · Telefone: (71) 98457-0082 · [LinkedIn](https://www.linkedin.com/in/rafael-coelho-63b75010b/)

---

## RESUMO PROFISSIONAL

Arquiteto de software com mais de 5 anos de experiência desenhando e evoluindo plataformas de missão crítica em setores de energia, educação e fintech. Full-stack por natureza: arquitetura de front-end em React, Vue.js e Angular (modularização de domínios dentro de SPAs, camadas de integração e autenticação centralizadas, design systems multi-marca) e de backend em Node.js, .NET e PostgreSQL (arquitetura em camadas, APIs REST, integrações corporativas). Nos últimos anos, tenho liderado a adoção de engenharia assistida por IA nos times em que atuo e nos meus próprios produtos — usando o Claude (Claude Code, Skills e agentes customizados) e o Cursor como parte do fluxo de arquitetura e desenvolvimento, com seleção estratégica de modelos conforme a complexidade da tarefa. O princípio é sempre o mesmo: usar IA para acelerar a geração de código, dentro de uma arquitetura pensada antes — nunca como substituto dela.

---

## HABILIDADES TÉCNICAS

**Arquitetura & Front-end**
React.js (hooks avançados, Context API, composição de componentes, design de camadas) · Vue.js · Angular (RxJS, módulos com lazy loading) · Vite, CRA · Material UI e construção de Design Systems · React Router · React Hook Form + Yup · State management via Context/hooks customizados (sem Redux) · Vitest, React Testing Library, Jest, Jasmine/Karma

**Backend & Dados**
Node.js (Express) — APIs REST, arquitetura em camadas (routes/controllers/services/repositories), DTOs · PostgreSQL (TypeORM, Joi) · Supabase (Auth, Storage, Edge Functions) · C# / .NET (ASP.NET Core, Clean Architecture) · Integrações corporativas (SAP HANA, Databricks)

**Cloud, DevOps & Segurança**
AWS (Lambda, API Gateway, Cognito) · Azure AD / MSAL (SSO corporativo) · CI/CD (Bitbucket Pipelines, Azure Pipelines) · Docker, nginx, Cloud Run · Autenticação JWT/refresh tokens, hashing client-side (Argon2id/WebAssembly)

**IA aplicada à Engenharia de Software**
Claude Code como par de arquitetura e desenvolvimento no dia a dia · Criação de Skills e agentes customizados para automatizar fluxos internos (padronização, revisão, documentação) · Seleção estratégica de modelos conforme a tarefa — Opus para decisões arquiteturais complexas, Sonnet para desenvolvimento contínuo em escala, Haiku para tarefas de alto volume e baixa latência · Cursor e GitHub Copilot como apoio complementar · ChatGPT API · OCR para automação de processamento documental

---

## EXPERIÊNCIA PROFISSIONAL

### RI Tecnologia — Arquiteto de Software
**Jan 2026 – Atual · Remoto · Brasil**

Consultor de tecnologia alocado como arquiteto de software em clientes enterprise, respondendo pelas decisões de arquitetura front-end, definição de padrões entre squads e adoção de fluxos de desenvolvimento assistidos por IA (Claude Code, Skills e agentes) para acelerar entrega e padronização.

#### Cliente: Neoenergia — Plataformas SAI e PAM
*Mai 2026 – Atual*

**Stack:** React 19, Vite, Material UI (MUI X Charts), React Router v7, React Hook Form + Yup, Context API

- Arquitetei a estrutura do front-end como domínios independentes (SAI, PAM, Geral) dentro de uma única SPA — um modelo de "modular monolith" que permite que módulos de negócio distintos evoluam sem exigir uma divisão em monorepo.
- **SAI** (Sistema de Apoio à Integração): módulo financeiro/operacional — CAPEX/OPEX, provisões, contratos e pedidos.
- **PAM** (Painel de Alarmes de Medição): módulo de monitoramento operacional em tempo real — visão master-detail de alarmes por distribuidora e subestação, fluxo de triagem (reconhecer / sob análise / em manutenção) e dashboards de volume, situação e evolução de aberturas.
- Desenhei uma camada de cliente HTTP centralizada com interceptação global de sessão expirada, eliminando tratamento de erro de autenticação duplicado em cerca de 25 serviços do projeto.
- Implementei um sistema de temas dinâmico por marca, com persistência da preferência do usuário e reconstrução do tema em tempo de execução, desacoplando identidade visual da lógica dos componentes.
- Introduzi hashing client-side (Argon2id via WebAssembly) para senhas antes do envio à API e um modelo de permissões granular por módulo, controlando ações de CRUD por rota.
- Configurei o pipeline de build multi-estágio (Vite → nginx) para deploy em Cloud Run, com resolução de URL de API sensível ao ambiente.

#### Cliente: Auren — Módulo SPIA (Planejamento de Indisponibilidade de Ativos), Plataforma iOperations
*Jul 2026 – Atual*

**Stack:** Angular, TypeScript, Angular Material · .NET, Entity Framework Core, SQL Server

- Atuo no front-end e no backend do módulo SPIA, responsável pelo planejamento e controle de eventos de indisponibilidade (manutenções/paradas) de ativos de geração de energia.
- Desenvolvi os fluxos de cadastro e pesquisa de eventos, com visão Gantt cronológica plurianual para identificar sobreposições de intervenções entre diferentes plantas.
- Implementei recursos de exportação/importação de dados em massa e geração de relatórios, além do controle de permissões por perfil e log de auditoria das alterações.
- No backend (.NET, arquitetura em camadas de domínio), participei da regra de negócio de detecção de conflito de período entre eventos, evitando sobreposição de manutenções no mesmo ativo.

---

### MB | Mercado Bitcoin — Desenvolvedor Front-end
**Jan 2024 – Dez 2025 · Remoto · Brasil**

**Stack:** Vue.js, React.js, Material UI, APIs REST, AWS (API Gateway), CI/CD (GitHub Actions), Cursor

- Arquitetei e liderei a reconstrução da boleta de resgate em Vue.js, melhorando a conversão e a jornada do investidor.
- Implementei os fluxos de depósito via Pix com integração aos serviços de AWS.
- Estruturei a cobertura de testes unitários e de integração (Vitest) para componentes e fluxos críticos do produto.
- Contribuí na definição dos pipelines de CI/CD no GitHub para deploy automatizado do front-end.
- Utilizei o Cursor como par de desenvolvimento assistido por IA para acelerar entrega e padronizar código entre squads.
- Evoluí o Design System em React/Material UI, estabelecendo padrões de componentização adotados por múltiplos times.

---

### Digita — Desenvolvedor Full Stack
**Jan 2021 – Dez 2023 · Salvador/BA · Presencial**

**Stack:** React · Node.js e C# / .NET · PostgreSQL · AWS · OCR · Bitbucket CI/CD

- Projetei APIs REST em C# (.NET) e Node.js com PostgreSQL para operações e PDVs, aplicando Clean Architecture no backend.
- Implementei integrações com OCR para validação automática de documentos.
- Arquitetei o sistema de venda de ingressos online (React + .NET/Node.js) com gateways de pagamento via Pix e cartão, incluindo a interface oficial de vendas do maior camarote do Carnaval de Salvador.
- Estruturei a autenticação com JWT e refresh tokens e os pipelines de CI/CD no Bitbucket.

---

## PROJETOS PRÓPRIOS

### Pet Sampas — Sócio & Arquiteto de Software
**Em produção · Expansão para App Store/Google Play em andamento**

**Stack:** React 19, TanStack Start (SSR), TanStack Router/Query, Supabase (PostgreSQL, Auth, Storage, Edge Functions), Stripe, Capacitor

- Sócio e arquiteto de uma plataforma SaaS de prontuário e carteira digital para pets (vacinas, histórico médico, controle financeiro e assistente de IA), com assinatura recorrente via Stripe.
- Arquitetei a separação entre acesso direto do cliente ao banco (sob Row Level Security no Supabase) e funções de servidor dedicadas para operações sensíveis, incluindo webhook de pagamento com verificação de assinatura.
- Conduzindo a extensão da aplicação web para iOS e Android via Capacitor, reaproveitando a mesma base de código React para publicação nas lojas.

### Estoque Inteligente — Fundador & Arquiteto de Software
**Hospedado · Em fase final antes do lançamento público**

**Stack:** React 18, Vite, Node.js/Express, PostgreSQL, PWA

- Idealizei e arquitetei um sistema de controle inteligente de estoque doméstico (PWA), com cadastro de itens via leitura de nota fiscal (NF-e), voz ou foto, processado por IA.
- Estruturei o backend em camadas (routes → middlewares → controllers → services → repositories), com DTOs para contrato de API e validação via Joi.
- Implementei adaptadores de raspagem para portais fiscais de diferentes estados (SP, MG, BA, RJ, PR), com fallback automático para leitura por foto quando o estado não é suportado.
- Projetei um fluxo obrigatório de rascunho → pré-visualização → confirmação para qualquer escrita no estoque, evitando que uma resposta equivocada da IA corrompa os dados — além de limites diários de uso de IA para controle de custo.
- Cobertura de mais de 20 scripts de teste automatizado e documentação de API via Swagger.

---

