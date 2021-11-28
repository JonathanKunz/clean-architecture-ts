import { FindCustomerController } from '../../adapters/presentation/controllers/find-customer-controller';
import { FindCustomer } from '../../domain/usecases/customer/find-customer-by-name/find-customer';
import InMemoryCustomerRepository from '../../external/repositories/in-memory-customer-repository';

export const makeFindCustomerController = (): FindCustomerController => {
  const inMemoryCustomerRepository = InMemoryCustomerRepository;
  const findCustomerUseCase = new FindCustomer(inMemoryCustomerRepository);
  const findCustomerController = new FindCustomerController(
    findCustomerUseCase,
  );
  return findCustomerController;
};
