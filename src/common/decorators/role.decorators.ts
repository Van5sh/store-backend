import { SetMetadata } from '@nestjs/common';
import { UserType as RoleType } from 'generated/prisma';

export const Roles = (...roles: RoleType[]) => SetMetadata('roles', roles);
