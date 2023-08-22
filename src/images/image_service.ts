import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateImageDto } from "./dto/create_image.dto";
import { tbl_images } from "@prisma/client";

@Injectable()
export class ImageService{
  constructor(private prisma: PrismaService){}
  async getAllImages(){
    return await this.prisma.tbl_images.findMany()
  }
  async getImage(id:Number){
    return this.prisma.tbl_images.findUnique({
        where:{ImageId:Number(id)}})
    }
  async createImage(data:CreateImageDto){
    return await this.prisma.tbl_images.create({
      data,
    })
  }
  async updateImage(id:Number,data:any){
    return await this.prisma.tbl_images.update({
        data,
        where: {ImageId:Number(id)}
    })
  }

   async deleteImage(id:Number){
    return await this.prisma.tbl_images.delete({
        where:{ImageId:Number(id)}
    })
   }
   
  }