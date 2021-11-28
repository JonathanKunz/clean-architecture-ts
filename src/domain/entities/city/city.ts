import { Either, left, right } from '../../../shared/either';
import { InvalidEmptyValues } from '../errors/invalid-empty-values';
import { State } from '../state/state';
import { CityData } from './city-data';

export class City {
  constructor(public readonly name: string, public readonly state: string) {}

  static create(
    cityData: Omit<CityData, 'id'>,
  ): Either<InvalidEmptyValues, City> {
    if (!cityData.state || !cityData.name) {
      return left(new InvalidEmptyValues());
    }

    const stateOrError = State.create(cityData.state);

    if (stateOrError.isLeft()) {
      return left(stateOrError.value);
    }
    return right(new City(cityData.name, stateOrError.value));
  }
}
