import { Controller, Get, Post } from '@nestjs/common';

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
