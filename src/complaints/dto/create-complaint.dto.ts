import { IsString } from "class-validator";

export class CreateComplaintDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    status: string;

    
}
