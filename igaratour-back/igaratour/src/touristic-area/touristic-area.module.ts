import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TouristicArea from './entities/touristicArea.entity';
import { TouristicAreaController } from './touristic-area.controller';
import { TouristicAreaService } from './touristic-area.service';

@Module({
  imports: [TypeOrmModule.forFeature([TouristicArea])],
  controllers: [TouristicAreaController],
  providers: [TouristicAreaService],
})
export class TouristicAreaModule {}
