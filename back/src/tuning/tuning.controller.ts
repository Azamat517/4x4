import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TuningService } from './tuning.service';
import { CreateTuningDto } from './dto/create-tuning.dto';
import { UpdateTuningDto } from './dto/update-tuning.dto';

@Controller('tuning')
export class TuningController {
  constructor(private readonly tuningService: TuningService) {}

  @Post()
  create(@Body() createTuningDto: CreateTuningDto) {
    return this.tuningService.create(createTuningDto);
  }

  @Get()
  findAll() {
    return this.tuningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tuningService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tuningService.remove(+id);
  }
}
