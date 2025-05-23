import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModelService {

  constructor(
    @InjectRepository(Model) private readonly modelRepo: Repository<Model>,
  ) { }

  async create(createModelDto: CreateModelDto): Promise<Model> {
    const model = this.modelRepo.create({
      ...createModelDto,
    });
    await this.modelRepo.save(model);
    return model;
  }

  async findAll(): Promise<Model[]> {
    const models = await this.modelRepo.find({
      relations: ['carModel'],
    });
    models.forEach(car => {
      car.carModel.sort((a, b) => a.id - b.id);
    });
    return models;

  }

  async findOne(id: number): Promise<Model | null> {
    return await this.modelRepo.findOneBy({ id: id });
  }


  remove(id: number) {
    return `This action removes a #${id} model`;
  }
}
