import { HttpRequest, HttpResponse } from './ports/http';
import { badRequest, serverError, ok } from './helpers/http-helper';
import { RegisterCity } from '../../../domain/usecases/city/register-city/register-city';
import { RegisterCityResponse } from '../../../domain/usecases/city/register-city/register-city-response';

export class RegisterCityController {
  private readonly registerCity: RegisterCity;

  constructor(registerCity: RegisterCity) {
    this.registerCity = registerCity;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const cityData = {
        name: httpRequest.body.name,
        state: httpRequest.body.state,
      };
      const registerCityResponse: RegisterCityResponse =
        await this.registerCity.execute(cityData);
      if (registerCityResponse.isLeft()) {
        return badRequest(registerCityResponse.value);
      }

      return ok(registerCityResponse.value);
    } catch (error) {
      console.log(error);
      return serverError('internal');
    }
  }
}
