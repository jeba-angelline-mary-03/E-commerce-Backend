import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { payment } from "@prisma/client";
import { CreatePaymentDto } from "./dto/create_payment.dto";

@Injectable()
export class PaymentService{
  constructor(private prisma: PrismaService){}
  async getAllPayments(){
    return await this.prisma.payment.findMany()
  }
  async getPayment(id:Number){
    return this.prisma.payment.findUnique({
        where:{payment_id:Number(id)}})
    }
  async createPayment(data:CreatePaymentDto){
    return await this.prisma.payment.create({
      data,
    })
  }
  async updatePayment(id:Number,data:any){
    return await this.prisma.payment.update({
        data,
        where: {payment_id:Number(id)}
    })
  }

   async deletePayment(id:Number){
    return await this.prisma.payment.delete({
        where:{payment_id:Number(id)}
    })
   }
   
  }