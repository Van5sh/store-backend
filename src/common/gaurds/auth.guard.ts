import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { UserType } from 'generated/prisma';

export interface JwtPayload {
  username?: string;
  role?: UserType;
  admin?: boolean;
  customer?: boolean;
  vendor?: boolean;
  iat?: number;
  exp?: number;
  [key: string]: unknown;
}

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // allow @Public() routes
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      this.logger.debug('Missing bearer token');
      throw new UnauthorizedException('Authorization token not found');
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token);
      if (!payload || !payload.role) {
        this.logger.debug('Token missing role claim');
        throw new UnauthorizedException('Token missing role information');
      }

      (request as Request & { user?: JwtPayload }).user = payload;
      return true;
    } catch (err) {
      this.logger.debug('Token verification failed', err);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const raw =
      request.headers.authorization ?? request.headers['Authorization'];
    if (!raw || Array.isArray(raw)) return undefined;

    const parts = raw.trim().split(/\s+/);
    if (parts.length < 2) return undefined;
    const scheme = parts[0].toLowerCase();
    const token = parts.slice(1).join(' ');
    return scheme === 'bearer' ? token : undefined;
  }
}
