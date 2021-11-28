import { Either } from '../../../../shared/either';
import { InvalidEmptyValues } from '../../../entities/errors/invalid-empty-values';
import { RegisterAlreadyPersisted } from '../../errors/register-already-persisted';
import { Id } from '../../port/repository';

export type RegisterCustomerResponse = Either<
  InvalidEmptyValues | RegisterAlreadyPersisted,
  Id
>;
