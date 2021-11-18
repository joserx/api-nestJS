import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { Users } from '../../user/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor() {} // private usersService: UserService, // @InjectRepository(Users)

  async validateUser(email: string, pass: string): Promise<any> {
    /*const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;*/
  }
}
