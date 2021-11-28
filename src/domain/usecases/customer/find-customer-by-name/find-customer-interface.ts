import { FindCustomerResponse } from './find-customer-response';

export type Params = { name: string | undefined; id: number | undefined };

export interface IFindCustomer {
  execute: (params: Params) => Promise<FindCustomerResponse>;
}
