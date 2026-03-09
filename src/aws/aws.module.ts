import { Module } from '@nestjs/common';
import { AwsController } from './aws.controller';
import { AwsService } from './aws.service';
import { S3Service } from './services/s3.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AwsController],
  providers: [AwsService, S3Service],
  exports: [AwsService],
})
export class AwsModule {}
