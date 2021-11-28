import { FindCityByNameResponse } from './find-city-by-name-response';

export interface IFindCityByName {
  execute: (name: string) => Promise<FindCityByNameResponse>;
}
