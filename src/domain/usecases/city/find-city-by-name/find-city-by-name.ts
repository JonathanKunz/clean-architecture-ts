import { left, right } from '../../../../shared/either';
import { NotFound } from '../../errors/not-found';
import { CityRepository } from '../../port/city-repository';
import { IFindCityByName } from './find-city-by-name-interface';
import { FindCityByNameResponse } from './find-city-by-name-response';

export class FindCityByName implements IFindCityByName {
  constructor(private readonly cityRepository: CityRepository) {}

  async execute(name: string): Promise<FindCityByNameResponse> {
    const city = await this.cityRepository.findCityByName(name);

    if (!city) {
      return left(new NotFound(name));
    }

    return right(city);
  }
}
