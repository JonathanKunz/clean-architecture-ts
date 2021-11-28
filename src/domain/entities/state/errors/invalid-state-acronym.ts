export class InvalidStateAcronym extends Error implements DomainError {
  constructor(acronym: string) {
    super(`Invalid Acronym ${acronym}! acronym must have two characters`);
    this.name = 'InvalidStateAcronym';
  }
}
