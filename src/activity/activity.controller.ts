import {
  Controller,
  Get,
  Query,
  Req,
  UseFilters,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { HttpExceptionFilter } from '../global-filters/http-exception.filter';
import { AuthGuard, JwtPayload } from '../common/gaurds/auth.guard';
import { Roles } from '../common/decorators/role.decorators';

@Controller('activity')
@UseFilters(new HttpExceptionFilter())
@UseGuards(AuthGuard)
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get('recent')
  @Roles('vendor', 'admin')
  async recent(
    @Req() req: { user?: JwtPayload },
    @Query('limit') limit?: string,
    @Query('cursor') cursor?: string,
  ) {
    const vendorId = req.user?.userId;
    if (!vendorId) throw new UnauthorizedException('Missing user id');

    return this.activityService.getVendorRecentActivity({
      vendorId,
      limit: limit != null ? Number(limit) : undefined,
      cursor,
    });
  }
}
