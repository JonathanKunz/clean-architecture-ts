import { left, right } from '../../../../shared/either';
import { CustomerData } from '../../../entities/customer/customer-data';
import { NotFound } from '../../errors/not-found';
import { CustomerRepository } from '../../port/customer-repository';
import { IUpdateCustomer } from './update-customer-interface';
import { UpdateCustomerResponse } from './update-customer-response';

export class UpdateCustomer implements IUpdateCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(
    customerData: Omit<CustomerData, 'male' | 'birthDate' | 'age' | 'cityId'>,
  ): Promise<UpdateCustomerResponse> {
    const customerExist = await this.customerRepository.findCustomerById(
      customerData.id,
    );

    if (!customerExist) {
      return left(new NotFound(String(customerData.id)));
    }

    const customerId = await this.customerRepository.updateCustomerName(
      customerData,
    );

    return right(customerId);
  }
}
