# Sudoku POC Constitution

## Core Principles


### I. Clean Code
O código do projeto deve ser legível, simples, sem duplicidade, com nomes claros e responsabilidade única. Comentários só são permitidos para explicar decisões não óbvias. Código complexo ou confuso é proibido.
**Racional**: Facilita manutenção, onboarding e evolução segura do projeto.


### II. Testes Unitários Obrigatórios
Toda unidade de código (função, classe, módulo) deve possuir testes unitários automatizados. Não é permitido mergear código sem cobertura de testes adequada.
**Racional**: Garante confiabilidade, previne regressões e permite refatoração segura.


### III. Uso Responsável de Mocks
Mocks só podem ser utilizados se validam comportamento real. É proibido mocks que não testam nada ou que apenas simulam dependências sem verificação de resultado. Todo mock deve ser justificado no teste.
**Racional**: Evita testes inúteis e garante que o teste realmente valida o comportamento esperado.



## Requisitos Adicionais
O projeto deve utilizar ferramentas de lint e formatação automática. O padrão de testes unitários deve ser seguido em todos os módulos. Pull Requests só podem ser aprovados se todos os testes passarem e houver revisão de código.


## Fluxo de Desenvolvimento
Todo código novo ou alterado deve passar por revisão obrigatória. É obrigatório validar se os testes cobrem todos os caminhos relevantes, especialmente em casos de uso de mocks. O merge só é permitido após aprovação e sucesso dos testes automatizados.

## Governance

A constituição do projeto prevalece sobre qualquer prática anterior. Alterações exigem documentação, aprovação por consenso e atualização dos templates e artefatos dependentes. Todo Pull Request deve verificar conformidade com os princípios definidos. Revisões periódicas devem ser realizadas a cada 6 meses ou quando houver mudança significativa.

<!--
Sync Impact Report:
Version change: 0.0.0 → 1.0.0
Princípios modificados: todos (template → Clean Code, Testes Unitários, Mocks Responsáveis)
Seções adicionadas: Requisitos Adicionais, Fluxo de Desenvolvimento
Seções removidas: placeholders de princípios e seções extras
Templates requerem atualização: plan-template.md ✅, spec-template.md ✅, tasks-template.md ✅
Follow-up TODOs: TODO(RATIFICATION_DATE): Definir data de ratificação oficial
-->

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-11-18
