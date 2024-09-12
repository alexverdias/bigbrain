import { Module } from '@nestjs/common';

import { ConfigModule } from '@app/common';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ConfigModule, OrdersModule],
})
export class NotificationsModule {}
