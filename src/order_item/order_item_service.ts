import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { tbl_order_item } from "@prisma/client";
import { CreateOrderItemDto } from "./dto/create_order_item.dto";

@Injectable()
export class OrderItemService{
  constructor(private prisma: PrismaService){}
  async getAllOrderItems(){
    return await this.prisma.tbl_order_item.findMany()
  }
  async getOrderItem(id:Number){
    return this.prisma.tbl_order_item.findUnique({
        where:{order_item_id:Number(id)}})
    }
  async createOrderItem(data:CreateOrderItemDto){
    return await this.prisma.tbl_order_item.create({
      data,
    })
  }
  async updateOrderItem(id:Number,data:any){
    return await this.prisma.tbl_order_item.update({
        data,
        where: {order_item_id:Number(id)}
    })
  }

   async deleteOrderItem(id:Number){
    return await this.prisma.tbl_order_item.delete({
        where:{order_item_id:Number(id)}
    })
   }
   
  }