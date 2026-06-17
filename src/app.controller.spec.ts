import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getUsers: jest.fn().mockResolvedValue({
              message: 'Users!',
              users: [{ name: 'Aya' }, { name: 'Ahmed' }],
            }),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return all users from DB', async () => {
    const result = await appController.getUsers();

    expect(result.message).toBe('Users all from DB!');
    expect(Array.isArray(result.users)).toBe(true);
  });
});
