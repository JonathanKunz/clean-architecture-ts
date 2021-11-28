import { RegisterCityController } from '../../adapters/presentation/controllers/register-city-controller';
import { RegisterCity } from '../../domain/usecases/city/register-city/register-city';
import InMemoryCityRepository from '../../external/repositories/in-memory-city-repository';

export const makeRegisterCityController = (): RegisterCityController => {
  const inMemoryCityRepository = InMemoryCityRepository;
  const registerCityUseCase = new RegisterCity(inMemoryCityRepository);
  const registerCityController = new RegisterCityController(
    registerCityUseCase,
  );
  return registerCityController;
};
