import { Module } from '@nestjs/common';
import { CarImageService } from './car-image.service';
import { CarImageController } from './car-image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarImage } from './entities/car-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarImage])],
  controllers: [CarImageController],
  providers: [CarImageService],
})
export class CarImageModule {}
