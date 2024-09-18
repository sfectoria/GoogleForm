import { Test, TestingModule } from '@nestjs/testing';
import { UserResponsesController } from './user-responses.controller';
import { UserResponsesService } from './user-responses.service';

describe('UserResponsesController', () => {
  let controller: UserResponsesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserResponsesController],
      providers: [UserResponsesService],
    }).compile();

    controller = module.get<UserResponsesController>(UserResponsesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
