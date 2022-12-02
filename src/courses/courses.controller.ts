import { CoursesService } from './courses.service';
import { Body, Controller, Get, HttpCode, Param, Post, HttpStatus, Res, Patch, Delete } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) { }

    // tratando status code em caso de sucesso
    @Get()
    findAll(@Res() response) {
        const findAll = this.coursesService.findAll()
        return response.status(200).send(findAll)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coursesService.findOne(id)
    }

    @Post()
    create(@Body() data) {
        return this.coursesService.create(data)
    }

    // desestrutura/limita a resposta por um parametro que é deifinido no decorator body
    @Post('name')
    // @HttpCode(204)
    //ou
    // Enum com todos os status code definidos no http util quando o status code é estatico
    @HttpCode(HttpStatus.NO_CONTENT)
    createName(@Body('name') data) {
        return this.coursesService.create(data)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data) {
        return this.coursesService.update(id, data)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coursesService.delete(id);
    }

}