import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AppException implements ExceptionFilter {
  private readonly logger = new Logger(AppException.name);

  constructor(private httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorMessage =
      exception instanceof Error ? exception.message : 'Unknown error';
    const errorStack = exception instanceof Error ? exception.stack : undefined;

    this.logger.error(`Exception: ${errorMessage}, stack: ${errorStack}`);

    const response = {
      status: httpStatus,
      message: 'Internal Server Error',
    };

    httpAdapter.reply(ctx.getResponse(), response, httpStatus);
  }
}
