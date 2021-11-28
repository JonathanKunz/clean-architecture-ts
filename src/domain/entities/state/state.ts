import { Either, left, right } from '../../../shared/either';
import { InvalidEmptyValues } from '../errors/invalid-empty-values';
import { InvalidStateAcronym } from './errors/invalid-state-acronym';

export class State {
  static create(
    stateAcronym: string,
  ): Either<InvalidEmptyValues | InvalidStateAcronym, string> {
    if (!stateAcronym) {
      return left(new InvalidEmptyValues());
    }

    if (stateAcronym.length !== 2) {
      return left(new InvalidStateAcronym(stateAcronym));
    }

    return right(stateAcronym);
  }
}
