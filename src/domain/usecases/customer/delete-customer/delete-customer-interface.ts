import { DeleteCustomerResponse } from './delete-customer-response';

export interface IDeleteCustomer {
  execute: (id: number) => Promise<DeleteCustomerResponse>;
}
