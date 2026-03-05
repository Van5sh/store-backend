import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ComplaintTypeEnum } from './complaint-type';

@Injectable()
export class ComplaintsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createComplaint: CreateComplaintDto) {
    return this.createComplaint(createComplaint);
  }

  async createComplaint(createComplaint: CreateComplaintDto) {
    const { title, content, deliveryDate, orderId, userId, email } = createComplaint;
    const normalizedUserId = userId?.trim();
    if (!normalizedUserId) {
      throw new BadRequestException('userId is required');
    }
    const normalizedOrderId = orderId?.trim() || undefined;
    const type = createComplaint.type ?? ComplaintTypeEnum.general;

    if (type === ComplaintTypeEnum.relatedToOrder) {
      if (!normalizedOrderId) {
        throw new BadRequestException('orderId is required for order-related complaints');
      }
      if (!deliveryDate) {
        throw new BadRequestException('deliveryDate is required for order-related complaints');
      }
      if (!email?.trim()) {
        throw new BadRequestException('email is required for order-related complaints');
      }
    }

    const complaint = await this.prisma.complaint.create({
      data: {
        title,
        priority: 1,
        content,
        ...(deliveryDate ? { deliveryDate: new Date(deliveryDate) } : {}),
        orderId: normalizedOrderId,
        userId: normalizedUserId,
        type,
      }
    });
    if (type === ComplaintTypeEnum.relatedToOrder && normalizedOrderId) {
      await this.prisma.complaintDetails.create({
        data: {
          complaintId: complaint.complaintId,
          userId: normalizedUserId,
          orderId: normalizedOrderId,
          email: email!.trim(),
        },
      });
    }
    return complaint;
  }
  
  async AllComplaints() {
    return this.prisma.complaint.findMany();
  }

  async findComplaintByUserId(userId: string) {
    if (!userId) {
      return 'UserID is required';
    }
    return this.prisma.complaint.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
  async findComplaintByOrderId(orderId: string) {
    if (!orderId) {
      return 'OrderID is required';
    }
    return this.prisma.complaint.findMany({
      where: { orderId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
