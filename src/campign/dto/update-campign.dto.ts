import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Category, Channel } from "../schemas/campign.schema";

export class UpdateCampignDTO {
    @IsNotEmpty()
    @IsString({message: 'Please input string for name'})
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsEnum(Category, { message: 'Must be allowed value in Category'})
    readonly category: Category;

    @IsNotEmpty()
    @IsEnum(Channel, { message: 'Must be allowed value in Channel'})
    readonly channel: Channel;

    @IsNotEmpty()
    @IsString()
    readonly sendAt: string;

    readonly image?: object[];
}