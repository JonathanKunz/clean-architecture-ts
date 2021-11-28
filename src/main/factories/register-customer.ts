import { RegisterCustomerController } from '../../adapters/presentation/controllers/register-customer-controller';
import { RegisterCustomer } from '../../domain/usecases/customer/register-customer/register-customer';
import InMemoryCustomerRepository from '../../external/repositories/in-memory-customer-repository';

export const makeRegisterCustomerController =
  (): RegisterCustomerController => {
    const inMemoryCustomerRepository = InMemoryCustomerRepository;
    const registerCustomerUseCase = new RegisterCustomer(
      inMemoryCustomerRepository,
    );
    const registerCustomerController = new RegisterCustomerController(
      registerCustomerUseCase,
    );
    return registerCustomerController;
  };
