# QA, conformidade e publicação — (branch `s7-lancamento`)

**Projeto:** LP Rafael Coelho — Arquitetura de Software  
**Fonte:** `docs/LP_SoftwareHouse_Documentacao.md` (Sprint 7)  
**Ambiente de teste:** `http://localhost:3000` para as tasks 1 a 3. A task 4 usa a URL de produção da Vercel do projeto `rafael-coelho-software`.  
**Status geral:** em execução

## Índice

- [Publicação](#publicação)

---

## Publicação

Âncora: `web/src/components/landing/footer.tsx` (a política ainda é a frase "link reservado") e `web/src/components/landing/lead-form.tsx` (o checkbox não aponta para página nenhuma). O domínio `rafaelcoelhosoftware.com.br` não está registrado.

- [x] **1. Política de privacidade no ar**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** o rodapé avisa que o link ainda não existe. O formulário pede consentimento sem mostrar o que acontece com os dados.
  - **Onde:** `web/src/app/privacidade/page.tsx` (ainda inexistente), `web/src/components/landing/footer.tsx`, `web/src/components/landing/lead-form.tsx`, `web/src/app/sitemap.ts` e a frase do rodapé em `docs/s2/copy.md`.
  - **Fix:** página `/privacidade` com o título "Política de privacidade". O texto diz, nesta ordem: o formulário coleta nome, empresa, e-mail, WhatsApp, mensagem e faixa de orçamento, mais o consentimento; o uso é responder o pedido; os dados não são vendidos; o botão de WhatsApp abre conversa fora do site; se a medição estiver ligada, os eventos não levam nome, e-mail nem telefone; a exclusão é pedida pelo mesmo WhatsApp. Sem preço, sem gmail pessoal e sem domínio inventado. O rodapé troca a frase reservada por um link "Política de privacidade" para `/privacidade`. O formulário ganha o mesmo link ao lado do checkbox. O botão Enviar continua desabilitado enquanto o checkbox estiver desmarcado. O sitemap inclui `/privacidade`.
  - **Precedente:** o checkbox de `web/src/components/landing/lead-form.tsx` e o `sitemap.ts` da sprint 6.
  - **Aceite:** em `/privacidade` o texto cobre coleta, uso e exclusão. O rodapé e o formulário apontam para essa rota. Enviar segue desabilitado sem o checkbox.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000/privacidade` e confirmar as frases de coleta, de que os dados não são vendidos e de exclusão pelo WhatsApp.
    2. Voltar à home, rolar até o rodapé e abrir "Política de privacidade". A URL fica `/privacidade`.
    3. No formulário, confirmar o mesmo link e que Enviar começa desabilitado.
  - **Done:** página `/privacidade`, link no rodapé e no formulário, rota no sitemap
  - **Resultado:** pass browser — a página cobre coleta, "Não vendo esses dados." e exclusão pelo WhatsApp; o rodapé abriu `/privacidade`; Enviar começa desabilitado e o formulário também tem o link
  - **Achados:** o overlay de hidratação do browser continua apontando `data-cursor-ref`, agora em `pain.tsx`

- [x] **2. A página publicada segue a copy**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a copy em `docs/s2/copy.md` já foi revisada, mas o texto que o visitante lê está nos componentes. Uma frase proibida pode ter ficado só na tela.
  - **Onde:** `web/src/lib/public-copy.test.ts` (ainda inexistente), lendo `web/src/components/landing/*.tsx`, `web/src/app/page.tsx`, `web/src/app/layout.tsx` e `web/src/app/privacidade/page.tsx`.
  - **Fix:** o teste exige a headline "Transforme o que trava na sua operação com inteligência artificial.", a frase "Os apps aguardam aprovação da Apple e do Google." e "em reimplementação". Falha se aparecer júnior, junior, sênior, senior, senioridade, Claude, ChatGPT, OpenAI, Anthropic ou Cursor. Falha se a frase "link reservado" continuar na página.
  - **Precedente:** `docs/s2/copy.test.mjs`.
  - **Aceite:** `node --experimental-strip-types --test src/lib/public-copy.test.ts`, rodado em `web/`, passa.
  - **Validação:** mock
  - **Suite / spec:** `web/src/lib/public-copy.test.ts` (criar)
  - **Figma / ref:** n/a
  - **Teste:**
    1. Rodar `node --experimental-strip-types --test src/lib/public-copy.test.ts` em `web/`.
    2. Confirmar que a headline e os dois status de produto passam.
    3. Confirmar que o teste barra as palavras proibidas e a frase "link reservado".
  - **Done:** guarda em `web/src/lib/public-copy.test.ts`
  - **Resultado:** pass mock — 3 testes; headline e os dois status passam; palavras proibidas e "link reservado" não aparecem nos componentes
  - **Achados:** —

- [~] **3. Leitura no desktop e no celular**
  - **Jira:** n/a
  - **Camada:** front
  - **Problema:** a página precisa caber no celular e o funil precisa continuar clicável antes de ir a público. Não há iPhone nem Android físico neste ambiente.
  - **Onde:** a home em `http://localhost:3000`, viewport desktop e 375×812.
  - **Fix:** nos dois viewports, a página não cria scroll horizontal. O botão "Falar no WhatsApp" do header aparece. O item "Preço" do FAQ abre e mostra "Não há tabela pública." Enviar começa desabilitado. Se um desses pontos quebrar, corrigir o componente responsável e repetir o viewport que falhou. Não redesenhar as seções que já passam.
  - **Precedente:** o header e o FAQ já validados nas sprints 3 e 4.
  - **Aceite:** desktop e 375 px passam os quatro pontos, sem scroll horizontal.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Abrir `http://localhost:3000` no desktop. Confirmar que `scrollWidth` não passa de `clientWidth`, que o WhatsApp do header está visível, que Preço abre "Não há tabela pública." e que Enviar está desabilitado.
    2. Repetir no viewport 375×812.
    3. Se algo quebrar, corrigir e repetir só o viewport que falhou.
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

- [ ] **4. Produção na URL da Vercel**
  - **Jira:** n/a
  - **Camada:** full-stack
  - **Problema:** o domínio final ainda não existe. A página pública hoje é a implantação da Vercel, e ela precisa estar na `main` desta sprint.
  - **Onde:** projeto Vercel `rafael-coelho-software`, time `rafaels-projects-f9ecaf31`, branch de produção `main`.
  - **Fix:** publicar a `main` (o push da sprint dispara a implantação). Abrir a URL de produção e confirmar a headline e a rota `/privacidade`. Não registrar domínio e não apontar DNS.
  - **Precedente:** a preview da sprint 1 e o projeto já ligado na Vercel.
  - **Aceite:** a URL de produção responde a headline e `/privacidade` com status 200.
  - **Validação:** browser
  - **Suite / spec:** n/a
  - **Figma / ref:** n/a
  - **Teste:**
    1. Confirmar a implantação de produção da `main` no projeto `rafael-coelho-software`.
    2. Abrir a URL e ler a headline.
    3. Abrir `/privacidade` nessa mesma origem e confirmar status 200 e o título "Política de privacidade".
  - **Done:** *(execução)*
  - **Resultado:** *(pass/fail mock ou o que foi visto no browser)*
  - **Achados:** *(— | …)*

---

## Decisões tomadas

1. **Texto da política** — descreve só o que o site faz de fato: campos do formulário, resposta ao pedido, WhatsApp, eventos sem dado pessoal e pedido de exclusão pelo WhatsApp. Não é parecer jurídico. Não cita gmail pessoal nem o domínio ainda não registrado.
2. **Consentimento** — o checkbox continua obrigatório. O link da política fica ao lado, sem precisar ser clicado para liberar o Enviar.
3. **Celular** — a prova desta sprint é o viewport 375×812 no browser do agente, mais o desktop. iOS Safari e Android Chrome físicos ficam para quando houver aparelho.
4. **Domínio** — a publicação desta sprint é a URL de produção da Vercel. `rafaelcoelhosoftware.com.br` continua fora até existir registro.
5. **Git sem Jira** — branches `s7-01-privacidade`, `s7-02-copy`, `s7-03-qa`, `s7-04-producao`, cada uma a partir de `s7-lancamento` atualizada. `s7-lancamento` nasce de `main`.

## Fora de escopo

- Registrar domínio e apontar DNS — Sprint 0.
- Revisão jurídica da política — quando houver advogado.
- iPhone e Android físicos.
- Campanha de anúncio — Sprint 8.
- Dark mode.

## Follow-ups

- [>] **Apontar o domínio** — quando `rafaelcoelhosoftware.com.br` estiver registrado, trocar a URL de produção (card 4).
- [>] **Revisar a política com advogado** — o texto atual descreve o fluxo real, sem parecer jurídico (card 1).
- [>] **Repetir o funil num iPhone e num Android** — o card 3 só cobre o viewport do agente.
