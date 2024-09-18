// src/documents/dto/update-document.dto.ts

import { IsString, IsUUID, IsOptional, IsArray, ValidateNested, IsObject, IsBoolean, IsInt, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

class OptionDto {
  
  id: string;

  @IsString()
  option: string;
}

class QuestionDto {
  
  id: string;

  @IsOptional()
  @IsString()
  question?: string;

  @IsOptional()
  @IsString()
  questionType?: string;

  @IsOptional()
  @IsBoolean()
  open?: boolean;

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @IsBoolean()
  answer?: boolean;

  @IsOptional()
  @IsInt()
  points?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OptionDto)
  options: OptionDto[];
}

export class UpdateDocumentDto {
  
  documentId: string;

  @IsString()
  documentName: string;

  @IsString()
  documentDescription: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions: QuestionDto[];

  @IsOptional()
  @IsDate()
  updatedOn?: Date;
}
