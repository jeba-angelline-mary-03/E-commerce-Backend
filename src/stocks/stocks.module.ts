import { Module } from '@nestjs/common';
import { StockService } from './stocks_service';
import { PrismaService } from 'prisma/prisma.service';
import { StockController } from './stocks_controller';

@Module({
  imports:[],
  controllers: [StockController],
  providers: [StockService,PrismaService]
})
export class StockModule {}
