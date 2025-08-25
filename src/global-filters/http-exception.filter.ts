import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  constructor(private configService: ConfigService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const httpStatus = exception.getStatus();

    this.logger.error(
      `Exception: ${exception.message}, statusCode: ${httpStatus}, status: error`,
    );

    response.status(httpStatus).json({
      status: 'status',
      statusCode: httpStatus,
      message: exception.message,
    });
  }
}
