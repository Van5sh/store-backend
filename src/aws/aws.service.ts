import { S3Service } from './services/s3.service';
import { SesService } from "./services/ses.service";
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AwsService {
    constructor(
        private readonly prisma:PrismaService,
        private s3Service: S3Service,
        private sesService: SesService
    ) {}

    async uploadFileToS3(file: Express.Multer.File) {
        return this.s3Service.uploadFile(file);
    }

    async deleteFileFromS3(key: string) {
        return this.s3Service.deleteFile(key);
    }
    async sendEmailFromSES(to: string, subject: string, body: string) {
        return this.sesService.sendEmail(to, subject, body);
    }
} 
