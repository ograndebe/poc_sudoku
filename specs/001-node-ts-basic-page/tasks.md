# Tasks: Projeto Node com TypeScript, página HTML básica e Hello World

**Input**: Design documents from `/specs/001-node-ts-basic-page/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 Criar estrutura de diretórios src/server, src/business, src/presentation e tests/unit
- [x] T002 Inicializar projeto Node.js com TypeScript (package.json, tsconfig.json)
- [x] T003 [P] Adicionar Jest para testes unitários
- [x] T004 [P] Configurar scripts de build e test no package.json
- [x] T005 [P] Adicionar .gitignore e configuração mínima de lint

---

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T006 [P] Criar arquivo base do servidor em src/server/server.ts
- [x] T007 [P] Criar estrutura de classe HelloWorld em src/business/HelloWorld.ts
- [x] T008 [P] Criar página HTML básica em src/presentation/index.html
- [x] T009 [P] Criar teste unitário para HelloWorld em tests/unit/HelloWorld.test.ts
- [x] T010 [P] Criar teste unitário para servidor em tests/unit/server.test.ts

---

## Phase 3: User Story 1 - Servir página HTML básica (Priority: P1) 🎯 MVP

**Goal**: Servir uma página HTML simples ao acessar a rota principal
**Independent Test**: Acessar a URL principal e verificar exibição da página

- [x] T011 [P] [US1] Implementar lógica de servir index.html no servidor (src/server/server.ts)
- [x] T012 [P] [US1] Testar resposta correta para rota principal (tests/unit/server.test.ts)
- [x] T013 [P] [US1] Implementar resposta de erro amigável para rotas inexistentes
- [x] T014 [P] [US1] Testar resposta de erro para rota inexistente

---

## Phase 4: User Story 2 - Exibir mensagem Hello World via classe TypeScript (Priority: P2)

**Goal**: Exibir "Hello World" gerado por classe TypeScript na página HTML
**Independent Test**: Alterar mensagem na classe e verificar atualização na página

- [x] T015 [P] [US2] Integrar classe HelloWorld à resposta do servidor
- [x] T016 [P] [US2] Exibir mensagem dinâmica no HTML (src/presentation/index.html)
- [x] T017 [P] [US2] Testar alteração de mensagem e exibição correta
- [x] T018 [P] [US2] Testar integração entre business e server

---

## Phase 5: User Story 3 - Estrutura de camadas separadas (Priority: P3)

**Goal**: Garantir separação clara entre server, business e presentation
**Independent Test**: Inspecionar diretórios e dependências

- [x] T019 [P] [US3] Validar dependências entre camadas (nenhuma dependência cruzada indevida)
- [x] T020 [P] [US3] Testar isolamento de cada camada
- [x] T021 [P] [US3] Documentar arquitetura e dependências

---

## Phase N: Polish & Cross-Cutting Concerns

- [x] T022 [P] Refatorar código para máxima legibilidade e simplicidade
- [x] T023 [P] Adicionar comentários explicativos apenas onde necessário
- [x] T024 [P] Revisar cobertura de testes unitários
- [x] T025 [P] Validar que mocks, se usados, testam comportamento real
- [x] T026 [P] Atualizar README e documentação mínima

---

## Dependencies & Execution Order

- Setup (Phase 1) → Foundational (Phase 2) → User Stories (Phase 3, 4, 5) → Polish
- Todas as tarefas marcadas [P] podem ser executadas em paralelo
- Cada fase depende da anterior, mas tarefas dentro da fase podem ser paralelas
- User Stories são independentes e testáveis isoladamente

## Parallel Example: User Story 1

- Implementar lógica de servir index.html e resposta de erro podem ser feitos em paralelo
- Testes unitários podem ser escritos antes da implementação

## Implementation Strategy

- MVP: Completar Setup, Foundational e User Story 1
- Incremental: Adicionar User Story 2 e 3, validando independência
- Refino: Polish & documentação

---

## Notes

- Cada tarefa tem ID, label de paralelismo [P] e label de user story [USx] quando aplicável
- Todas tarefas possuem caminho de arquivo específico
- Testes unitários obrigatórios para todas as unidades
- Mocks só permitidos se validam comportamento real
