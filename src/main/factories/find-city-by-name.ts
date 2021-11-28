import { FindCityByNameController } from '../../adapters/presentation/controllers/find-city-by-name-controller';
import { FindCityByName } from '../../domain/usecases/city/find-city-by-name/find-city-by-name';
import InMemoryCityRepository from '../../external/repositories/in-memory-city-repository';

export const makeFindCityByNameController = (): FindCityByNameController => {
  const inMemoryCityRepository = InMemoryCityRepository;
  const findCityUseCase = new FindCityByName(inMemoryCityRepository);
  const findCityByNameController = new FindCityByNameController(
    findCityUseCase,
  );
  return findCityByNameController;
};
