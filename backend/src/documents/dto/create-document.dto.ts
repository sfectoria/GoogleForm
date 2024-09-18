import { ApiProperty } from '@nestjs/swagger';
import {  IsOptional, IsDate } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty()

  documentName: string;
  @ApiProperty()

  documentDescription: string;
  @ApiProperty()

  createdByUserID: string;


}

export class GetDocumentDto {
  userId: string;
  isUserAuth: boolean;
}
