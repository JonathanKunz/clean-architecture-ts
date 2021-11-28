import { left, right } from '../../../../shared/either';
import { NotFound } from '../../errors/not-found';
import { CustomerRepository } from '../../port/customer-repository';
import { IFindCustomer, Params } from './find-customer-interface';
import { FindCustomerResponse } from './find-customer-response';

export class FindCustomer implements IFindCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(params: Params): Promise<FindCustomerResponse> {
    if (params.name) {
      return await this.findByName(params.name);
    }

    return await this.findById(params.id);
  }

  private async findById(id: number): Promise<FindCustomerResponse> {
    const customer = await this.customerRepository.findCustomerById(id);
    if (!customer) {
      return left(new NotFound(String(id)));
    }

    return right(customer);
  }

  private async findByName(name: string): Promise<FindCustomerResponse> {
    const customer = await this.customerRepository.findCustomerByName(name);

    if (!customer) {
      return left(new NotFound(name));
    }

    return right(customer);
  }
}
