import { SetMetadata } from '@nestjs/common';
import { UserType as RoleType } from 'generated/prisma';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleType[]) => SetMetadata(ROLES_KEY, roles);
