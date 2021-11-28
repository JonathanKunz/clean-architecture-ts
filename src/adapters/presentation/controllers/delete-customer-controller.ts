import { HttpRequest, HttpResponse } from './ports/http';
import { badRequest, serverError, ok } from './helpers/http-helper';
import { DeleteCustomer } from '../../../domain/usecases/customer/delete-customer/delete-customer';
import { DeleteCustomerResponse } from '../../../domain/usecases/customer/delete-customer/delete-customer-response';

export class DeleteCustomerController {
  private readonly deleteCustomer: DeleteCustomer;

  constructor(deleteCustomer: DeleteCustomer) {
    this.deleteCustomer = deleteCustomer;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.body.id;
      const deleteCustomerResponse: DeleteCustomerResponse =
        await this.deleteCustomer.execute(id);

      if (deleteCustomerResponse.isLeft()) {
        return badRequest(deleteCustomerResponse.value);
      }

      return ok(deleteCustomerResponse.value);
    } catch (error) {
      console.log(error);
      return serverError('internal');
    }
  }
}
