import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param('id') movieID: string){
        return `This will return movie number ${movieID}`;
    }

    @Post()
    create(){
        return `This will create movie`;
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return `This will detle movie ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string){
        return `This will patch movice ${movieId}`;
    }
}
