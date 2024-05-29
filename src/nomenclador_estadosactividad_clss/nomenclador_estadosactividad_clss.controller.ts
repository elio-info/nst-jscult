import { Req, Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { NomencladorEstadosActividadService } from './nomenclador_estadosactividad_clss.service';
import { CreateNomencladorEstadosActividadDto } from './dto/create-nomenclador_estadosactividad_clss.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateNomencladorEstadosActividadDto } from './dto/update-nomenclador_estadosactividad_clss.dto';

@Controller('nomenclador-estadosactividad-clss')
@ApiTags('nomenclador-estadosactividad-clss')
export class NomencladorEstadosActividadController {
  constructor(private readonly nomencladorEstadosActividadService: NomencladorEstadosActividadService) {}

  @Post()
  create(@Body(new ValidationPipe()) createNomencladorEstadosActividadDto: CreateNomencladorEstadosActividadDto) {   
    //let bruto=this.nomencladorEstadosActividadService.findBy_Id_NEA(createNomencladorEstadosActividadDto.id_NEA)//One   
    return this.nomencladorEstadosActividadService.create_val(createNomencladorEstadosActividadDto) //bruto   
  }
  @Get()
  find(@Req() request: Request) {
    return this.nomencladorEstadosActividadService.find(request);
  }
/*
  @Get()
  findAll(@Req() request: Request) {
    return this.nomencladorEstadosActividadService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomencladorEstadosActividadService.findOne(id);
  }
*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNomencladorEstadosactividadClssDto: UpdateNomencladorEstadosActividadDto) {
    return this.nomencladorEstadosActividadService.update(id, updateNomencladorEstadosactividadClssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomencladorEstadosActividadService.remove(id);
  }
}
