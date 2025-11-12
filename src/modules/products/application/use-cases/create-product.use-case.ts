import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class CreateProductUseCase {
  constructor() {}

  execute(input: CreateProductDto): Promise<ProductDto> {
    return input;
  }
}
