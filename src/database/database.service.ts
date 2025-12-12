import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly config: ConfigService) {
    // Ensure DATABASE_URL gets set before PrismaClient initializes
    const dbUrl = config.get<string>('DATABASE_URL');

    if (!process.env.DATABASE_URL && dbUrl) {
      process.env.DATABASE_URL = dbUrl;
    }

    super({
      log: ['query', 'info', 'warn', 'error'], // optional, remove in production
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
