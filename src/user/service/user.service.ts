import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}
  async showAll() {
    return this.userRepository.find();
  }

  async create(data: UserDto) {
    const user = this.userRepository.create(data);
    await this.userRepository.save(data);
    return user;
  }
  async findAll() {
    return this.userRepository.find();
  }
  async findOne(id: string): Promise<UserDto> {
    return this.userRepository.findOne(id);
  }
  async update(id: string, data: UserDto) {
    await this.userRepository.update(id, data);
    return this.userRepository.findOne(id);
  }
}
1;
