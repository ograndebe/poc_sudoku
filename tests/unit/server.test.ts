import http from 'node:http';
import { createServer } from '../../src/server/server.js';
import type { AddressInfo } from 'node:net';

describe('Teste isolado do servidor', () => {
  it('deve verificar se o método close está disponível', () => {
    const server = createServer();
    console.log('Tipo da instância do servidor:', typeof server);
    console.log('Métodos disponíveis:', Object.keys(server));
    expect(typeof server.close).toBe('function');
  });
});

describe('Servidor HTTP', () => {
  let server: http.Server;
  let port: number;

  beforeAll((done) => {
    server = createServer();
    console.log('Instância do servidor:', server);
    console.log('Métodos disponíveis no servidor:', Object.keys(server));
    server.listen(0, () => {
      port = (server.address() as AddressInfo).port;
      console.log(`Servidor de teste rodando na porta ${port}`);
      done();
    });
  });

  afterAll((done) => {
    if (server && server.close) {
      server.close(() => {
        console.log('Servidor de teste encerrado');
        done();
      });
    } else {
      console.error('Método close não disponível na instância do servidor');
      done();
    }
  });

  it('deve servir a página HTML na rota principal', (done) => {
    http.get(`http://localhost:${port}/`, (res) => {
      expect(res.statusCode).toBe(200);
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        expect(data).toContain('Hello World');
        expect(data).toContain('<div class="msg">');
        done();
      });
    });
  });

  it('deve retornar erro amigável para rota inexistente', (done) => {
    http.get(`http://localhost:${port}/naoexiste`, (res) => {
      expect(res.statusCode).toBe(404);
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        expect(data).toContain('404');
        done();
      });
    });
  });

  it('deve exibir mensagem dinâmica passada via query string', (done) => {
    const mensagem = 'Nova Mensagem';
    http.get(`http://localhost:${port}/?msg=${encodeURIComponent(mensagem)}`, (res) => {
      expect(res.statusCode).toBe(200);
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        expect(data).toContain(mensagem);
        expect(data).toContain('<div class="msg">');
        done();
      });
    });
  });
});

describe('Teste mínimo do servidor HTTP', () => {
  it('deve criar e encerrar um servidor HTTP básico', (done) => {
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('OK');
    });

    server.listen(0, () => {
      const address = server.address();
      console.log('Servidor mínimo rodando em:', address);

      server.close((err) => {
        if (err) {
          console.error('Erro ao encerrar o servidor:', err);
          done(err);
        } else {
          console.log('Servidor mínimo encerrado com sucesso.');
          done();
        }
      });
    });
  });
});
