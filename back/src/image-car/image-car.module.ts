import { Module } from '@nestjs/common';
import { ImageCarService } from './image-car.service';
import { ImageCarController } from './image-car.controller';

@Module({
  controllers: [ImageCarController],
  providers: [ImageCarService],
})
export class ImageCarModule {}
