import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
import { UserResponsesModule } from './user-responses/user-responses.module';

@Module({
  imports: [PrismaModule, UsersModule,AuthModule, DocumentsModule, UserResponsesModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
