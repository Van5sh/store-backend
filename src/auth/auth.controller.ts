import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { $Enums } from 'generated/prisma';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Get('login')
  async login(@Body() body: { userName: string; password: string }) {
    return this.authService.signIn(body.userName, body.password);
  }

  @Post('signup')
  async signup(
    @Body()
    body: {
      userName: string;
      password: string;
      email: string;
      role: $Enums.UserType;
    },
  ) {
    return this.authService.signUp(
      body.userName,
      body.password,
      body.email,
      body.role,
    );
  }
}
