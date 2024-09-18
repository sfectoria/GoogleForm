import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma:PrismaService,
    private readonly jwt:JwtService,
  ) {}
  async login(dto: CreateAuthDto) {
    // Destructure email and password from dto
    const { email, password } = dto;
  
    // Check if both email and password are provided
    if (!email || !password) {
      throw new HttpException(
        'Please enter all fields',
        HttpStatus.BAD_REQUEST
      );
    }
  
    try {
      // Find the user by email in the database
      const user = await this.prisma.user.findUnique({
        where: { email },
      });
  
      // If user is not found, return an error response
      if (!user) {
        throw new HttpException(
          'User not found',
          HttpStatus.NOT_FOUND
        );
      }
  
      // Destructure necessary fields for token payload
      const { id, username, email: userEmail, password: hashedPassword } = user;
  
      // Compare passwords
      const isMatched = await bcrypt.compare(password, hashedPassword);
  
      if (!isMatched) {
        throw new HttpException(
          'Incorrect password',
          HttpStatus.UNAUTHORIZED
        );
      }
  
      // Generate a JWT token
      const token = this.jwt.sign(
        { userId: id, username, email: userEmail }, // Payload
        {
          secret: process.env.SECRET_KEY, // Secret key
          expiresIn: '1d' // Token expiration time
        }
      );
      
      // Return successful login response
      return {
        message: 'Logged in successfully',
        token,
        userId: id,
        data: { email: userEmail, username },
      };
    } catch (error) {
      // Log the error and rethrow or send error response
      throw new HttpException(
        'Unable to sign in user',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
  
  

async getMyInfo(token:string){
  console.log(token,'jit ml token'); 
  const myInfo = await this.jwt.decode(token)
  console.log(myInfo,'ena ml myinfo');
  return myInfo
}

async updateMe(dto: UpdateUserDto, id: string) {
  if (dto['password']) {
    throw new HttpException(
      'Vous ne pouvez pas modifier le mot de passe',
      HttpStatus.BAD_REQUEST,
    );
  }

  if (dto.email) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        email: dto.email,
        id: {
          not : id, // Exclude the current user
        },
      },
    });

    if (existingUser) {
      throw new HttpException(
        "L'adresse e-mail est déjà utilisée",
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  const updatedUser = await this.prisma.user.update({
    where: { id: id },
    data: dto,
  });

  const { password, ...rest } = updatedUser;
  const token = this.jwt.sign(rest);
  return token;
  }

findAll() {
  return `This action returns all auth`;
}

findOne(id: number) {
  return `This action returns a #${id} auth`;
}

update(id: number, updateAuthDto: UpdateAuthDto) {
  return `This action updates a #${id} auth`;
}

remove(id: number) {
  return `This action removes a #${id} auth`;
}
}
