import { Prisma} from "@prisma/client";
import { IsDateString,Matches,IsEmail,IsString,MaxLength,MinLength,IsBoolean,IsNotEmpty,IsOptional, isString, IsInt, IsDate, Length } from "class-validator";

export class CreateCategoryDto{
    @IsString({message:'categoryName must be string'})
    @Length(2,50,{message:'categoryName must be max of 25char'})
    @IsNotEmpty({message:'categoryName must not be empty'})
    @Matches(/^[a-zA-Z]+$/, {message: 'Category name must contain only letters.',})
    categoryName:string;

    @IsString({message:'categoryDescription must be string'})
    @Length(2,50,{message:'categoryDescription must be max of 25char'})
    @IsNotEmpty({message:'categoryDescription must not be empty'})
    Description:string;
}