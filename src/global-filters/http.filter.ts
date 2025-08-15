import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    const message = exception.message || 'Internal server error';
    const code =
      exception instanceof HttpException ? exception.getStatus() : 500;

    response.status(status).json({
      status: 'errr',
      statusCode: code,
      message,
    });
  }
}
