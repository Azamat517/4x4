import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CarImageService } from './car-image.service';
import { CreateCarImageDto } from './dto/create-car-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('car-image')
export class CarImageController {
  constructor(private readonly carImageService: CarImageService) { }

  @Post()
  @UseInterceptors(FileInterceptor('imageCar'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createCarImageDto: CreateCarImageDto) {
    if (file) {
      createCarImageDto.image = file.filename;
    }
    return this.carImageService.create(createCarImageDto);
  }

  @Get()
  findAll() {
    return this.carImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carImageService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carImageService.remove(+id);
  }
}
