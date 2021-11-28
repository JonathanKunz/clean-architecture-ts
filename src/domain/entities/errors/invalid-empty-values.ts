export class InvalidEmptyValues extends Error implements DomainError {
  constructor() {
    super(`Check the parameters passed to the entity!`);
    this.name = 'InvalidEmptyValues';
  }
}
