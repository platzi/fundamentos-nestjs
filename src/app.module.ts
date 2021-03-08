import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService],
})
export class AppModule {}
