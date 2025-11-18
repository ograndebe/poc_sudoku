# Projeto Node + TypeScript + HTML

Este projeto demonstra uma estrutura básica de servidor Node.js com TypeScript, servindo uma página HTML e exibindo uma mensagem dinâmica via classe TypeScript.

## Estrutura
- `src/server/`: servidor HTTP
- `src/business/`: lógica de negócio (HelloWorld)
- `src/presentation/`: página HTML
- `tests/unit/`: testes unitários

## Como rodar
1. Instale dependências:
   ```sh
   npm install
   ```
2. Compile o projeto:
   ```sh
   npm run build && npm run postbuild
   ```
3. Inicie o servidor:
   ```sh
   npm start
   ```
4. Acesse [http://localhost:3000](http://localhost:3000)

## Testes
Execute:
```sh
npm test
```

## Mensagem dinâmica
Acesse `/` com o parâmetro `msg` para alterar a mensagem:
```
http://localhost:3000/?msg=Nova%20Mensagem
```

## Observações
- Projeto usa ES Modules
- Arquivos estáticos são copiados para `dist` após build
- Separação clara entre camadas
