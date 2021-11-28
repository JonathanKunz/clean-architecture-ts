import { HttpRequest, HttpResponse } from './ports/http';
import { badRequest, serverError, ok } from './helpers/http-helper';
import { UpdateCustomer } from '../../../domain/usecases/customer/update-customer/update-customer';
import { UpdateCustomerResponse } from '../../../domain/usecases/customer/update-customer/update-customer-response';

export class UpdateCustomerController {
  private readonly updateCustomer: UpdateCustomer;

  constructor(updateCustomer: UpdateCustomer) {
    this.updateCustomer = updateCustomer;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const customerData = {
        id: httpRequest.body.id,
        name: httpRequest.body.name,
      };
      const updateCustomerResponse: UpdateCustomerResponse =
        await this.updateCustomer.execute(customerData);

      if (updateCustomerResponse.isLeft()) {
        return badRequest(updateCustomerResponse.value);
      }

      return ok(updateCustomerResponse.value);
    } catch (error) {
      return serverError('internal');
    }
  }
}
