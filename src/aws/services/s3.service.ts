import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { url } from 'inspector';

@Injectable()
export class S3Service {
    private bucketName: string;
    private region: string;
    private S3Client: S3Client;

    constructor(
        private prisma:PrismaService,
        private config:ConfigService
    ) {
        this.bucketName = this.config.getOrThrow<string>('AWS_BUCKET_NAME');
        this.region = this.config.getOrThrow<string>('AWS_S3_REGION');
        this.S3Client = new S3Client({
            region: this.region,
            credentials: {
                accessKeyId: this.config.getOrThrow<string>('AWS_ACCESS_KEY_ID'),
                secretAccessKey: this.config.getOrThrow<string>('AWS_SECRET_ACCESS_KEY')
            }
        });
    }
    async uploadFile(file: Express.Multer.File) {
        const key=`products/${randomUUID()}-${file.originalname}`        
        try {
            await this.S3Client.send(new PutObjectCommand({
                Bucket: this.bucketName,
                Key:key,
                Body: file.buffer,
                ContentType: file.mimetype,
                ACL:'public-read'
            }))
            const fileUrl = `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${file.originalname}`;
            return {
                key,
                url:fileUrl
            }
        } catch (error) {
            console.error('Error uploading file to S3:', error);
            throw new Error('Failed to upload file');
        }
    }
}