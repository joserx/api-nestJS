import { Controller, Get, Param, Post } from '@nestjs/common';
import { filter } from 'rxjs';


@Controller('users')
export class UserController {
  @Post()
  create(): String {
    return 'Tomara q tenha funcionadon';
  }

  @Get()
  findAll(): string {
    return 'Será q funcionou?';
  }
  
}
