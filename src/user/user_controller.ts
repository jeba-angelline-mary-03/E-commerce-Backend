import { Controller,Get,Post,Body,Param,Delete,Put,Patch} from "@nestjs/common"
import { UserService } from "./user_service"
import { tbl_users_auth } from "@prisma/client"
import { identity } from "rxjs"
import { UsePipes,ValidationPipe,ParseIntPipe } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { CreateProfileDto } from "./dto/create-profile.dto"

@Controller('user')
export class UserController{
    constructor(private readonly userService:UserService){}
    
    @Get('getusers')
    async getAllUsers(){
        return await this.userService.getAllUsers()
    }
    
    @Get('getprofile')
    async getAllProfile(){
        return await this.userService.getAllProfile()
    }
    

    @UsePipes(ValidationPipe) 
    @Post('createuser')
    async createUser(@Body() body : CreateUserDto){
      return await this.userService.createUser(body)
    }

    @UsePipes(ValidationPipe) 
    @Post('createprofile')
    async createProfile(@Body() body : CreateProfileDto){
      return await this.userService.createProfile(body)
    }


    @Get(':id')
    async getUser(@Param('id') id:Number){
        return this.userService.getUser(id)
    }
    
    @Get(':id')
    async getProfile(@Param('id') id:Number){
        return this.userService.getProfile(id)
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deleteUser(@Param('id',ParseIntPipe) id){
        return await this.userService.deleteUser(id);
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deleteProfile(@Param('id',ParseIntPipe) id){
        return await this.userService.deleteProfile(id);
    }

    @Patch(':id')
    async updateUser(@Param('id') id,@Body() body){
        return await this.userService.updateUser(id,body)
    }

    @Patch(':id')
    async updateProfile(@Param('id') id,@Body() body){
        return await this.userService.updateProfile(id,body)
    }

    
}