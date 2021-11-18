import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService
  ) {}

  async validateUser({email, password}): Promise<any> {

    const user = await this.usersService.findByEmail(email);

    if(!user){
      return { error: true, message: 'Email or password incorrect' };
    }

    const isValid = await compare(password, user.password);

    if (isValid) {
      delete user.password;
      return user;
    }else {
      return { error: true, message: 'Email or password incorrect' };
    }

  }
}
