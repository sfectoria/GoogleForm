import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';


export const jwtSecret = 'sfectoria07112023';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'sfectoria07112023',
      signOptions: { expiresIn: '2h' }, // e.g. 7d, 24h
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,PrismaService],
})
export class AuthModule {}
