import { Prisma} from "@prisma/client";
import { IsNumberString,Length,IsIn,Matches,IsEmail,IsString,MaxLength,MinLength,IsBoolean,IsNotEmpty,IsOptional } from "class-validator";

export class CreateUserDto{
    
    @IsNotEmpty()
    @IsEmail({},{message:'Invalid email format'})
    userEmail:string;

    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',})
    @MinLength(6,{message:'Password should be more than 6 char'})
    userPassword:string; 

    @IsString({message:'userRole must be string'})
    @IsNotEmpty()
    @IsIn(['admin', 'moderator', 'user'], { message: 'Invalid user role.' })
    userRole:string;

    @IsString({message:'userStatus must be string'})
    @IsNotEmpty()
    @IsIn(['active', 'inactive', 'suspended'], { message: 'Invalid user status.' })
    userStatus:string;

    @IsBoolean({message:'userLoggedIn must be a true or false'})
    @IsOptional()
    isUserLoggedIn:boolean;
  
    @IsNotEmpty()
    @IsNumberString({ no_symbols: true }, { message: 'Invalid OTP format. Must be numeric digits only.' })
    @Length(6, 6, { message: 'OTP must be exactly 6 digits long.' })
    otp:string;

    otpExpiresAt:Date;
    resetPasswordKey:boolean;
}
