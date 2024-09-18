import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateUserDto) {
    const { password, ...rest } = dto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return await this.prisma.user.create({
      data: { password: hashedPassword, ...rest },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',  // sorts by newest first
      },
    });
  }

     async findOne(id: string) {
      return await this.prisma.user.findUnique({ where: { id } });
  }

    update(id: string, updateUserDto: UpdateUserDto) {
      return this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });
    }

    remove(id: string) {
      return this.prisma.user.delete({ where: { id } });
  }
  }
//   async findAll() {
//     return await this.prisma.user.findMany();
//   }

//   async findOne(id: string) {
//     return await this.prisma.user.findUnique({ where: { id } });
//   }

//   update(id: string, updateUserDto: UpdateUserDto) {
//     return this.prisma.user.update({
//       where: { id },
//       data: updateUserDto,
//     });
//   }

//   remove(id: string) {
//     return this.prisma.user.delete({ where: { id } });
//   }
// }
