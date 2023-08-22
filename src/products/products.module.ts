import { Module } from '@nestjs/common';
import { ProductService } from './products_service';
import { ProductController } from './products_controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports:[],
  controllers: [ProductController],
  providers: [ProductService,PrismaService]
})
export class ProductModule {}
