import { Injectable } from '@nestjs/common';
import { CreateCarImageDto } from './dto/create-car-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarImage } from './entities/car-image.entity';

@Injectable()
export class CarImageService {

  constructor(
    @InjectRepository(CarImage) private readonly imageRepo: Repository<CarImage>,
  ) { }


  async create(createCarImageDto: CreateCarImageDto, imageFilename?: string,): Promise<CarImage> {
    const images = this.imageRepo.create({
      ...createCarImageDto,
      image: imageFilename ?? createCarImageDto.image,

    });
    await this.imageRepo.save(images);
    return images;
  }

  async findAll(): Promise<CarImage[]> {
    return await this.imageRepo.find()
  }

  async findOne(id: number): Promise<CarImage | null> {
    return await this.imageRepo.findOneBy({ id: id });
  }


  async remove(id: number) {
    await this.imageRepo.delete({ id });
    return id;
  }


  async clear() {
    try {
      const isEmpty = await this.imageRepo.countBy({});
      if (isEmpty) {
        await this.imageRepo.delete({});
      }
    } catch {
      throw new Error('Clear error');
    }
  }
}
