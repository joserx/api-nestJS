import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { UserService } from '../user/service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../user/entities/users.entity';

const secret: string = 'f1ng3rD1G1T4L#2021';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [AuthService],
})
export class AuthModule {}
