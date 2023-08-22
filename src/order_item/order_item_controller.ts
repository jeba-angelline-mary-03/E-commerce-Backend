import { Controller,Get,Post,Body,Param,Delete,Put,Patch} from "@nestjs/common"
import { identity } from "rxjs"
import { UsePipes,ValidationPipe,ParseIntPipe } from "@nestjs/common"
import { tbl_order_item } from "@prisma/client"
import { OrderItemService } from "./order_item_service"
import { CreateOrderItemDto } from "./dto/create_order_item.dto"

@Controller('orderitem')
export class OrderItemController{
    constructor(private readonly orderItemService:OrderItemService){} 
    @Get('getOrderItem')
    async getAllOrderItems(){
        return await this.orderItemService.getAllOrderItems()
    }

    @UsePipes(ValidationPipe) 
    @Post('createorderItem')
    async createOrderItem(@Body() body : CreateOrderItemDto){
      return await this.orderItemService.createOrderItem(body)
    }

    @Get(':id')
    async getOrderItem(@Param('id') id:Number){
        return this.orderItemService.getOrderItem(id)
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deleteOrderItem(@Param('id',ParseIntPipe) id){
        return await this.orderItemService.deleteOrderItem(id);
    }

    @Patch(':id')
    async updateOrderItem(@Param('id') id,@Body() body){
        return await this.orderItemService.updateOrderItem(id,body)
    }

    
}