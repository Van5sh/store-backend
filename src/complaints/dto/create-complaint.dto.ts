import { IsDateString, IsEnum, IsOptional, IsString, ValidateIf } from "class-validator";
import { ComplaintTypeEnum } from "../complaint-type";

export class CreateComplaintDto {
    @IsString()
    title: string;
    
    @IsString()
    content: string;

    @IsOptional()
    @IsEnum(ComplaintTypeEnum)
    type?: ComplaintTypeEnum;

    @ValidateIf((o) => (o.type ?? ComplaintTypeEnum.general) === ComplaintTypeEnum.relatedToOrder)
    @IsDateString()
    deliveryDate?: string;

    @ValidateIf((o) => (o.type ?? ComplaintTypeEnum.general) === ComplaintTypeEnum.relatedToOrder)
    @IsString()
    orderId?: string;

    @IsString()
    userId: string;

    @ValidateIf((o) => (o.type ?? ComplaintTypeEnum.general) === ComplaintTypeEnum.relatedToOrder)
    @IsString()
    @IsOptional()
    email?: string;
}
