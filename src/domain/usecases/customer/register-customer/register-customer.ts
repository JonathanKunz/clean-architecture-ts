import { left, right } from '../../../../shared/either';
import { Customer } from '../../../entities/customer/customer';
import { CustomerData } from '../../../entities/customer/customer-data';
import { CustomerRepository } from '../../port/customer-repository';
import { IRegisterCustomer } from './register-customer-interface';
import { RegisterCustomerResponse } from './register-customer-response';

export class RegisterCustomer implements IRegisterCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(
    customerData: Omit<CustomerData, 'id'>,
  ): Promise<RegisterCustomerResponse> {
    const customerOrError = Customer.create(customerData);

    if (customerOrError.isLeft()) {
      return left(customerOrError.value);
    }
    const customer = customerOrError.value;

    const customerId = await this.customerRepository.persistCustomer(customer);

    return right(customerId);
  }
}
