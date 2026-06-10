import {
  Controller,
  Get,
  Query,
  Req,
  UnauthorizedException,
  UseFilters,
  UseGuards,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { HttpExceptionFilter } from '../global-filters/http-exception.filter';
import { AuthGuard, JwtPayload } from '../common/gaurds/auth.guard';
import { Roles } from '../common/decorators/role.decorators';

@Controller('activity')
@UseGuards(AuthGuard)
@UseFilters(new HttpExceptionFilter())
export class ActivityController {
  constructor(
    private readonly activityService: ActivityService,
  ) {}

  @Get('recent')
  @Roles('vendor', 'admin')
  async recent(
    @Req() req: { user?: JwtPayload },
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe)
    limit: number,
    @Query('cursor')
    cursor?: string,
  ) {
    const vendorId = req.user?.userId;

    if (!vendorId) {
      throw new UnauthorizedException('Missing authenticated user');
    }

    return this.activityService.getVendorRecentActivity({
      vendorId,
      limit,
      cursor,
    });
  }
}