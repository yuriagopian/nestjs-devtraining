import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [{
        id: 1,
        name: "Nest JS",
        description: "NestJs fundamentals",
        tags: ["nest", "js", "inciante"],
        price: 20
    }]

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        return this.courses.find((course: Course) => course.id === Number(id))
    }

    create(createCourseDTO: Course) {
        return this.courses.push(createCourseDTO);
    }

    update(id: string, data) {
        const indexCourse = this.courses.findIndex(c => c.id === Number(id));
        if (indexCourse) {
            this.courses[indexCourse] = data
            return
        }
        throw new Error(`Course not found`)
    }

    delete(id: string) {
        const indexCourse = this.courses.findIndex(c => c.id === Number(id));
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
            return
        }
        throw new Error(`Course not found`)
    }
}
