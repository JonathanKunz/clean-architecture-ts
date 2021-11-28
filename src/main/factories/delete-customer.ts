import { DeleteCustomerController } from '../../adapters/presentation/controllers/delete-customer-controller';
import { DeleteCustomer } from '../../domain/usecases/customer/delete-customer/delete-customer';
import InMemoryCustomerRepository from '../../external/repositories/in-memory-customer-repository';

export const makeDeleteCustomerController = (): DeleteCustomerController => {
  const inMemoryCustomerRepository = InMemoryCustomerRepository;
  const deleteCustomerUseCase = new DeleteCustomer(inMemoryCustomerRepository);
  const deleteCustomerController = new DeleteCustomerController(
    deleteCustomerUseCase,
  );
  return deleteCustomerController;
};
