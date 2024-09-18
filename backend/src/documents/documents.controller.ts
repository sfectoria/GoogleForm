import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException, Put, HttpCode, HttpStatus, UseGuards, Req, Res, Request, BadRequestException } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@ApiTags("documents")

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get(':id')
  async getDocumentById(@Param('id') id: string) {
  
    return this.documentsService.getDocumentById(id);
  }

  @Post('all')
  async getAllDocuments(@Body() body: { userId: string}) {
    
    return this.documentsService.getAllDocuments(body.userId);
  }

  @ApiSecurity('apiKey') // yzid chrouleya fl swagger
  @UseGuards(JwtAuthGuard)
  @Post()
  async createDocument(
    @Body() createDocumentDto: CreateDocumentDto, // The DTO to validate the body of the request
    @Request() req: any,  // The authenticated user's data is extracted from the request object
  ) {
    const userId = req.user.id;  // Extracting the user's ID from the request (injected by the guard)
    return this.documentsService.createNewDocument(createDocumentDto, userId);
  }

  @ApiSecurity('apiKey') // yzid chrouleya fl swagger
  

  @UseGuards(JwtAuthGuard) // Ensure user is authenticated
  @Put()
  async updateDocument(
   
    @Body() updateDocumentDto: UpdateDocumentDto,
    @Req() req: any, // Modify to your user extraction logic
  ) {
    const userId = req.user.id; // Extract user ID from request
    try {
      const updatedDocument = await this.documentsService.updateDocument(updateDocumentDto);
      return { code: 200, message: 'Document updated successfully', data: updatedDocument };
    } catch (error) {
      // Handle error appropriately
      throw new BadRequestException('Unable to update document');
    }
  }
  @Delete(':id')
  async deleteDocument(@Param('id') id: string, @Body('isUserAuth') isUserAuth: boolean) {
    if (!isUserAuth) {
      throw new UnauthorizedException('Unauthorized access');
    }
    await this.documentsService.deleteDocument(id);
    return { message: 'Document deleted successfully', documentId: id };
  }
}
