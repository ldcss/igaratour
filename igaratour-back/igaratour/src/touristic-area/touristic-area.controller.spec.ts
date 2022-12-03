import { Test, TestingModule } from '@nestjs/testing';
import { TouristicAreaController } from './touristic-area.controller';

describe('TouristicAreaController', () => {
  let controller: TouristicAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TouristicAreaController],
    }).compile();

    controller = module.get<TouristicAreaController>(TouristicAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
