/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductUseCase } from '../../application/use-cases/create-product.use-case';
import { CreateProductDto } from '../../application/dto/create-product.dto';
import { ProductDto } from '@modules/products/application/dto/product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller()
export class ProductsController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  @ApiOperation({
    summary: 'Create a new product',
    description: 'Creates a new product with the given title and quantity.',
  })
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
    type: ProductDto,
  })
  @Post()
  createProduct(@Body() input: CreateProductDto): Promise<ProductDto> {
    return this.createProductUseCase.execute(input);
  }
}
