import { Controller,Get,Post,Body,Param,Delete,Put,Patch} from "@nestjs/common"
import { identity } from "rxjs"
import { UsePipes,ValidationPipe,ParseIntPipe } from "@nestjs/common"
import { payment } from "@prisma/client"
import { PaymentService } from "./payment_service"
import { CreatePaymentDto } from "./dto/create_payment.dto"

@Controller('payment')
export class PaymentController{
    constructor(private readonly paymentService:PaymentService){} 
    @Get('getpayment')
    async getAllPayments(){
        return await this.paymentService.getAllPayments()
    }

    @UsePipes(ValidationPipe) 
    @Post('createPayment')
    async createPayment(@Body() body : CreatePaymentDto){
      return await this.paymentService.createPayment(body)
    }

    @Get(':id')
    async getPayment(@Param('id') id:Number){
        return this.paymentService.getPayment(id)
    }
    
    @UsePipes(ValidationPipe)
    @Delete(':id')
    async deletePayment(@Param('id',ParseIntPipe) id){
        return await this.paymentService.deletePayment(id);
    }

    @Patch(':id')
    async updatePayment(@Param('id') id,@Body() body){
        return await this.paymentService.updatePayment(id,body)
    }

    
}