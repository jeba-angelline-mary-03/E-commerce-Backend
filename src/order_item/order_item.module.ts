import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { OrderItemController } from './order_item_controller';
import { OrderItemService } from './order_item_service';

@Module({
  imports:[],
  controllers: [OrderItemController],
  providers: [OrderItemService,PrismaService]
})
export class OrderItemModule {}