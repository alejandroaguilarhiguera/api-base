import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Customer } from '../types';

@Injectable()
export class CustomerService {
  getCustomer(id: string): any {
    return {
      id,
      name: faker.person.fullName(),
    };
  }
  getCustomers(): any {
    return [
      {
        id: 1,
        name: faker.person.fullName(),
      },
      {
        id: 2,
        name: faker.person.fullName(),
      },
    ];
  }
  createCustomer(customer: Customer): any {
    return {
      id: 2,
      name: customer.name,
    };
  }
}
