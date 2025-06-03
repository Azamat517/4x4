import { Module } from '@nestjs/common';
import { CarImageService } from './car-image.service';
import { CarImageController } from './car-image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarImage } from './entities/car-image.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  imports: [TypeOrmModule.forFeature([CarImage]),
 MulterModule.register({
    storage: diskStorage({
      destination: join(__dirname, '..', '..', 'uploads'),
      filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${unique}${extname(file.originalname)}`);
      },
    }),
  }),
  ],
  controllers: [CarImageController],
  providers: [CarImageService],
})
export class CarImageModule { }
