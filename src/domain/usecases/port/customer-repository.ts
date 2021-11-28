import { CustomerData } from '../../entities/customer/customer-data';
import { Id } from './repository';

export interface CustomerRepository {
  persistCustomer: (city: Omit<CustomerData, 'id'>) => Promise<Id>;
  deleteCustomerById: (id: number) => Promise<Id>;
  updateCustomerName: (
    customerData: Omit<CustomerData, 'male' | 'birthDate' | 'age' | 'cityId'>,
  ) => Promise<CustomerData>;
  findCustomerByName: (name: string) => Promise<CustomerData | undefined>;
  findCustomerById: (name: number) => Promise<CustomerData | undefined>;
}
