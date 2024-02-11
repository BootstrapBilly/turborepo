import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    @ApiOperation({ summary: 'List all products', operationId: 'listProducts' })
    list() {
        return this.productService.list()
    }

    @ApiOperation({ summary: 'Create a new product', operationId: 'createProduct' })
    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }
}
