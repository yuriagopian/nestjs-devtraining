import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { UsersController } from './users/users.controller';
import { CoursesService } from './courses/courses.service';

@Module({
  imports: [],
  controllers: [AppController, CoursesController, UsersController],
  providers: [AppService, CoursesService],
})
export class AppModule { }
