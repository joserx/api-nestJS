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
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUsers(@Body() data: UserDto) {
    return this.userService.create(data);
  }

  @Get()
  async showAllUsers() {
    return this.userService.showAll();
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
