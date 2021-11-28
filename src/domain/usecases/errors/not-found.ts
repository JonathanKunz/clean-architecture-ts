export class NotFound extends Error implements DomainError {
  constructor(register: string) {
    super(`Register: ${register} not found!`);
    this.name = 'NotFound';
  }
}
