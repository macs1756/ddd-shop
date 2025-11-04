import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class CreateProductUseCase {
  constructor() {}

  execute(input: CreateProductDto) {
    return input;
  }
}
