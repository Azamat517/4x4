import { Module } from '@nestjs/common';

import { CarsModule } from './cars/cars.module';
import { ModelModule } from './model/model.module';
import { Model } from './model/entities/model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './cars/entities/car.entity';
import { TuningModule } from './tuning/tuning.module';
import { Tuning } from './tuning/entities/tuning.entity';
import { ImageCarModule } from './image-car/image-car.module';
import { ImageCar } from './image-car/entities/image-car.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Aza517097',
      database: '4x4',
      entities: [Model, Car, Tuning, ImageCar],
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),

    CarsModule, ModelModule, TuningModule, ImageCarModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
