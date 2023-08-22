import { Module } from '@nestjs/common';
import { UserController } from './user_controller';
import { UserService } from './user_service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports:[],
  controllers: [UserController],
  providers: [UserService,PrismaService]
})
export class UserModule {}
