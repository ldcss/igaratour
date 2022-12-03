import { IsString } from 'class-validator';
export class CreateTouristicAreaDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly imageUrl: string;

  @IsString()
  readonly userId: number;
}
