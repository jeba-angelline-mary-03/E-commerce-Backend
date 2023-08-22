import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { tbl_products } from "@prisma/client";
import { CreateProductDto } from "./dto/create_product.dto";

@Injectable()
export class ProductService{
  constructor(private prisma: PrismaService){}
  async getAllProducts(){
    return await this.prisma.tbl_products.findMany()
  }
  async getProduct(id:Number){
    return this.prisma.tbl_products.findUnique({
        where:{productId:Number(id)}})
    }
  async createProduct(data:CreateProductDto){
    return await this.prisma.tbl_products.create({
      data
    })
  }
  async updateProduct(id:Number,data:any){
    return await this.prisma.tbl_products.update({
        data,
        where: {productId:Number(id)}
    })
  }

   async deleteProduct(id:Number){
    return await this.prisma.tbl_products.delete({
        where:{productId:Number(id)}
    })
   }
   
  }