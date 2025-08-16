import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private logger = new Logger(HttpExceptionFilter.name);

  constructor(private readonly configService: ConfigService) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const httpStatus = exception.getStatus();

    this.logger.error(`HTTP Exception: ${exception.message}`, exception.stack);

    response.status(httpStatus).json({
      status: httpStatus,
      message: exception.message,
    });
  }
}
