import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import User from './entities/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['touristicAreas'],
    });
  }
  findOne(id: number): Promise<User> {
    const user = this.userRepository.findOne({
      where: { id },
      relations: ['touristicAreas'],
    });

    if (!user) {
      throw new NotFoundException(`User ID ${id} not found`);
    }

    return user;
  }
  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    console.log(user);
    return this.userRepository.save(user);
  }
}
