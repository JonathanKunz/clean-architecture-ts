import { Either, left, right } from '../../../shared/either';
import { InvalidEmptyValues } from '../errors/invalid-empty-values';
import { CustomerData } from './customer-data';

export class Customer {
  constructor(
    public readonly name: string,
    public readonly male: string,
    public readonly birthDate: Date,
    public readonly age: number,
    public readonly cityId: number,
  ) {}

  static create(
    customerData: Omit<CustomerData, 'id'>,
  ): Either<InvalidEmptyValues, Customer> {
    const isValid = Customer.validate(customerData);

    if (!isValid) {
      return left(new InvalidEmptyValues());
    }

    const { name, male, birthDate, age, cityId } = customerData;

    return right(new Customer(name, male, birthDate, age, cityId));
  }

  static validate(customerData: Omit<CustomerData, 'id'>) {
    const emptyValue = Object.values(customerData).some(e => !e);
    return !!emptyValue;
  }
}
