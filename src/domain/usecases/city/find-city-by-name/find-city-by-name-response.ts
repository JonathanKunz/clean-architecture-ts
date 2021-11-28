import { Either } from '../../../../shared/either';
import { CityData } from '../../../entities/city/city-data';
import { NotFound } from '../../errors/not-found';

export type FindCityByNameResponse = Either<NotFound, CityData>;
