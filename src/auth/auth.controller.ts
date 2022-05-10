import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService) {}

    // Register a new user
    @Post('/signup')
    signUp(
        @Body()
        SignUpDto: SignUpDto
    ): Promise<{token: string}> {
        return this.authservice.signUp(SignUpDto);
    }

    // Login User
    @Post('/login')
    login(
        @Body()
        LoginDto: LoginDto
    ): Promise<{token: string}> {
        return this.authservice.login(LoginDto);
    }
}
