import { CityData } from '../../../entities/city/city-data';
import { RegisterCityResponse } from './register-city-response';

export interface IRegisterCity {
  execute: (cityData: CityData) => Promise<RegisterCityResponse>;
}
