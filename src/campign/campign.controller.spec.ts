import { Test, TestingModule } from '@nestjs/testing';
import { CampignController } from './campign.controller';

describe('CampignController', () => {
  let controller: CampignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampignController],
    }).compile();

    controller = module.get<CampignController>(CampignController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
