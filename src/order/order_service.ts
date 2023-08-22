import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { tbl_order } from "@prisma/client";
import { CreateOrderDto } from "./dto/order.dto";

@Injectable()
export class OrderService{
  constructor(private prisma: PrismaService){}
  async getAllOrders(){
    return await this.prisma.tbl_order.findMany()
  }
  async getOrder(id:Number){
    return this.prisma.tbl_order.findUnique({
        where:{orderId:Number(id)}})
    }
  async createOrder(data:CreateOrderDto){
    return await this.prisma.tbl_order.create({
      data,
    })
  }
  async updateOrder(id:Number,data:any){
    return await this.prisma.tbl_order.update({
        data,
        where: {orderId:Number(id)}
    })
  }

   async deleteOrder(id:Number){
    return await this.prisma.tbl_order.delete({
        where:{orderId:Number(id)}
    })
   }
   
  }