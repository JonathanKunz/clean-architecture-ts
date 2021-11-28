import { UpdateCustomerController } from '../../adapters/presentation/controllers/update-customer-controller';
import { UpdateCustomer } from '../../domain/usecases/customer/update-customer/update-customer';
import InMemoryCustomerRepository from '../../external/repositories/in-memory-customer-repository';

export const makeUpdateCustomerController = (): UpdateCustomerController => {
  const inMemoryCustomerRepository = InMemoryCustomerRepository;
  const updateCustomerUseCase = new UpdateCustomer(inMemoryCustomerRepository);
  const updateCustomerController = new UpdateCustomerController(
    updateCustomerUseCase,
  );
  return updateCustomerController;
};
