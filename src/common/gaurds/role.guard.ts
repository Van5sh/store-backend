import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { UserType, User } from 'generated/prisma';
import { Roles } from '../decorators/role.decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const rolesType = this.reflector.get<UserType[]>(
      Roles,
      context.getHandler(),
    );
    if (!rolesType) {
      return false;
    }
    const request = context.switchToHttp().getRequest<{ user?: User }>();
    const user = request.user;
    if (!user) {
      return false;
    }
    return rolesType.includes(user.role);
  }
}
