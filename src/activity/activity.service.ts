import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ActivityType } from '../../generated/prisma';

@Injectable()
export class ActivityService {
  constructor(private readonly prisma: PrismaService) {}

  async logVendorActivity(params: {
    vendorId: string;
    type: ActivityType;
    message: string;
  }) {
    const { vendorId, type, message } = params;
    return this.prisma.recentActivity.create({
      data: {
        vendorId,
        type,
        message,
      },
    });
  }

  async getVendorRecentActivity(params: {
    vendorId: string;
    limit?: number;
    cursor?: string;
  }) {
    const { vendorId } = params;
    const limit = Math.min(Math.max(params.limit ?? 20, 1), 100);
    const cursor = params.cursor?.trim() || undefined;

    const activities = await this.prisma.recentActivity.findMany({
      where: { vendorId },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      take: limit,
      ...(cursor
        ? {
            cursor: { id: cursor },
            skip: 1,
          }
        : {}),
    });

    const nextCursor =
      activities.length === limit ? activities[activities.length - 1]?.id : null;

    return { activities, nextCursor };
  }
}
