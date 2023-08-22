import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateCategoryDto } from "./dto/create_category.dto";
import { tbl_category } from "@prisma/client";


@Injectable()
export class CategoryService{
  constructor(private prisma: PrismaService){}
  async getAllCategories(){
    return await this.prisma.tbl_category.findMany()
  }

  async getCategory(id:Number){
    return this.prisma.tbl_category.findUnique({
        where:{categoryId:Number(id)}})
    }

  async createCategory(data:CreateCategoryDto){
    return await this.prisma.tbl_category.create({
      data
    })
  }

  async updateCategory(id:Number,data:any){
    return await this.prisma.tbl_category.update({
        data,
        where: {categoryId:Number(id)}
    })
  }
   async deleteCategory(id:Number){
    return await this.prisma.tbl_category.delete({
        where:{categoryId:Number(id)}
    })
}
   
  }