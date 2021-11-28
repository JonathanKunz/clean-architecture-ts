import { FindCityCollectionByStateResponse } from './find-city-collection-by-state-response';

export interface IFindCityCollectionByState {
  execute: (state: string) => Promise<FindCityCollectionByStateResponse>;
}
