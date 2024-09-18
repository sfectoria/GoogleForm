import { Injectable } from '@nestjs/common';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { UpdateUserResponseDto } from './dto/update-user-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserResponsesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserResponseDto: CreateUserResponseDto) {
    return 'This action adds a new userResponse';
  }
  async saveUserResponse(documentId: string, responses: any) {
    
  const response = await this.prisma.responses.create({
    data: {
      documentId,
      ...responses,  // Spread the userResponse object, ensuring it does not include userId
    }
  });

    // Emitting via socket would be handled in a separate service or controller
    return response;
  }

  async getAllResponsesByDocumentId(documentId: string) {
    return await this.prisma.responses.findMany({
      where: { documentId },
      select: {
        id: true,
        answers: true,
        submittedOn: true,
        documentId: true
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} userResponse`;
  }

  update(id: number, updateUserResponseDto: UpdateUserResponseDto) {
    return `This action updates a #${id} userResponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} userResponse`;
  }
}
