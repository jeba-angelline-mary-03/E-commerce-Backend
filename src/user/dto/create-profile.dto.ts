import { Prisma} from "@prisma/client";
import { IsDateString,Matches,IsEmail,IsString,MaxLength,MinLength,IsBoolean,IsNotEmpty,IsOptional, isString, IsInt, IsDate, Length } from "class-validator";

export class CreateProfileDto{
    @IsString({message:'userFirstName must be string'})
    @Length(2,50,{message:'userFirstName must be max of 25char'})
    @IsNotEmpty({message:'userFirstName must not be empty'})
    @Matches(/^[a-zA-Z]+$/, {message: 'First name must contain only letters.',})
    userFirstName:string;

    @IsString({message:'userLastName must be string'})
    @Length(2,50,{message:'userLastName must be max of 25char'})
    @IsNotEmpty({message:'userLastName must not be empty'})
    @Matches(/^[a-zA-Z]+$/, {message: 'Last name must contain only letters.',})
    userLastName:string;
   
    @IsString({message:'street must be string'})
    @Length(3,50,{message:'maximum char in street is 50'})
    @IsNotEmpty({message:'street must not be empty'})
    street:string;

    @IsString({message:'city must be a string'})
    @IsNotEmpty({message:'city must not be empty'})
    @Length(3,50,{message:'maximum char in city is 50'})
    @Matches(/^[a-zA-Z0-9\s\-,]+$/, {message: 'Invalid city name format.', })
    city:string;
    
    @IsString({message:'state must be a string'})
    @IsNotEmpty({message:'state must not be empty'})
    @Length(3,50,{message:'maximum char in state is 50'})
    @Matches(/^[a-zA-Z0-9\s\-,]+$/, {message: 'Invalid state name format.', })
    state:string;

    @IsString({message:'country must be a string'})
    @IsNotEmpty({message:'country must not be empty'})
    @Length(3,50,{message:'maximum char in country is 50'})
    @Matches(/^[a-zA-Z0-9\s\-,]+$/, {message: 'Invalid country name format.', })
    country:string;

    
    @IsString({message:'zipcode must be a string'})
    @IsNotEmpty({message:'zipcode must not be empty'})
    @Length(5, 10,{message:'length of zipcode is between 5 to 10'})
    @Matches(/^[0-9]+$/, {message: 'Invalid zipcode format.'})
    zipcode:string;

    @IsNotEmpty({message:'phone number must not be empty'})
    @MaxLength(10,{message:'phone no must be maximum of 10char'})
    @Length(10, 20,{message:'length of phone number is invalid'})
    @Matches(/^\+?[0-9]+$/, {message: 'Invalid phone number format.',})
    phoneNumber:string;

    @IsNotEmpty({message:'userProfilePictureUrl must not be empty'})
    @IsString({message:'userProfilePictureUrl must be a string'})
    userProfilePictureUrl:string;

    @IsNotEmpty({message:'DateOfBirth must not be empty'})
    @IsDate({message:'DateOfBirth must be a date'})
    @IsNotEmpty()
    dateOfBirth:Date;

    @IsNotEmpty({message:'userAuth must not be empty'})
    @IsInt({message:'userAuth must be a number'})
    userAuth:number;
}