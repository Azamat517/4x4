import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {

  constructor(
    @InjectRepository(Car) private readonly carRepo: Repository<Car>,
  ) { }


  async create(createCarDto: CreateCarDto): Promise<Car> {
    const cars = this.carRepo.create({
      ...createCarDto,
    });
    
    await this.carRepo.save(cars);
    return cars;
  }


  async findAll(): Promise<Car[]> {
    const models = await this.carRepo.find();
    return models;

  }


  async findOne(id: number): Promise<Car | null> {
    return await this.carRepo.findOneBy({ id: id });
  }


  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
