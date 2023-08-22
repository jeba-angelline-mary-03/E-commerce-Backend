import { Prisma} from "@prisma/client";
import {IsInt,IsUUID,IsString } from "class-validator";

export class CreatePaymentDto{
    @IsInt()
    Orderid:number

    @IsString()
    status:string
}