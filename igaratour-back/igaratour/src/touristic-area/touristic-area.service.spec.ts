import { Test, TestingModule } from '@nestjs/testing';
import { TouristicAreaService } from './touristic-area.service';

describe('TouristicAreaService', () => {
  let service: TouristicAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TouristicAreaService],
    }).compile();

    service = module.get<TouristicAreaService>(TouristicAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
