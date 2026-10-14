# Guia de fluxo — planejamento e execução de tasks

Documento de referência para detalhar e executar trabalho de sprint com ajuda do agente (Claude / Cursor).

**Ritmo:** planejar um projeto → executar → só então planejar o próximo.  
**Arquivo de tasks:** um `.md` por projeto/sprint (nunca misturar projetos no mesmo arquivo).

---

## Princípios

- Investigar o **código real** antes de escrever a task (arquivos, linhas, precedente no sistema, specs existentes).
- Cada task deve ser implementável **sem perguntas pendentes** — se houver dúvida, decidir e registrar em **Decisões**.
- Toda task declara **como será validada**: `mock` (sem browser) ou `browser` (ambiente real logado).
- Na execução, o agente **implementa e valida** cada task. Se o teste falhar ou ficar bloqueado, **registra o Resultado** e **pode seguir** para a próxima task do lote (não travar o fluxo).
- Preferir padrão já existente no projeto a inventar solução nova.
- Artefatos compartilhados: default = **mudança local / override**; alteração global só com decisão explícita.
- Escopo fechado: o que não está no `.md` não entra na execução (salvo bug que bloqueia o aceite — aí vira **Achado** + follow-up).
- Indicar a **camada** de cada task: `front` | `back` | `full-stack`.

---

## Estratégia de validação (simples)

Não depender de ambiente E2E/CI preparado. Escolher no planejamento:

| Validação | Quando | Como o agente prova na execução |
|-----------|--------|----------------------------------|
| `mock` | Aceite coberta por lógica isolável + serviços HTTP mockados / spec unitária | Rodar ou criar/estender teste unitário (Karma, Jest, etc.) **ou** verificar por inspeção + teste unitário pontual do que foi mockável |
| `browser` | Aceite depende de sessão real, API real, MFA/login, dado de DEV/tst que mock mentiria | Usar o **browser do agente** no ambiente indicado (usuário já logado quando o app exigir). Roteiro curto só desta task |

**Regras de escolha**
- Se mock cobre o aceite → `mock` (não abrir browser).
- Se mock não prova o aceite → `browser`.
- Não exigir suite E2E, `storageState`, conta QA sem MFA, etc., como pré-requisito do fluxo.
- Browser: só o fluxo da task (2–4 passos); não regressão ampla.
- Se browser estiver indisponível / não logado / VPN fora → `[!]` + o que falta; não inventar que passou.

---

## Planejamento

### Objetivo
Gerar/atualizar o `.md` de tasks do projeto atual a partir da lista bruta da sprint, com investigação no código.

### Deve fazer
1. Confirmar projeto, branch e ambiente de teste (URL, conta, API, VPN se houver).
2. Considerar só as tasks deste projeto / lote acionável.
3. Para cada item: investigar código + preencher o card, **incluindo Jira (KEY/URL)** e **Validação (`mock` | `browser`)**.
4. Em **Teste**, escrever o roteiro/cenários objetivos da validação escolhida.
5. Se existir spec unitária útil para `mock`, apontar o arquivo; se não existir e `mock` for a escolha, indicar “criar/estender spec …”.
6. Agrupar por módulo; Fora de escopo; Decisões; índice se 4+ seções.
7. **Não implementar código** — só o `.md`.

### Não deve fazer
- Detalhar backlog além do lote atual.
- Misturar projetos.
- Prosa longa no plano.
- Marcar `[x]` no planejamento.
- Deixar Validação implícita (“testar depois”) sem escolher `mock` ou `browser`.
- Omitir **Jira** quando a fonte trouxer KEY/URL (não inventar KEY se não houver).

---

## Execução

### Objetivo
Implementar **e validar** cada task do `.md`, uma de cada vez, na ordem.

### Ordem de execução
1. Preferir uma task por vez (`[~]` → implementar → validar → atualizar o card).
2. Em seguida pode ir à próxima `[ ]` do lote, **mesmo se** a anterior falhou no teste ou ficou `[!]`.
3. Marcar status com honestidade: `[x]` só se validou com sucesso; falha de teste ≠ travar o lote.

