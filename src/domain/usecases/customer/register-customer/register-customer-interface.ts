import { CustomerData } from '../../../entities/customer/customer-data';
import { RegisterCustomerResponse } from './register-customer-response';

export interface IRegisterCustomer {
  execute: (customerData: CustomerData) => Promise<RegisterCustomerResponse>;
}
