import { HelloWorld } from '../../src/business/HelloWorld.js';

describe('HelloWorld', () => {
  it('deve retornar a mensagem padrão', () => {
    const hw = new HelloWorld();
    expect(hw.getMessage()).toBe('Hello World');
  });

  it('deve retornar mensagem customizada', () => {
    const hw = new HelloWorld('Oi, TypeScript!');
    expect(hw.getMessage()).toBe('Oi, TypeScript!');
  });
});
