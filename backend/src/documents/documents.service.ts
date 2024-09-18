
import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { Document } from '@prisma/client';  // Import the type from Prisma Client
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  async getDocumentById(id: string): Promise<Document> {
    const document = await this.prisma.document.findUnique({
      where: { id },include:{questions:true,Responses:true}
    });
    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }
    return document;
  }

  async getAllDocuments(userId: string){
    return this.prisma.document.findMany({
      where: { createdByUserID: userId },
      select: {
        documentName: true,
        id: true,
        createdOn: true,
        updatedOn: true,
      },
    });
  }

  async createNewDocument(createDocumentDto: CreateDocumentDto, userId: string) {
    if (!userId) {
      throw new UnauthorizedException('Unauthorized access');
    }

    try {
      // Create a new document using Prisma
      const document = await this.prisma.document.create({
        data: {
          documentName: createDocumentDto.documentName,
          documentDescription: createDocumentDto.documentDescription,
          createdByUserID: userId,  // Use the ID from the authenticated user
        },
      });

      // Return success response with the created document
      return {
        message: 'Document created successfully',
        documentId: document.id,
        document: {
          documentName: document.documentName,
          createdOn: document.createdOn,
          updatedOn: document.updatedOn,
        },
      };
    } catch (error) {
      throw new InternalServerErrorException('Error creating new document');
    }
  }
 
  async updateDocument(updateDocumentDto: UpdateDocumentDto) {

    const { documentId, documentName, documentDescription, questions, updatedOn } = updateDocumentDto;

    console.log(updateDocumentDto,"doc");
   

    // Check if the document exists
    const existingDocument = await this.prisma.document.findUnique({
      where: { id: documentId },
      include: { questions: true },
    });

    if (!existingDocument) {
      throw new NotFoundException('Document not found');
    }



    // Update the document
    const updatedDocument = await this.prisma.document.update({
      where: { id: documentId },
      include:{Responses:true,questions:true},
      data: {
        documentName,
        documentDescription,
        updatedOn,
        questions: {
          create: questions?.map((question) => ({
            question: question.question,
            questionType: question.questionType,
            options: {
              create: question.options?.map((option) => ({
                option: option.option, 
              })),
            },
          })),
        },
      },
    });
    
    
    
    console.log(updatedDocument,"updated");
    

    return updatedDocument;
  }
  async deleteDocument(id: string): Promise<void> {
    await this.prisma.document.delete({
      where: { id },
    });
  }
}
