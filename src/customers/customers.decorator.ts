import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { CustomerService } from '../customers/customers.service';

export const CustomerDecorator = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const customer = new CustomerService().getCustomer(request.params?.id);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  },
);
