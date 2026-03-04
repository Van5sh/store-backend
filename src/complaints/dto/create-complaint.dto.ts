import { IsString, IsDateString } from "class-validator";

export class CreateComplaintDto {
    @IsString()
    title: string;
    
    @IsString()
    content: string;

    @IsDateString()
    deliveryDate: string;

    @IsString()
    orderId: string;

    @IsString()
    userId: string;
}

