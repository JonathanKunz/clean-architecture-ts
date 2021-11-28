import { CityData } from '../../entities/city/city-data';
import { Id } from './repository';

export interface CityRepository {
  persistCity: (city: Omit<CityData, 'id'>) => Promise<Id>;
  findCityByName: (name: string) => Promise<CityData | undefined>;
  findCityCollectionByState: (state: string) => Promise<CityData[] | undefined>;
}
