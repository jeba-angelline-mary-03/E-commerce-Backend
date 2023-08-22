import { Controller,Get,Post,Body,Param,Delete,Put,Patch} from "@nestjs/common"
import { StockService } from "./stocks_service"
import { tbl_stocks } from "@prisma/client"
import { identity } from "rxjs"
import { UsePipes,ValidationPipe,ParseIntPipe } from "@nestjs/common"
import { CreateStockDto } from "./dto/create_stock.dto"

@Controller('stock')
export class StockController{
    constructor(private readonly stockService:StockService){} 
    @Get('getstocks')
    async getAllStocks(){
        return await this.stockService.getAllStocks()
    }

    @UsePipes(ValidationPipe) 
    @Post('createstock')
    async createStock(@Body() body : CreateStockDto){
      return await this.stockService.createStock(body)
    }

    @Get(':id')
    async getStock(@Param('id') id:Number){
        return this.stockService.getStock(id)
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deleteStock(@Param('id',ParseIntPipe) id){
        return await this.stockService.deleteStock(id);
    }

    @Patch(':id')
    async updateStock(@Param('id') id,@Body() body){
        return await this.stockService.updateStock(id,body)
    }

    
}