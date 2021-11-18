import { Module } from '@nestjs/common';
import { UserController } from './controller/users.controller';
import { UserService } from '../user/service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [UserService]
})
export class UserModule {}
