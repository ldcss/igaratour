import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTouristicAreaDto } from './dto/create-touristicArea.dto';
import TouristicArea from './entities/touristicArea.entity';

@Injectable()
export class TouristicAreaService {
  constructor(
    @InjectRepository(TouristicArea)
    private readonly touristicAreaRepository: Repository<TouristicArea>,
  ) {}
  findAll() {
    return this.touristicAreaRepository.find();
  }
  findOne(id: number) {
    const touristicArea = this.touristicAreaRepository.findOne({
      where: { id },
    });

    if (!touristicArea) {
      throw new NotFoundException(`Touristic Area ID ${id} not found`);
    }

    return touristicArea;
  }
  create(createTouristicAreaDto: CreateTouristicAreaDto) {
    const touristicArea = this.touristicAreaRepository.create(
      createTouristicAreaDto,
    );
    return this.touristicAreaRepository.save(touristicArea);
  }
}
