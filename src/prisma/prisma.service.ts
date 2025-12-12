import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor(private readonly config: ConfigService) {
    // Read DATABASE_URL from ConfigService (throws if missing)
    const databaseUrl = config.getOrThrow<string>('DATABASE_URL');

    // Create Postgres adapter instance (Prisma v7 requirement)
    const adapter = new PrismaPg({ connectionString: databaseUrl });

    // Pass adapter and optional logging options into PrismaClient
    super({
      adapter,
      log: config.get<boolean>('PRISMA_LOG_QUERIES', false)
        ? ['query', 'info', 'warn', 'error']
        : undefined,
    });

    this.logger.log('PrismaClient constructed with PrismaPg adapter');
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.log('Prisma connected');
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
    this.logger.log('Prisma disconnected');
  }
}
