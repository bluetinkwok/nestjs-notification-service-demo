import { Test, TestingModule } from '@nestjs/testing';
import { CampignService } from './campign.service';

describe('CampignService', () => {
  let service: CampignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampignService],
    }).compile();

    service = module.get<CampignService>(CampignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
