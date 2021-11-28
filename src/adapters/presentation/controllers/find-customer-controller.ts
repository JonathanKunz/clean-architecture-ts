import { HttpRequest, HttpResponse } from './ports/http';
import { badRequest, serverError, ok } from './helpers/http-helper';
import { RegisterCityResponse } from '../../../domain/usecases/city/register-city/register-city-response';
import { FindCustomer } from '../../../domain/usecases/customer/find-customer-by-name/find-customer';

export class FindCustomerController {
  private readonly findCustomer: FindCustomer;

  constructor(findCustomer: FindCustomer) {
    this.findCustomer = findCustomer;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const name = httpRequest.body.name;
      const id = httpRequest.body.id;
      const findCustomer: RegisterCityResponse =
        await this.findCustomer.execute({ name, id: Number.parseInt(id) });
      if (findCustomer.isLeft()) {
        return badRequest(findCustomer.value);
      }

      return ok(findCustomer.value);
    } catch (error) {
      console.log(error);
      return serverError('internal');
    }
  }
}
