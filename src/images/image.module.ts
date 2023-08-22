import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ImageController } from './image_controller';
import { ImageService } from './image_service';

@Module({
  imports:[],
  controllers: [ImageController],
  providers: [ImageService,PrismaService]
})
export class ImageModule {}
