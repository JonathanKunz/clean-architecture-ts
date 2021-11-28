import { CustomerData } from '../../domain/entities/customer/customer-data';
import { CustomerRepository } from '../../domain/usecases/port/customer-repository';
import { lastIdWithIncrement } from './helpers/incrementId';
class InMemoryCustomerRepository implements CustomerRepository {
  private customerCollection: CustomerData[] = [];

  async persistCustomer(customerData: Omit<CustomerData, 'id'>) {
    const id = { id: lastIdWithIncrement(this.customerCollection) };
    this.customerCollection.push({ ...id, ...customerData });
    return id;
  }

  async updateCustomerName(customerData: CustomerData) {
    const { name, id } = customerData;
    const oldRegister = await this.findCustomerById(id);
    const newRegister = { ...oldRegister, name };
    await this.deleteCustomerById(id);
    this.customerCollection.push(newRegister);
    return newRegister;
  }

  async findCustomerByName(name: string) {
    const customer = this.customerCollection.find(e => e.name === name);
    return customer;
  }

  async findCustomerById(id: number) {
    const customer = this.customerCollection.find(e => e.id === id);
    return customer;
  }

  async deleteCustomerById(id: number) {
    const filterResult = this.customerCollection.filter(e => e.id !== id);
    this.customerCollection = filterResult;
    return { id };
  }
}

export default new InMemoryCustomerRepository();
