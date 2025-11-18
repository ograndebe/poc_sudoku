// Servidor HTTP básico usando ES Modules
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';
import { readFileSync } from 'node:fs';
import { HelloWorld } from '../business/HelloWorld.js';

const PORT = 3000;
// Resolve diretório atual para ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

export function createServer() {
  console.log('Criando servidor HTTP...');
  const server = http.createServer((req, res) => {
    console.log(`Requisição recebida: ${req.method} ${req.url}`);
    // Rota principal: serve HTML e mensagem dinâmica
    if (req.url?.startsWith('/') && req.method === 'GET') {
      const urlObj = new URL(req.url, `http://${req.headers.host}`);
      const customMsg = urlObj.searchParams.get('msg');
      const hello = customMsg ? new HelloWorld(customMsg) : new HelloWorld();
      const html = readFileSync(join(__dirname, '../presentation/index.html'), 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html.replace('{{message}}', hello.getMessage()));
    } else {
      // Resposta para rotas inexistentes
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Página não encontrada</h1>');
    }
  });

  server.on('close', () => {
    console.log('Servidor HTTP foi encerrado.');
  });

  return server;
}

// Execução direta do arquivo principal em ES Modules
if (typeof process !== 'undefined' && import.meta.url === `file://${process.argv[1]}`) {
  const server = createServer();
  server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}
