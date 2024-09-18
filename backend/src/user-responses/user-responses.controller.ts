import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UserResponsesService } from './user-responses.service';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { UpdateUserResponseDto } from './dto/update-user-response.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user-responses')
export class UserResponsesController {
  constructor(private readonly userResponsesService: UserResponsesService) {}

 // Controller
@Post()
@HttpCode(HttpStatus.CREATED)
async saveUserResponse(@Body() body: any) {
  const { documentId, ...responses } = body; // Destructure to exclude userId if present
  const response = await this.userResponsesService.saveUserResponse(documentId, responses);
  return {
    message: 'Response saved successfully',
    documentId: response.id
  };
}

@Get(':documentId')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Get all responses for a specific document' })
@ApiResponse({ status: 200, description: 'List of responses for the document.' })
@ApiResponse({ status: 404, description: 'Document not found.' })
async getAllResponsesByDocumentId(@Param('documentId') documentId: string) {
  const responses = await this.userResponsesService.getAllResponsesByDocumentId(documentId);
  return {
    documentId,
    totalResponses: responses.length,
    responses
  };
}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userResponsesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserResponseDto: UpdateUserResponseDto) {
    return this.userResponsesService.update(+id, updateUserResponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userResponsesService.remove(+id);
  }
}
