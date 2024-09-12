import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsModule);
  const config = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'RABBITMQ_QUEUE',
    },
  });
  await app.startAllMicroservices();
  console.log('boostrap from management');
}
bootstrap();
