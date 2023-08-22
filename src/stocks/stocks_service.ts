import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { tbl_stocks } from "@prisma/client";
import { CreateStockDto} from "./dto/create_stock.dto";

@Injectable()
export class StockService{
  constructor(private prisma: PrismaService){}
  async getAllStocks(){
    return await this.prisma.tbl_stocks.findMany()
  }
  async getStock(id:Number){
    return this.prisma.tbl_stocks.findUnique({
        where:{stockId:Number(id)}})
    }
  async createStock(data:CreateStockDto){
    return await this.prisma.tbl_stocks.create({
      data,
    })
  }
  async updateStock(id:Number,data:any){
    return await this.prisma.tbl_stocks.update({
        data,
        where: {stockId:Number(id)}
    })
  }

   async deleteStock(id:Number){
    return await this.prisma.tbl_stocks.delete({
        where:{stockId:Number(id)}
    })
   }
   
  }