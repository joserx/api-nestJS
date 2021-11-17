import { Injectable, Req } from '@nestjs/common';
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
    return await this.userRepository.find();
  }
  public users: UserDto[] = [];

  async create(data: UserDto) {
    const user = this.userRepository.create(data);
    await this.userRepository.save(data);
    return user;
  }
  async findAll() {
    return this.userRepository.find();
  }
  async findOne(id) {
    console.log(this.users);
    console.log(id);
    let usuario;
    this.users.forEach((element) => {
      if (element.id == id) {
        usuario = element;
      }
    });
    return usuario;
  }
  async update(id: string, data: '') {
    await this.userRepository.update({ id}, data);
    return this.userRepository.findOne({ 'id' });
  }
}
1;
