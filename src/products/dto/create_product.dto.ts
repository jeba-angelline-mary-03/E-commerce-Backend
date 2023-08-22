import { Prisma} from "@prisma/client";
import { isUUID,IsString,IsNotEmpty,IsInt,MaxLength, Length, IsUUID} from "class-validator";

export class CreateProductDto{
    @IsUUID()
    @IsNotEmpty({message:'productSKU must not be empty'})
    productSKU: string;

    @IsString({message:'ProductName must be a string'})
    @IsNotEmpty({message:'productName must not be empty'})
    @Length(3,25,{message:'productName must be between 3 to 25'})
    productName:string;
  
    @IsString({message:'ProductDisplayName must be a string'})
    @IsNotEmpty({message:'productDisplayName must not be empty'})
    @Length(3,25,{message:'productDisplayName must be between 3 to 25'})
    productDisplayName:string;

    @IsInt({message:'categoryID must be a number'})
    @IsNotEmpty({message:'categoryID must not be empty'})
    categoryID:number;

    @IsInt({message:'ProductPrice must be a number'})
    @IsNotEmpty({message:'productPrice must not be empty'})
    productPrice:number;

    @IsInt({message:'StockID must be a number'})
    @IsNotEmpty({message:'stockID must not be empty'})
    stockID:number;
   
    @IsString({message:'productDescription must be a string'})
    @MaxLength(100,{message:'max length of product description is 100 char'})
    @IsNotEmpty({message:'productDescription must not be empty'})
    productDescription:string;
}