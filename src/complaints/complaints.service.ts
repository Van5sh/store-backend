import { Injectable } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ComplaintsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createComplaint: CreateComplaintDto) {
    const { title, content, deliveryDate, orderId, userId } = createComplaint;
    const complaint= await this.prisma.complaint.create({
      data: {
        title,
        priority:1,
        content,
        deliveryDate: deliveryDate,
        orderId,
        userId
      }
    })
    const complaintDetail=await this.prisma.complaintDetails.create({
      data: {
        complaintId: complaint.complaintId,
        userId: userId,
        orderId: orderId,
      }
    })
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

