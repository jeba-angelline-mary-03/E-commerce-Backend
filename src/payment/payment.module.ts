import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PaymentController } from './payment_controller';
import { PaymentService } from './payment_service';

@Module({
  imports:[],
  controllers: [PaymentController],
  providers: [PaymentService,PrismaService]
})
export class PaymentModule {}