import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductUseCase } from '../../application/use-cases/create-product.use-case';
import { CreateProductDto } from '../../application/dto/create-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  @Post()
  createProduct(@Body() input: CreateProductDto) {
    return this.createProductUseCase.execute(input);
  }
}
