import { CityData } from '../../domain/entities/city/city-data';
import { CityRepository } from '../../domain/usecases/port/city-repository';
import { lastIdWithIncrement } from './helpers/incrementId';

class InMemoryCityRepository implements CityRepository {
  private cityCollection: CityData[] = [];

  async persistCity(cityData: Omit<CityData, 'id'>) {
    const id = { id: lastIdWithIncrement(this.cityCollection) };
    this.cityCollection.push({ ...id, ...cityData });
    return id;
  }

  async findCityByName(name: string) {
    const city = this.cityCollection.find(e => e.name === name);
    return city;
  }

  async findCityCollectionByState(state: string) {
    const cityCollection = this.cityCollection.filter(e => e.state === state);
    if (!cityCollection.length) return undefined;
    return cityCollection;
  }
}

export default new InMemoryCityRepository();
