import { Injectable } from '@nestjs/common';
import { CreateImageCarDto } from './dto/create-image-car.dto';
import { UpdateImageCarDto } from './dto/update-image-car.dto';

@Injectable()
export class ImageCarService {
  create(createImageCarDto: CreateImageCarDto) {
    return 'This action adds a new imageCar';
  }

  findAll() {
    return `This action returns all imageCar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageCar`;
  }

  update(id: number, updateImageCarDto: UpdateImageCarDto) {
    return `This action updates a #${id} imageCar`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageCar`;
  }
}
