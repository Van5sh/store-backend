import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { AuthGuard } from '../common/gaurds/auth.guard';

@Controller('complaints')
@UseGuards(AuthGuard)
export class ComplaintsController {
  constructor(private readonly complaintsService: ComplaintsService) {}

  @Post()
  async create(@Body() createComplaintDto: CreateComplaintDto) {
    return this.complaintsService.createComplaint(createComplaintDto);
  }
}
