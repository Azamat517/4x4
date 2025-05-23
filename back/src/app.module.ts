import { Module } from '@nestjs/common';

import { CarsModule } from './cars/cars.module';
import { ModelModule } from './model/model.module';

@Module({
  imports: [CarsModule, ModelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
