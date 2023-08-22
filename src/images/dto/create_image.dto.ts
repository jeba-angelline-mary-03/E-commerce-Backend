import { Prisma} from "@prisma/client";
import { IsString,Min,IsInt,IsUrl} from "class-validator";

export class CreateImageDto{
    @IsInt()
    @Min(1)
    ProductID: number;

    @IsInt()
    @Min(1)
    imageOrder: number;

    @IsString()
    @IsUrl()
    url: string;
}