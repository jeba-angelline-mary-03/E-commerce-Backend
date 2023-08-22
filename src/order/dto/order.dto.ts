import { Prisma} from "@prisma/client";
import { IsString,Min,IsInt} from "class-validator";

export class CreateOrderDto{
    @IsInt()
    @Min(1)
    userId:number;

    @IsInt()
    @Min(0)
    total_amount: number;

    @IsString()
    status: string;

    @IsString()
    shipping_address: string;

    @IsString()
    payment_method: string;

}