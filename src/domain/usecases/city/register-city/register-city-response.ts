import { Either } from '../../../../shared/either';
import { InvalidEmptyValues } from '../../../entities/errors/invalid-empty-values';
import { InvalidStateAcronym } from '../../../entities/state/errors/invalid-state-acronym';
import { RegisterAlreadyPersisted } from '../../errors/register-already-persisted';
import { Id } from '../../port/repository';

export type RegisterCityResponse = Either<
  InvalidEmptyValues | RegisterAlreadyPersisted | InvalidStateAcronym,
  Id
>;
