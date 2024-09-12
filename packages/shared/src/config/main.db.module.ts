import { Module } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/main';

@Module({
  providers: [
    {
      provide: 'PrismaClient',
      useValue: new PrismaClient(),
    },
  ],
  exports: ['PrismaClient'],
})
export class MainDbModule {}
