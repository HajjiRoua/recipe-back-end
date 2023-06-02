import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateFeedbackDto {
  @IsNumber()
  readonly userId: number;

  @IsString()
  readonly comment: string;

  @IsUrl()
  readonly imageUrl: string;
}