import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get('search')
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie after ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param('id') movieID: string){
        return `This will return movie number ${movieID}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData.name)
        return `This will create movie ${movieData}`;
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return `This will detle movie ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData,
        }
    }

    
}
