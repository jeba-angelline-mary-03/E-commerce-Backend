import { Controller,Get,Post,Body,Param,Delete,Put,Patch} from "@nestjs/common"
import { tbl_images } from "@prisma/client"
import { identity } from "rxjs"
import { UsePipes,ValidationPipe,ParseIntPipe } from "@nestjs/common"
import { ImageService } from "./image_service"
import { CreateImageDto } from "./dto/create_image.dto"


@Controller('image')
export class ImageController{
    constructor(private readonly imageService:ImageService){} 
    @Get('getimage')
    async getAllImages(){
        return await this.imageService.getAllImages()
    }

    @UsePipes(ValidationPipe) 
    @Post('createimage')
    async createImage(@Body() body : CreateImageDto){
      return await this.imageService.createImage(body)
    }

    @Get(':id')
    async getImage(@Param('id') id:Number){
        return this.imageService.getImage(id)
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deleteImage(@Param('id',ParseIntPipe) id){
        return await this.imageService.deleteImage(id);
    }

    @Patch(':id')
    async updateImage(@Param('id') id,@Body() body){
        return await this.imageService.updateImage(id,body)
    }

    
}