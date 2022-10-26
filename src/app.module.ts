import { Module } from '@nestjs/common';
import { AppController } from './controller/controller';
import { serviceCrudController } from './controller/serviceCrudController';
import { versionCrudController } from './controller/versionCrudController';
import { AppService } from './service/services';
import { servicesCrud } from './service/servicesCrud';
import { versionsCrud } from './service/versionsCrud';

@Module({
  imports: [],
  controllers: [AppController, versionCrudController, serviceCrudController],
  providers: [AppService, servicesCrud, versionsCrud],
})
export class AppModule {}
