import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {

    @IsNotEmpty()
    @IsEmail( {}, {message: 'Please senter correct email address'} )
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}