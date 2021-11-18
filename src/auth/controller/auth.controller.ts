import { Body, Controller, Post, HttpException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { UserDto } from '../../user/dto/user.dto';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('/login')
  async authencationUsers(@Body() userAuth: UserDto)  {
    const res: any = await this.authService.validateUser(userAuth);
    if(res.error){
      throw new HttpException(res.message, 400);
    }
    return res;
  }
}
