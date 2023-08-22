import { Prisma} from "@prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateStockDto{

    @IsInt({message:"stock quantity must be a number"})
    @IsNotEmpty({message:"stockQuantity must not be empty"})
    actualStockQuantity:number;

    @IsInt({message:"stock quantity must be a number"})
    @IsNotEmpty({message:"stockQuantity must not be empty"})
    FloatingStockQuantity:number;

}