import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderStatus } from '../../generated/prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtPayload } from '../common/gaurds/auth.guard';
import { Request } from 'express';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('latest')
  async getLatestOrdersPlaced(@Query('limit') limit?: string) {
    const parsedLimit =
      limit && Number.isFinite(Number(limit)) ? Number(limit) : undefined;
    try {
      return await this.orderService.getLatestOrdersPlaced(parsedLimit);
    } catch (error) {
      throw new HttpException(
        `Error fetching latest orders: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('user/:id')
  async getOrdersByUserId(@Param('id') id: string, @Req() req: Request) {
    try {
      const userId = (req as Request & { user?: JwtPayload }).user?.userId;
      if (!userId) {
        throw new UnauthorizedException('User is not authenticated');
      }
      if (userId !== id) {
        throw new ForbiddenException('You can only access your own orders');
      }
      return await this.orderService.getOrdersByUserId(userId);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        `Error fetching orders by user ID: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('user/:id/history/:status')
  async getHistoryOrdersByUserId(
    @Param('id') id: string,
    @Param('status') status: string,
    @Req() req: Request,
  ) {
    try {
      const userId = (req as Request & { user?: JwtPayload }).user?.userId;
      if (!userId) {
        throw new UnauthorizedException('User is not authenticated');
      }
      if (userId !== id) {
        throw new ForbiddenException('You can only access your own order history');
      }
      return await this.orderService.getHistoryOrdersByUserId(
        userId,
        status as OrderStatus,
      );
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        `Error fetching history orders by user ID: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    try {
      const quantity =
        createOrderDto.quantity ?? createOrderDto.quantiy ?? 0;
      return await this.orderService.createOrder(
        createOrderDto.productId,
        quantity,
        createOrderDto.userId,
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      throw new HttpException(
        `Error creating order: ${errorMessage}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get('user/:id/active')
  async getActiveOrdersByUserId(@Param('id') id: string, @Req() req: Request) {
    try {
      const userId = (req as Request & { user?: JwtPayload }).user?.userId;
      if (!userId) {
        throw new UnauthorizedException('User is not authenticated');
      }
      if (userId !== id) {
        throw new ForbiddenException('You can only access your own active orders');
      }
      return await this.orderService.getActiveOrdersByUserId(userId);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        `Error fetching active orders by user ID: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
}
