// Classe de negócio para mensagem Hello World
export class HelloWorld {
  private message: string;
  constructor(message: string = 'Hello World') {
    this.message = message;
  }
  getMessage(): string {
    return this.message;
  }
}
