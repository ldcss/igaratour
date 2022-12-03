import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTouristicAreaDto } from './dto/create-touristicArea.dto';
import { TouristicAreaService } from './touristic-area.service';

@Controller('touristic-area')
export class TouristicAreaController {
  constructor(private readonly touristicAreaService: TouristicAreaService) {}
  @Get()
  findAll() {
    return this.touristicAreaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.touristicAreaService.findOne(id);
  }

  @Post()
  create(@Body() createTouristicAreaDto: CreateTouristicAreaDto) {
    return this.touristicAreaService.create(createTouristicAreaDto);
  }
}
