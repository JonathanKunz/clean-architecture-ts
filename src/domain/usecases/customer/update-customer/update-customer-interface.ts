import { CustomerData } from '../../../entities/customer/customer-data';
import { UpdateCustomerResponse } from './update-customer-response';

export interface IUpdateCustomer {
  execute: (customerData: CustomerData) => Promise<UpdateCustomerResponse>;
}
