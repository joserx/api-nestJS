import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUsers(@Body() data: UserDto) {
    return this.userService.create(data);
  }

  @Get()
  async showAllUsers() {
    return this.userService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put('/:id')
  async uppdateUser(@Param('id') id: string, @Body() data: UserDto) {
    return this.userService.update(id, data);
  }
}
