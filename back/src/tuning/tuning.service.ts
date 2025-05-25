import { Injectable } from '@nestjs/common';
import { CreateTuningDto } from './dto/create-tuning.dto';
import { UpdateTuningDto } from './dto/update-tuning.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tuning } from './entities/tuning.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TuningService {

  constructor(
    @InjectRepository(Tuning) private readonly tuningRepo: Repository<Tuning>,
  ) { }

  async create(createTuningDto: CreateTuningDto): Promise<Tuning> {
    const tuning = this.tuningRepo.create({
      ...createTuningDto,
    });
    await this.tuningRepo.save(tuning);
    return tuning;
  }


  async findAll(): Promise<Tuning[]> {
    const models = await this.tuningRepo.find();
    return models;

  }

  async findOne(id: number): Promise<Tuning | null> {
    return await this.tuningRepo.findOneBy({ id: id });
  }




  remove(id: number) {
    return `This action removes a #${id} tuning`;
  }
}
