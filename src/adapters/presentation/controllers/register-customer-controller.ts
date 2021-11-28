import { HttpRequest, HttpResponse } from './ports/http';
import { badRequest, serverError, ok } from './helpers/http-helper';
import { RegisterCustomer } from '../../../domain/usecases/customer/register-customer/register-customer';
import { RegisterCustomerResponse } from '../../../domain/usecases/customer/register-customer/register-customer-response';

export class RegisterCustomerController {
  private readonly registerCustomer: RegisterCustomer;

  constructor(registerCustomer: RegisterCustomer) {
    this.registerCustomer = registerCustomer;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const customerData = {
        id: httpRequest.body.id,
        name: httpRequest.body.name,
        male: httpRequest.body.male,
        birthDate: httpRequest.body.birthDate,
        age: httpRequest.body.age,
        cityId: httpRequest.body.cityId,
      };
      const registerCustomerResponse: RegisterCustomerResponse =
        await this.registerCustomer.execute(customerData);
      if (registerCustomerResponse.isLeft()) {
        return badRequest(registerCustomerResponse.value);
      }

      return ok(registerCustomerResponse.value);
    } catch (error) {
      console.log(error);
      return serverError('internal');
    }
  }
}
