import { Either } from '../../../../shared/either';
import { NotFound } from '../../errors/not-found';
import { Id } from '../../port/repository';

export type UpdateCustomerResponse = Either<NotFound, Id>;
