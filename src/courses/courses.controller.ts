import { Body, Controller, Get, HttpCode, Param, Post, HttpStatus, Res, Patch } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    // tratando status code em caso de sucesso
    @Get()
    findAll(@Res() response) {
        return response.status(200).send('Listagem de cursos')
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
    // Enum com todos os status code definidos no http util quando o status code é estatico
    @HttpCode(HttpStatus.NO_CONTENT)
    createName(@Body('name') data) {
        return data
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data) {
        return {
            id, data
        }
    }
}