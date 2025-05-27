import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImageCarService } from './image-car.service';
import { CreateImageCarDto } from './dto/create-image-car.dto';
import { UpdateImageCarDto } from './dto/update-image-car.dto';

@Controller('image-car')
export class ImageCarController {
  constructor(private readonly imageCarService: ImageCarService) {}

  @Post()
  create(@Body() createImageCarDto: CreateImageCarDto) {
    return this.imageCarService.create(createImageCarDto);
  }

  @Get()
  findAll() {
    return this.imageCarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageCarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageCarDto: UpdateImageCarDto) {
    return this.imageCarService.update(+id, updateImageCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageCarService.remove(+id);
  }
}
