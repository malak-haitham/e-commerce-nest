/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './products/product.module';
import { ProductImagesModule } from './product-images/product-images.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '121212!@',
      database: 'e-commerce-nest',
      autoLoadEntities: true,
      synchronize: true, 
      dropSchema: true,

    }),
    UsersModule,
    ProductModule,
    ProductImagesModule,
    CategoryModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
