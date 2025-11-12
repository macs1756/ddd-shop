import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min, IsUUID } from 'class-validator';

export class ProductDto {
  @ApiProperty({
    example: 'a2b1c4d5-e6f7-8901-2345-6789abcdef01',
    description: 'Унікальний ідентифікатор продукту',
  })
  @IsUUID()
  id?: string;

  @ApiProperty({
    example: 'Beautiful Knife',
    description: 'Title for product',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 10,
    description: 'It demonstrates how much we have of this product.',
    minimum: 0,
  })
  @IsInt()
  @Min(0)
  quantity: number;
}
