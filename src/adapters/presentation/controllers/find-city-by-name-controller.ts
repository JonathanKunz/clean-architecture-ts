import { HttpRequest, HttpResponse } from './ports/http';
import { badRequest, serverError, ok } from './helpers/http-helper';
import { RegisterCityResponse } from '../../../domain/usecases/city/register-city/register-city-response';
import { FindCityByName } from '../../../domain/usecases/city/find-city-by-name/find-city-by-name';

export class FindCityByNameController {
  private readonly findCityByName: FindCityByName;

  constructor(findCityByName: FindCityByName) {
    this.findCityByName = findCityByName;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const name = httpRequest.body.name;
      const findCity: RegisterCityResponse = await this.findCityByName.execute(
        name,
      );
      if (findCity.isLeft()) {
        return badRequest(findCity.value);
      }

      return ok(findCity.value);
    } catch (error) {
      console.log(error);
      return serverError('internal');
    }
  }
}
