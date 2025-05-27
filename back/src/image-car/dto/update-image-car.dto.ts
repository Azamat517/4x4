import { PartialType } from '@nestjs/mapped-types';
import { CreateImageCarDto } from './create-image-car.dto';

export class UpdateImageCarDto extends PartialType(CreateImageCarDto) {}
