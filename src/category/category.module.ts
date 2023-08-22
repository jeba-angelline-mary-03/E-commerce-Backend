import { Module } from '@nestjs/common';
import { CategoryService } from './category_service';
import { PrismaService } from 'prisma/prisma.service';
import { CategoryController } from './category_controller';

@Module({
  imports:[],
  controllers: [CategoryController],
  providers: [CategoryService,PrismaService]
})
export class CategoryModule {}
