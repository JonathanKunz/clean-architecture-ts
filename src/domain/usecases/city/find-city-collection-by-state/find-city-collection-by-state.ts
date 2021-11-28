import { left, right } from '../../../../shared/either';
import { NotFound } from '../../errors/not-found';
import { CityRepository } from '../../port/city-repository';
import { IFindCityCollectionByState } from './find-city-collection-by-state-interface';
import { FindCityCollectionByStateResponse } from './find-city-collection-by-state-response';

export class FindCityCollectionByState implements IFindCityCollectionByState {
  constructor(private readonly cityRepository: CityRepository) {}

  async execute(state: string): Promise<FindCityCollectionByStateResponse> {
    const cityCollection = await this.cityRepository.findCityCollectionByState(
      state,
    );

    if (!cityCollection) {
      return left(new NotFound(state));
    }

    return right(cityCollection);
  }
}
