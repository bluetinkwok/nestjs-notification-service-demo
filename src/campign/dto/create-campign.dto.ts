import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Category, Channel } from "../schemas/campign.schema";

export class CreateCampignDTO {
    @IsNotEmpty()
    @IsString({message: 'Please input string for name'})
    readonly name: string;

    @IsNotEmpty()
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