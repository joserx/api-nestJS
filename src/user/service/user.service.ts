import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async findByEmail(email: string): Promise<UserDto> {
    const user: any = await this.userRepository.find({ email });
    return user[0];
  }

  async create(data: UserDto): Promise<UserDto> {
    data.password = await hash(data.password, 10); // número de vezes que a senha vai ser encryptada
    const user = this.userRepository.create(data);
    await this.userRepository.save(data);
    delete user.password;
    return user;
  }

  async findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserDto> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, data: UserDto): Promise<UserDto> {
    await this.userRepository.update(id, data);
    return this.userRepository.findOne(id);
  }
}
