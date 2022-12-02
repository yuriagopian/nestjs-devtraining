import { Body, Controller, Get, HttpCode, Param, Post, HttpStatus } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll() {
        return 'Listagem de cursos';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso #${id}`;
    }

    @Post()
    create(@Body() data) {
        return data
    }

    // desestrutura/limita a resposta por um parametro que é deifinido no decorator body
    @Post('name')
    // @HttpCode(204)
    //ou
    @HttpCode(HttpStatus.NO_CONTENT) // Enum com todos os status code definidos no http
    createName(@Body('name') data) {
        return data
    }
}