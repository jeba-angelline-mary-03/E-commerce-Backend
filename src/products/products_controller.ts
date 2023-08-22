import { Controller,Get,Post,Body,Param,Delete,Put,Patch} from "@nestjs/common"
import { ProductService } from "./products_service"
import { tbl_products } from "@prisma/client"
import { identity } from "rxjs"
import { UsePipes,ValidationPipe,ParseIntPipe } from "@nestjs/common"
import { CreateProductDto } from "./dto/create_product.dto"

@Controller('product')
export class ProductController{
    constructor(private readonly productService:ProductService){} 
    @Get('getproducts')
    async getAllProducts(){
        return await this.productService.getAllProducts()
    }

    @UsePipes(ValidationPipe) 
    @Post('createproduct')
    async createProduct(@Body() body : CreateProductDto){
      return await this.productService.createProduct(body)
    }

    @Get(':id')
    async getProduct(@Param('id') id:Number){
        return this.productService.getProduct(id)
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deleteProduct(@Param('id',ParseIntPipe) id){
        return await this.productService.deleteProduct(id);
    }

    @Patch(':id')
    async updateProduct(@Param('id') id,@Body() body){
        return await this.productService.updateProduct(id,body)
    }

    
}