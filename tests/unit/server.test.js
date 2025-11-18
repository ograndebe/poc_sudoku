"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const net_1 = require("net");
const HelloWorld_1 = require("../../src/business/HelloWorld");
const fs_1 = require("fs");
describe('Servidor HTTP', () => {
    let server;
    let port;
    beforeAll((done) => {
        server = require('../../src/server/server');
        port = 3000;
        done();
    });
    afterAll((done) => {
        server.close(done);
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
});
//# sourceMappingURL=server.test.js.map