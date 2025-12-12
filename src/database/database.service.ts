// src/prisma/database.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma } from '@prisma/client';

@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(private readonly prisma: PrismaService) {}

  // expose prisma client if you need direct access
  get client(): PrismaService {
    return this.prisma;
  }

  async transaction<T>(
    work: (tx: Prisma.TransactionClient) => Promise<T>,
  ): Promise<T> {
    this.logger.debug('Starting transaction');
    return this.prisma.$transaction(work);
  }

  // example helper: run simple query (you can add more helpers as needed)
  async ping(): Promise<boolean> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (err) {
      this.logger.error('Database ping failed', err);
      return false;
    }
  }
}
