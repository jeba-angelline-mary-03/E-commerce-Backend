import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StockModule } from './stocks/stocks.module';
import { ProductModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { ImageModule } from './images/image.module';
import { OrderItemModule } from './order_item/order_item.module';
import { PaymentModule } from './payment/payment.module';


@Module({
  controllers: [],
  providers: [],
  imports: [UserModule,
    ProductModule,
    StockModule,
    CategoryModule,
    OrderModule,
  ImageModule,
OrderItemModule,
PaymentModule
]
})
export class AppModule {}
