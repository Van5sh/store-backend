import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderStatus } from '../../generated/prisma';
import { CreateOrderDto } from './dto/create-order.dto';

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
  async getOrdersByUserId(@Param('id') id: string) {
    try {
      return await this.orderService.getOrdersByUserId(id);
    } catch (error) {
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
  ) {
    try {
      return await this.orderService.getHistoryOrdersByUserId(
        id,
        status as OrderStatus,
      );
    } catch (error) {
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
}
