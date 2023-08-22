import { Prisma} from "@prisma/client";
import { IsInt, Min,IsUUID} from "class-validator";

export class CreateOrderItemDto{
    @IsInt()
    @Min(1)
    quantity:number

    @IsInt()
    @Min(1)
    product_id:number
    
    @IsInt()
    @IsUUID()
    OrderID:number
}