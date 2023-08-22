import { Controller,Get,Post,Body,Param,Delete,Put,Patch} from "@nestjs/common"
import { identity } from "rxjs"
import { UsePipes,ValidationPipe,ParseIntPipe } from "@nestjs/common"
import { tbl_category } from "@prisma/client"
import { CreateCategoryDto } from "./dto/create_category.dto"
import { CategoryService } from "./category_service"

@Controller('category')
export class CategoryController{
    constructor(private readonly categoryService:CategoryService){}
    
    @Get('getcategory')
    async getAllCategory(){
        return await this.categoryService.getAllCategories()
    }

    @UsePipes(ValidationPipe) 
    @Post('createcategory')
    async createCategory(@Body() body :CreateCategoryDto){
      return await this.categoryService.createCategory(body)
    }

    @Get(':id')
    async getCategory(@Param('id') id:Number){
        return this.categoryService.getCategory(id)
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deleteCategory(@Param('id',ParseIntPipe) id){
        return await this.categoryService.deleteCategory(id);
    }

    @Patch(':id')
    async updateCategory(@Param('id') id,@Body() body){
        return await this.categoryService.updateCategory(id,body)
    } 
}