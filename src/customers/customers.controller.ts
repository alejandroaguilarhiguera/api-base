import {
  Controller,
  Get,
  UseFilters,
  Body,
  UsePipes,
  Post,
  Query,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { CustomerService } from '../customers/customers.service';
import { HttpExceptionFilter } from '../utils/http-exception.filter';
import { Customer } from '../types';
import { JoiValidationPipe } from 'src/utils/JoiValidationPipe';
import {
  customerNewSchema,
  customerEditSchema,
} from 'src/utils/schemas/customer.schema';
import { CustomerDecorator } from './customers.decorator';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomerService) {}

  /**
   * @param {Object} query - Apply filters.
   * @description Get all customers.
   */
  @Get()
  @UseFilters(new HttpExceptionFilter())
  getAll(@Query() query: any): Customer[] {
    console.log('query', query);
    // TODO: Apply filter
    return this.customerService.getCustomers();
  }

  /**
   * @param {Object} query - Apply filters.
   * @description Get all trashed customers.
   */
  @Get('/trashed')
  @UseFilters(new HttpExceptionFilter())
  trashed(@Query() query: any): Customer[] {
    console.log('query', query);
    // TODO: Apply filter
    return this.customerService.getCustomers();
  }

  /**
   * @description Get one customers by id.
   */
  @Get(':id')
  show(@CustomerDecorator() customer: Customer): Customer {
    // TODO: reload full data
    return customer;
  }

  /**
   * @param {Partial<Customer>} body - All data to create a new customer.
   * @description create a customer.
   */
  @Post()
  @UsePipes(new JoiValidationPipe(customerNewSchema))
  create(@Body() body: Customer): Customer {
    return this.customerService.createCustomer(body);
  }

  /**
   * @param {Customer} customer - customer.
   * @description Get all customers
   */
  @Patch(':id')
  @UsePipes(new JoiValidationPipe(customerEditSchema))
  update(
    @Body() body: Partial<Customer>,
    @CustomerDecorator() customer: Customer,
  ): Customer {
    //  TODO: Apply body
    console.log('body', body);
    return customer;
  }

  /**
   * @param {Customer} customer - customer.
   * @description Get all customers
   */
  @Put(':id/restore')
  restore(@CustomerDecorator() customer: Customer): Customer {
    // TODO: Restore customer
    return customer;
  }

  /**
   * @param {Customer} customer - customer.
   * @description Soft delete customer
   */
  @Delete(':id')
  delete(@CustomerDecorator() customer: Customer): Customer {
    // TODO: Soft delete customer
    return customer;
  }

  /**
   * @param {Customer} customer - customer.
   * @description destroy customer
   */
  @Delete(':id/destroy')
  destroy(@CustomerDecorator() customer: Customer): Customer {
    // TODO: Destroy customer
    return customer;
  }
}
