import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { tbl_user_profile } from "@prisma/client";
import { tbl_users_auth } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateProfileDto } from "./dto/create-profile.dto";

@Injectable()
export class UserService{
  constructor(private prisma: PrismaService){}
  async getAllUsers(){
    return await this.prisma.tbl_users_auth.findMany()
  }

  async getAllProfile(){
    return await this.prisma.tbl_user_profile.findMany()
  }

  async getUser(id:Number){
    return this.prisma.tbl_users_auth.findUnique({
        where:{userId:Number(id)}})
    }

    async getProfile(id:Number){
      return this.prisma.tbl_user_profile.findUnique({
          where:{userProfileId:Number(id)}})
      }

  async createUser(data:CreateUserDto){
    return await this.prisma.tbl_users_auth.create({
      data
    })
  }

  async createProfile(data:CreateProfileDto){
    return await this.prisma.tbl_user_profile.create({
      data
    })
  }

  async updateUser(id:Number,data:any){
    return await this.prisma.tbl_users_auth.update({
        data,
        where: {userId:Number(id)}
    })
  }

  async updateProfile(id:Number,data:any){
    return await this.prisma.tbl_user_profile.update({
        data,
        where: {userProfileId:Number(id)}
    })
  }
   async deleteUser(id:Number){
    return await this.prisma.tbl_users_auth.delete({
        where:{userId:Number(id)}
    })
   }

   async deleteProfile(id:Number){
    return await this.prisma.tbl_user_profile.delete({
        where:{userProfileId:Number(id)}
    })
   }
   
  }