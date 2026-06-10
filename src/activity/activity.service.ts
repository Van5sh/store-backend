import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ActivityType } from '../../generated/prisma';

@Injectable()
export class ActivityService {
  constructor(private readonly prisma: PrismaService) {}

  async logVendorActivity(params: {
    vendorId: string;
    userId: string;
    type: ActivityType;
    message: string;
  }) {
    const { vendorId, userId, type, message } = params;

    return this.prisma.recentActivity.create({
      data: {
        vendorId,
        userId,
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
    const limit = Math.min(Math.max(params.limit ?? 20, 1), 100);

    const activities = await this.prisma.recentActivity.findMany({
      where: {
        vendorId: params.vendorId,
      },
      include: {
        user: {
          select: {
            userid: true,
            name: true,
            role: true,
          },
        },
      },
      orderBy: [
        { createdAt: 'desc' },
        { id: 'desc' },
      ],
      take: limit,
      ...(params.cursor
        ? {
            cursor: { id: params.cursor },
            skip: 1,
          }
        : {}),
    });

    return {
      activities,
      nextCursor:
        activities.length === limit
          ? activities[activities.length - 1].id
          : null,
    };
  }
}