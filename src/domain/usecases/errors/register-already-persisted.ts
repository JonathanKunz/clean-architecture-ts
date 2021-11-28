export class RegisterAlreadyPersisted extends Error implements DomainError {
  constructor(register: string) {
    super(`Register: ${register} already persisted`);
    this.name = 'RegisterAlreadyPersisted';
  }
}
