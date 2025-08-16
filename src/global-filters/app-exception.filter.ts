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
export class AppExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AppExceptionFilter.name);

  constructor(private httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorMessage =
      exception instanceof Error ? exception.message : 'Internal server error';
    const errorStack =
      exception instanceof Error ? exception.stack : 'No stack trace available';

    this.logger.error(`Exception thrown: ${errorMessage}, ${errorStack}`);

    const responseBody = {
      status: httpStatus,
      message: 'Internal Server Error',
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
