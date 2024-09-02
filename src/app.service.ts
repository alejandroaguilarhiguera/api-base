import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCustomers(): any {
    return [
      {
        id: 1,
        name: 'customer 1',
      },
      {
        id: 2,
        name: 'customer 2',
      },
    ];
  }
}
