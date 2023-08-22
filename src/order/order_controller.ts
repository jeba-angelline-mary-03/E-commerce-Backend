import { Controller,Get,Post,Body,Param,Delete,Put,Patch} from "@nestjs/common"
import { tbl_order } from "@prisma/client"
import { OrderService } from "./order_service"
import { CreateOrderDto } from "./dto/order.dto"
import { identity } from "rxjs"
import { UsePipes,ValidationPipe,ParseIntPipe } from "@nestjs/common"

@Controller('order')
export class OrderController{
    constructor(private readonly orderService:OrderService){} 
    @Get('getOrder')
    async getAllOrders(){
        return await this.orderService.getAllOrders()
    }

    @UsePipes(ValidationPipe) 
    @Post('createorder')
    async createOrder(@Body() body : CreateOrderDto){
      return await this.orderService.createOrder(body)
    }

    @Get(':id')
    async getOrder(@Param('id') id:Number){
        return this.orderService.getOrder(id)
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deleteOrder(@Param('id',ParseIntPipe) id){
        return await this.orderService.deleteOrder(id);
    }

    @Patch(':id')
    async updateOrder(@Param('id') id,@Body() body){
        return await this.orderService.updateOrder(id,body)
    }

    
}