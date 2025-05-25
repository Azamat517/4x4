import { PartialType } from '@nestjs/mapped-types';
import { CreateTuningDto } from './create-tuning.dto';

export class UpdateTuningDto extends PartialType(CreateTuningDto) {}
