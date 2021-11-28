import { FindCityByNameController } from '../../adapters/presentation/controllers/find-city-by-name-controller';
import { FindCityCollectionByStateController } from '../../adapters/presentation/controllers/find-city-collection-by-state';
import { FindCityByName } from '../../domain/usecases/city/find-city-by-name/find-city-by-name';
import { FindCityCollectionByState } from '../../domain/usecases/city/find-city-collection-by-state/find-city-collection-by-state';
import InMemoryCityRepository from '../../external/repositories/in-memory-city-repository';

export const makeFindCityCollectionByStateController =
  (): FindCityCollectionByStateController => {
    const inMemoryCityRepository = InMemoryCityRepository;
    const findCityUseCase = new FindCityCollectionByState(
      inMemoryCityRepository,
    );
    const findCityCollectionByStateController =
      new FindCityCollectionByStateController(findCityUseCase);
    return findCityCollectionByStateController;
  };
