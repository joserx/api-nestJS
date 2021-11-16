import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/controller/users.controller';
import { UserService } from './user/service/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5432,

      synchronize: true,
      migrationsRun: true,
      entities: [__dirname + '/**/*.entity(.ts,.js}'],
      migrations: ['src/subscriber/**/*.ts'],
      subscribers: ['scr/subscriber/**/*.ts'],

      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'srcmigrations',
        subscribersDir: 'src/subscriber',
      },
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
