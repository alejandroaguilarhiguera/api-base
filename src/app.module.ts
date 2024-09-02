import {
  MiddlewareConsumer,
  RequestMethod,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import configuration from './config/configuration';
import { FindCustomer } from './middlewares/FindCustomer.middleware';
import { CustomerService } from './customers/customers.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
    }),
  ],
  controllers: [AppController, CustomersController],
  providers: [AppService, CustomerService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FindCustomer).forRoutes({
      path: 'customers',
      method: RequestMethod.ALL,
    });
  }
}
