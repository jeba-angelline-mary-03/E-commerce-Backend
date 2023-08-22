import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { OrderController } from './order_controller';
import { OrderService } from './order_service';

@Module({
  imports:[],
  controllers: [OrderController],
  providers: [OrderService,PrismaService]
})
export class OrderModule {}