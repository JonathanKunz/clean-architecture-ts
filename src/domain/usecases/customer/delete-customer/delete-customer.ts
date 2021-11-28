import { left, right } from '../../../../shared/either';
import { NotFound } from '../../errors/not-found';
import { CustomerRepository } from '../../port/customer-repository';
import { IDeleteCustomer } from './delete-customer-interface';
import { DeleteCustomerResponse } from './delete-customer-response';

export class DeleteCustomer implements IDeleteCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(id: number): Promise<DeleteCustomerResponse> {
    const customerExist = await this.customerRepository.findCustomerById(id);

    if (!customerExist) {
      return left(new NotFound(String(id)));
    }

    const customerId = await this.customerRepository.deleteCustomerById(id);

    return right(customerId);
  }
}
