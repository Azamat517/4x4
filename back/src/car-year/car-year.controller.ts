import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarYearService } from './car-year.service';
import { CreateCarYearDto } from './dto/create-car-year.dto';
import { UpdateCarYearDto } from './dto/update-car-year.dto';

@Controller('car-year')
export class CarYearController {
  constructor(private readonly carYearService: CarYearService) {}

  @Post()
  create(@Body() createCarYearDto: CreateCarYearDto) {
    return this.carYearService.create(createCarYearDto);
  }

  @Get()
  findAll() {
    return this.carYearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carYearService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarYearDto: UpdateCarYearDto) {
    return this.carYearService.update(+id, updateCarYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carYearService.remove(+id);
  }
}
