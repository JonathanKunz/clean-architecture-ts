import { HttpRequest, HttpResponse } from './ports/http';
import { badRequest, serverError, ok } from './helpers/http-helper';
import { RegisterCityResponse } from '../../../domain/usecases/city/register-city/register-city-response';
import { FindCityCollectionByState } from '../../../domain/usecases/city/find-city-collection-by-state/find-city-collection-by-state';
import { FindCityCollectionByStateResponse } from '../../../domain/usecases/city/find-city-collection-by-state/find-city-collection-by-state-response';

export class FindCityCollectionByStateController {
  private readonly findCityCollectionByState: FindCityCollectionByState;

  constructor(findCityCollectionByState: FindCityCollectionByState) {
    this.findCityCollectionByState = findCityCollectionByState;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const state = httpRequest.body.state;
      const cityCollection: FindCityCollectionByStateResponse =
        await this.findCityCollectionByState.execute(state);
      if (cityCollection.isLeft()) {
        return badRequest(cityCollection.value);
      }

      return ok(cityCollection.value);
    } catch (error) {
      console.log(error);
      return serverError('internal');
    }
  }
}
