import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
    findAll() {
        return `Listagem de cursos`
    }

    findOne(id: string) {
        return `Curso #${id}`;
    }

    create(data) {
        return data;
    }

    update(id: string, data) {
        return {
            id, data
        }
    }

    delete(id: string) {
        return `Curso #${id} deleted sucessfully`;
    }
}
