import { IsDateString, IsEnum, IsOptional, IsString, ValidateIf } from "class-validator";
import { ComplaintType } from "../../../generated/prisma";

export class CreateComplaintDto {
    @IsString()
    title: string;
    
    @IsString()
    content: string;

    @IsOptional()
    @IsEnum(ComplaintType)
    type?: ComplaintType;

    @ValidateIf((o) => (o.type ?? ComplaintType.general) === ComplaintType.relatedToOrder)
    @IsDateString()
    deliveryDate?: string;

    @ValidateIf((o) => (o.type ?? ComplaintType.general) === ComplaintType.relatedToOrder)
    @IsString()
    orderId?: string;

    @IsString()
    userId: string;

    @IsString()
    email?: string;
}
