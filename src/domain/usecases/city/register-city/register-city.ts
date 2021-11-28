import { left, right } from '../../../../shared/either';
import { City } from '../../../entities/city/city';
import { CityData } from '../../../entities/city/city-data';
import { RegisterAlreadyPersisted } from '../../errors/register-already-persisted';
import { CityRepository } from '../../port/city-repository';
import { IRegisterCity } from './register-city-interface';
import { RegisterCityResponse } from './register-city-response';

export class RegisterCity implements IRegisterCity {
  constructor(private readonly cityRepository: CityRepository) {}

  async execute(cityData: Omit<CityData, 'id'>): Promise<RegisterCityResponse> {
    const cityOrError = City.create(cityData);

    if (cityOrError.isLeft()) {
      return left(cityOrError.value);
    }
    const city = cityOrError.value;

    const cityAlreadyExists = await this.cityRepository.findCityByName(
      city.name,
    );

    if (cityAlreadyExists) {
      return left(new RegisterAlreadyPersisted(city.name));
    }

    const cityId = await this.cityRepository.persistCity(city);

    return right(cityId);
  }
}
