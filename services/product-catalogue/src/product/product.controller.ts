import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';


@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    list() {
        return this.productService.list()
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }
}
