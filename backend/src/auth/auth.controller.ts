import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
import { request } from 'http';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@ApiTags('auth')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post()
  login(@Body() dto: CreateAuthDto) {
    return this.authService.login(dto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @ApiSecurity('apiKey') // yzid chrouleya fl swagger
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async findMe(@Request() req) {
    console.log(req.user, 'ahla');
    return await this.authService.getMyInfo(
      req.get('Authorization').replace('Bearer ', ''),
    ); // token with out bearer and space // type mtaa token howa bearer
  }
  @Get('/getOne/:id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }
  @Get('/token/:token')
  getMyInfo(@Param('token') token: string) {
    return this.authService.getMyInfo(token);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
  @Patch(':id')
  updateMe(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateMe(updateUserDto,id);
  }
}
