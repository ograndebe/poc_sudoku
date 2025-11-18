
# Implementation Plan: Projeto Node com TypeScript, página HTML básica e Hello World

**Branch**: `001-node-ts-basic-page` | **Date**: 2025-11-18 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-node-ts-basic-page/spec.md`

**Note**: Este plano segue a constituição do projeto: Clean Code, testes unitários obrigatórios, mocks responsáveis, mínima dependência.

## Summary

Criar uma aplicação Node.js com TypeScript puro, servindo uma página HTML básica e exibindo "Hello World" gerado por uma classe TypeScript, com separação clara de responsabilidades (server, business, presentation). O foco é simplicidade, sem frameworks extras, apenas dependências essenciais para rodar TypeScript e Node.

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 20.x  
**Primary Dependencies**: Nenhuma além de TypeScript, Node.js (vanilla). Sem frameworks web, sem libs extras.  
**Storage**: N/A (não há persistência)  
**Testing**: Jest (mínimo, apenas para testes unitários, sem plugins extras)  
**Target Platform**: Qualquer sistema com Node.js 20+  
**Project Type**: single (aplicação simples, separação por camadas em src/)  
**Performance Goals**: Página servida em <200ms localmente  
**Constraints**: Mínimo de dependências, código legível, separação de responsabilidades, cobertura total de testes unitários  
**Scale/Scope**: MVP, 1 página, 1 classe principal, estrutura para expansão futura


## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Todo código deve ser legível, simples, sem duplicidade, com nomes claros e responsabilidade única (Clean Code).
- Toda unidade de código deve possuir testes unitários automatizados (Testes Unitários Obrigatórios).
- Mocks só podem ser utilizados se validam comportamento real, proibido mocks inúteis (Uso Responsável de Mocks).
- Projeto deve usar o mínimo de dependências, apenas TypeScript, Node.js e Jest para testes.
- Pull Requests só podem ser aprovados se todos os testes passarem e houver revisão de código.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.

ios/ or android/
directories captured above]
```text
src/
├── server/         # Camada de servidor Node.js puro
├── business/       # Lógica de negócio (ex: classe HelloWorld)
├── presentation/   # HTML/CSS básico

tests/
└── unit/           # Testes unitários (Jest)
```

**Structure Decision**: Projeto single, com separação explícita de camadas em src/: server, business, presentation. Testes unitários em tests/unit. Não há frontend separado, nem frameworks. Estrutura mínima para MVP e expansão futura.

```text
src/
├── server/         # Camada de servidor Node.js puro
├── business/       # Lógica de negócio (ex: classe HelloWorld)
├── presentation/   # HTML/CSS básico

tests/
└── unit/           # Testes unitários (Jest)
```

**Structure Decision**: Projeto single, com separação explícita de camadas em src/: server, business, presentation. Testes unitários em tests/unit. Não há frontend separado, nem frameworks. Estrutura mínima para MVP e expansão futura.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
