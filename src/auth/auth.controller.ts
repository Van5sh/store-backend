import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { $Enums } from '@prisma/client';
import { Public } from 'src/common/decorators/public.decorator';

@Public()
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
    @Body()
    body: {
      name: string;
      userName: string;
      password: string;
      email: string;
      role: $Enums.UserType;
    },
  ) {
    const name = body.name ?? body.userName;
    return this.authService.signUp(name, body.password, body.email, body.role);
  }
}
