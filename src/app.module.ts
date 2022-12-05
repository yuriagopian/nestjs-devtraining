import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule,],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule { }
