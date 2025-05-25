import { Module } from '@nestjs/common';
import { TuningService } from './tuning.service';
import { TuningController } from './tuning.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tuning } from './entities/tuning.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tuning])],
  controllers: [TuningController],
  providers: [TuningService],
})
export class TuningModule { }
