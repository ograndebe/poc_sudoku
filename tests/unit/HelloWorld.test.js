"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelloWorld_1 = require("../../src/business/HelloWorld");
describe('HelloWorld', () => {
    it('deve retornar a mensagem padrão', () => {
        const hw = new HelloWorld_1.HelloWorld();
        expect(hw.getMessage()).toBe('Hello World');
    });
    it('deve retornar mensagem customizada', () => {
        const hw = new HelloWorld_1.HelloWorld('Oi, TypeScript!');
        expect(hw.getMessage()).toBe('Oi, TypeScript!');
    });
});
//# sourceMappingURL=HelloWorld.test.js.map