### Deve fazer
1. Ler o card (Jira, Fix, Aceite, Validação, Teste, Camada).
2. Implementar o mínimo para o aceite.
3. Validar:
   - **`mock`:** rodar/criar/estender o teste unitário indicado; Resultado = pass/fail do comando (ou evidência objetiva).
   - **`browser`:** abrir o ambiente, seguir o roteiro de **Teste** no browser do agente; Resultado = o que foi observado.
4. Atualizar `Done`, `Resultado`, `Achados` e status.
5. Se o teste falhou: registrar em Resultado/Achados; corrigir na hora só se for rápido e óbvio; senão seguir e deixar follow-up se precisar.
6. Bug extra no caminho: corrigir só se bloquear o aceite da task atual; senão Achados + follow-up.
7. Bloqueio (não logado, VPN, deploy) → `[!]` + o que falta; pedir ao usuário o que for externo (ex.: completar MFA / deixar sessão logada). Pode seguir para outra task.

### Status

| Marca | Significado |
|-------|-------------|
| `[ ]` | A fazer |
| `[~]` | Em andamento (implementando ou validando) |
| `[x]` | Implementado **e** validado com sucesso |
| `[!]` | Código pronto ou parcial; validação bloqueada ou falhou sem correção fechada |
| `[>]` | Follow-up / fora do lote |

---

## Front vs back

| | Front | Back |
|---|--------|------|
| **Validação típica** | `mock` (component/service) ou `browser` (fluxo + API real) | `mock` (unit) ou `browser`/chamada real se precisar do ambiente |
| **Cuidado extra** | shared UI → override local | contrato público → decisão explícita |

`full-stack`: validar o que o aceite exige (mock nas pontas isoláveis + browser no fluxo integrado, se necessário). Só `[x]` quando a validação do card passar.

---

## Template do arquivo de tasks

```markdown
# <Título da entrega> — (branch `<nome-da-branch>`)

**Projeto:** <nome>  
**Fonte:** <Jira / PDF / Figma / lista>  
**Ambiente de teste:** <URL, conta, API, VPN se houver>  
**Status geral:** em planejamento | em execução | concluído

## Índice
- [Módulo A](#módulo-a)

---

## <Módulo / domínio>

Âncora: `path/Arquivo` (+ relacionados).

- [ ] **1. <Título curto orientado a resultado>**
  - **Jira:** <KEY-123> (ou URL do issue; `n/a` se não houver)
  - **Camada:** front | back | full-stack
  - **Problema:** o que está errado / o que falta (1–2 frases).
  - **Onde:** `arquivo:linhas` (e outros se necessário).
  - **Fix:** o que mudar (técnico, direto).
  - **Precedente:** arquivo/padrão do sistema (se houver).
  - **Aceite:** condição objetiva de “pronto”.
  - **Validação:** mock | browser
  - **Suite / spec:** `path/arquivo.spec.ts` (se Validação = mock; existente | criar | estender) — ou `n/a`
  - **Figma / ref:** <url> (se houver)
  - **Teste:** (roteiro da validação — 2–4 passos)
    1. …
    2. …
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

---

## Decisões tomadas

1. **<Tema>** — decisão e por quê (inclui escolha mock vs browser quando não for óbvia).

## Fora de escopo

- <item> — motivo

## Follow-ups

- [>] **…** — origem (task X)
```

---

## Forma do card

**Planejamento:** até **Teste**, com **Validação** (`mock` | `browser`) definida.  
**Execução:** código + validação; Done / Resultado / Achados / status; depois pode seguir à próxima mesmo com falha registrada.

---

## Checklist — fechar planejamento

- [ ] Um projeto só neste arquivo
- [ ] Branch + ambiente de teste no cabeçalho
- [ ] Cada task com **Jira** + Camada + Onde + Fix + Aceite + **Validação** + Teste
- [ ] Spec apontada quando Validação = mock
- [ ] Precedentes apontados quando existirem
- [ ] Fora de escopo + Decisões
- [ ] Nenhum `[x]` prematuro

## Checklist — fechar uma task na execução

- [ ] Aceite atendido no código (ou gap documentado)
- [ ] Validação do card executada (`mock` ou `browser`) com Resultado registrado
- [ ] Status `[x]` ou `[!]` documentado — não deixar `[~]` ao “terminar”
- [ ] Falha de teste não impede seguir o lote; fica registrada no card
- [ ] Achados extras sem scope creep
