import { Injectable } from '@nestjs/common';
import { CreateCarYearDto } from './dto/create-car-year.dto';
import { UpdateCarYearDto } from './dto/update-car-year.dto';

@Injectable()
export class CarYearService {
  create(createCarYearDto: CreateCarYearDto) {
    return 'This action adds a new carYear';
  }

  findAll() {
    return `This action returns all carYear`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carYear`;
  }

  update(id: number, updateCarYearDto: UpdateCarYearDto) {
    return `This action updates a #${id} carYear`;
  }

  remove(id: number) {
    return `This action removes a #${id} carYear`;
  }
}
