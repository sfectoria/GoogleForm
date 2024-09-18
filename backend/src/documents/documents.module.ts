import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DocumentsController],
  providers: [DocumentsService,PrismaService],
})
export class DocumentsModule {}
