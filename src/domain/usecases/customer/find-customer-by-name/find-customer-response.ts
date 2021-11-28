import { Either } from '../../../../shared/either';
import { CustomerData } from '../../../entities/customer/customer-data';
import { NotFound } from '../../errors/not-found';

export type FindCustomerResponse = Either<NotFound, CustomerData>;
