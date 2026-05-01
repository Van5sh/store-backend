import { S3Service } from './services/s3.service';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AwsService {
    constructor(
        private readonly prisma:PrismaService,
        private s3Service: S3Service
    ) {}

    async uploadFileToS3(file: Express.Multer.File) {
        return this.s3Service.uploadFile(file);
    }

    async deleteFileFromS3(key: string) {
        return this.s3Service.deleteFile(key);
    }
} 
