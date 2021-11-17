import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  HttpStatus,
} from '@nestjs/common';
import { Entity } from 'typeorm';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUsers(@Body() data: UserDto) {
    const user = await this.userService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user,
    };
  }

  @Get()
  async showAllUsers() {
    const users = await this.userService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users,
    };
  }

  @Get()
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }
  @Patch()
  async uppdateUser(@Param('id') id: string, @Body() data: '') {
    await this.userService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }
}
