import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body: { userName: string; password: string }) {
    return this.authService.signIn(body.userName, body.password);
  }

  @Post('signup')
  async signup(
    @Body() body: { userName: string; password: string; email: string },
  ) {
    return this.authService.signUp(
        body.userName,
        body.password,
        body.email
    )
  }
}
