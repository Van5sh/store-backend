import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersService,
    JwtModule.register({
      global: true,
      secret: '',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
